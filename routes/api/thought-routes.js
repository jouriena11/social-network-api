const router = require('express').Router();
const { 
    getThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thoughtController.js')

// api/thoughts
router.route('/')
    .get(getThoughts) // GET all thoughts
    .post(createThought); // POST a new thought

// api/thoughts/:thoughtId
router.route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought)

// api/thoughts/:thoughtId/reactions
// create a reaction stored in a single thought's `reactions` array
router.route('/:thoughtId/reactions').post(createReaction)

// api/thoughts/:thoughtId/reactions/:reactionId
// delete a reaction by reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction)



module.exports = router;