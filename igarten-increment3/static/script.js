var x = 5;
var y = 7;
var z = x + y;
console.log(z);
var A = "Hello ";
var B = "world!";
var C = A + B;
console.log(C);

function sumnPrint(x1, x2) {
    var a = x1 + x2;
    console.log(a);
}

console.log(sumnPrint(x, y));
console.log(sumnPrint(A, B));

if (C.length > z) {
    console.log("C");
    if(C.length < z){
        console.log(z);
    }
} else {
    console.log("good job!");
}

L1 = ["Watermelon","Pineapple","Pear","Banana"];
L2 = ["Apple","Banana","Kiwi","Orange"];

/*function findTheBanana(s){
    if(s == "Banana"){
        window.alert("I found the banana!");
    }
}

L1.forEach(findTheBanana);
L2.forEach(findTheBanana);*/

var now = new Date();
var hours = now.getHours();

function greeting(hours) {
    if (hours < 5 || hours >= 20) {
        if(document.getElementById("greeting") != null){
            document.getElementById("greeting").innerHTML = "Good night!";
        }
    } else if (hours < 12) {
        if(document.getElementById("greeting") != null){
            document.getElementById("greeting").innerHTML = "Good morning!";
        }
    } else if (hours < 18) {
        if(document.getElementById("greeting") != null){
            document.getElementById("greeting").innerHTML = "Good afternoon!";
        }
    } else {
        if(document.getElementById("greeting") != null){
            document.getElementById("greeting").innerHTML = "Good evening!";
        }
    }
}
greeting(hours);


function addYear(){
    var currentYear = new Date().getFullYear();
    document.getElementById("copyYear").innerHTML = "&copy;" + currentYear + " MonoMuse. All rights reserved.";
}