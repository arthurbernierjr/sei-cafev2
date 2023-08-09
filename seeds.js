require('dotenv').config();
require('./database');

const Category = require('../models/category');
const Item = require('../models/item');

(async function () {

     await Category.deleteMany({});
     const categories = await Category.create([
          { name: 'Raw Flower', sortOrder: 10 },
          { name: 'Gummies', sortOrder: 20 },
          { name: 'Candies', sortOrder: 30 },
          { name: 'Tinctures-Base Oil', sortOrder: 40 },
          { name: 'Topicals', sortOrder: 50 },
          { name: 'Marshmallows', sortOrder: 60 },




     ]);

     await Item.deleteMany({});
     const items = await Item.create([
          { name: 'Red-1', emoji: '🇲🇾 ', category: categories[0], price: 5.95 },
          { name: 'Red-2', emoji: '🇲🇾 ', category: categories[0], price: 6.95 },
          { name: 'Red-3', emoji: '🇲🇾 ', category: categories[0], price: 3.95 },
          { name: 'Orange-1', emoji: '🇲🇾 ', category: categories[1], price: 14.95 },
          { name: 'Orange-2', emoji: '🇲🇾 ', category: categories[1], price: 13.95 },
          { name: 'Orange-3', emoji: '🇲🇾 ', category: categories[1], price: 25.95 },
          { name: 'Yellow-1', emoji: '🇲🇾 ', category: categories[2], price: 1.95 },
          { name: 'Yellow-2', emoji: '🇲🇾 ', category: categories[2], price: 4.95 },
          { name: 'Yellow-3', emoji: '🇲🇾 ', category: categories[2], price: 3.95 },
          { name: 'Yellow-4', emoji: '🇲🇾 ', category: categories[2], price: 7.95 },
          { name: 'Yellow-5', emoji: '🇲🇾 ', category: categories[2], price: 1.95 },
          { name: 'Red-1', emoji: '🇲🇾 ', category: categories[0], price: 2.95 },
          { name: 'Red-2', emoji: '🇲🇾 ', category: categories[0], price: 3.95 },
          { name: 'Orange-4', emoji: '🇲🇾 ', category: categories[1], price: 1.95 },
          { name: 'Orange-5', emoji: '🇲🇾 ', category: categories[1], price: 0.95 },
          { name: 'Orange-6', emoji: '🇲🇾 ', category: categories[1], price: 2.95 },
          { name: 'Orange-7', emoji: '🇲🇾 ', category: categories[1], price: 3.95 },
          { name: 'Orange-8', emoji: '🇲🇾 ', category: categories[1], price: 0.95 },
          { name: 'Red-2', emoji: '🇲🇾 ', category: categories[0], price: 0.95 },
          { name: 'Red-3', emoji: '🇲🇾 ', category: categories[0], price: 8.95 },
          { name: 'Orange-8', emoji: '🇲🇾 ', category: categories[1], price: 3.95 },
          { name: 'Yellow-5', emoji: '🇲🇾 ', category: categories[2], price: 7.95 },
     ]);

     console.log(items)

     process.exit();

})();









