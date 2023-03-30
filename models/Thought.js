const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

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
        }
    }
);

thoughtSchema.virtual('formattedCreatedAt').get(function() { // a regular function must be used here to bind `this` to the instance of the model; an arrow function wouldn't work as it would refer to the parent scope, which is likely a global 'undefined' object
    return timestampFormat(this.createdAt);
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;




