'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('master_vendors', [
      {
        name: 'Michael Anderson',
        path: '/images/vendors/vendor1',
        phone_number: '1234567890',
        email: 'vendor1@example.com',
        is_active: true,
        deleted_at: null,
      },
      {
        name: 'Sarah Thompson',
        path: '/images/vendors/vendor2',
        phone_number: '0987654321',
        email: 'vendor2@example.com',
        is_active: true,
        deleted_at: null,
      },
      {
        name: 'David Harris',
        path: '/images/vendors/vendor3',
        phone_number: '1122334455',
        email: 'vendor3@example.com',
        is_active: true,
        deleted_at: null,
      },
      {
        name: 'Emily Johnson',
        path: '/images/vendors/vendor4',
        phone_number: '2233445566',
        email: 'vendor4@example.com',
        is_active: false,
        deleted_at: new Date(),
      },
      {
        name: 'James Carter',
        path: '/images/vendors/vendor5',
        phone_number: '3344556677',
        email: 'vendor5@example.com',
        is_active: true,
        deleted_at: null,
      },
      {
        name: 'Olivia Brown',
        path: '/images/vendors/vendor6',
        phone_number: '4455667788',
        email: 'vendor6@example.com',
        is_active: true,
        deleted_at: null,
      },
      {
        name: 'Robert Lewis',
        path: '/images/vendors/vendor7',
        phone_number: '5566778899',
        email: 'vendor7@example.com',
        is_active: false,
        deleted_at: new Date(),
      },
      {
        name: 'Sophia Wilson',
        path: '/images/vendors/vendor8',
        phone_number: '6677889900',
        email: 'vendor8@example.com',
        is_active: true,
        deleted_at: null,
      },
      {
        name: 'William Davis',
        path: '/images/vendors/vendor9',
        phone_number: '7788990011',
        email: 'vendor9@example.com',
        is_active: true,
        deleted_at: null,
      },
      {
        name: 'Ava Robinson',
        path: '/images/vendors/vendor10',
        phone_number: '8899001122',
        email: 'vendor10@example.com',
        is_active: true,
        deleted_at: null,
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('master_vendors', null, {});
  }
};
