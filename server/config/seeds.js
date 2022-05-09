const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'BMW' },
    { name: 'Volkswagen' },
    { name: 'Camber Plates' },
    { name: 'Top Hats' },
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'E36 Coilovers',
      description:
        'BMW 3 Series (E36) 1992-1999 - Broadway Static 500S Coilovers',
      image: 'e36_bmw_coilover.jpg',
      category: categories[0]._id,
      price: 1524.99,
      quantity: 15,
    },
    {
      name: 'BWS E36 Coilovers',
      description: `BWS Version II Coilovers-BMW E36 (1992-1999 NON M (including '95 M3))`,
      image: 'bws_ver2_e36_coilover.jpg',
      category: categories[0]._id,
      price: 1999.99,
      quantity: 10,
    },
    {
      name: 'BWS F87 Coilovers',
      category: categories[0]._id,
      description:
        'BWS Version II Coilovers-BMW M2 Competition (F87) 2018+',
      image: 'bws_f87_m2_coilover.jpg',
      price: 1999.99,
      quantity: 20,
    },
    {
      name: 'MK7 500s Coilovers',
      category: categories[1]._id,
      description:
        'Volkswagen MK7 Golf-GTI-Jetta (with IRS) - Broadway Static 500S Coilovers',
      image: 'vw_mk7_500s_coilovers.jpg',
      price: 1524.99,
      quantity: 5,
    },
    {
      name: 'BWS II MK7 Coilovers',
      category: categories[1]._id,
      description:
        'BWS Version II Coilovers-Volkswagen MK7 Golf-GTI-Jetta',
      image: 'bws_ver2_coilovers_mk7.jpg',
      price: 1999.99,
      quantity: 12,
    },
    {
      name: 'VW CC 500s Coilovers',
      category: categories[1]._id,
      description:
        'Volkswagen CC 2008+ - Broadway Static 500S Coilovers',
      image: 'bws_vw_cc_coilovers.jpg',
      price: 1524.99,
      quantity: 3,
    },
    {
      name: 'VW Camber Plates',
      category: categories[2]._id,
      description: 'MK7 Volkswagen Camber Plates.',
      image: 'vw_camber_plates.jpg',
      price: 274.99,
      quantity: 16,
    },
    {
      name: 'BMW Camber Plates',
      category: categories[2]._id,
      description: 'BWS BMW Camber Caster Plates',
      image: 'bmw_camber_plates.jpg',
      price: 534.99,
      quantity: 10,
    },
    {
      name: 'Subaru Camber Plates',
      category: categories[2]._id,
      description: 'BWS Camber Plates - Subaru',
      image: 'subaru_camber_plates.jpg',
      price: 274.99,
      quantity: 10,
    },
    {
      name: 'Lexus Adjustable Top Hats',
      category: categories[3]._id,
      description: 'BWS Adjustable Top Hats- Lexus',
      image: 'lexus_top_hats.jpg',
      price: 349.99,
      quantity: 17,
    },
    {
      name: 'Nissan/Infiniti Camber Plates',
      category: categories[3]._id,
      description: 'BWS Camber Plates - Nissan/Infiniti',
      image: 'nissan_infinit_top_hats.jpg',
      price: 349.99,
      quantity: 6,
    },
    {
      name: 'VW MK5/6 Coilovers',
      category: categories[2]._id,
      description:
        'Volkswagen MK5/MK6 Rabbit-GTI-Jetta (with IRS) - Broadway Static 500S Coilovers',
      image: 'vw_mk6_rabbit_coilovers.jpg',
      price: 1524.99,
      quantity: 16,
    },
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id],
      },
    ],
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345',
  });

  console.log('users seeded');

  process.exit();
});
