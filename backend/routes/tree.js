var express = require('express');
var api = require('../utilities/api');
var router = express.Router();

router.get('/mrta/:firstId/:secondId', function(req, res, next) {
    let firstId = req.params.firstId
    let secondId = req.params.secondId
    console.log(firstId + ' <====> '+ secondId)
    api.post('/mrca', {"ott_ids":[firstId,secondId]})
    .then(response => {
        res.json(response.data)
    })
    .catch(error => {
        res.send(error)
    });
});

module.exports = router;
