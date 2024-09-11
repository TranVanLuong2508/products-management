const express = require('express')
var methodOverride = require('method-override')
var bodyParser = require('body-parser')
const app = express()
app.use(methodOverride('_method'))
app.use(bodyParser.urlencoded({ extended: false }))
//use env
require("dotenv").config();
const port = process.env.PORT
//connect database
const database = require("./config/database.js")
database.connect()
//template engine
app.set("views","./views")
app.set("view engine","pug")

app.use(express.static('public'))

// App loccal variables
const systemConfig = require("./config/system.js")
app.locals.prefixAdmin = systemConfig.prefixAdmin
//route
const route = require("./routes/client/index.route.js")
const adminRoute = require("./routes/admin/index.route.js")

route(app);

adminRoute(app)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

