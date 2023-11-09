const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
app.use(cors())
app.use(express.json());

const productModel = require('./Model/product');

let mongolink = "mongodb+srv://safdarmuneeb41:safdar@cluster0.1relz9q.mongodb.net/practice?retryWrites=true&w=majority"
mongoose.connect(mongolink)

app.post('/uploadProduct', async (req, res) => {
    const product = req.body
    const newProduct = new productModel(product)
    await newProduct.save()
    res.json(product)
})

app.get('/products', async (req, res) => {
    let productall = await productModel.find()
    console.log("productall", productall)
    res.send(productall)
})

const PORT = 8000;
app.listen(PORT, () => {
    console.log("server running on port", PORT)
})