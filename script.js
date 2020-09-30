const input = document.getElementById("inputField");
const output = document.getElementById("output");

function readAndDisplay(){
    output.innerHTML = input.value.replace(/\n/g, "<br>");
}

input.addEventListener("input",readAndDisplay);