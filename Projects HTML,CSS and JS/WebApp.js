let allEl=document.getElementById('All');
let foodEl = document.getElementById('Food');
let clothesEl=document.getElementById('Clothes');
let electricEl=document.getElementById('ElectApp');
let phonesEl=document.getElementById('Phones');
let laptopsEl = document.getElementById('Laptops');
let logoEl=document.getElementById('Logo');
// for cart 
let cartEl1=document.getElementById('cart1');
let cartEl2=document.getElementById('cart2');
let cartEl3=document.getElementById('cart3');
let cartEl4=document.getElementById('cart4');
let cartEl5=document.getElementById('cart5');
let cartEl6=document.getElementById('cart6');
let cartEl7=document.getElementById('cart7');
let cartEl8=document.getElementById('cart8');

//Underline the clicked Items
allEl.style.textDecoration="underline";
allEl.addEventListener('click', () => {
    allEl.style.textDecoration = "underline";
    foodEl.style.textDecoration = "none";
    clothesEl.style.textDecoration = "none";
    electricEl.style.textDecoration = "none";
    phonesEl.style.textDecoration = "none";
    laptopsEl.style.textDecoration = "none";
    document.getElementById('Nav2').textContent = "Shopping Items :"
});
foodEl.addEventListener('click',()=>
{
    foodEl.style.textDecoration="underline";
    allEl.style.textDecoration = "none";
    clothesEl.style.textDecoration = "none";
    electricEl.style.textDecoration = "none";
    phonesEl.style.textDecoration = "none";
    laptopsEl.style.textDecoration = "none";
    document.getElementById('Nav2').textContent="Food items :"
    item8.classList.remove(document.getElementsByClassName('Phns'))
});
clothesEl.addEventListener('click', () => {
    clothesEl.style.textDecoration = "underline";
    allEl.style.textDecoration = "none";
    foodEl.style.textDecoration = "none";
    electricEl.style.textDecoration = "none";
    phonesEl.style.textDecoration = "none";
    laptopsEl.style.textDecoration = "none";
    document.getElementById('Nav2').textContent = "Chothes :"
});
electricEl.addEventListener('click', () => {
    electricEl.style.textDecoration = "underline";
    allEl.style.textDecoration = "none";
    clothesEl.style.textDecoration = "none";
    foodEl.style.textDecoration = "none";
    phonesEl.style.textDecoration = "none";
    laptopsEl.style.textDecoration = "none";
    document.getElementById('Nav2').textContent = "Elactrical Items :"
});
phonesEl.addEventListener('click', () => {
    phonesEl.style.textDecoration = "underline";
    allEl.style.textDecoration = "none";
    clothesEl.style.textDecoration = "none";
    electricEl.style.textDecoration = "none";
    foodEl.style.textDecoration = "none";
    laptopsEl.style.textDecoration = "none";
    document.getElementById('Nav2').textContent = "Phones :"
});
laptopsEl.addEventListener('click', () => {
    laptopsEl.style.textDecoration = "underline";
    allEl.style.textDecoration = "none";
    clothesEl.style.textDecoration = "none";
    electricEl.style.textDecoration = "none";
    phonesEl.style.textDecoration = "none";
    foodEl.style.textDecoration = "none";
    document.getElementById('Nav2').textContent = "Laptops :"
});
let i=0;
let totalPrice = 0;
//CartItems
let cartItems="";
cartEl1.addEventListener('click',()=>
{
    console.log('CartClicked');
    cartItems += Number(i + 1)+". "+document.getElementById('itm1').textContent +" ";
    totalPrice = totalPrice + Number(document.querySelectorAll('.price')[i].textContent)
    i++;
})
cartEl2.addEventListener('click', () => {
    console.log('CartClicked');
    cartItems += Number(i + 1)+". "+document.getElementById('itm2').textContent +" ";
    totalPrice = totalPrice + Number(document.querySelectorAll('.price')[i].textContent)
    i++;
})
cartEl3.addEventListener('click', () => {
    console.log('CartClicked');
    cartItems += Number(i + 1)+". "+document.getElementById('itm3').textContent +" ";
    totalPrice = totalPrice + Number(document.querySelectorAll('.price')[i].textContent)
    i++;
})

cartEl4.addEventListener('click', () => {
    console.log('CartClicked');
    cartItems += Number(i + 1)+". "+document.getElementById('itm4').textContent +" ";
    totalPrice = totalPrice + Number(document.querySelectorAll('.price')[i].textContent)
    i++;
})

cartEl5.addEventListener('click', () => {
    console.log('CartClicked');
    cartItems += Number(i + 1)+". "+document.getElementById('itm5').textContent +" ";
    totalPrice = totalPrice + Number(document.querySelectorAll('.price')[i].textContent)
    i++;
})

cartEl6.addEventListener('click', () => {
    console.log('CartClicked');
    cartItems += Number(i + 1)+". "+document.getElementById('itm6').textContent +" ";
    totalPrice = totalPrice + Number(document.querySelectorAll('.price')[i].textContent)
    i++;
})

cartEl7.addEventListener('click', () => {
    console.log('CartClicked');
    cartItems += Number(i + 1)+". "+document.getElementById('itm7').textContent +" ";
    totalPrice = totalPrice + Number(document.querySelectorAll('.price')[i].textContent)
    i++;
})

cartEl8.addEventListener('click', () => {
    console.log('CartClicked');
    cartItems += Number(i+1)+". "+document.getElementById('itm8').textContent+ " ";
    totalPrice = totalPrice + Number(document.querySelectorAll('.price')[i].textContent)
    i++;
})
function ShowCart(){
    document.getElementById('showItems').textContent=cartItems;
    document.getElementById('showItems2').textContent ='Total items added to cart ='+(i)
    document.getElementById('showItems3').textContent = '  Your Total Billing Amount is =' + totalPrice + '$';
    
}