function validateForm(displayForm){

    let x = document.myForm.fname.value;
    let w = document.myForm.lname.value;
    let y = document.myForm.mono.value;
    let z = document.myForm.email.value;
    console.log(x);

    if (x=="" || w == "" || y == "" || z == ""){
        alert("Please fill all the fields");
        return false;
    }else {
        displayForm(x, w, y, z);
        

    }
}

function displayForm(x, w, y, z){
    console.log(x, w, y, z);
}