var btn = document.getElementById("btn");

var list = [];
console.log(list);

var randomNumberInRange = (min, max) => Math.random() * (max - min) + min;

function d(id) {
    alert(list[0]);
}
function f(id) {
    if(document.getElementById(id).style.backgroundColor == "red") {
        document.getElementById(id).style.backgroundColor = "gray";
        list.splice(list.indexOf(id),1);    
    }
    else {
        document.getElementById(id).style.backgroundColor = "red";
        list.push(id);
    }
}
