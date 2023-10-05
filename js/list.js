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
let products = [
    { id: 1, image: "./assets/img/list products giay/giay1-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Giày thể thao nữ giày sneaker nữ màu trắng đế 3cm bằng da màu trắng hiệu ZAVAS", price: 329000, percent: 12, vote: 4.5, totalrate: 120 },
    { id: 2, image: "./assets/img/list products giay/giay2-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Giày búp bê MWC NUBB- 2252", price: 235000, percent: 20, vote: 5.0, totalrate: 111 },
    { id: 3, image: "./assets/img/list products giay/giay3-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Giày Oxford Da Bóng Đế Bánh Mì Phối Dây Cách Điệu Kiểu Dáng Thời Trang", price: 250000, percent: 12, vote: 4.0, totalrate: 190 },
    { id: 4, image: "./assets/img/list products giay/giay4-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Boots Cổ Cao Gót Trụ 7cm Siêu Êm Chân Thời Trang Trẻ Trung Thanh Lịch", price: 295000, percent: 23, vote: 4.3, totalrate: 167 },
    { id: 5, image: "./assets/img/list products giay/giay5-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Sandal Cao Gót Quai Ngang Đính Đá Cách Điệu Gót Vuông Phối Quai Hậu Thời Trang", price: 215000, percent: 12, vote: 4.4, totalrate: 115 },
    { id: 6, image: "./assets/img/list products giay/giay6-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Dép Cao Gót Nữ Gót Vuông Cao 5cm Quai Ngang Viền Chỉ Giữa Cách Điệu Mũi Vuông Thời Trang", price: 180000, percent: 42, vote: 4.5, totalrate: 123 },
    { id: 7, image: "./assets/img/list products giay/giay7-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Cao Gót Nữ Da Bóng Mũi Nhọn Bít Gót,Gót Trụ Cách Điệu Thời Trang", price: 195000, percent: 40, vote: 5.0, totalrate: 100 },
    { id: 8, image: "./assets/img/list products giay/giay8-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Sandal Cao Gót Quai Ngang Bóng Gót Tam Giác Phối Quai Hậu Thời Trang", price: 195000, percent: 50, vote: 4.0, totalrate: 99 },
    { id: 9, image: "./assets/img/list products giay/giay9-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Giày Thể Thao Nữ Phối Màu Thể Thao,Sneaker Da Siêu Êm Chân Đế Độn 4cm Hot Trend", price: 295000, percent: 12, vote: 4.5, totalrate: 123 },
    { id: 10, image: "./assets/img/list products giay/giay10-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Boot Nữ Martin Đế Cao Thoáng Khí Phong Cách Cá Tính", price: 270000, percent: 10, vote: 4.5, totalrate: 12 },
    { id: 11, image: "./assets/img/list products giay/giay11-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Giày Thể Thao Nữ Đế Bằng Phối Vải,Sneaker Vải Siêu Êm Chân Hot Trend", price: 150000, percent: 15, vote: 4.6, totalrate: 565 },
    { id: 12, image: "./assets/img/list products giay/giay12-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Giày Sục Thể Thao Nữ Phối Màu Siêu Cute,Sneaker Êm Chân Đế Độn 4CM Hot Trend", price: 295000, percent: 20, vote: 4.4, totalrate: 64 },
    { id: 13, image: "./assets/img/list products giay/giay13-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Giày Thể Thao Nữ Phối Vải Canvas , Êm Chân Đế Bằng nhẹ nhàng", price: 125000, percent: 30, vote: 4.5, totalrate: 77 },
    { id: 14, image: "./assets/img/list products giay/giay14-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Giày Thể Thao Nữ,Sneaker Da Siêu Êm Chân Đế Độn 4CM Hot Trend", price: 295000, percent: 50, vote: 4.3, totalrate: 14 },
    { id: 15, image: "./assets/img/list products giay/giay15-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Giày Sục Thể Thao Nữ Phối Chữ Siêu Cute,Sneaker Êm Chân Đế Độn 5CM Hot Trend", price: 295000, percent: 15, vote: 4.2, totalrate: 543 },
    { id: 16, image: "./assets/img/list products giay/giay16-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Giày Thể Thao Cổ Cao Đế Độn Kiểu Dáng Cá Tính Thời Trang", price:295000, percent: 10, vote: 4.2, totalrate: 540 },
    { id: 17, image: "./assets/img/list products giay/giay17-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Giày Thể Thao Nữ,Sneaker Da Siêu Êm Chân Đế Độn 4CM Hot Trend", price: 295000, percent: 5,vote: 4.1, totalrate: 66 },
    { id: 18, image: "./assets/img/list products giay/giay18-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Giày Thể Thao Nữ Phối Màu Siêu Cute,Sneaker Êm Chân Đế Độn 5CM Hot Trend", price: 270000, percent: 8,vote: 4.3, totalrate: 112 },
    { id: 19, image: "./assets/img/list products giay/giay19-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Giày Sneaker Da Siêu Êm Chân Đế Độn 4CM Hot Trend", price: 295000, percent: 7 ,vote: 4.5, totalrate: 125 },
    { id: 20, image: "./assets/img/list products giay/giay20-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Giày Thể Thao Nữ Phối Màu Thời Trang,Sneaker Da Siêu Êm Chân Đế Độn 4CM Hot Trend", price: 295000, percent: 9, vote: 4.6, totalrate: 123 },
    { id: 21, image: "./assets/img/list products giay/giay21-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Giày Thể Thao Cổ Cao Đế Độn Kiểu Dáng Cá Tính Thời Trang", price: 275000, percent: 14, vote: 4.7, totalrate: 543 },
    { id: 22, image: "./assets/img/list products giay/giay22-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Giày Thể Thao Nữ Đế Gồ In Họa Tiết Sọc Caro,Sneaker Da Siêu Êm Chân Hot Trend", price: 147500, percent: 11, vote: 4.7, totalrate: 43 },
    { id: 23, image: "./assets/img/list products giay/giay23-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Giày Sục Thể Thao Nữ Phối Màu Siêu Cute,Sneaker Êm Chân Đế Độn 5CM Hot Trend", price: 295000, percent: 52, vote: 4.5, totalrate: 12 },
    { id: 24, image: "./assets/img/list products giay/giay24-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Giày cao gót MWC NUCG-4224", price: 180000, percent: 33, vote: 4.2, totalrate: 32 },
    { id: 25, image: "./assets/img/list products giay/giay25-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Dép Nữ Đế Bánh Mì, Dép Nữ 2 Quai Ngang Nhún Hot Trend", price: 235000, percent: 11, vote: 4.1, totalrate: 45 },
    { id: 26, image: "./assets/img/list products giay/giay26-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Dép Nữ Quai Ngang In Họa Tiết Siêu Cute Đế Bằng Thời Trang", price: 150000, percent: 6, vote: 4.6, totalrate: 32 },
    { id: 27, image: "./assets/img/list products giay/giay27-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Dép Nữ Quai Ngang Siêu Êm Chân Thời Trang Trẻ Trung Thanh Lịch", price: 235000, percent: 9, vote: 4.0, totalrate: 11 },
    { id: 28, image: "./assets/img/list products giay/giay28-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Dép Nữ Quai Ngang Lót Dán Siêu Êm Chân Thời Trang Trẻ Trung Thanh Lịch", price: 117500, percent: 12, vote: 4.0, totalrate: 22 },
    { id: 29, image: "./assets/img/list products giay/giay29-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Dép Nữ Xỏ Ngón Phối Quai Ngang Đính Ngọc Sang Chảnh Dép Nữ Đế Bánh Mì Cao 6cm Thời Trang", price: 235000, percent: 10, vote: 4.4, totalrate: 10 },
    { id: 30, image: "./assets/img/list products giay/giay30-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Dép Nữ Quai Ngang Dập Vân Nổi Phối Nơ Đính Khóa Thời Trang, Hot Trend", price: 180000, percent: 8, vote: 4.8, totalrate: 70 },
   
];

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
    total.innerText ="Total: "+  totalPrice.toLocaleString()+" VNĐ";
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