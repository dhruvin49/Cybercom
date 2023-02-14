function input(){
    let userinput = prompt("Enter the String");
    if (userinput == null){
        alert("Please enter string")
    }
    else if (userinput == userinput.split("").reverse().join("")){
        
            return document.getElementById("h1").innerHTML = true;
        }
        else{
            return document.getElementById("h1").innerHTML = false;
            }
    }



function arrInput(){
    let arr = prompt("Enter numbers with comma").split(",");
    document.getElementById("h2").innerHTML = arr.filter(greater);
    function greater(array){
        return array > 3;
    }

}



var obj = [
    {
    id:"1",
    name: "John",
    age:"10"
    },
    {
    id:"2",
    name: "doe",
    age:"40"
    },
    {
    id:"3",
    name: "Kathy",
    age:"29"
    }
    ]

function greaterage(){
    var age1 = prompt("enter the age");
    document.getElementById("h3").innerHTML = obj.age.filter(check).length;
    function check(object){
        object > age1;
    }
}
