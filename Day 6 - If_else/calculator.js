function add(...args) {
    
    let s =0;
    if (args[0])
    {
        for (let i of args) {   
            s+=i;
        }
    }
    else {
        return s;
    }
}
let inputField =document.getElementById("input");
let n0 = document.getElementById("0");
n0 = 0;
let n1 = document.getElementById("1");
n1 = 1;
let n2 = document.getElementById("2");
let n3 = document.getElementById("3");
let n4 = document.getElementById("4");
let n5 = document.getElementById("5");
let n6 = document.getElementById("6");
let n7 = document.getElementById("7");
let n8 = document.getElementById("8");
let n9 = document.getElementById("9");
let plus = document.getElementById("plus");
let btn = document.querySelectorAll(".btn");
for (let i = 0; i <btn.length; i++) {
    btn[i].addEventListener("click", (e) => {
        inputField.value = e.target.textContent;
        console.log(inputField.value);
        if (inputField.value == plus.innerText) {        
            add(inputField.value);
        }
    })
}

