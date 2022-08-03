const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model{};

Comment.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        content:{
            type: DataTypes.TEXT
        },
        user_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model: 'user',
                key: 'id',
            },
        },
        post_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model: 'blogPost',
                key: 'id',
            }
        },
    },
   { sequelize,
    timestamps : true,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment',
}
);

module.exports = Comment;