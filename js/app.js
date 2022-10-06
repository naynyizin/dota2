AOS.init();

const getnavbar= document.querySelector('.navbar');
const getnav= document.querySelector('.nav');
const getlinecon= document.querySelector('.line-con');
const linebut= document.querySelector('.line-con');

linebut.addEventListener('click',()=>{
    getnavbar.classList.toggle('changecol');
    getnav.classList.toggle('move');
    getlinecon.classList.toggle('cross');
})