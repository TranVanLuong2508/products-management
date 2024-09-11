//search via button
const searchButtons = document.querySelectorAll("[button-status]")
if(searchButtons.length > 0 ){

    let url = new URL(window.location.href)

    searchButtons.forEach(button =>{

        button.addEventListener("click", () =>{

            const buttonStatus  = button.getAttribute("button-status")
            if(buttonStatus){

                url.searchParams.set("status", buttonStatus)
            } else{
                url.searchParams.delete("status")
            }
            window.location.href = url.href
        })
    })
}
//end search via button

//search-Form
const searchForm = document.querySelector("#form-search")
if(searchForm){
    let url = new URL(window.location.href)
    searchForm.addEventListener("submit", (event)=>{

        const keyword = event.target.elements.keyword.value
        if(keyword){
            url.searchParams.set("keyword",keyword)
        }
        else {
            url.searchParams.delete("keyword")
        }

        window.location.href  = url.href
    })
}

//end search-Form

//////////////////////////////////////Pagination

const paginationButtons = document.querySelectorAll("[button-pagination]");
// console.log(paginationButtons)
if(paginationButtons){
    let url = new URL(document.location.href)
    paginationButtons.forEach(button => {

        button.addEventListener("click", () =>{
            const page = button.getAttribute("button-pagination")
            if(page){

                url.searchParams.set("page",page)
            } else{
                url.searchParams.delete("page")
            }
            window.location.href = url.href
        })
    })
}

////////////////////////////end Pagination