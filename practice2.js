const person = {name : "dhruvin", age : "21", Address : "Ahmedabad"};
person.name = "meet"
document.getElementById("demo").innerHTML = "My name is " + person.name;



const product = {name : "Samsung", Price : "10000", Quantity : "2"};
document.getElementById("h1").innerHTML = "Total Price is " + product.Quantity*product.Price;



const people = {p1 : "Dhruvin", p2 : "Meet", p3 : "Nil", p4 : "Rutvik"};
let text = "";
for (x in people){
    text = text + people[x] + "<br>";
}

document.getElementById("h2").innerHTML = text;   


 

let person2 = {name : "Dhruvin", age : "21", address : "Surat"};

function myFun(objects){
    document.getElementById("h3").innerHTML = objects.name + "," + objects.age;
}



let person3 = {name : "Dhruvin", age : "21"};
let person4 = {address : "Mumbai"};

function myFun2(object1, object2){
    document.getElementById("h4").innerHTML = object1.name + "," + object1.age + "" + object2.address;
}



let numbers = [1,2,3,4,5,6,7,8];
let a = 0;
for(i=0; i<numbers.length; i++){
    a = a + numbers[i];
}
document.getElementById("h5").innerHTML = "Array sum is " + a;
document.getElementById("h6").innerHTML = "Array average is " + a/numbers.length;
document.getElementById("h7").innerHTML = "Array maximum value is " + Math.max.apply(null, numbers);