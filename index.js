const express = require('express')
const app = express()
require("dotenv").config();
const port = process.env.PORT
// const mongoose = require("mongoose")
// mongoose.connect('mongodb://127.0.0.1:27017/products-test');
// const Product = mongoose.model('Product', { 
//     title: String,
//     price: Number,
//     price: Number,
//     thumbnail: String
//  });
app.set("views","./views")
app.set("view engine","pug")

const route = require("./routes/client/index.route.js")
route(app);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

