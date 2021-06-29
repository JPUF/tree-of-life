var express = require('express');
var api_helper = require('../utilities/API_Helper');
const axios = require('axios')
var router = express.Router();

const baseUrl  = 'https://api.opentreeoflife.org/v3/'
const config = {
    headers: {
        'Content-Type' : 'content-type:application/json'
    }
}

router.get('/getTest', function(req, res, next) {
    axios.post(baseUrl + 'tree_of_life/node_info', {"ott_id":81461}, config)
    .then(response => {
        console.log(response.data)
        res.json(response.data)
    })
    .catch(error => {
        res.send(error)
    });
});

module.exports = router;
