function fun1(fun2){
    setTimeout(() => {
        console.log("Fun1 is start")
        fun2(fun3);
    }, 10000);
}

function fun2(fun3){
    setTimeout(() => {
        console.log("Fun2 is start");
        fun3();
        
    }, 10000);
}

function fun3(){
    setTimeout(() => {
        console.log("Fun3 is start");
        
    }, 8000);
}

fun1(fun2);