/**
 * @param {string} name
 */
let sum = document.getElementsByClassName('sum')[0];
let manfi = document.getElementsByClassName('manfi')[0];
let multiply = document.getElementsByClassName('multiply')[0];
let divide = document.getElementsByClassName('divide')[0];
let equal = document.getElementsByClassName('equal')[0];
let input = document.getElementsByTagName('input')[0]
let clear = document.getElementsByClassName('clear')[0]
let del = document.getElementsByClassName('del')[0]
let button = document.getElementsByTagName('button') 
let body = document.getElementsByTagName('body') 
add = (e)=>{
    input.value += e.innerText 
}
remove = ()=>{
    input.value = ""
}
equal.addEventListener('click',()=>{
    x = eval(input.value)
    input.value = x
})
input.addEventListener('keypress',(event)=>{
    if(
      event.keyCode === 13
    ){
    x = eval(input.value)
    input.value = x
    }
})