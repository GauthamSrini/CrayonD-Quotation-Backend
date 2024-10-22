'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('master_pricing_components', [
      {
        name: 'Pricing Component',
        is_active: true,
        created_by: 1, // Assuming vendor with id 1 created this
        updated_by: null,
        deleted_by: null,
        created_at: new Date(),
        updated_at: null,
        deleted_at: null,
      },
      {
        name: 'Digital Component',
        is_active: true,
        created_by: 2, // Vendor 2
        updated_by: null,
        deleted_by: null,
        created_at: new Date(),
        updated_at: null,
        deleted_at: null,
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('master_pricing_components', null, {});
  }
};
