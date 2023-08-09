require('dotenv').config();
require('./database');

const Category = require('../models/category');
const Item = require('../models/item');

(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Reds', sortOrder: 10},
    {name: 'Oranges', sortOrder: 20},
    {name: 'Yellows', sortOrder: 30},
    {name: 'Greens', sortOrder: 40},
    {name: 'Blues', sortOrder: 50},
    {name: 'Indigos', sortOrder: 60},
    {name: 'Violets', sortOrder: 70},
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'Red-1', emoji: '🧿 ', category: categories[0], price: 5.95},
    {name: 'Red-2', emoji: '🧿 ', category: categories[0], price: 6.95},
    {name: 'Red-3', emoji: '🧿 ', category: categories[0], price: 3.95},
    {name: 'Orange-1', emoji: '🧿 ', category: categories[1], price: 14.95},
    {name: 'Orange-2', emoji: '🧿 ', category: categories[1], price: 13.95},
    {name: 'Orange-3', emoji: '🧿 ', category: categories[1], price: 25.95},
    {name: 'Yellow-1', emoji: '🧿 ', category: categories[2], price: 1.95},
    {name: 'Yellow-2', emoji: '🧿 ', category: categories[2], price: 4.95},
    {name: 'Green-1', emoji: '🧿 ', category: categories[3], price: 3.95},
    {name: 'Green-2', emoji: '🧿 ', category: categories[3], price: 7.95},
    {name: 'Green-3', emoji: '🧿 ', category: categories[3], price: 1.95},
    {name: 'Blue-1', emoji: '🧿 ', category: categories[4], price: 2.95},
    {name: 'Blue-2', emoji: '🧿 ', category: categories[4], price: 3.95},
    {name: 'Indigo-1', emoji: '🧿 ', category: categories[5], price: 1.95},
    {name: 'Indigo-2', emoji: '🧿 ', category: categories[5], price: 0.95},
    {name: 'Indigo-3', emoji: '🧿 ', category: categories[5], price: 2.95},
    {name: 'Indigo-4', emoji: '🧿 ', category: categories[5], price: 3.95},
    {name: 'Violet-1', emoji: '🧿 ', category: categories[6], price: 0.95},
    {name: 'Violet-2', emoji: '🧿 ', category: categories[6], price: 0.95},
    {name: 'Violet-3', emoji: '🧿 ', category: categories[6], price: 8.95},
    {name: 'Violet-5', emoji: '🧿 ', category: categories[6], price: 3.95},
    {name: 'Violet-5', emoji: '🧿 ', category: categories[6], price: 7.95},
  ]);

  console.log(items)

  process.exit();

})();
// require('dotenv').config();
// require('./database');

// const Category = require('../models/category');
// const Item = require('../models/item');

// (async function() {

//   await Category.deleteMany({});
//   const categories = await Category.create([
//     { name: 'Raw Flower', sortOrder: 10 },
//           { name: 'Gummies', sortOrder: 20 },
//           { name: 'Candies', sortOrder: 30 },
//           { name: 'Tinctures-Base Oil', sortOrder: 40 },
//           { name: 'Topicals', sortOrder: 50 },
//           { name: 'Marshmallows', sortOrder: 60 },
//     // {name: 'Sativas', sortOrder: 10},
//     // {name: 'Indicas', sortOrder: 20},
//     // {name: 'Hybrids', sortOrder: 30},
    
//   ]);

