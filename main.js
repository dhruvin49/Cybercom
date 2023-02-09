function myFun(){
    let text = document.getElementById("button").textContent;
    document.getElementById("demo").innerHTML = text;


}

function myFunction(){
    let header = document.getElementById("h2");
    let html = "<p>My new paragraph.</p>";
    header.insertAdjacentHTML("afterend", html);
}

function myFunction3(){
    let header = document.getElementById("h3").innerHTML = "I am Fine";

}


function myFunction4(){
    let list = document.getElementsByTagName("UL")[0];
    list.getElementsByTagName("li")[0].innerHTML = "Dhruvin";

}


function myFunction5(){
    const myAnchor = document.getElementById("hello") 
    let text = myAnchor.getAttribute("class");
    document.getElementById("demo").innerHTML = text;
}

function myFunction6() {
    document.getElementById("hell").setAttribute("class", "democlass"); 
  }



  let collection = document.getElementsByClassName("example");
  collection[0].innerHTML = "Hello World!";
  document.querySelector("p").style.backgroundColor = "red";
  document.getElementById("h2").style.backgroundColor = "red";
  document.getElementById("h3").classList.add("myStyle");

  const node = document.createElement("li");
  const textnode = document.createTextNode("Water");
  node.appendChild(textnode);
  document.getElementById("myList").appendChild(node);
  const element = document.getElementById("myList").children[0];
  const newNode = document.createTextNode("Fire");
  element.replaceChild(newNode, element.childNodes[0]);
  






    // let header = document.getElementsByClassName("example");
    // header[0].innerHTML = "Hello";

