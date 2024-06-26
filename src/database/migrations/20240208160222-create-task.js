'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      statusId:{
        allowNull: false,
        type : Sequelize.INTEGER,
        reference : {
          model : {
            tableName : "Statuses"
          },
          key: "id"
        }
      },
      userId : {
        defaultValue : 0,
        allowNull : false,
        type : Sequelize.INTEGER,
        reference : {
          model : {
            tableName : "Users"
          },
          key : "id"
        }

      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Tasks');
  }
};