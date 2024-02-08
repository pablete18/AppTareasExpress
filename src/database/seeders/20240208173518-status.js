'use strict';

const statusJSON = require("../../data/status.json");

const status = statusJSON.map(({name})=>{
  return {
    name,
    createdAt : new Date(),
    updatedAt : new Date()
  }
}
)

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('Statuses',status,{});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
