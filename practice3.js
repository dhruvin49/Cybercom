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

document.getElementById("h4").innerHTML = "longest value is " + longest

let employees = [ 
{
    name : "Dhruvin", 
    age : 21, 
    address : "Surat"
},
{
    name : "Meet", 
    age : 20, 
    address : "Ahmedabad"
},
{
    name : "Nil", 
    age : 19, 
    address : "Rajkot"
}
];

employees.sort(function(a,b){return a.age - b.age});
duc




