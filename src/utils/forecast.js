const request = require('request')

const forecast = (address,callback) =>{
    const url ='https://app.ecwid.com/api/v3/16838918/products?sku='+address+'&token=secret_1pudxM5Phxy1WwhJWX2cqPRvXV68sc3X'
request({url: url, json:true},(error, response) => {
    if(response.body.total==0){
        callback('Please enter valid order no.',undefined)
            
        }  

        else if(response.body.errorMessage){

            callback('Product is not avalible now.',undefined)
        
        }
        else{
            callback(undefined, response.body.items[0].name + ' Rs.'+ response.body.items[0].price +'/Kg'
            
            )
       

        }
    })
}

module.exports = forecast