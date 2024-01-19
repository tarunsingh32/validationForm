function clearErrors(){

    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML = "";
    }


}


function validateForm(){
    var returnval = true;
    clearErrors();

    var name = document.forms['myForm']["fname"].value;
    if (name.length<5){
        alert("Name should not less than 5 characters");
        returnval = false;
    }

    var phone = document.forms['myForm']["fphone"].value;
    if (phone.length != 10 || phone==123456789){
        
        alert("Enter valid phone number");
        returnval = false;
    }

    var password = document.forms['myForm']["fpass"].value;
    if (password.length <8 || password=='password'|| password==name){

        alert("password is not strong");
        returnval = false;
    }

    var cpassword = document.forms['myForm']["fcpass"].value;
    if (cpassword != password){
        alert("password and confirm password should match");
        returnval = false;
    }

    return returnval;
}

