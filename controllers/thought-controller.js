const { User, Thought} = require('../models');

const thoughtController = {
    
  // function takes two arguments: object with body property and res object
  createThought({ body }, res) {
    // creates new doc with thought model
    Thought.create(body)
    // uses destructuring assignment to update doc in users collection with _id field that 
    // matches the userId property of the body object
        .then(({ _id }) => {
            return User.findOneAndUpdate(
                { _id: body.userId },
                // adds the _id of new thought to thoughts array of user doc
                { $push: { thoughts: _id } },
                // tells the findOneAndUpdate() method to return the updated user doc
                { new: true }
            );
        })
        .then(dbThoughtData => {
            if (!dbThoughtData) {
                res.status(404).json({ message: 'No user matches that id' });
                return;
            }
            // sends updated user doc as JSON object
            res.json(dbThoughtData);
        })
        .catch(err => res.json(err));
  },
  
  getAllThoughts(req, res) {
      Thought.find()
      .sort({
        createdAt:-1
      })
        .then((thoughts) => res.json(thoughts))
        .catch((err) => res.status(500).json(err));
    },

  // gets one thought
  getThoughtById(req, res) {
      Thought.findOne({ _id: req.params.thoughtId })
        .then((thought) =>
          !thought
            ? res.status(404).json({ message: 'No thoughts match that ID' })
            : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
  },

  // takes two arguments: object with params and body property anda res object
  updateThought({ params, body }, res) {
      Thought.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
          .then(dbThoughtData => {
              if (!dbThoughtData) {
              res.status(404).json({ message: 'No thoughts match that id' });
              return;
              }
              res.json(dbThoughtData);
          })
        .catch(err => res.json(err));
  },

  deleteThought({ params }, res) {
      Thought.findOneAndDelete({ _id: params.id })
      .then(dbThoughtData => {
          if (!dbThoughtData) {
            res.status(404).json({ message: 'No thoughts match that id' });
            return;
          }
          return User.findOneAndUpdate(
            { _id: parmas.userId },
            { $pull: { thoughts: params.Id } },
            { new: true }
          )
        })
      .then(dbUserData => {
          if (!dbUserData) {
            res.status(404).json({ message: 'No user matches that id' });
            return;
          }
          res.json(dbUserData);
        })
        .catch(err => res.json(err));
    },

}

module.exports = thoughtController