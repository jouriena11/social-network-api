const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');

console.log('User ->', User)

// TODO: how to include friendCount in getUsers()
async function friendCount() {
    User.aggregate() // aggregate() function is used to perform complex data analysis and manipulations on the documents in a collection, e.g. grouping, filtering, sorting, and transforming data in MongoDB.
        .count('friendCount')
        .then((numberOfFriends) => numberOfFriends);
}

// userSchema.virtual('friendCount').get(async function() {
//     const count = await friendCount(this.friends);
//     return count;
// })

// GET all users
async function getUsers(req, res) {
    try {
        const users = await User.find();
        const friendCountValue = await friendCount(); // TODO: friendCount() isn't working
        
        const userObj = {
            users,
            friendCount: friendCountValue
        };
        return res.json(userObj);

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
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
}