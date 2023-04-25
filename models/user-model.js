const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
    {
        username: {
           type: String,
           unique: true,
           required: true,
           trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/]
            
        },
        thoughts: [{
            type: Schema.Types.ObjectId,
            ref: 'thought-model'

        }],
        friends: [{
            type: Schema.Types.ObjectId,
            ref: 'user-model'

        }]
    },
    {
        toJSON: {
            virtuals: true,

        },
        id: false
    }
)