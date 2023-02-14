

function water(tea){
    setTimeout(() =>{
        console.log("boil water");
        tea(milk);

}, 5000)
}

function teaLeaves(milk){
    setTimeout(() =>{
    console.log("tea leaves");
    milk();
}, 2000);
}



function milk(){
    console.log("add milk");
}


water(teaLeaves);
