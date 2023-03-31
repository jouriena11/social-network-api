const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');

// GET all users
async function getUsers(req, res) {
    try {
        const users = await User.find();
        
        res.status(200).json(users);

    } catch(err) {
        console.error(err);
        res.status(500).json({message: err.message});
    }
};

// GET a user by _id
// api/users/:userId
async function getUserById(req, res) {
    try {
        const user = await User.findOne({_id: req.params.userId});

        if(!user) {
            return res.status(404).json({message: 'User not found'});
        };

        res.status(200).json(user);

    } catch(err) {
        console.error(err);
        res.status(500).json({message: err.message});
    }
};

// POST create a new user
// api/users
async function createUser(req, res) {
    try {
        const newUser = await User.create(req.body); 
        res.status(201).json(newUser);
    } catch(err) {
        console.error(err);
        return res.status(500).json({message: err.message});
    }
};

// UPDATE
// api/users/:userId
async function updateUser(req, res) {
    try {
        const updateUser = await User.updateOne(
            { _id: req.params.userId }, 
            { $set: req.body },
            { runValidators: true, new: true }
        )
        res.status(200).json(updateUser)
    } catch(err) {
        console.error(err);
        res.status(500).json({message: err.message});
    }
}

// DELETE
// api/users/:userId
async function deleteUser(req, res) {
    try {
        const delUser = await User.deleteOne({ _id: req.params.userId });

        if(!delUser) {
            return res.status(404).json({ message: 'No user found'})
        } else {
            // TODO: delete associated thoughts and reactions
        };

        res.status(200).json({ message: "The user has been deleted."})

    } catch(err) {
        console.error(err);
        res.status(500).json({message: err.message});
    }
};

// api/users/:userId/frineds/:friendId
// POST new friend to a user's friend list
async function addFriend(req, res) {
    const { userId, friendId } = req.params;
    try {
        const user = await User.findById(userId);

        if(!user) {
            res.status(404).json('User not found');
        };

        user.friends.push(friendId);

        const updatedUser = await user.save();

        res.status(200).json(updatedUser);

    } catch(err) {
        console.error(err);
        res.status(500).json({message: err.message});
    }   
}

// api/users/:userId/frineds/:friendId
// DELETE a friend from a user's friend list
async function deleteFriend(req, res) {
    try {
        
    } catch(err) {
        console.error(err);
        res.status(500).json({message: err.message});
    }
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
}