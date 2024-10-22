'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('master_tax_groups', [
      {
        name: 'GST',
        is_active: true,
        created_by: 1, // Assuming vendor with id 1 created this
        updated_by: null,
        deleted_by: null,
        created_at: new Date(),
        updated_at: null,
        deleted_at: null,
      },
      {
        name: 'IGST',
        is_active: true,
        created_by: 2, // Vendor 2
        updated_by: null,
        deleted_by: null,
        created_at: new Date(),
        updated_at: null,
        deleted_at: null,
      },
      {
        name: 'SGST',
        is_active: true,
        created_by: 3, // Vendor 2
        updated_by: null,
        deleted_by: null,
        created_at: new Date(),
        updated_at: null,
        deleted_at: null,
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('master_tax_groups', null, {});
  }
};
