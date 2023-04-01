const router = require('express').Router();
const {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/userController.js');

// api/users
router.route('/')
    .get(getUsers) // GET all users
    .post(createUser) // create a user

router.route('/:userId')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser)

// api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(deleteFriend)

module.exports = router;