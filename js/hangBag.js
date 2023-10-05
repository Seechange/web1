let products = [
    { id: 1, image: "./assets/img/túi/túi_1-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Giảm sốc", title: "Túi xách nữ kiêm đeo chéo sang trọng", price: 2800000, percent: 20, vote: 4.5, totalrate: 120 },
    { id: 2, image: "./assets/img/túi/túi_2-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Giảm sốc", title: "Túi Xách Charles & Keith Chain Handle Quilted Long Wallet Cream", price: 1900000, percent: 15, vote: 5.0, totalrate: 87 },
    { id: 3, image: "./assets/img/túi/túi_3-removebg-preview.png", imageSale: "icon percentPurple.png", contentSale: "Giảm mùa lễ", title: "Túi Versace Jeans Couture ", price: 7800000, percent: 12, vote: 5.0, totalrate: 190 },
    { id: 4, image: "./assets/img/túi/túi_4-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Túi xách nữ MARSCO ", price: 2040000, percent: 23, vote: 4.3, totalrate: 167 },
    { id: 5, image: "./assets/img/túi/túi_5-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Túi xách Bershka ", price: 2900000, percent: 12, vote: 4.4, totalrate: 115 },
    { id: 6, image: "./assets/img/túi/túi_6-removebg-preview.png", imageSale: "icon percentPurple.png", contentSale: "Giảm mùa lễ", title: "Túi Tote Double Pocket ", price: 1425000, percent: 42, vote: 4.5, totalrate: 123 },
    { id: 7, image: "./assets/img/túi/túi_7-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Túi Xách Nhấn Dây Chuỗi Hạt Vân Đá  ", price: 895000, percent: 40, vote: 5.0, totalrate: 100 },
    { id: 8, image: "./assets/img/túi/túi_8-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Túi Đeo Vai Pedro Tweed Double Flap Shoulder Bag", price: 2090000, percent: 50, vote: 4.0, totalrate: 99 },
    { id: 9, image: "./assets/img/túi/túi_9-removebg-preview.png", imageSale: "icon discount.png", contentSale: "Voucher", title: "Túi Xách MLB Monogram Embossed Hobo Bag New York Yankees  ", price: 3200000, percent: 12, vote: 4.5, totalrate: 123 },
    { id: 10, image: "./assets/img/túi/túi_10-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Túi Xách Charles & Keith CNK Floral Mesh Top Handle Bag", price: 2340000, percent: 10, vote: 4.5, totalrate: 12 },
    { id: 11, image: "./assets/img/túi/túi_11-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Túi Xách Michael Kors MK Talia Large Top Handle Satchel Ballet", price: 2800000, percent: 15, vote: 4.6, totalrate: 565 },
    { id: 12, image: "./assets/img/túi/túi_12-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Túi Đeo Chéo Coach Rogue 25 In Regenerative Leather", price: 7000000, percent: 20, vote: 4.4, totalrate: 64 },
    { id: 13, image: "./assets/img/túi/túi_13-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Túi Xách Trung Satchel Top Handle ", price: 795000, percent: 30, vote: 4.5, totalrate: 77 },
    { id: 14, image: "./assets/img/túi/túi_14-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Túi Xách Pucini ", price: 980000, percent: 50, vote: 4.3, totalrate: 14 },
    { id: 15, image: "./assets/img/túi/túi_15-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Túi Nữ Black White", price: 390000, percent: 15, vote: 4.2, totalrate: 543 },
    { id: 16, image: "./assets/img/túi/túi_16-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Túi Xách Nhỏ Buckled Trapeze", price:655000, percent: 10, vote: 4.2, totalrate: 540 },
    { id: 17, image: "./assets/img/túi/túi_17-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Túi Xách Nhỏ Nắp Gập Top Handle", price: 695000, percent: 5,vote: 4.1, totalrate: 66 },
    { id: 18, image: "./assets/img/túi/túi_18-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Túi Đeo Chéo Nữ Coach Georgie Crossbody In Signature Canvas", price: 3300000, percent: 8,vote: 4.3, totalrate: 112 },
    { id: 19, image: "./assets/img/túi/túi_19-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Túi Đeo Vai Nữ Charles & Keith CNK Charm-Embellished Quilted", price: 2160000, percent: 7 ,vote: 4.5, totalrate: 125 },
    { id: 20, image: "./assets/img/túi/túi_20-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Túi Đeo Vai Coach Grace Shoulder Bag In Colorblock", price: 4000000, percent: 9, vote: 4.6, totalrate: 123 },
    { id: 21, image: "./assets/img/túi/túi_21-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Túi Đeo Vai Coach Tammie Shoulder Bag", price: 4080000, percent: 14, vote: 4.7, totalrate: 543 },
    { id: 22, image: "./assets/img/túi/túi_22-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Túi Tote Coach Dempsey Tote 22", price: 4550000, percent: 11, vote: 4.7, totalrate: 43 },
    { id: 23, image: "./assets/img/túi/túi_23-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Túi Xách Tay Coach Sydney Satchel In Signature Canvas", price: 4000000, percent: 52, vote: 4.5, totalrate: 12 },
    { id: 24, image: "./assets/img/túi/túi_24-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Túi Đeo Chéo Coach Dempsey Drawstring Bucket Bag", price: 3550000, percent: 33, vote: 4.2, totalrate: 32 },
    { id: 25, image: "./assets/img/túi/túi_25-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Túi Cầm Tay Coach Floral Wristlet Wallet Màu Trắng Họa Tiết", price: 1550000, percent: 11, vote: 4.1, totalrate: 45 },
    { id: 26, image: "./assets/img/túi/túi_26-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Túi Cầm Tay Coach Wristlet F87590 Pebble Leather Double Zip Black", price: 1700000, percent: 6, vote: 4.6, totalrate: 32 },
    { id: 27, image: "./assets/img/túi/túi_27-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Túi Xách Coach C4580 Nolita 15 In Signature Canvas", price: 2100000, percent: 9, vote: 4.0, totalrate: 11 },
    { id: 28, image: "./assets/img/túi/túi_28-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Túi Xách Coach Pebble Leather Nolita 19 Black", price: 2440000, percent: 12, vote: 4.0, totalrate: 22 },
    { id: 29, image: "./assets/img/túi/túi_29-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Túi Đeo Chéo Coach Phoebe Crossbody", price: 2700000, percent: 10, vote: 4.4, totalrate: 10 },
    { id: 30, image: "./assets/img/túi/túi_30-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Túi Đeo Chéo Nữ Coach Outlet Mini Town Bucket Bag", price: 2800000, percent: 8, vote: 4.8, totalrate: 70 },
    { id: 31, image: "./assets/img/túi/túi_31-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Túi Đeo Chéo Coach Graham Pack in Sig Black Varsity", price: 3400000, percent: 10, vote: 4.4, totalrate: 10 },
    { id: 32, image: "./assets/img/túi/túi_32-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Túi Đeo Chéo Coach Sydney Satchel ", price: 4000000, percent: 10, vote: 4.4, totalrate: 10 },
   
];
let perPage = 6;
let currentPage = 1;
let start = 0;
let end = perPage;
function getCurrentPage(currentPage) {
    start = (currentPage - 1) * perPage;
    end = currentPage * perPage;
}
const btnNext = document.querySelector('.btn__next');
const btnPrev = document.querySelector('.btn__prev');

