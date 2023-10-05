let list = document.querySelector('.list-product')
let listProduct = [];
const productPopular = [
    { id: 1, image: "./assets/img/List-products/Tui1-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Túi xách da nữ handmade VLS 560", price: 2300000, percent: 10, vote: 4.0, rating: 240 },
    { id: 2, image: "./assets/img/List-products/tui3-removebg-preview.png", imageSale: "icon percent.png", contentSale: "Hot sale 30/4", title: "Túi đeo chéo nữ đẹp sang trọng da mềm PANIO SP17", price: 2100000, percent: 12, vote: 4.6, rating: 120 },
    { id: 3, image: "./assets/img/List-products/guoc1-removebg-preview.png", imageSale: "icon discount.png", contentSale: "Giảm thêm 50k", title: "Giày Cao Gót GU2301", price: 379000, percent: 10, vote: 4.0, rating: 240 },
    { id: 4, image: "./assets/img/túi/túi_7-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Túi Xách Nhấn Dây Chuỗi Hạt Vân Đá  ", price: 895000, percent: 40, vote: 5.0, totalrate: 100 },
    { id: 5, image: "./assets/img/túi/túi_8-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Túi Đeo Vai Pedro Tweed Double Flap Shoulder Bag", price: 2090000, percent: 50, vote: 4.0, totalrate: 99 },
    { id: 6, image: "./assets/img/túi/túi_1-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Giảm sốc", title: "Túi xách nữ kiêm đeo chéo sang trọng", price: 2800000, percent: 20, vote: 4.5, totalrate: 120 },
    { id: 7, image: "./assets/img/túi/túi_2-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Giảm sốc", title: "Túi Xách Charles & Keith Chain Handle Quilted Long Wallet Cream", price: 1900000, percent: 15, vote: 5.0, totalrate: 87 },
    { id: 8, image: "./assets/img/túi/túi_3-removebg-preview.png", imageSale: "icon percentPurple.png", contentSale: "Giảm mùa lễ", title: "Túi Versace Jeans Couture ", price: 7800000, percent: 12, vote: 5.0, totalrate: 190 },
    { id: 9, image: "./assets/img/túi/túi_4-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Túi xách nữ MARSCO ", price: 2040000, percent: 23, vote: 4.3, totalrate: 167 },
    { id: 10, image: "./assets/img/túi/túi_5-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Túi xách Bershka ", price: 2900000, percent: 12, vote: 4.4, totalrate: 115 },
];
const productNew = [
    { id: 11, image: "./assets/img/list products giay/giay1-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Giày thể thao nữ giày sneaker nữ màu trắng đế 3cm bằng da màu trắng hiệu ZAVAS", price: 329000, percent: 12, vote: 4.5, totalrate: 120 },
    { id: 12, image: "./assets/img/list products giay/giay2-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Giày búp bê MWC NUBB- 2252", price: 235000, percent: 20, vote: 5.0, totalrate: 111 },
    { id: 13, image: "./assets/img/list products giay/giay3-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Giày Oxford Da Bóng Đế Bánh Mì Phối Dây Cách Điệu Kiểu Dáng Thời Trang", price: 250000, percent: 12, vote: 4.0, totalrate: 190 },
    { id: 14, image: "./assets/img/list products giay/giay4-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Boots Cổ Cao Gót Trụ 7cm Siêu Êm Chân Thời Trang Trẻ Trung Thanh Lịch", price: 295000, percent: 23, vote: 4.3, totalrate: 167 },
    { id: 15, image: "./assets/img/list products giay/giay5-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Sandal Cao Gót Quai Ngang Đính Đá Cách Điệu Gót Vuông Phối Quai Hậu Thời Trang", price: 215000, percent: 12, vote: 4.4, totalrate: 115 },
    { id: 16, image: "./assets/img/list products giay/giay6-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Dép Cao Gót Nữ Gót Vuông Cao 5cm Quai Ngang Viền Chỉ Giữa Cách Điệu Mũi Vuông Thời Trang", price: 180000, percent: 42, vote: 4.5, totalrate: 123 },
    { id: 17, image: "./assets/img/list products giay/giay7-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Cao Gót Nữ Da Bóng Mũi Nhọn Bít Gót,Gót Trụ Cách Điệu Thời Trang", price: 195000, percent: 40, vote: 5.0, totalrate: 100 },
    { id: 18, image: "./assets/img/list products giay/giay8-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Sandal Cao Gót Quai Ngang Bóng Gót Tam Giác Phối Quai Hậu Thời Trang", price: 195000, percent: 50, vote: 4.0, totalrate: 99 },
    { id: 19, image: "./assets/img/list products giay/giay9-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Giày Thể Thao Nữ Phối Màu Thể Thao,Sneaker Da Siêu Êm Chân Đế Độn 4cm Hot Trend", price: 295000, percent: 12, vote: 4.5, totalrate: 123 },
    { id: 20, image: "./assets/img/list products giay/giay10-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Boot Nữ Martin Đế Cao Thoáng Khí Phong Cách Cá Tính", price: 270000, percent: 10, vote: 4.5, totalrate: 12 },
]
const productBestSelling = [
    { id: 21, image: "./assets/img/list products giay/giay11-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Giày Thể Thao Nữ Đế Bằng Phối Vải,Sneaker Vải Siêu Êm Chân Hot Trend", price: 150000, percent: 15, vote: 4.6, totalrate: 565 },
    { id: 22, image: "./assets/img/list products giay/giay12-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Giày Sục Thể Thao Nữ Phối Màu Siêu Cute,Sneaker Êm Chân Đế Độn 4CM Hot Trend", price: 295000, percent: 20, vote: 4.4, totalrate: 64 },
    { id: 23, image: "./assets/img/list products giay/giay13-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Giày Thể Thao Nữ Phối Vải Canvas , Êm Chân Đế Bằng nhẹ nhàng", price: 125000, percent: 30, vote: 4.5, totalrate: 77 },
    { id: 24, image: "./assets/img/list products giay/giay14-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Giày Thể Thao Nữ,Sneaker Da Siêu Êm Chân Đế Độn 4CM Hot Trend", price: 295000, percent: 50, vote: 4.3, totalrate: 14 },
    { id: 25, image: "./assets/img/list products giay/giay15-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Giày Sục Thể Thao Nữ Phối Chữ Siêu Cute,Sneaker Êm Chân Đế Độn 5CM Hot Trend", price: 295000, percent: 15, vote: 4.2, totalrate: 543 },
    { id: 26, image: "./assets/img/list products giay/giay16-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Giày Thể Thao Cổ Cao Đế Độn Kiểu Dáng Cá Tính Thời Trang", price:295000, percent: 10, vote: 4.2, totalrate: 540 },
    { id: 27, image: "./assets/img/list products giay/giay17-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Giày Thể Thao Nữ,Sneaker Da Siêu Êm Chân Đế Độn 4CM Hot Trend", price: 295000, percent: 5,vote: 4.1, totalrate: 66 },
    { id: 28, image: "./assets/img/list products giay/giay18-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Giày Thể Thao Nữ Phối Màu Siêu Cute,Sneaker Êm Chân Đế Độn 5CM Hot Trend", price: 270000, percent: 8,vote: 4.3, totalrate: 112 },
    { id: 29, image: "./assets/img/list products giay/giay19-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Giày Sneaker Da Siêu Êm Chân Đế Độn 4CM Hot Trend", price: 295000, percent: 7 ,vote: 4.5, totalrate: 125 },
    { id: 30, image: "./assets/img/list products giay/giay20-removebg-preview.png", imageSale: "icon hotsale.png", contentSale: "Hàng giới hạn", title: "Giày Thể Thao Nữ Phối Màu Thời Trang,Sneaker Da Siêu Êm Chân Đế Độn 4CM Hot Trend", price: 295000, percent: 9, vote: 4.6, totalrate: 123 },
]
let productInCart = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : [];
let productInLove = localStorage.getItem("product") ? JSON.parse(localStorage.getItem("product")) : [];

