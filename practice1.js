function myFun(){
    document.getElementById("h1").innerHTML = "How are you";
}

function myFun2(){
    const node = document.createElement("li");
    const text = document.createTextNode("Kiwi");
    node.appendChild(text);
    document.getElementById("fruits").appendChild(node);
}

function myFun3(){
    let list = document.getElementById("fruits");
    list.removeChild(list.children[2]);
}

function myFun4(){
    document.getElementById("hello").innerHTML = "Hii";
}

function myFun5(){
    document.getElementById("h2").innerHTML = "I am fine";
}


function myFun6(){
    document.getElementById("h3").innerHTML = "why";
}



function validateForm(){
    let x = document.myForm.name.value;
    let y = document.myForm.mono.value;
    let z = document.myForm.email.value;

    if (x=="" || y == "" || z == ""){
        alert("Please fill all the fields");
        return false;
    }else if (z.includes("@") == false){
        alert("Please write email properly");
        return false;

    }
}



function changeImage(filename){
    let img = document.getElementsByTagName("img")[0];
    img.setAttribute("src", filename);


}
