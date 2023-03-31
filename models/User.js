// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

const { Schema, model } = require('mongoose');
const Thoughts = require('./Thought');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            validate: {
                validator: function(value) {
                    return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(value);
                },
                message: 'Invalid email format!'
            }
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    },
    {
        toJSON: {
            getters: true,
            virtuals: true,
        }
    }
)

// TODO: Is this correct?
userSchema.pre('remove', async function(next) {
    try {
        await Thoughts.deleteMany({_id: this.ObjectId});
        next();

    } catch(err) {
        next(err);
    }
})

const User = model('User', userSchema);

module.exports = User;