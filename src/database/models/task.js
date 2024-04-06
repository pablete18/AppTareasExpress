'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Task.associate = (models)=>{
        Task.belongsTo(models.Status,{
          as:"tasks",
          foreignKey: "statusId"
        }),
        Task.belongsTo(models.User,{
          as : "user",
          foreignKey : "userId"
        })
      }
    }
  }
  Task.init({
    name: DataTypes.STRING,
    statusId: DataTypes.INTEGER,
    userId : DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};