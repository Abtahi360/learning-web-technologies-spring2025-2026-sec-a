let createBtn = document.getElementById('createBtn');
let container = document.getElementById('container');

let box = null;

createBtn.addEventListener('click', function(){

    if(box == null){
        box = document.createElement('div');
        box.className = "box";
        container.appendChild(box);
    }
});

function moveBox(direction){

    if(box == null) return;

    let left = parseInt(window.getComputedStyle(box).left);
    let top = parseInt(window.getComputedStyle(box).top);

    if(direction == "up"){
        box.style.top = (top - 10) + "px";
    }
    else if(direction == "down"){
        box.style.top = (top + 10) + "px";
    }
    else if(direction == "left"){
        box.style.left = (left - 10) + "px";
    }
    else if(direction == "right"){
        box.style.left = (left + 10) + "px";
    }
}

document.getElementById('up').addEventListener('click', function(){
    moveBox("up");
});

document.getElementById('down').addEventListener('click', function(){
    moveBox("down");
});

document.getElementById('left').addEventListener('click', function(){
    moveBox("left");
});

document.getElementById('right').addEventListener('click', function(){
    moveBox("right");
});