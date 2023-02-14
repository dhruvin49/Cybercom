// Case 1 
function myFun(){
    let x = document.myForm.fname.value;
    let w = document.myForm.lname.value;
    let y = document.myForm.mono.value;
    let z = document.myForm.email.value;
    
    let saveDetails = new Promise(function(resolve, reject) {


        if (x=="" || w=="" || y == "" || z == ""){
            reject("Please fill all the fields");
            // alert("Please fill all the fields");
        }else {
            resolve("Success");

        }
    })

    saveDetails.then(function() {
        console.log("Success")
    }
    ).catch(function(){
        console.log("Please fill all the fields")
    }
    )
}



// Case2 
function fun(){
    setTimeout(() => {
    document.getElementById("h1").innerHTML = "output from one";
        
    }, 5000);
}

function fun2(){
    setTimeout(() => {
    document.getElementById("h2").innerHTML = "output from second";
        
    }, 10000);
}

function fun3(){
    setTimeout(() => {
    document.getElementById("h3").innerHTML = "output from third";
        
    }, 15000);
}

fun();
fun2();
fun3();
