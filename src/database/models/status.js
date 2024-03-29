'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Status extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Status.associate = (models)=>{
        Status.hasMany(models.Task,{
          as: "tasks",
          foreignKey : "statusId"
        })
      }
    }
  }
  Status.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Status',
  });
  return Status;
};