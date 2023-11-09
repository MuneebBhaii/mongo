const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    title:{
        type: 'string',
        required: true,
    },
    price:{
        type: 'number',
        required: true,
    },
    description:{
        type: 'string',
        required: true,
    },
})

const productModel = mongoose.model("products" , productSchema)
module.exports = productModel;