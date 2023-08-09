## Trello [Link](https://trello.com/b/Uj1rbgfT/project-management)

### DataBase Q's:

```js
(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([
    { name: 'Raw Flower', sortOrder: 10 },
          { name: 'Gummies', sortOrder: 20 },
          { name: 'Candies', sortOrder: 30 },
          { name: 'Tinctures-Base Oil', sortOrder: 40 },
          { name: 'Topicals', sortOrder: 50 },
          { name: 'Marshmallows', sortOrder: 60 },
    // {name: 'Sativas', sortOrder: 10},
    // {name: 'Indicas', sortOrder: 20},
    // {name: 'Hybrids', sortOrder: 30},
    
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
{name: "R4", emoji: '🤷🏽‍♀️', category: categories[0], price: 12.75 },
{name: "ACDC", emoji: '🤷🏽‍♀️',category: categories[0],price: 12.75},
{name: "MW",emoji: '🤷🏽‍♀️',category: categories[0],price: 12.75},
{name: "DD",emoji: '🤷🏽‍♀️',category: categories[0],price: 12.75},
{name: "MW/DHDS",emoji: '🤷🏽‍♀️',category: categories[0],price: 12.75},
{name: "LemD",emoji: '🤷🏽‍♀️',category: categories[0],price: 12.75},
{name: "Sativa",emoji: '🤷🏽‍♀️',category: categories[0],price: 12.75},
{name: "Indica",emoji: '🤷🏽‍♀️',category: categories[0],price: 12.75},
{name: "Cotton candy",emoji: '🤷🏽‍♀️',category: categories[0],price: 12.75},
{name: "Cheese",emoji: '🤷🏽‍♀️',category: categories[0],price: 12.75},
{name: "Lilac diesel",emoji: '🤷🏽‍♀️',category: categories[0],price: 12.75},
{name: "Citral glue",emoji: '🤷🏽‍♀️',category: categories[0],price: 12.75},
{name: "Sleep CBG",emoji: '❤️',category: categories[1],price: 32.99},
{name: "Sleep CBD/ACDC",emoji: '❤️',category: categories[1],price: 32.99},
{name: "Sleep Indica",emoji: '❤️',category: categories[1],price: 32.99},
{name: "Lift",emoji: '❤️',category: categories[1],price: 32.99},
{name: "Recovery",emoji: '❤️',category: categories[1],price: 32.99},
{name: "Daytime CBG",emoji: '❤️',category: categories[1],price: 32.99},
{name: "CBD/CBN",emoji: '🎂',category: categories[2],price: 32.99},
{name: "Lemongrass",emoji: '🎂',category: categories[2],price: 32.99},
{name: "Watermelon",emoji: '🎂',category: categories[2],price: 32.99},
{name: "Woe",emoji: '🎂',category: categories[2],price: 32.99},
{name: "CBG",emoji: '🎂',category: categories[2],price: 32.99},
{name: "Indica glycerin",emoji: '📘',category: categories[3],price: 32.99},
{name: "Sativa",emoji: '📘',category: categories[3],price: 32.99},
{name: "Union custom",emoji: '📘',category: categories[3],price: 32.99},
{name: "CBN MCT",emoji: '📘',category: categories[3],price: 32.99},
{name: "Chaga",emoji: '📘',category: categories[3],price: 32.99},
{name: "Garden of Bloom",emoji: '🐈‍⬛',category: categories[4],price: 32.99},
{name: "Garden of Peace",emoji: '🐈‍⬛',category: categories[4],price: 32.99},
{name: "Lip Lover",emoji: '🐈‍⬛',category: categories[4],price: 32.99},
{name: "Massage Oil Cream",emoji: '🐈‍⬛',category: categories[4],price: 32.99},
{name: "No 10",emoji: '🐈‍⬛',category: categories[4],price: 32.99},
{name: "Therapeutic Touch",emoji: '🐈‍⬛',category: categories[4],price: 32.99},
{name: "Soaps",emoji: "each",category: categories[4],price: 32.99},
{name: "TLC Cream Small",emoji: '🐈‍⬛',category: categories[4],price: 32.99},
{name: "TLC Cream Large",emoji: '🐈‍⬛',category: categories[4],price: 32.99},
{name: "Bath Balms sm",emoji: '🐈‍⬛',category: categories[4],price: 32.99},
{name: "Bath Balms lg",emoji: '🐈‍⬛',category: categories[4],price: 32.99},
{name: "Indica",emoji: '🐈‍⬛',category: categories[5],price: 32.99},
{name: "Sative",emoji: '🐈‍⬛',category: categories[5],price: 32.99},
{name: "CBG",emoji: '🐈‍⬛',category: categories[5],price: 32.99},
    // {name: 'Red-1', emoji: '🇲🇾 ', category: categories[0], price: 5.95},
    // {name: 'Red-2', emoji: '🇲🇾 ', category: categories[0], price: 6.95},
    // {name: 'Red-3', emoji: '🇲🇾 ', category: categories[0], price: 3.95},
    // {name: 'Orange-1', emoji: '🇲🇾 ', category: categories[1], price: 14.95},
    // {name: 'Orange-2', emoji: '🇲🇾 ', category: categories[1], price: 13.95},
    // {name: 'Orange-3', emoji: '🇲🇾 ', category: categories[1], price: 25.95},
    // {name: 'Yellow-1', emoji: '🇲🇾 ', category: categories[2], price: 1.95},
    // {name: 'Yellow-2', emoji: '🇲🇾 ', category: categories[2], price: 4.95},
    // {name: 'Yellow-3', emoji: '🇲🇾 ', category: categories[2], price: 3.95},
    // {name: 'Yellow-4', emoji: '🇲🇾 ', category: categories[2], price: 7.95},
    // {name: 'Yellow-5', emoji: '🇲🇾 ', category: categories[2], price: 1.95},
    // {name: 'Red-1', emoji: '🇲🇾 ', category: categories[0], price: 2.95},
    // {name: 'Red-2', emoji: '🇲🇾 ', category: categories[0], price: 3.95},
    // {name: 'Orange-4', emoji: '🇲🇾 ', category: categories[1], price: 1.95},
    // {name: 'Orange-5', emoji: '🇲🇾 ', category: categories[1], price: 0.95},
    // {name: 'Orange-6', emoji: '🇲🇾 ', category: categories[1], price: 2.95},
    // {name: 'Orange-7', emoji: '🇲🇾 ', category: categories[1], price: 3.95},
    // {name: 'Orange-8', emoji: '🇲🇾 ', category: categories[1], price: 0.95},
    // {name: 'Red-2', emoji: '🇲🇾 ', category: categories[0], price: 0.95},
    // {name: 'Red-3', emoji: '🇲🇾 ', category: categories[0], price: 8.95},
    // {name: 'Orange-8', emoji: '🇲🇾 ', category: categories[1], price: 3.95},
    // {name: 'Yellow-5', emoji: '🇲🇾 ', category: categories[2], price: 7.95},
  ]);

  console.log(items)

  process.exit();

})();
```


