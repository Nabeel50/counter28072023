let heading1El=document.getElementById('heading1')
let heading2El=document.getElementById('heading2')
let heading3El=document.getElementById('heading3')
let counter= '';
function addOne() {
    counter++ ;
    heading1El.innerHTML=counter;
}
function reset() {
    counter=0;
    heading1El.innerHTML=counter;
    heading2El.innerHTML=counter;
} 
function incrementtwo() {
    heading3El.innerHTML="Thank you for watchig";
}
function save () {
    counter+='  ';
    heading2El.innerHTML+=counter;

    }

function evenOdd() {
    if(counter%2==0)
    {heading2El.innerHTML= 'Even'}
    else {heading2El.innerHTML= 'Odd'}
}
function table2() {
    heading1El.innerHTML=' ';
    for (let index = 1; index < 21; index++) {
        heading1El.innerHTML+=
        "2 x " + index + " = " + 2 * index + "<br>";}
}
function table3() {
    heading1El.innerHTML=' ';
    for (let index = 1; index < 21; index++) {
        heading1El.innerHTML+=
        "3 x " + index + " = " + 3 * index + "<br>";}
}
function table4() {
    heading1El.innerHTML=' ';
    for (let index = 1; index < 21; index++) {
        heading1El.innerHTML+=
        "4 x " + index + " = " + 4 * index + "<br>";}
}

function table5() {
    heading1El.innerHTML=' ';
    for (let index = 1; index < 21; index++) {
        heading1El.innerHTML+=
        "5 x " + index + " = " + 5 * index + "<br>";}
}

function table6() {
    heading1El.innerHTML=' ';
    for (let index = 1; index < 21; index++) {
        heading1El.innerHTML+=
        "6 x " + index + " = " + 6 * index + "<br>";}
}

function table7() {
    heading1El.innerHTML=' ';
    for (let index = 1; index < 21; index++) {
        heading1El.innerHTML+=
        "7 x " + index + " = " + 7 * index + "<br>";}
}
function table8() {
    heading1El.innerHTML=' ';
    for (let index = 1; index < 21; index++) {
        heading1El.innerHTML+=
        "8 x " + index + " = " + 8 * index + "<br>";}
}
function table9() {
    heading1El.innerHTML=' ';
    for (let index = 1; index < 21; index++) {
        heading1El.innerHTML+=
        "9 x " + index + " = " + 9 * index + "<br>";}
}
function table10() {
    heading1El.innerHTML=' ';
    for (let index = 1; index < 21; index++) {
        heading1El.innerHTML+=
        "10 x " + index + " = " + 10 * index + "<br>";}
}