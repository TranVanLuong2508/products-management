module.exports.index = (req, res) => {
    res.render("./client/pages/products/index.pug",{
        pageTitle:"Trang sản phẩm"
    }
    )
}

module.exports.create =(req, res) => {
    res.render("./client/pages/products/create.pug")
}