### Heroku [Link](https://shrouded-crag-13588.herokuapp.com/todos)

### Toolbox

* JavaScript
* React
* SCSS
* MongoDB
* NodeJS & Express
* JSONWebToken
* Heroku
* Postman
* BigPoppa Code
* YouTube-(Traversy Media)

### Postman Routes

**Create account ```POST``` /api/users**

```
{
     "name": "pauline",
     "email": "pauline@gmail.com",
     "password": "pauline",
     "confirm": "pauline"
}
```
**Error 400

**```POST``` /api/users/login**
```
{
     "email": "Email@gmail.com",
     "password": "password"
}
```

**```GET``` /api/users/check-token**

Index ```GET``` /api/todos

```
{
     title: {required: true, type: String },
     completed: { required: true, type: String 
     }
```     

**Index ```GET``` /api/todos/completed**
**Delete ```DELETE``` /api/todos/:id**
**Update ```PUT``` /api/todos/:id**
**Create ```POST``` /api/todos**
**Show ```GET``` /api/tods/:id**

**Index ```GET``` /api/items**
**Show ```GET``` /api/items/:id**

**Show ```GET``` /api/orders/cart**
**Index ```GET``` /api/orders/history**

**Create cart ```POST``` /api/orders/cart/items/:id**

**Create paid cart ```POST``` /api/orders/cart/checkout**

**Update ```PUT``` /api/orders/cart/qty**

**Index ```GET``` /api/fruits**
**Create ```POST``` /api/fruits**
**Update ```PUT``` /api/fruits/:id**
**Show ```GET``` /api/fruits/:id**
**Delete ```DELETE``` /api/fruits/:id**



