const express = require('express');
const router = express.Router();

const axios = require('axios');
const url = require('url');

const Base_Url = 'https://api.sandbox.spacefill.fr/v1/logistic_management';
const token ='nCJhbGpiOiJIUzI1NazsInR4cCI6IkpSQC45' ; 

//Post Method
router.post('/post', (req, res) => {
    console.log( 'post api');
    res.send('Post API')
})

//Get all Method
router.get('/getAll', (req, res) => {
    console.log( 'Get All API');
    console.log ( req.body ) ;

    //req.libelle = 'Get All API : ok' ; 
    res.send(  'Get All API, channel : ' + req.body.channel)
})

// ping
router.get('/ping', (req, res) => {
    async function doGetRequest() {

        let payload = { name: 'John Doe', occupation: 'gardener' };
    
        const params = new url.URLSearchParams(payload);
    
        let resp = await axios.get('https://api.sandbox.spacefill.fr/v1/ping');
    
        let data = resp.data;
        console.log(data);
        res.send(  data );
    }
    console.log('ping') ; 
    doGetRequest();
})

// get masteritem
router.get('/master_items', (req, res) => {

    const fetchData = async () => {
        const response = await axios.get(Base_Url + '/master_items/?archived=no&offset=0&limit=25', {
          headers: {
            Accept: "application/json",
            "Content-Type": "multipart/form-data",
            Authorization: "Bearer " + token
          }
        });
        let data = response.data;

        console.log( 'total : ' + data.total ) ;  
             
        //console.log(data);
        res.send(  data);
      };


    console.log('token : ' + req.headers.authorization ) ;  
    //console.log('limit : ' + req.params.limit ) ;  
    console.log(req.params ) ;
    console.log(req.body ) ;
    //console.log('token : ' + req.headers.limi ) ;  
    console.log('master_items') ; 
    fetchData();
    //res.send(  'retour');
})


module.exports = router;