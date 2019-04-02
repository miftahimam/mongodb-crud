const express = require('express')
const router = express.Router()
const controller = require('../Controllers/book')

router.get('/books', controller.read)
router.get('/books/:id', controller.read)
router.post('/books', controller.create)
router.delete('/books/:id', controller.delete)
router.put('/books/:id', controller.update)

module.exports = router