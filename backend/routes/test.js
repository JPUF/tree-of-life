var express = require('express');
var api_helper = require('../utilities/API_Helper');
var router = express.Router();

router.get('/getTest', function(req, res, next) {
    api_helper.call('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
        res.json(response)
    })
    .catch(error => {
        res.send(error)
    })
});

module.exports = router;
