const router = require('express').Router();
const { 
    reactionCount,
    createThought,
    getThoughts,
    getThoughtById,
    updateThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thoughtController.js')

// api/thoughts
// TODO: GET all thoughts
// TODO: POST a new thought + push created thoughts '_id' to the associated user's thoughts array
router.route('/').post(createThought);

// api/thoughts/:thoughtId
// TODO: GET a single thought by its '_id' 
// TODO: PUT a thought by its '_id'


// api/thoughts/:thoughtId/reactions
// TODO: POST -- create a reaction stored in a single thought's `reactions` array
// TODO: DELETE a reaction by reactionId




module.exports = router;