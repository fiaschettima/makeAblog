const { Model, DataTypes } = require('sequelize');

class BlogPost extends Model{};

BlogPost.init(
    {
        id:{},
        user_name:{},
        post_title:{},
        post_content:{},
        comment_id:{}
    },
    {
        sequelize,
        timestamps : false,
        freezeTableName: true,
        underscored: true,
        modelName: 'blogPost',
    }
)
module.exports = BlogPost;