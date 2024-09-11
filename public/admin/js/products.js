
//[PATCH] change status
const changeStatusButtons = document.querySelectorAll("[button-change-status]")

if(changeStatusButtons.length > 0 ) {

    const changeStatusForm = document.querySelector("#form-change-status")
    const path = changeStatusForm.getAttribute("data-path")

    changeStatusButtons.forEach(button =>{
        
        button.addEventListener("click", () => {

            const currentStatus = button.getAttribute("data-status")
            const id = button.getAttribute("data-id")
            const changeStatus = currentStatus === "active" ? "inactive" : "active"

            const action = path + `/${changeStatus}/${id}?_method=PATCH`
            changeStatusForm.action = action

            changeStatusForm.submit()
        })
    })
}

// end [PATCH] change-status


// [PATCH] change-multi

// checkbox-multi

const checkboxMulti = document.querySelector("[checkbox-multi]")
if(checkboxMulti) {

    const checkAllBox = checkboxMulti.querySelector("input[name ='checkAll']")
    const  idCheckboxs = checkboxMulti.querySelectorAll("input[name='id']")
    checkAllBox.addEventListener("click", () =>{
        if(checkAllBox.checked){

            idCheckboxs.forEach(checkbox =>{
                checkbox.checked = true
            })
        } else {
            idCheckboxs.forEach(checkbox =>{
                checkbox.checked = false
            })
        }
    })

    idCheckboxs.forEach(input =>{

        input.addEventListener("click", ()=>{
            const idCheckedBox = checkboxMulti.querySelectorAll("input[name='id']:checked")
            if(idCheckedBox.length == idCheckboxs.length) {
                checkAllBox.checked = true
            } else {
                checkAllBox.checked = false
            }
        })
    })
}

//end checkbox-multi

// form-change-multi

const changeMultiForm = document.querySelector("[form-change-multi]")
if(changeMultiForm) {
    changeMultiForm.addEventListener("submit", (event) =>{

        event.preventDefault()
        const checkboxMulti = document.querySelector("[checkbox-multi]")
        const idCheckedBoxs = checkboxMulti.querySelectorAll("input[name='id']:checked")

       if( idCheckedBoxs.length > 0 ) {
          let ids=[]
          const idInput = changeMultiForm.querySelector("input[name='ids']")
          idCheckedBoxs.forEach(idCheckedBox =>{
          let id = idCheckedBox.getAttribute("value")
          ids.push(id)
        })
        idInput.value=ids.join(", ")
        changeMultiForm.submit()
       } else {
        alert("vui lòng chọn sản phẩm")
       }
    })
}
//  END [PATCH] change-multi


