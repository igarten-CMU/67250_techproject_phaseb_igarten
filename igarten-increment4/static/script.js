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

function navActive(){
    var links = document.querySelectorAll(".nav_bar a");
    var currentPage = window.location.href;
    links.forEach(function(link){
        if(link.href === currentPage){
            link.classList.add("active");
        }
    });
}
navActive();

$("#read_more").click(function(){
    $("#long_pg").show();
    $("#read_more").hide();
    $("#read_less").show();
});

$("#read_less").click(function(){
    $("#long_pg").hide();
    $("#read_more").show();
    $("#read_less").hide();
});

var currentDate = new Date();

function createCalendar() {
    var calendar = document.getElementById("calendar");
    var monthYear = document.getElementById("monthYear");

    if (!calendar || !monthYear) {
        return;
    }

    var month = currentDate.getMonth();
    var year = currentDate.getFullYear();

    var firstDay = new Date(year, month, 1).getDay();
    var daysInMonth = new Date(year, month + 1, 0).getDate();

    var today = new Date();
    var todayDate = today.getDate();
    var todayMonth = today.getMonth();
    var todayYear = today.getFullYear();

    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    monthYear.innerHTML = monthNames[month] + " " + year;

    calendar.innerHTML = "";

    for (var i = 0; i < dayNames.length; i++) {
        var dayNameCell = document.createElement("div");
        dayNameCell.classList.add("day-name");
        dayNameCell.innerHTML = dayNames[i];
        calendar.appendChild(dayNameCell);
    }

    for (var j = 0; j < firstDay; j++) {
        var emptyCell = document.createElement("div");
        emptyCell.classList.add("empty");
        calendar.appendChild(emptyCell);
    }

    for (var k = 1; k <= daysInMonth; k++) {
        var dateCell = document.createElement("div");
        dateCell.classList.add("calendar-day");
        dateCell.textContent = k;

        if (k === todayDate && month === todayMonth && year === todayYear) {
            dateCell.classList.add("today");
        }

        dateCell.addEventListener("click", function() {
            var allDays = document.querySelectorAll(".calendar-day");
            allDays.forEach(function(day) {
                day.classList.remove("selected");
            });
            this.classList.add("selected");
            document.getElementById("selectedDate").innerHTML = monthNames[month] + " " + this.textContent + ", " + year;
        });

        calendar.appendChild(dateCell);
    }
}

function changeMonth(direction) {
    currentDate.setMonth(currentDate.getMonth() + direction);
    createCalendar();
}

createCalendar();

$("#buy_now").click(function(event){
    $("#purchase_form").show();
});

$("#submit_checkout").click(function(event){
    window.alert("Redirecting to payment system.");
});
