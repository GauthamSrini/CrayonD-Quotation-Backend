'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('master_utilities', [
      {
        name: 'Electricity Service',
        path: '/images/utilities/electricity',
        price: 150,
        is_active: true,
        created_by: 1, // Assuming vendor with id 1 created this
        updated_by: null,
        deleted_by: null,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        name: 'Water Supply',
        path: '/images/utilities/water',
        price: 100,
        is_active: true,
        created_by: 2, // Vendor 2
        updated_by: null,
        deleted_by: null,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        name: 'Internet Service',
        path: '/images/utilities/internet',
        price: 200,
        is_active: true,
        created_by: 3,
        updated_by: null,
        deleted_by: null,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        name: 'Gas Supply',
        path: '/images/utilities/gas',
        price: 120,
        is_active: true,
        created_by: 4,
        updated_by: null,
        deleted_by: null,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        name: 'Waste Management',
        path: '/images/utilities/waste',
        price: 80,
        is_active: true,
        created_by: 5,
        updated_by: null,
        deleted_by: null,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        name: 'Home Security System',
        path: '/images/utilities/security',
        price: 250,
        is_active: true,
        created_by: 6,
        updated_by: null,
        deleted_by: null,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('master_utilities', null, {});
  }
};
