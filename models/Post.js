const {Model, DataTypes} = require('sequelize');
const sequelize = require("../config/connection");

//create out Post model
class Post extends Model{};
// define columns in post and pass current connection instance to initialize the Post model
Post.init(
    //define Post schema
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey:true,
            autoIncrement:true
        },
        title:{
            type:DataTypes.STRING,
            allowNull: false
        },
        post_url:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                isURL:true
            }
        },
        user_id:{
            type:DataTypes.STRING,
            references:{
                model:'user',
                key:'id'
            }
        }
    },
    //configure metadata
    {
        sequelize,
        freezeTableName:true,
        underscored:true,
        modelName:'post'
    }
);
module.exports =Post;