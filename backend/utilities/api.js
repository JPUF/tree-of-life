const axios = require('axios')

const baseUrl  = 'https://api.opentreeoflife.org/v3/tree_of_life'
const config = {
    headers: {
        'Content-Type' : 'content-type:application/json'
    }
}

module.exports = {
    post : function(endpoint, body){
        return new Promise((resolve, reject) => {
            axios.post(baseUrl + endpoint, body, config)
            .then(res => {
                resolve(res)
            })
            .catch(error => {
                reject(error)
            })
        })
    }
}