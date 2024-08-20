const productRouter = require("./products.route.js");
const homeRouter = require("./home.route.js")
module.exports = (app) =>{
    
    app.use('/',homeRouter)

    app.use('/products', productRouter)

}