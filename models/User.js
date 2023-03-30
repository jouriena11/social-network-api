// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            validate: {
                validator: () => Promise.resolve(false),
                message: 'Email validation failed'
            }
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought',
                required: true
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
                required: true,
            }
        ]
    },
    {
        toJSON: {
            getters: true,
        }
    }
)

const User = mongoose.model('User', userSchema);

module.exports = User;