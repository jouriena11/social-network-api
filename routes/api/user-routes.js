const router = require('express').Router();
const {
    getUsers,
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
    .put(updateUser)
    .delete(deleteUser)
// router.post('/', async (req, res) => {
    // try {
    //     const newUser = await UserModel.find({firstname:})

    // } catch(err) {
    //     console.error(err);
    //     res.status(500).json(err);
    // }
// })


// UPDATE, DELETE
// api/users/:userId



// api/users/:userId/frineds/:friendId
// TODO: POST new friend to a user's friend list
// TODO: DELETE a friend from a user's friend list


module.exports = router;