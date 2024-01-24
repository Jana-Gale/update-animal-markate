//select all elements
let fullname=document.getElementById("fullname");
let email=document.getElementById("Email");
let password=document.getElementById("password");
let Comform_password=document.getElementById("Comform_password");

//tick display
let display_tick=document.getElementById("tick_submit")
let form=document.querySelector("form")




//show error

function showError(element,message){
    let parentElement=element.parentElement;
    parentElement.classList.remove("success")
    parentElement.classList.add("error")
  
    let small=parentElement.querySelector("small")

    //chang the text of small
   
    small.innerText=message;
    parentElement.classList.add("small_display")
}



//success 

function success(element){
    let parentElement=element.parentElement;
    parentElement.classList.remove("small_display")
    parentElement.classList.add("success")
}

// function get_all_inputs

function get_all_inputs(elements){
    elements.forEach(element=>{
        //sooqabo input kasta paranelementigiisa
      
        // console.log(element);
        if (element.value==="") {
           showError(element,"Name Required")

            
        }else{
        success(element)
        }
    })
}


//function email_check
function email_check(input_email){

    let checkEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(input_email.value.match(checkEmail))
    {
    success(input_email)
    }
    else
    {
        showError(input_email,"invalid email address")
    // alert("You have entered an invalid email address!");
   
  
    }

}



//check password

function  checkPassword(pass,cormformPass){
    if(pass.value===""){
        showError(pass,"Empty Password")
        showError(cormformPass,"Empty Password")
        
    }
    else if(cormformPass.value===""){
      
        showError(cormformPass,"Empty Password")
    }
    
    else{
        // success(pass)
        // success(cormformPass)
        checkCormform(password,Comform_password)
    }


 
}






//cormform password

function  checkCormform(pass,cormformPass){
    if(pass.value===cormformPass.value ){

        if(pass.value.length<5 && cormformPass.value.length<5){

            showError(pass,"Password minimum 5 characters")
            showError(cormformPass,"Password minimum 5 characters")
        }

        else if(pass.value.length>10 && cormformPass.value.length>10){

            showError(pass,"Password maximum 10 characters")
            showError(cormformPass,"Password maximum 10 characters")
        }
        
        
        
        else{
            success(pass)
        success(cormformPass)
        display_tick.style.visibility="visible"
        swal({
            title: "Good job!",
            text: "Your submission was successful!",
            icon: "success",
            button: "Aww yiss!",
          });
        form.reset()
        }
        
    }
    // else if(pass.value.length<5 && cormformPass.value.length<5){

    //     showError(pass,"Password minimum 5 characters")
    //     showError(cormformPass,"Password minimum 5 characters")
    // }

    else{
        showError(pass,"Password mismarch")
        showError(cormformPass,"Password mismarch")
    }

 
}
//e
//event from

form.addEventListener("submit",function(event){
    event.preventDefault()



   

    get_all_inputs([fullname,email,password,Comform_password])

    //emali check
    email_check(email)


    //check password
    checkPassword(password,Comform_password)
    



  


    console.log("hello");
})

