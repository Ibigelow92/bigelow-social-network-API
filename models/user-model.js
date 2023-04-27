const { Schema, model } = require('mongoose');
const User = model('user', userSchema);

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
            required: true,
            unique: true,
            match:[/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,'You must use a valid email address']
        },
        // Allows you to store list of thoughts for each User doc,
        // stored in the
        thoughts: [
            {
                // Makes it so each element in the thoughts array is an ObjectId
                type: Schema.Types.ObjectId,
                // specifies name of model that ObjectIDs refer to
                reference: 'Thought',
            },
        ],
        // Allows you to store list of friends for each User doc,
        // specifically in friends array
        friends: [
            {
                type: Schema.Types.ObjectId,
                // specifies name of model that ObjectIDs refer to
                reference: 'User',
            },
        ],
        friendCount: {
            type: Number,
            get: function() {
              return this.friends.length;
            },
          },
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

module.exports = User;

// **User**:

// * `username`
//   * String
//   * Unique
//   * Required
//   * Trimmed

// * `email`
//   * String
//   * Required
//   * Unique
//   * Must match a valid email address (look into Mongoose's matching validation)

// * `thoughts`
//   * Array of `_id` values referencing the `Thought` model

// * `friends`
//   * Array of `_id` values referencing the `User` model (self-reference)