let perPage = 6
let currentPage = 1;
let start = 0;
let end = perPage;
function getCurrentPage(currentPage) {
    start = (currentPage - 1) * perPage;
    end = currentPage * perPage;
}
const products = [
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
let btnNext = document.querySelector('.btn__next');
let btnPrev = document.querySelector('.btn__prev');
let totalPage = Math.ceil(products.length / perPage);
let totalProduct = document.querySelector('.totalProduct');
totalProduct.innerText="( "+products.length+" sản phẩm)";
let list = document.querySelector('.list-product')
let productInCart = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : [];
let productInLove = localStorage.getItem("product") ? JSON.parse(localStorage.getItem("product")) : [];
function saveToLocalStorage(){
    localStorage.setItem("product",JSON.stringify(productInLove));
    localStorage.setItem("products",JSON.stringify(productInCart));
}
function renderProduct(array) {
    list.innerHTML = ""
    array.map((value,index) => {
        if (index >= start && index < end){
            let newDiv = document.createElement('div');
            newDiv.classList.add('product-detail');
            newDiv.classList.add('card__item');
            newDiv.innerHTML = `
                <p class="tragop">Trả góp 0%</p>
                <div class="picture-product">
                    <img src="${value.image}" alt="">
                    <div class="result_label temp1">
                        <img class="img__icon" src="./assets/img/Icon Img/${value.imageSale}" alt="">
                        <span>${value.contentSale}</span>
                    </div>
                    <div class="boxshow-liked">
                        <div class="container-icon">
                            <i class="fa-solid fa-plus"></i>
                            <i onclick="addInCart(${value.id})" class="fa-regular fa-cart-shopping"></i>
                            <i onclick="addInLove(${value.id})" class="fa-regular fa-heart"></i>
                        </div>
                    </div>
                </div>
            <h3 class="product__name">
                ${value.title}
            </h3>
            <p class="price">${value.price.toLocaleString()} VND <small>-${value.percent}%</small></p>
            <p class="vote"><b>${value.vote.toFixed(1)}</b> <i class="fa-regular fa-star"></i> ( ${value.totalrate} )</p>    
            `;

            list.appendChild(newDiv);
        }
    })
}

function renderListPage(){
    let element = "";
    element += `<li class="active1"><a>${1}</a></li>`;
    for (i = 2; i <= totalPage; i++) {
        element += `<li><a>${i}</a></li>`;
    }
    document.getElementById('number-page').innerHTML = element;
}
renderProduct(products);
renderListPage();

function removeClass(currentPage) {
    let currentPages = document.querySelectorAll('.number-page li');
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
    renderProduct(products);
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

function changPage() {
    let currentPages = document.querySelectorAll('.number-page li');
    for (let i = 0; i < currentPages.length; i++) {
        currentPages[i].addEventListener('click', () => {
            for (let j = 0; j < currentPages.length; j++) {
                currentPages[j].classList.remove('active1');
            }
            let value = i + 1;
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
            renderProduct(products);
        })
    }
}
changPage();

function addInCart(id){
    let checkProduct = productInCart.some(value => value.id === id);
    if(!checkProduct){
        let product = products.find(value => value.id === id);
        productInCart.unshift({
            ...product,
            quantity: 1
        })
        saveToLocalStorage();
        indexLoadPage();
    }else{
        let getIndex = productInCart.findIndex(value => value.id === id)
        let product = productInCart.find(value => value.id === id);
        productInCart[getIndex] = {
            ...product,
            quantity: ++productInCart[getIndex].quantity
        }
        saveToLocalStorage()
        indexLoadPage()
    }
}

function addInLove(id){
    let checkProduct = productInLove.some(value => value.id === id)
    if(!checkProduct){
        let product = products.find(value => value.id === id)
        productInLove.unshift({
            ...product
        })
        saveToLocalStorage()
        indexLoadPage()
    }else{
        alert("Sản phẩm đã được thêm vào yêu thích trước đó rồi !!!")
    }
}
function caculatorCart(){
    if(productInCart.length != 0){
        document.getElementById("notify").style.display = "none"
    }
    document.getElementById("totalCart").innerHTML = productInCart.length;
}

function caculatorLove(){
    if(productInLove.length != 0){
        document.getElementById("notify1").style.display = "none";
    }
    document.getElementById("totalLove").innerHTML = productInLove.length;
}

let listCard = document.querySelector('.listCard');
function renderProductToCart(){
    listCard.innerHTML = '';
    productInCart.map((value,index) => {
            newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="${value.image}" alt=""></div>
                <div>${value.title}</div>
                <div>${(value.price*value.quantity).toLocaleString()} VNĐ </div>
                <div>
                    <button onclick="minusQuantity(${index})", ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="plusQuantity(${index})", ${value.quantity + 1})">+</button>
                </div>
                <div class="trash"><i onclick="removeTrash(${index})" class="fa-solid fa-trash icon-trash"></i> </div>
            `;

            listCard.appendChild(newDiv);
    })
    totalPriceCart()
}

function totalPriceCart(){
    let total = 0;
    if(productInCart != []){
        for(let i = 0;i <productInCart.length;i++){
            total += productInCart[i].price*productInCart[i].quantity;
        }
    }
    document.querySelector(".total").innerHTML = total.toLocaleString() + " VND";
}

function showCart(){
    document.querySelector(".card").style.display = "block";
    renderProductToCart();
}

function closed(){
    document.querySelector(".card").style.display = "none";
    document.querySelector(".love").style.display = "none";
}
function plusQuantity(index) {
    productInCart[index] = {
        ...productInCart[index],
        quantity: ++productInCart[index].quantity
    }
    saveToLocalStorage();
    renderProductToCart();
}

function minusQuantity(index) {
    if(productInCart[index].quantity > 1){
        productInCart[index] = {
            ...productInCart[index],
            quantity: --productInCart[index].quantity
        }
        saveToLocalStorage();
        renderProductToCart();
    }else{
        alert("Sản phẩm tối thiểu là 1 !!!")
    }
}
function removeTrash(index){
    productInCart.splice(index,1);
     saveToLocalStorage();
     renderProductToCart();
     indexLoadPage();
 }

function indexLoadPage(){
    caculatorCart();
    caculatorLove();
}
// page love
let listLove = document.querySelector('.listFavorite');
function renderProductToLove(){
    listLove.innerHTML = '';
    productInLove.map((value,index) => {
        let newDiv = document.createElement('li');
        newDiv.innerHTML = `
            <div><img src="${value.image}" alt=""></div>
            <div>${value.title}</div>
            <div>${value.price.toLocaleString()} VNĐ </div>
            <div>
                <i onclick="removeLove(${index})" class="fa-sharp fa-solid fa-heart icon__heart"></i>
            </div>
    `;
        listLove.appendChild(newDiv);
    })
}

function showLove(){
    document.querySelector(".love").style.display = "block";
    renderProductToLove();
}
function removeLove(index){
    productInLove.splice(index,1);
    saveToLocalStorage();
    renderProductToLove();
    indexLoadPage();
}
// uu tien xem 
function searchProduct(){
    let valueInput = document.getElementById("search").value;
    let product = products.filter(value => {
        let a = removeDiacritics(value.title).toUpperCase();
        let b = removeDiacritics(valueInput).toUpperCase();
        return a.includes(b);
    })
    renderProduct(product)
}

function removeDiacritics(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

function sortWithBtn(){
    
}
