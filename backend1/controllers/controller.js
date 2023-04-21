const Product = require('../models/Products')

const getProducts = (req, res) =>{

    Product.find()
    .then(data =>{
        return res.status(200).send({data:data})
    })
    .catch(err => {
        return res.status(401).send({err:err})
    })
}

module.exports = {
    getProducts
}