
let listCard = document.querySelector('.listCard');
let listLove = document.querySelector('.listFavorite');
let body = document.querySelector('body');
let list = document.querySelector('.list-product');
let quantity = document.querySelector('.quanlity');
let quantity1 = document.querySelector('.quanlity1');
let total = document.querySelector('.total');
let notify = document.querySelector('.card__nptify');
let notify1 = document.querySelector('.card__nptify1');
const object = document.querySelectorAll('.product-detail');
const objects = document.querySelectorAll('.product-modify');
let products = [
    { id: 1, image: "Tui1-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Túi xách da nữ handmade VLS 560", price: 2300000, percent: 10, vote: 4.0, rating: 240 },
    { id: 2, image: "tui3-removebg-preview.png", imageSale: "icon percent.png", contentSale: "Hot sale 30/4", title: "Túi đeo chéo nữ đẹp sang trọng da mềm PANIO SP17", price: 2100000, percent: 12, vote: 4.6, rating: 120 },
    { id: 3, image: "guoc1-removebg-preview.png", imageSale: "icon discount.png", contentSale: "Giảm thêm 50k", title: "Giày Cao Gót GU2301", price: 379000, percent: 10, vote: 4.0, rating: 240 },
    { id: 4, image: "Tui1-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Túi xách da nữ handmade VLS 560", price: 2300000, percent: 10, vote: 4, rating: 240 },
    { id: 5, image: "Tui1-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Túi xách da nữ handmade VLS 560", price: 2300000, percent: 10, vote: 4, rating: 240 },
    { id: 6, image: "Tui1-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Túi xách da nữ handmade VLS 560", price: 2300000, percent: 10, vote: 4, rating: 240 },
    { id: 7, image: "Tui1-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Túi xách da nữ handmade VLS 560", price: 2300000, percent: 10, vote: 4, rating: 240 },
    { id: 8, image: "Tui1-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Túi xách da nữ handmade VLS 560", price: 2300000, percent: 10, vote: 4, rating: 240 },
    { id: 9, image: "Tui1-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Túi xách da nữ handmade VLS 560", price: 2300000, percent: 10, vote: 4, rating: 240 },
    { id: 10, image: "Tui1-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Túi xách da nữ handmade VLS 560", price: 2300000, percent: 10, vote: 4, rating: 240 },
];
listLoves = [];
listCards = [];
function innitApp() {
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('product-detail');
        newDiv.classList.add('product-demo');
        newDiv.innerHTML = `
            <p class="tragop">Trả góp 0%</p>
            <div class="picture-product">
                <img src="./assets/img/List-products/${value.image}" alt="">
                <div class="result_label temp1">
                    <img class="img__icon" src="./assets/img/Icon Img/${value.imageSale}" alt="">
                    <span>${value.contentSale}</span>
                </div>
                <div class="boxshow-liked">
                    <div class="container-icon">
                        <i class="fa-solid fa-plus"></i>
                        <i onclick="addToCard(${key})" class="fa-regular fa-cart-shopping"></i>
                        <i onclick="addToLove(${key})" class="fa-regular fa-heart"></i>
                    </div>
                </div>
            </div>
        <h3 class="product__name">
            ${value.title}
        </h3>
        <p class="price">${value.price.toLocaleString()} VND <small>-${value.percent}%</small></p>
        <p class="vote"><b>${value.vote.toFixed(1)}</b> <i class="fa-regular fa-star"></i> ( ${value.rating} )</p>    
        `;
        list.appendChild(newDiv);
    })
}
innitApp();
function addToCard(key) {
    if (listCards[key] == null) {
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function addToLove(key) {
    if (listLoves[key] == null) {
        listLoves[key] = JSON.parse(JSON.stringify(products[key]));
        listLoves[key].quantity = 1;
    }
    reloadLove();
}


function reloadLove() {
    listLove.innerHTML = '';
    let count = 0;
    listLoves.forEach((value,key) => {
        count += value.quantity;
        if (value != null) {
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="./assets/img/List-products/${value.image}" alt=""></div>
                <div>${value.title}</div>
                <div>${value.price.toLocaleString()} VNĐ </div>
                <div>
                    <i onclick="changeList(${key})" class="fa-sharp fa-solid fa-heart icon__heart"></i>
                </div>
        `;
            listLove.appendChild(newDiv);
        }
        
    })
    if (count !== 0) {
        notify1.style.display = 'none';
    }
    quantity1.innerText = count;

}
function changeList(key){
    delete listLoves[key];
    reloadLove();
}
function reloadCard() {
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) => {
        totalPrice += value.price;
        count += value.quantity;
        if (value != null) {
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="./assets/img/List-products/${value.image}" alt=""></div>
                <div>${value.title}</div>
                <div>${value.price.toLocaleString()} VNĐ </div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>
                <div class="trash"><i onclick="removeTrash(${key})" class="fa-solid fa-trash icon-trash"></i> </div>
            `;

            listCard.appendChild(newDiv);
        }

    })
    if (count !== 0) {
        notify.style.display = 'none';
    }
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
};

function changeQuantity(key, quantity) {
    if (quantity == 0) {
        delete listCards[key];
    } else {
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
};
// function changeBackground() {
//     for (let i = 0; i < object.length; i++) {
//         object[i].classList.add('product-demo');
//     }
//     for (let i = 0; i < objects.length; i++) {
//         objects[i].classList.add('product-demo');
//     }
// }
// changeBackground();
function removeTrash(key){
    delete listCards[key];
    reloadCard();
}