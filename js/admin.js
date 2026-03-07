const password = "1234";

function login(){

const p =
document.getElementById("pass").value;

if(p === password){

document.getElementById(
"panel"
).style.display="block";

}

}

function addKey(){

let product =
document.getElementById("product").value;

let key =
document.getElementById("key").value;

let keys =
JSON.parse(
localStorage.getItem("keys")
) || {};

if(!keys[product]){

keys[product] = [];

}

keys[product].push(key);

localStorage.setItem(
"keys",
JSON.stringify(keys)
);

alert("eklendi");

}
