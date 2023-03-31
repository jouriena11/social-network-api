const { User, Thought } = require('../models');

// api/thoughts/:thoughtId
// GET a single thought by its '_id'
async function getThoughtById(req, res) {
    try {
        const thought = await Thought.findById(req.params.thoughtId);

        if(!thought) {
            return res.status(404).json({message: 'Thought not found'});
        }

        res.status(200).json(thought);

    } catch(err) {
        console.error(err);
        res.status(500).json({message: err.message});
    }   
};

// api/thoughts
// GET all thoughts
async function getThoughts(req, res) {
    try {
        const thoughts = await Thought.find();
        res.status(200).json(thoughts);
    } catch(err) {
        console.error(err);
        res.status(500).json({message: err.message});
    }   
}

// api/thoughts/
// POST a new thought + push created thoughts '_id' to the associated user's thoughts array
async function createThought(req, res) {
    try {
        console.log('req.body.username -> ', req.body.username)
        console.log(User);
        console.log(Thought);
        const associatedUser = await User.findOne({ username: req.body.username });
        
        if(!associatedUser) {
            return res.status(404).json({message: 'User not found'});
        }

        const newThought = await Thought.create(req.body);
        
        associatedUser.thoughts.push(newThought);

        res.status(201).json(newThought);

    } catch(err) {
        console.error(err);
        res.status(500).json({message: err.message});
    }
};

// api/thoughts/:thoughtId
// PUT a thought by its '_id'
async function updateThought(req, res) {
    try {
        const updateThought = await Thought.updateOne(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, new: true }
        );

        if(!updateThought) {
            return res.status(404).json({message: 'Thought not found.'})
        };

        res.status(200).json(updateThought);

    } catch(err) {
        console.error(err);
        res.status(500).json({message: err.message});
    }   
}

// api/thoughts/:thoughtId
async function deleteThought(req, res) {
    try {
        const delThought = await Thought.deleteOne({_id: req.params.thoughtId});

        if(!delThought) {
            return res.status(404).json({message: 'Thought not found.'});
        };

        res.status(200).json({message: 'Thought successfully deleted.'});

    } catch(err) {
        console.error(err);
        res.status(500).json({message: err.message});
    }
}

// api/thoughts/:thoughtId/reactions
// POST -- create a reaction stored in a single thought's `reactions` array
async function createReaction(req, res) {
    const thoughtId = req.params.thoughtId;
    const { reactionBody, username } = req.body;

    try {
        const thought = await Thought.findById(thoughtId);

        if(!thought) {
            return res.status(404).json('No thought found');
        };

        const found_username = await User.findOne({username: username});

        if(!found_username) {
            return res.status(404).json({message: 'User not found.'})
        }

        const newReaction = {
            reactionBody,
            username
        };
        
        thought.reactions.push(newReaction);
        const updatedThought = await thought.save(); // unlike Sequelize and MySQL, changes made to documents in MongoDB via Mongoose must be saved to be persisted.
        res.status(200).json(updatedThought);

    } catch(err) {
        console.error(err);
        res.status(500).json({message: err.message});
    }   
};


// TODO: DELETE a reaction by reactionId
async function deleteReaction() {
    try {
        
    } catch(err) {
        console.error(err);
        res.status(500).json({message: err.message});
    }   
}

module.exports = {
    getThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction
}
