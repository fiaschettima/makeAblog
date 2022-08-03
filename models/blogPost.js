const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class BlogPost extends Model{};

BlogPost.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id',
            },
        },
        post_title:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        post_content:{
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps : true,
        freezeTableName: true,
        underscored: true,
        modelName: 'blogPost',
    }
);
module.exports = BlogPost;