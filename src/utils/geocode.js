const request = require('request')

const geocode = (address,callback) =>{
    const url ='https://app.ecwid.com/api/v3/16838918/products?sku='+address+'&token=secret_1pudxM5Phxy1WwhJWX2cqPRvXV68sc3X'
request({url: url, json:true},(error, response) => {
    if(response.body.total==0){
        callback('Product is not avalible now.',undefined)
            
        }  

        else if(response.body.errorMessage){

            callback('Product is not avalible now.',undefined)
        
        }
        else{
            callback(undefined, {
                product: response.body.items[0].name,
               
                price: response.body.items[0].price
            
            })
       

        }
    })

}
module.exports = geocode