//   await Item.deleteMany({});
//   const items = await Item.create([
// {name: "R4", emoji: '🤷🏽‍♀️', category: categories[0], price: 12.75 },
// {name: "ACDC", emoji: '🤷🏽‍♀️',category: categories[0],price: 12.75},
// {name: "MW",emoji: '🤷🏽‍♀️',category: categories[0],price: 12.75},
// {name: "DD",emoji: '🤷🏽‍♀️',category: categories[0],price: 12.75},
// {name: "MW/DHDS",emoji: '🤷🏽‍♀️',category: categories[0],price: 12.75},
// {name: "LemD",emoji: '🤷🏽‍♀️',category: categories[0],price: 12.75},
// {name: "Sativa",emoji: '🤷🏽‍♀️',category: categories[0],price: 12.75},
// {name: "Indica",emoji: '🤷🏽‍♀️',category: categories[0],price: 12.75},
// {name: "Cotton candy",emoji: '🤷🏽‍♀️',category: categories[0],price: 12.75},
// {name: "Cheese",emoji: '🤷🏽‍♀️',category: categories[0],price: 12.75},
// {name: "Lilac diesel",emoji: '🤷🏽‍♀️',category: categories[0],price: 12.75},
// {name: "Citral glue",emoji: '🤷🏽‍♀️',category: categories[0],price: 12.75},
// {name: "Sleep CBG",emoji: '❤️',category: categories[1],price: 32.99},
// {name: "Sleep CBD/ACDC",emoji: '❤️',category: categories[1],price: 32.99},
// {name: "Sleep Indica",emoji: '❤️',category: categories[1],price: 32.99},
// {name: "Lift",emoji: '❤️',category: categories[1],price: 32.99},
// {name: "Recovery",emoji: '❤️',category: categories[1],price: 32.99},
// {name: "Daytime CBG",emoji: '❤️',category: categories[1],price: 32.99},
// {name: "CBD/CBN",emoji: '🎂',category: categories[2],price: 32.99},
// {name: "Lemongrass",emoji: '🎂',category: categories[2],price: 32.99},
// {name: "Watermelon",emoji: '🎂',category: categories[2],price: 32.99},
// {name: "Woe",emoji: '🎂',category: categories[2],price: 32.99},
// {name: "CBG",emoji: '🎂',category: categories[2],price: 32.99},
// {name: "Indica glycerin",emoji: '📘',category: categories[3],price: 32.99},
// {name: "Sativa",emoji: '📘',category: categories[3],price: 32.99},
// {name: "Union custom",emoji: '📘',category: categories[3],price: 32.99},
// {name: "CBN MCT",emoji: '📘',category: categories[3],price: 32.99},
// {name: "Chaga",emoji: '📘',category: categories[3],price: 32.99},
// {name: "Garden of Bloom",emoji: '🐈‍⬛',category: categories[4],price: 32.99},
// {name: "Garden of Peace",emoji: '🐈‍⬛',category: categories[4],price: 32.99},
// {name: "Lip Lover",emoji: '🐈‍⬛',category: categories[4],price: 32.99},
// {name: "Massage Oil Cream",emoji: '🐈‍⬛',category: categories[4],price: 32.99},
// {name: "No 10",emoji: '🐈‍⬛',category: categories[4],price: 32.99},
// {name: "Therapeutic Touch",emoji: '🐈‍⬛',category: categories[4],price: 32.99},
// {name: "Soaps",emoji: "each",category: categories[4],price: 32.99},
// {name: "TLC Cream Small",emoji: '🐈‍⬛',category: categories[4],price: 32.99},
// {name: "TLC Cream Large",emoji: '🐈‍⬛',category: categories[4],price: 32.99},
// {name: "Bath Balms sm",emoji: '🐈‍⬛',category: categories[4],price: 32.99},
// {name: "Bath Balms lg",emoji: '🐈‍⬛',category: categories[4],price: 32.99},
// {name: "Indica",emoji: '🐈‍⬛',category: categories[5],price: 32.99},
// {name: "Sative",emoji: '🐈‍⬛',category: categories[5],price: 32.99},
// {name: "CBG",emoji: '🐈‍⬛',category: categories[5],price: 32.99},
//     // {name: 'Red-1', emoji: '🇲🇾 ', category: categories[0], price: 5.95},
//     // {name: 'Red-2', emoji: '🇲🇾 ', category: categories[0], price: 6.95},
//     // {name: 'Red-3', emoji: '🇲🇾 ', category: categories[0], price: 3.95},
//     // {name: 'Orange-1', emoji: '🇲🇾 ', category: categories[1], price: 14.95},
//     // {name: 'Orange-2', emoji: '🇲🇾 ', category: categories[1], price: 13.95},
//     // {name: 'Orange-3', emoji: '🇲🇾 ', category: categories[1], price: 25.95},
//     // {name: 'Yellow-1', emoji: '🇲🇾 ', category: categories[2], price: 1.95},
//     // {name: 'Yellow-2', emoji: '🇲🇾 ', category: categories[2], price: 4.95},
//     // {name: 'Yellow-3', emoji: '🇲🇾 ', category: categories[2], price: 3.95},
//     // {name: 'Yellow-4', emoji: '🇲🇾 ', category: categories[2], price: 7.95},
//     // {name: 'Yellow-5', emoji: '🇲🇾 ', category: categories[2], price: 1.95},
//     // {name: 'Red-1', emoji: '🇲🇾 ', category: categories[0], price: 2.95},
//     // {name: 'Red-2', emoji: '🇲🇾 ', category: categories[0], price: 3.95},
//     // {name: 'Orange-4', emoji: '🇲🇾 ', category: categories[1], price: 1.95},
//     // {name: 'Orange-5', emoji: '🇲🇾 ', category: categories[1], price: 0.95},
//     // {name: 'Orange-6', emoji: '🇲🇾 ', category: categories[1], price: 2.95},
//     // {name: 'Orange-7', emoji: '🇲🇾 ', category: categories[1], price: 3.95},
//     // {name: 'Orange-8', emoji: '🇲🇾 ', category: categories[1], price: 0.95},
//     // {name: 'Red-2', emoji: '🇲🇾 ', category: categories[0], price: 0.95},
//     // {name: 'Red-3', emoji: '🇲🇾 ', category: categories[0], price: 8.95},
//     // {name: 'Orange-8', emoji: '🇲🇾 ', category: categories[1], price: 3.95},
//     // {name: 'Yellow-5', emoji: '🇲🇾 ', category: categories[2], price: 7.95},
//   ]);

//   console.log(items)

//   process.exit();

// })();