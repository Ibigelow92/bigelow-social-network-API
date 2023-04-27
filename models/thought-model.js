const { Schema, model } = require('mongoose');
// Need to reference this for reactions 
const reactionSchema = require('./reaction-model');
const Thought = model('Thought', thoughtSchema);

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            min: 1,
            max: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [
            reactionSchema
        ],
        reactionCount: {
            type: Number,
            get: function() {
              return this.reactions.length;
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

module.exports = Thought;

// **Thought**:

// * `thoughtText`
//   * String
//   * Required
//   * Must be between 1 and 280 characters

// * `createdAt`
//   * Date
//   * Set default value to the current timestamp
//   * Use a getter method to format the timestamp on query

// * `username` (The user that created this thought)
//   * String
//   * Required

// * `reactions` (These are like replies)
//   * Array of nested documents created with the `reactionSchema`

// Create a virtual called `reactionCount` that retrieves the length of the thought's `reactions` array field on query.