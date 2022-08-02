const BlogPost = require('./blogPost');
const User = require('./user');
const Comment = require('./comment');

User.hasMany(Comment,{
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

User.hasMany(BlogPost, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

BlogPost.belongsTo(User,{
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

BlogPost.hasMany(Comment,{
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(User,{
    foreignKey: 'user_id'
});

Comment.belongsTo(BlogPost,{
    foreignKey: 'post_id'
});
module.exports = {BlogPost, User, Comment}