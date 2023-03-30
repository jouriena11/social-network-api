const { Schema } = require('mongoose');
const timestampFormat = require('../controllers/dateController');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now(),
        }
    },
    {
        toJSON: {
            getters: true,
        }
    }
);

reactionSchema.virtual('formattedCreatedAt').get(function() { // a regular function must be used here to bind `this` to the instance of the model; an arrow function wouldn't work as it would refer to the parent scope, which is likely a global 'undefined' object
    return timestampFormat(this.createdAt);
});

// As reactionSchema is used as a subdocument in thoughtSchema, it's not necessary to create a separate model for it, as you wouldn't need a collection (i.e. table) for subdocuments.

module.exports = reactionSchema;