[
     {category: categories[0], name: "R4", emoji: "oz", price: "$ -" },
{
      category: categories[0], name: "ACDC", emoji: "oz",

     price: "$ -"
},
{
      category: categories[0],
     name: "MW",

     emoji: "oz",

     price: "$ -"
},
{
      category: categories[0],
     name: "DD",

     emoji: "oz",

     price: "$ -"
},
{
      category: categories[0],
     name: "MW/DHDS",

     emoji: "oz",

     price: "$ -"
},
{
      category: categories[0],
     name: "LemD",

     emoji: "oz",

     price: "$ -"
},
{
      category: categories[0],
     name: "Sativa",

     emoji: "oz",

     price: "$ -"
},
{
      category: categories[0],
     name: "Indica",

     emoji: "oz",

     price: "$ -"
},
{
      category: categories[0],
     name: "Cotton candy",

     emoji: "oz",

     price: "$ -"
},
{
      category: categories[0],
     name: "Cheese",

     emoji: "oz",

     price: "$ -"
},
{
      category: categories[0],
     name: "Lilac diesel",

     emoji: "oz",

     price: "$ -"
},
{
      category: categories[0],
     name: "Citral glue",

     emoji: "oz",

     price: "$ -"
},
{
      category: categories[1],
     name: "Sleep CBG",

     emoji: "1 oz per pack-packs",

     price: "#REF!"
},
{
      category: categories[1],
     name: "Sleep CBD/ACDC",

     emoji: "1 oz per pack-packs",

     price: "#REF!"
},
{
      category: categories[1],
     name: "Sleep Indica",

     emoji: "1 oz per pack-packs",

     price: "#REF!"
},
{
      category: categories[1],
     name: "Lift",

     emoji: "1 oz per pack-packs",

     price: "#REF!"
},
{
      category: categories[1],
     name: "Recovery",

     emoji: "1 oz per pack-packs",
     "unitNow": "2.00",
     "unitprice": "#REF!",
     price: "#REF!"
},
{
      category: categories[1],
     name: "Daytime CBG",

     emoji: "1 oz per pack-packs",
     "unitNow": "14.00",
     "unitprice": "#REF!",
     price: "#REF!"
},
{
      category: categories[2],
     name: "CBD/CBN",

     emoji: "oz",
     "unitNow": "4.00",
     "unitprice": "#REF!",
     price: "#REF!"
},
{
      category: categories[2],
     name: "Lemongrass",

     emoji: "oz",
     "unitNow": "34.00",
     "unitprice": "#REF!",
     price: "#REF!"
},
{
      category: categories[2],
     name: "Watermelon",

     emoji: "oz",
     "unitNow": "26.00",
     "unitprice": "#REF!",
     price: "#REF!"
},
{
      category: categories[2],
     name: "Woe",

     emoji: "oz",
     "unitNow": "34.00",
     "unitprice": "#REF!",
     price: "#REF!"
},
{
      category: categories[2],
     name: "CBG",

     emoji: "oz",
     "unitNow": "11.00",
     "unitprice": "#REF!",
     price: "#REF!"
},
{
      category: categories[3],
     name: "Indica glycerin",

     emoji: "oz",
     "unitNow": "",
     "unitprice": "#REF!",
     price: "#REF!"
},
{
      category: categories[3],
     name: "Sativa",

     emoji: "oz",
     "unitNow": "9.00",
     "unitprice": "#REF!",
     price: "#REF!"
},
{
      category: categories[3],
     name: "Union custom",

     emoji: "oz",
     "unitNow": "11.00",
     "unitprice": "#REF!",
     price: "#REF!"
},
{
      category: categories[3],
     name: "CBN MCT",

     emoji: "oz",
     "unitNow": "2.00",
     "unitprice": "#REF!",
     price: "#REF!"
},
{
      category: categories[3],
     name: "Chaga",

     emoji: "oz",
     "unitNow": "",
     "unitprice": "#REF!",
     price: "#REF!"
},
{
      category: categories[4],
     name: "Garden of Bloom",

     emoji: "oz",
     "unitNow": "2.00",
     "unitprice": "#REF!",
     price: "#REF!"
},
{
      category: categories[4],
     name: "Garden of Peace",

     emoji: "oz",
     "unitNow": "5.00",
     "unitprice": "#REF!",
     price: "#REF!"
},
{
      category: categories[4],
     name: "Lip Lover",

     emoji: "oz",
     "unitNow": "50.00",
     "unitprice": "#REF!",
     price: "#REF!"
},
{
      category: categories[4],
     name: "Massage Oil Cream",

     emoji: "oz",
     "unitNow": "",
     "unitprice": "#REF!",
     price: "#REF!"
},
{
      category: categories[4],
     name: "No 10",

     emoji: "oz",
     "unitNow": "2.00",
     "unitprice": "#REF!",
     price: "#REF!"
},
{
      category: categories[4],
     name: "Therapeutic Touch",

     emoji: "oz",
     "unitNow": "2.00",
     "unitprice": "#REF!",
     price: "#REF!"
},
{
      category: categories[4],
     name: "Soaps",

     emoji: "each",
     "unitNow": "12.00",
     "unitprice": "#REF!",
     price: "#REF!"
},
{
      category: categories[4],
     name: "TLC Cream Small",

     emoji: "oz",
     "unitNow": "22.00",
     "unitprice": "#REF!",
     price: "#REF!"
},
{
      category: categories[4],
     name: "TLC Cream Large",

     emoji: "oz",
     "unitNow": "",
     "unitprice": "#REF!",
     price: "#REF!"
},
{
      category: categories[4],
     name: "Bath Balms sm",

     emoji: "oz",
     "unitNow": "1.00",
     "unitprice": "#REF!",
     price: "#REF!"
},
{
      category: categories[4],
     name: "Bath Balms lg",

     emoji: "oz",
     "unitNow": "",
     "unitprice": "#REF!",
     price: "#REF!"
},
{
      category: categories[5],
     name: "Indica",

     emoji: "each",
     "unitNow": "44.00",
     "unitprice": "#REF!",
     price: "#REF!"
},
{
      category: categories[5],
     name: "Sative",

     emoji: "each",
     "unitNow": "73.00",
     "unitprice": "#REF!",
     price: "#REF!"
},
{
      category: categories[5],
     name: "CBG",

     emoji: "each",
     "unitNow": "",
     "unitprice": "#REF!",
     price: "#REF!"
}
]