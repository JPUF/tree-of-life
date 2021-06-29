const axios = require('axios')

module.exports = {
    call : function(url){
        return new Promise((resolve, reject) => {
            axios.get(url)
            .then(res => {
                resolve(res)
            })
            .catch(error => {
                reject(error)
            })
        })
    }
}