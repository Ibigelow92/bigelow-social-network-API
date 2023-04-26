const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
            match:[/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,'You must use a valid email address']
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                reference: 'Thought',
            },
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                reference: 'User',
            },
        ]
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

userSchema.virtual('friendCount').get(function(){
    return this.friends.length
})

const User = model('user', userSchema);

module.exports = User;