const totalPage = Math.ceil(products.length / perPage);
listLoves = [];
listCards = [];
type = [];
let listCard = document.querySelector('.listCard');
let listLove = document.querySelector('.listFavorite');
let quantity = document.querySelector('.quanlity');
let quantity1 = document.querySelector('.quanlity1');
let total = document.querySelector('.total');
let notify = document.querySelector('.card__nptify');
let notify1 = document.querySelector('.card__nptify1');
let totalProduct = document.querySelector('.totalProduct');
totalProduct.innerText="( "+products.length+" sản phẩm)";
function renderProduct() {
    let html = '';
    const content = products.forEach((item, key) => {
        if (key >= start && key < end) {
            html += '<div class="product-detail card__item">';
            html += '<p class="tragop">Trả góp 0%</p>';
            html += '<div class="picture-product">';
            html += '<img src="' + item.image + '" alt="">';
            html += '<div class="result_label temp1">';
            html += '<img class="img__icon" src="./assets/img/Icon Img/'+item.imageSale +'" alt="">';
            html += '<span>'+ item.contentSale+'</span></div>';
            html +=`<div class="boxshow-liked">
                        <div class="container-icon">
                            <i class="fa-solid fa-plus"></i>
                            <i onclick="addToCard(${key})" class="fa-regular fa-cart-shopping"></i>
                            <i onclick="addToLove(${key})" class="fa-regular fa-heart"></i>
                        </div>
                    </div>
                </div>`
            html += '<h3 class="product__name">' + item.title + '</h3>'
            html += '<p class="price">' + item.price.toLocaleString() + ' VNĐ <small> -' + item.percent + '% </small></p>';
            html += '<p class="vote"><b>' + item.vote.toFixed(1) + '</b> <i class="fa-regular fa-star"></i> ( ' + item.totalrate + ' )</p></div>';
            return html;
        }
    })
    document.getElementById('shoes').innerHTML = html;
}
renderProduct();
renderListPage();
function removeClass(currentPage) {
    const currentPages = document.querySelectorAll('.number-page li');
    for(let i=0;i<currentPages.length;i++){
        currentPages[i].classList.remove('active1');
    }
    if(currentPage-1<0){
        currentPage=1
    }else if(currentPage+1>totalPage){
        currentPage=totalPage;
    }
    currentPages[currentPage - 1].classList.add('active1');
}

