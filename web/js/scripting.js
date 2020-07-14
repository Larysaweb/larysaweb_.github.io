/*
function func1(){
    let rng = document.getElementById('r1');
    let text= document.getElementById('text');
    text.style.width = (rng.value)*10 + 'px';   
}
*/
$('#myModal').modal("show");
$('myModal').on('hide.bs.modal', function (event){
alert('HI')
});

function funcOne(){
let side1 = document.getElementById('range1');
let side2 = document.getElementById('range2');
let side3 = document.getElementById('range3');
let side4 = document.getElementById('range4');
let box = document.getElementById('box')

let rng1 = document.getElementById('rng1');
rng1.value = side1.value;

let rng2 = document.getElementById('rng2');
rng2.value = side2.value;

let rng3 = document.getElementById('rng3');
rng3.value = side3.value;

let rng4 = document.getElementById('rng4');
rng4.value = side4.value;

box.style.borderRadius = side1.value +'%' + side2.value + '%' + side3.value + '%' + side4.value + '%';
}
document.getElementById('nav').onmouseover = function (event){
    let target = event.target;
    if (target.className == 'menu-item'){
        let s = target.getElementByClassName('submenu');
        closeMenu();
        s[0].style.display = 'block'
    }
}
function closeMenu(){
    let menu = document.getElementById('nav');
    let subm = document.getElementsByClassName('submenu');
    for(let i = 0; i < subm.length; i++){
        subm[i].style.display = 'none';
    }
}