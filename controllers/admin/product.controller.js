//[GET] /admin/products
//status button
const filerButtonsHelper = require("../../helpers/filterButtons")
// const filerButtonsHelper = require("../../helpers/filterButtons")
const  Products  = require("../../models/product.model")
const searchHelper = require("../../helpers/search")
module.exports.index = async (req, res) =>{
    
    const status = req.query.status
    const filerButtons = filerButtonsHelper(req.query)
    const searchObject = searchHelper(req.query)
    console.log(searchHelper)
    const find = {
        deleted:false
    }
    if(status){
        find.status = status
    }
    if(searchObject.regex){
        find.title = searchObject.regex
    }
    //Pagination
    let PaginationObject = {
        limitItem : 4,
        currentPage : 1,
    }
//Pagination
   if(req.query.page){
    
    PaginationObject.currentPage = parseInt(req.query.page)
   }
   
PaginationObject.skip = ( PaginationObject.currentPage -1 ) * ( PaginationObject.limitItem )

const countProducts = await Products.countDocuments(find)


const totalPage =Math.ceil((countProducts/PaginationObject.limitItem))


PaginationObject.totalPage = totalPage

//end Pagination

const listProducts = await Products.find(find).limit(PaginationObject.limitItem).skip(PaginationObject.skip)

res.render("./admin/pages/product/index.pug",{
        pageTitle: "Trang sản phẩm",
        listProducts: listProducts,
        listButton: filerButtons,
        keyword: searchObject.keyword,
        Pagination: PaginationObject
    }) 
}