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

// [GET]  admin/products/change-status/:status/:id

module.exports.ChangeStatus = async ( req , res ) =>{

    const status = req.params.status
    const id = req.params.id
    await Products.updateOne({ _id : id } ,{status : status} )

    res.redirect("back")
}

// END [GET]  admin/products/change-status/:status/:id 


// [PATCH] admin/products/change-multi/

module.exports.changeMulti = async (req, res) =>{

    const ids = req.body.ids.split(", ")
    const type =req.body.type
    switch(type){
        case "active":
            await Products.updateMany({_id: { $in:ids } } , {$set: {status:"active"}} )
            break
        case "inactive":
            await Products.updateMany({_id: { $in:ids } } , {$set: {status:"inactive"}} )
            break
        default:
            break
    }
    res.redirect("back")
}