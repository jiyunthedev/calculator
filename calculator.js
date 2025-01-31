"use strict"
const display = document.getElementById("display")

function appendtodisplay (input){
    display.value += input;
}

function clearDisplay (){
    display.value = "";
}

function calculate (){
    
    try {
        let expression = display.value.replace(/÷/g, "/").replace(/×/g, "*");
        display.value = eval(expression);
    } catch {
        display.value = "Error";
    }


}

function del(){
    display.value = display.value.slice(0, -1);
}





