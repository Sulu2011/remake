const BASE_URL = `https://fakestoreapi.com/products`;
const cardWrapper = document.querySelector('.card-wrapper');

fetch(BASE_URL)
.then((res) => res.json())
.then((data) => {
    data.forEach((item) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <div class="card-img">
                <img src="${item.image}" alt="">
            </div>
            <div class="card-detail">
                <h1 class="card-title">${item.title.substr(0,35)}</h1>
                <div class="card-price">${item.price.toFixed(0)} $</div>
                <button class="card-btn">Buy Now</button>
            </div>
        `;
        cardWrapper.appendChild(card);
    });
})
.catch((error) => console.log(error));

let body = document.querySelector('body');
let shop=document.querySelector(".hero-btn")

shop.addEventListener('click',function(){
    shop.innerHTML=`
    <button class="hero-bt"><a  class='a' href='https://www.shopify.com/'>Explore Now<a><h4 class='soz'>yazıya bir də bas<h4></button>
    `
})
function openSidebar() {
    document.getElementById("sidebar").style.width = "250px";
}

function closeSidebar() {
    document.getElementById("sidebar").style.width = "0";
}
