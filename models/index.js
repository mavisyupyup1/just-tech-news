// import all models
const Post = require('./Post');
const User = require('./User');

// create associations
User.hasMany(Post, {
  foreignKey: 'user_id'
});

//reverse associations
Post.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Post };
