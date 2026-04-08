let value1 = document.getElementById('calculator');

let show = document.createElement('input');
show.type = "text";
show.readOnly = true;
value1.appendChild(show);

value1.appendChild(document.createElement('br'));

let buttons = [
    "1","2","3","+",
    "4","5","6","-",
    "7","8","9","*",
    "0",".","=","/"
];

let count = 0;

buttons.forEach(function(val){

    let btn = document.createElement('button');
    btn.innerHTML = val;
    btn.style.margin = "5px";

    btn.addEventListener('click', function(){

        if(val === "="){
            calculate();
        }else{
            show.value += val;
        }

    });

    value1.appendChild(btn);

    count++;

    if(count % 4 === 0){
        value1.appendChild(document.createElement('br'));
    }

});

function calculate(){

    let expression = show.value;

    let num1 = "";
    let num2 = "";
    let operator = "";

    for(let i = 0; i < expression.length; i++){

        let ch = expression[i];

        if(ch === "+" || ch === "-" || ch === "*" || ch === "/"){
            operator = ch;
        }
        else{
            if(operator === ""){
                num1 += ch;
            }else{
                num2 += ch;
            }
        }
    }

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    let result = 0;

    if(operator === "+"){
        result = num1 + num2;
    }
    else if(operator === "-"){
        result = num1 - num2;
    }
    else if(operator === "*"){
        result = num1 * num2;
    }
    else if(operator === "/"){
        result = num1 / num2;
    }
    alert("Result: " + result);
    show.value = "";
}