btnNext.addEventListener('click',()=>{
    currentPage++;
    removeClass(currentPage);
    if (currentPage > totalPage) {
        currentPage = totalPage;
    }
    if (currentPage === totalPage) {
        btnNext.classList.add('btn__active');
    }
    btnPrev.classList.remove('btn__active');
    getCurrentPage(currentPage);
    renderProduct();
});

btnPrev.addEventListener('click', () => {
    currentPage--;
    removeClass(currentPage);
    if (currentPage <= 1) {
        currentPage = 1;
    }
    if (currentPage === 1) {
        btnPrev.classList.add('btn__active');
    }
    btnNext.classList.remove('btn__active');
    getCurrentPage(currentPage);
    renderProduct(products);
})

function renderListPage() {
    let html = '';
    html += `<li class="active1"><a>${1}</a></li>`;
    for (i = 2; i <= totalPage; i++) {
        html += `<li><a>${i}</a></li>`;
    }
    document.getElementById('number-page').innerHTML = html;
}
function changPage() {
    const currentPages = document.querySelectorAll('.number-page li');
    for (let i = 0; i < currentPages.length; i++) {
        currentPages[i].addEventListener('click', () => {
            for (let j = 0; j < currentPages.length; j++) {
                currentPages[j].classList.remove('active1');
            }
            const value = i + 1;
            if(value===1){
                btnPrev.classList.add('btn__active');
                btnNext.classList.remove('btn__active');
            }
            else if(value===totalPage){
                btnNext.classList.add('btn__active');
                btnPrev.classList.remove('btn__active');
            }else{
                btnPrev.classList.remove('btn__active');
                btnNext.classList.remove('btn__active');
            }
            currentPages[i].classList.add('active1');
            currentPage = value;
            getCurrentPage(currentPage);
            renderProduct();
        })
    }
}
changPage();
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
    listLoves.forEach((item,key) => {
        count += item.quantity;
        if (item != null) {
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="${item.image}" alt=""></div>
                <div>${item.title}</div>
                <div>${item.price.toLocaleString()} VNĐ </div>
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
    listCards.forEach((item, key) => {
        totalPrice += item.price;
        count += item.quantity;
        if (item != null) {
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="${item.image}" alt=""></div>
                <div>${item.title}</div>
                <div>${item.price.toLocaleString()} VNĐ </div>
                <div>
                    <button onclick="changeQuantity(${key}, ${item.quantity - 1})">-</button>
                    <div class="count">${item.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${item.quantity + 1})">+</button>
                </div>
                <div class="trash"><i onclick="removeTrash(${key})" class="fa-solid fa-trash icon-trash"></i> </div>
            `;

            listCard.appendChild(newDiv);
        }

    })
    if (count !== 0) {
        notify.style.display = 'none';
    }
    total.innerText ="Total: "+  totalPrice.toLocaleString()+ " VNĐ";
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
function removeTrash(key){
    delete listCards[key];
    reloadCard();
}
