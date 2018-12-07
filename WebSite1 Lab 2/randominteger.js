
function myNumber() {

    var y = Math.floor(Math.random() * (10)) + 1;
    document.getElementById("randomInt").innerHTML = "Task 3 = Result of random generated number is " + y;
    return;
}


function myRange(min, max) {

    var z = Math.floor(Math.random() * (max - min)) + min;
    document.getElementById("range").innerHTML = "Task 4 = Result of range numbers are " + z;
    return;
}

