const { User, Thought, reactionSchema } = require('../models');


function reactionCount(reactions) {
    return reactions.length;
};

// api/thoughts
// TODO: GET all thoughts
async function getThoughts(req, res) {
    try {

    } catch(err) {
        console.error(err);
        res.status(500).json({message: err.message});
    }   
}

// api/thoughts/:thoughtId
// TODO: GET a single thought by its '_id'
async function getThoughtById(req, res) {
    try {

    } catch(err) {
        console.error(err);
        res.status(500).json({message: err.message});
    }   
}

// api/thoughts
// TODO: PUT a thought by its '_id'
async function updateThought(req, res) {
    try {

    } catch(err) {
        console.error(err);
        res.status(500).json({message: err.message});
    }   
}

// api/thoughts
// TODO: POST a new thought + push created thoughts '_id' to the associated user's thoughts array
async function createThought(req, res) {
    try {
        console.log('req.body.username -> ', req.body.username)
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
}

// api/thoughts/:thoughtId/reactions
// POST -- create a reaction stored in a single thought's `reactions` array
async function createReaction(req, res) {
    const { thoughtId } = req.params;
    const { reactionBody, username } = req.body;

    try {
        const thought = await Thought.findById(thoughtId);

        if(!thought) {
            return res.status(404).json('No thought found');
        };

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
    reactionCount,
    createThought,
    getThoughts,
    getThoughtById,
    updateThought,
    createReaction,
    deleteReaction
};