const router = require('express').Router();
const { UserModel } = require('../../models');

// GET all users
// api/user/all
router.post('/', async (req, res) => {
    try {
        const newUser = await UserModel.find({})
        console.log();
        res.json(newUser)

    } catch(err) {
        console.error(err);
        res.status(500).json(err);
    }
})


// POST create a new user
// api/user/create-new
router.post('/', async (req, res) => {
    // try {
    //     const newUser = await UserModel.find({firstname:})

    // } catch(err) {
    //     console.error(err);
    //     res.status(500).json(err);
    // }
})


// UPDATE
// api/user/update/:userId


// DELETE
// api/user/delete/:userId