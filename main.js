
var strawberry = document.getElementById('strawberry').value;
var banana = document.getElementById('banana').value;
var lemon = document.getElementById('lemon').value;
var mango = document.getElementById('mango').value;


function test() {
    var apple = document.getElementById('apple').value;
    if(apple === "red" || apple === "Red" ){
    document.getElementById('banana').value = "correct";
    } else {
    document.getElementById('banana').value = "incorrect, fool.";
    }


    console.log("test");
}
