const {Model, DataTypes} = require ('sequelize');
const sequelize = require('../config/connection');

//create our User model
class User extends Model{}

//define table columns and configuration
User.init(
    {
    //table column definitions go here
    
},
{
    //table configuration options go here ((https://sequelize.org/v5/manual/models-definition.html#configuration))

    //pass in our imported sequelize connection (the direct connection to our database) 
    sequelize, 
    //don't automatically create createAt/updateAt timestamp fields  
    timestamps: false,
    //don't pluralize name of database table 
    freezeTableName: true,
    // use underscores instead of camel-casing(i.s. `comment_text` and not `commentText`) 
    underscore: true,
    //make it so our model name stays lowercase in the database 
    modelName: 'user'
}
);

module.exports = User;