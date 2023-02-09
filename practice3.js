let numbers = [1,2,3,4,5,6,7,8];
let a = 0;
for(i=0; i<numbers.length; i++){
    a = a + numbers[i];
}
document.getElementById("h1").innerHTML = "Array sum is " + a;
document.getElementById("h2").innerHTML = "Array average is " + a/numbers.length;
document.getElementById("h3").innerHTML = "Array maximum value is " + Math.max.apply(null, numbers);



let strings = ["dhruvin", "meet", "nil", "nevil"];
let x = 0;
let longest;
for(i=0; i<strings.length; i++){
    if (strings[i].length>x){
        x = strings[i].length;
        longest = strings[i]
    }
}
document.getElementById("h4").innerHTML = "longest value is " + longest;



let employees = [ 
{
    name : "Dhruvin", 
    age : 20, 
    address : "Surat"
},
{
    name : "Meet", 
    age : 22, 
    address : "Ahmedabad"
},
{
    name : "Nil", 
    age : 19, 
    address : "Rajkot"
}
];

employees.sort(function(a,b){return a.age - b.age});
employees.sort;
document.getElementById("h5").innerHTML = JSON.stringify(employees);




let numbers2 = [2,4,6,2,4,6,7,8,9];
let arr = new Set(numbers2);
let uniquearr = "";
arr.forEach(function(number){
    uniquearr += number + ","; 
}
)
document.getElementById("h6").innerHTML = uniquearr;



let arr1 = [1,6,8,4,7];
let arr2 = [1,3,6,4,7];


function myFun3(arr1, arr2){

    let arr4 = [];
    let arr3 = arr1.concat(arr2);
    let arr5 = new Set(arr3);
    arr5.forEach(function(number){
    arr4 += number + ","; 
    document.getElementById("h7").innerHTML = arr4;
}
)
}



let string = ["Neel", "Meet", "Nevil", "Rutvik", "Kishan"];
string.sort();
document.getElementById("h8").innerHTML = string;









