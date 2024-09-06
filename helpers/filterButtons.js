module.exports =(query) =>{

    const filerButtons =[
        {
            name:"Tẩt cả",
            class:"",
            status:"" 
        },
        {
            name:"Hoạt động",
            class:"",
            status:"active" 
        },
        {
            name:"Ngưng hoạt động",
            class:"",
            status:"inactive" 
        }
    ]
    if(query.status) {
        const index = filerButtons.findIndex(item =>{
            return item.status == query.status 
        })
        filerButtons[index].class = "active"
    
    } else{
        const index = filerButtons.findIndex(item =>{
            return item.status == ""
        })
        filerButtons[index].class = "active"
    }
    return filerButtons

}