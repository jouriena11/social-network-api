const { Schema, Types } = require('mongoose');
const timestampFormat = require('./getter/dateFormat');

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
            get: timestampFormat
        }
    },
    {
        toJSON: {
            getters: true,
        }
    }
);

// As reactionSchema is used as a subdocument in thoughtSchema, it's not necessary to create a separate model for it, as you wouldn't need a collection (i.e. table) for subdocuments.

module.exports = reactionSchema;