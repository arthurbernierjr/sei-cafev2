require('dotenv').config();
require('./database');

const Category = require('../models/category');
const Item = require('../models/item');

(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Sativas', sortOrder: 10},
    {name: 'Indicas', sortOrder: 20},
    {name: 'Hybrids', sortOrder: 30},
    
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'Red-1', emoji: '🇲🇾 ', category: categories[0], price: 5.95},
    {name: 'Red-2', emoji: '🇲🇾 ', category: categories[0], price: 6.95},
    {name: 'Red-3', emoji: '🇲🇾 ', category: categories[0], price: 3.95},
    {name: 'Orange-1', emoji: '🇲🇾 ', category: categories[1], price: 14.95},
    {name: 'Orange-2', emoji: '🇲🇾 ', category: categories[1], price: 13.95},
    {name: 'Orange-3', emoji: '🇲🇾 ', category: categories[1], price: 25.95},
    {name: 'Yellow-1', emoji: '🇲🇾 ', category: categories[2], price: 1.95},
    {name: 'Yellow-2', emoji: '🇲🇾 ', category: categories[2], price: 4.95},
    {name: 'Yellow-3', emoji: '🇲🇾 ', category: categories[2], price: 3.95},
    {name: 'Yellow-4', emoji: '🇲🇾 ', category: categories[2], price: 7.95},
    {name: 'Yellow-5', emoji: '🇲🇾 ', category: categories[2], price: 1.95},
    {name: 'Red-1', emoji: '🇲🇾 ', category: categories[0], price: 2.95},
    {name: 'Red-2', emoji: '🇲🇾 ', category: categories[0], price: 3.95},
    {name: 'Orange-4', emoji: '🇲🇾 ', category: categories[1], price: 1.95},
    {name: 'Orange-5', emoji: '🇲🇾 ', category: categories[1], price: 0.95},
    {name: 'Orange-6', emoji: '🇲🇾 ', category: categories[1], price: 2.95},
    {name: 'Orange-7', emoji: '🇲🇾 ', category: categories[1], price: 3.95},
    {name: 'Orange-8', emoji: '🇲🇾 ', category: categories[1], price: 0.95},
    {name: 'Red-2', emoji: '🇲🇾 ', category: categories[0], price: 0.95},
    {name: 'Red-3', emoji: '🇲🇾 ', category: categories[0], price: 8.95},
    {name: 'Orange-8', emoji: '🇲🇾 ', category: categories[1], price: 3.95},
    {name: 'Yellow-5', emoji: '🇲🇾 ', category: categories[2], price: 7.95},
  ]);

  console.log(items)

  process.exit();

})();