function saveToLocalStorage(){
    localStorage.setItem("product",JSON.stringify(productInLove));
    localStorage.setItem("products",JSON.stringify(productInCart));
}
function renderProduct(array) {
    array.map(value => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('product-detail');
        newDiv.classList.add('product-demo');
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
        <p class="vote"><b>${value.vote.toFixed(1)}</b> <i class="fa-regular fa-star"></i> ( ${value.rating} )</p>    
        `;
        list.appendChild(newDiv);
    })
}
renderProduct(productPopular)
listProduct = productPopular;
let x = document.querySelectorAll(".title-product > div")
for(let index = 0;index < x.length;index ++){
x[index].addEventListener("click", function(){
    if(x[index].getAttribute("data-value")==="po"){
        listProduct = productPopular;
        list.innerHTML = "";
        renderProduct(productPopular);
    }else if(x[index].getAttribute("data-value")==="ne"){
        listProduct = productNew
        list.innerHTML = "";
        renderProduct(productNew)
    }else{
        listProduct = productBestSelling;
        list.innerHTML = "";
        renderProduct(productBestSelling)
    }
})
}

function addInCart(id){
    let checkProduct = productInCart.some(value => value.id === id);
    if(!checkProduct){
        let product = listProduct.find(value => value.id === id);
        productInCart.unshift({
            ...product,
            quantity: 1
        })
        saveToLocalStorage();
        caculatorCart();
    }else{
        let getIndex = productInCart.findIndex(value => value.id === id);
        let product = productInCart.find(value => value.id === id);
        productInCart[getIndex] = {
            ...product,
            quantity: ++product.quantity
        }
        saveToLocalStorage();
        caculatorCart();
    }
}

function addInLove(id){
    let checkProduct = productInLove.some(value => value.id === id);
    if(!checkProduct){
        let product = listProduct.find(value => value.id === id);
        productInLove.unshift({
            ...product,
        })
        saveToLocalStorage();
        caculatorLove();
    }else{
        alert("Sản phẩm đã tồn tại !!!")
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

function indexLoadPage(){
    caculatorCart();
    caculatorLove();
}

// search input

function searchProduct(){
    let valueIpnput = document.getElementById("search").value;
    let productSearch = listProduct.filter(value => {
        return value.title.toUpperCase().includes(valueIpnput.toUpperCase());
    })
    list.innerHTML = "";
    renderProduct(productSearch);
}

function ascending(){
    let valueSelect = document.getElementById("option-sort").value;
    console.log(listProduct);
    listProduct.sort((a,b) => {
        if(valueSelect === "az"){
            return a.title.localeCompare(b.title)
        }else if(valueSelect === "za"){
            return b.title.localeCompare(a.title)
        }else if(valueSelect === "tc"){
            return a.price - b.price
        }else if(valueSelect ==="ct"){
            return b.price - a.price
        }else {
            a.id - b.id
        }
    })
    list.innerHTML = ""
    renderProduct(listProduct)
}
let listCard = document.querySelector('.listCard');

// page gio hang
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

function showCart(){
    document.querySelector(".card").style.display = "block";
    renderProductToCart();
}

function closed(){
    document.querySelector(".card").style.display = "none";
    document.querySelector(".love").style.display = "none";
}

function removeTrash(index){
   productInCart.splice(index,1);
    saveToLocalStorage();
    renderProductToCart();
    indexLoadPage();
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