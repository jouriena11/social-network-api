const { Schema, model } = require('mongoose');
const Thought = require('./Thought');

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

// TODO: fix bug - associated thought record still persists
userSchema.pre('remove', async function(next) {
    try {
        console.log('Deleting associated thought')
        await Thought.deleteMany({username: this.username});
        next();

    } catch(err) {
        next(err);
    }
});

userSchema.virtual('friendCount').get(function() {
    const count = this.friends.length;
    return count;
});

const User = model('User', userSchema);

module.exports = User;