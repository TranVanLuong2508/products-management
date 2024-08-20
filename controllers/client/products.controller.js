module.exports.index = (req, res) => {
    res.render("./client/pages/products/index.pug")
}

module.exports.create =(req, res) => {
    res.render("./client/pages/products/create.pug")
}