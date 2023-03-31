const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const reactionCount = require('../controllers/thoughtController');
const timestampFormat = require('../controllers/dateController');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now(),
        },
        username: {
            type: String,
            required: true
        },
        reactions: [reactionSchema],
    },
    {
        toJSON: {
            getters: true,
            virtuals: true
        }
    }
);

thoughtSchema.virtual('formattedCreatedAt').get(function() { // a regular function must be used here to bind `this` to the instance of the model; an arrow function wouldn't work as it would refer to the parent scope, which is likely a global 'undefined' object
    return timestampFormat(this.createdAt);
});

thoughtSchema.virtual('reactionCount').get(function() {
    return reactionCount(this.reactions);
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;