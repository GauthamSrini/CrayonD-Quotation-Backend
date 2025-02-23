'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('master_amenities', [
      {
        name: 'Swimming Pool',
        path: '/images/amenities/pool',
        price: 50000,
        is_active: true,
        created_by: 1, // sample vendor ID
        updated_by: 1,
        deleted_by: null,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        name: 'Gym',
        path: '/images/amenities/gym',
        price: 30000,
        is_active: true,
        created_by: 2, 
        updated_by: 2,
        deleted_by: null,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        name: 'Community Hall',
        path: '/images/amenities/hall',
        price: 40000,
        is_active: true,
        created_by: 1,
        updated_by: 1,
        deleted_by: null,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        name: 'Children\'s Play Area',
        path: '/images/amenities/playarea',
        price: 20000,
        is_active: true,
        created_by: 3,
        updated_by: 3,
        deleted_by: null,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        name: 'Parking Lot',
        path: '/images/amenities/parking',
        price: 15000,
        is_active: true,
        created_by: 4,
        updated_by: 4,
        deleted_by: null,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        name: 'Garden',
        path: '/images/amenities/garden',
        price: 25000,
        is_active: true,
        created_by: 1,
        updated_by: 1,
        deleted_by: null,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        name: 'Clubhouse',
        path: '/images/amenities/clubhouse',
        price: 60000,
        is_active: true,
        created_by: 2,
        updated_by: 2,
        deleted_by: null,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        name: 'Jogging Track',
        path: '/images/amenities/joggingtrack',
        price: 10000,
        is_active: true,
        created_by: 3,
        updated_by: 3,
        deleted_by: null,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        name: 'Tennis Court',
        path: '/images/amenities/tenniscourt',
        price: 45000,
        is_active: true,
        created_by: 4,
        updated_by: 4,
        deleted_by: null,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        name: 'Basketball Court',
        path: '/images/amenities/basketballcourt',
        price: 40000,
        is_active: true,
        created_by: 5,
        updated_by: 5,
        deleted_by: null,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('master_amenities', null, {});
  }
};
