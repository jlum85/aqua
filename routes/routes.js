const express = require('express');
const router = express.Router()


//Post Method
router.post('/post', (req, res) => {
    console.log( 'post api');
    res.send('Post API')
})

//Get all Method
router.get('/getAll', (req, res) => {
    console.log( 'Get All API');
    console.log ( req.body ) ;
    res.send('Get All API')
})

//Get by ID Method
router.get('/getOne/:id', (req, res) => {
    res.send('Get by ID API')
})




module.exports = router;