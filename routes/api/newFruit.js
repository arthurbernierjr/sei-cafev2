const express = require('express')
const router = express.Router()
const fruitCtrl = require('../../controllers/api/newFruit')


// Index /api/fruits
router.get('/', fruitCtrl.fruitNotRipe, fruitCtrl.jsonFruits)
// Index /api/fruits/completed
router.get('/completed', fruitCtrl.fruitRipe, fruitCtrl.jsonFruits)
// Delete /api/fruits/:id
router.delete('/:id', fruitCtrl.destroyFruit, fruitCtrl.jsonFruit)
// Update /api/fruits/:id
router.put('/:id', fruitCtrl.updateFruit, fruitCtrl.jsonFruit)
// Create /api/fruits
router.post('/', fruitCtrl.createFruit, fruitCtrl.jsonFruit)
// Show /api/tods/:id
router.get('/:id', fruitCtrl.showFruit, fruitCtrl.jsonFruit)

module.exports = router