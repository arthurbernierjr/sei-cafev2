const Fruit = require('../../models/fruit')

module.exports = {
     createFruit, 
     fruitRipe, 
     fruitNotRipe, 
     showFruit, 
     updateFruit, 
     destroyFruit, 
     jsonFruits,
     jsonFruit
}

function jsonFruit(req,res) {
     res.json(res.locals.data.fruit)
}

function jsonFruits(req,res) {
      res.json(res.locals.data.fruits)     
}
async function createFruit(req,res,next) {
     try {
          const fruit = await Fruit.createFruit(req.body)
          console.log(fruit)
          res.locals.data.fruit = fruit
          next()
     } catch (error) {
          res.status(400).json({ msg: error.message })          
     }
}

async function fruitRipe(req,res,next) {
     try {
          const fruits = await Fruit.find({ completed: true })
          res.locals.data.fruits = fruits
          next()
     } catch (error) {
          res.status(400).json({ msg: error.message })          
     }
}

async function fruitNotRipe(req,res,next) {
     try {
          const fruits = await Fruit.find({ completed: false })
          res.locals.data.fruits = fruits
          next()
     } catch (error) {
          res.status(400).json({ msg: error.message })          
     }
}

async function showFruit(req,res,next) {
     try {
          const fruit = await Fruit.findById(req.params.id)
          res.locals.data.fruit = fruit  
          next()
     } catch (error) {
          res.status(400).json({ msg: error.message })          
     }
}

async function updateFruit(req,res,next) {
     try {
          const fruit = await Fruit.findById(req.params.id)
          res.locals.data.fruit = fruit  
          next()
     } catch (error) {
          res.status(400).json({ msg: error.message })          
     }
}
     async function destroyFruit(req, res, next){
          try {
              const fruit = await Fruit.findByIdAndDelete(req.params.id)
              res.locals.data.fruit = fruit
              next()
          } catch (error) {
              res.status(400).json({ msg: error.message })       
          }
      }
      
