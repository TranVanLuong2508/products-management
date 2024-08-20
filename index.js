const express = require('express')
const app = express()

require("dotenv").config();
const port = process.env.PORT

app.set("views","./views")
app.set("view engine","pug")

app.use(express.static('public'))

const route = require("./routes/client/index.route.js")
route(app);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

