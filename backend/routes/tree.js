var express = require('express');
var api = require('../utilities/api');
var router = express.Router();

router.get('/getTest', function(req, res, next) {
    api.post('tree_of_life/node_info', {"ott_id":671802})
    .then(response => {
        res.json(response.data)
    })
    .catch(error => {
        res.send(error)
    });
});

module.exports = router;
