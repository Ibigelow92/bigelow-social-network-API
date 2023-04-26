const User = require('../models/user-model');

module.exports = {

    getAllUsers(req, res) {
        User.find()
        .sort({
          createdAt:-1
        })
          .then((users) => res.json(users))
          .catch((err) => res.status(500).json(err));
    },

    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
          .then((user) =>
            !user
              ? res.status(404).json({ message: 'No user matches that ID' })
              : res.json(user)
          )
          .catch((err) => res.status(500).json(err));
    },

    createNewUser(req, res) {
        User.create(req.body)
          .then((dbUserData) => res.json(dbUserData))
          .catch((err) => res.status(500).json(err));
    },

    updateUser({params, body}, res) {
        User.findOneAndUpdate({_id: params.id}, body, {new: true, runValidators: true})
        .then(dbUsersData => {
            if(!dbUsersData) {
                res.status(404).json({message: 'No user matches that ID'});
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.json(err))
    },

    deleteUser(req, res) {
        User.findOneAndRemove({_id:req.params.userId})
          .then((dbUserData) => res.json({message:'User successfully deleted'}))
          .catch((err) => res.status(500).json(err));
    },

    addFriend(req, res){
        User.findOneAndUpdate(
          {_id:req.params.userId},
          {$addToSet:{friends:req.params.friendId}},
          {new:true}
        )
        .then((dbUserData)=>{
          if (!dbUserData){
            return req.status(404).json({message:'No user matches that ID'})
          }
          res.json(dbUserData)
        })
        .catch((err) => res.status(500).json(err));
      },

    deleteFriend(req, res){
        User.findOneAndUpdate(
          {_id:req.params.userId},
          {$pull:{friends:req.params.friendId}},
          {new:true}
        )
        .then((dbUserData)=>{
          if (!dbUserData){
            return req.status(404).json({message:'no user with this ID'})
          }
          res.json(dbUserData)
        })
        .catch((err) => res.status(500).json(err));
      }
}