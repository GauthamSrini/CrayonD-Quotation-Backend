'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('master_units', [
      {
        unit_name: 'Oceanview Villa',
        place: 'Miami Beach',
        bed_room_count: 4,
        wash_room_count: 3,
        square_feet: 3500,
        is_active: true,
        created_by: 1, // Assuming vendor with id 1 created this
        updated_by: null,
        deleted_by: null,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        unit_name: 'Downtown Loft',
        place: 'New York City',
        bed_room_count: 2,
        wash_room_count: 2,
        square_feet: 1800,
        is_active: true,
        created_by: 2, // Vendor 2
        updated_by: null,
        deleted_by: null,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        unit_name: 'Suburban House',
        place: 'Austin',
        bed_room_count: 3,
        wash_room_count: 2,
        square_feet: 2400,
        is_active: true,
        created_by: 3,
        updated_by: null,
        deleted_by: null,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        unit_name: 'Luxury Penthouse',
        place: 'Los Angeles',
        bed_room_count: 5,
        wash_room_count: 4,
        square_feet: 4500,
        is_active: true,
        created_by: 4,
        updated_by: null,
        deleted_by: null,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        unit_name: 'Country Cottage',
        place: 'Nashville',
        bed_room_count: 3,
        wash_room_count: 2,
        square_feet: 2000,
        is_active: true,
        created_by: 5,
        updated_by: null,
        deleted_by: null,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        unit_name: 'Urban Apartment',
        place: 'Chicago',
        bed_room_count: 2,
        wash_room_count: 1,
        square_feet: 1500,
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
    await queryInterface.bulkDelete('master_units', null, {});
  }
};
