let openShopping = document.querySelector('.header__nav-form-cart');
let openLoving = document.querySelector('.header__nav__love');
let closeShopping = document.querySelector('.closeShopping');
let closeLoving = document.querySelector('.closeLoving');
let cards = document.querySelector('.card');
let loves = document.querySelector('.love');

// note
cards.addEventListener('scroll', () => {
    let checkOut = document.querySelector('.checkOut');
    checkOut.style.bottom = 'unset';
})
function changeListProducts(type, element){
    let tabs= document.getElementsByClassName('tab-item');
    for(i=0;i<tabs.length;i++){
        tabs[i].style.backgroundColor="#ffbfcd";
        tabs[i].style.color="#fff";   
    }
    element.style.backgroundColor="#b1949a";
    element.style.color="#ffbfcd";
    switch(type){
        case 'popular':
            document.getElementById('popular').style.display='flex';
            document.getElementById('new').style.display='none';
            document.getElementById('sell').style.display='none';
            break;
        case 'new':
            document.getElementById('popular').style.display='none';
            document.getElementById('new').style.display='flex';
            document.getElementById('sell').style.display='none';
            break;
        case 'sell':
            document.getElementById('popular').style.display='none';
            document.getElementById('new').style.display='none';
            document.getElementById('sell').style.display='flex';
            break;
    }
};
// document.addEventListener("DOMContentLoaded", function() {
//     const pictureProducts = document.querySelectorAll('.picture-product');
    
//     for (let i = 0; i < pictureProducts.length; i++) {
//       const htmlToAdd = '<div class="boxshow-liked"><div class="container-icon"><i title="Xem thêm" class="fa-solid fa-plus"></i><i title="Thêm vào giỏ hàng" class="fa-regular fa-cart-shopping"></i><i title="Thêm vào yêu thích" class="fa-regular fa-heart"></i></div></div>';
//       pictureProducts[i].insertAdjacentHTML('beforeend', htmlToAdd);
//     }
//   });

document.addEventListener("DOMContentLoaded", function() {
    const object = document.querySelector('#main1');
    // const htmlToAdd1= '<div id="box-login" class="modal "><div class="modal-container"><div class="row no-gutters modal__form"><div onclick="closeForm()" class="modal__closed"><i class="fa-solid fa-xmark"></i></div><img class="col l-6 modal__picture" height="500px" src="./assets/img/FormLogin/FormLoginAvatar.png" alt=""><div id="box-sign-in" class="col l-6 modal__login"><h1 class="modal__login-headerText">USER LOGIN</h1><div class="modal__login-body"><label for=""><i class="fa-solid fa-user"></i>User name</label><input class="input username" type="text" placeholder="Email or user name..." autocomplete="off" autofocus/><label for=""><i class="fa-solid fa-key"></i>Password</label><div class="form-txtpw"><input type="password" id="pw0" class="input password" placeholder="Enter password..." autocomplete="off" autofocus><i onclick="showPassword(\'pw0\')" class="fa-solid fa-eye icon-hidepw"></i><button onclick="login()" type="submit" class="login-btn" id="btnLogin">Login <i class="fa-solid fa-check"></i></button></div></div><div class="modal__login-footer"><span>Khách hàng mới ?<a onclick="showForm(\'box-sign-up\')" class="sign-in " href="#"> Tạo tài khoản</a></span> <br><span>Quên mật khẩu ?<a onclick="showForm(\'box-reset-pass\')" class="reset-pass" href="#"> Khôi phục mật khẩu</a></span></div></div><div id="box-sign-up" class="col l-6 modal__sign-in"><h1 class="modal__login-headerText">REGISTER</h1><div class="modal__login-body"><label for=""><i class="fa-solid fa-user"></i>User name</label><input class="input username" type="text" placeholder="Email or user name..." autocomplete="off" autofocus/><label for=""><i class="fa-solid fa-key"></i>Password</label><div class="form-txtpw"><input type="password" id="pw" class="input password" placeholder="Enter password..." autocomplete="off" autofocus><i onclick="showPassword(\'pw\')" class="fa-solid fa-eye icon-hidepw"></i><label for=""><i class="fa-solid fa-key"></i>Re-enter password</label><input type="password" id="pw1" class="input password" placeholder="Enter password..." autocomplete="off" autofocus><i onclick="showPassword(\'pw1\')" class="fa-solid fa-eye icon-hidepw1"></i><button onclick="login()" type="submit" class="login-btn" id="btnLogin">Sign up <i class="fa-solid fa-check"></i></button></div></div><div class="modal__login-footer"><span>Bạn đã có tài khoản ?<a onclick="showForm(\'box-sign-in\')" class="sign-in " href="#"> Đăng nhập</a></span> <br></div></div><div id="box-reset-pass" class="col l-6 modal__resetpw"><h1 class="modal__login-headerText">FORGOT PASSWORD</h1><div class="modal__login-body"><label for=""><i class="fa-solid fa-user"></i>User name</label><input class="input username" type="text" placeholder="Email or user name..." autocomplete="off" autofocus/><label for=""><i class="fa-solid fa-key"></i>New password</label><div class="form-txtpw"><input type="password" id="pw3" class="input password" placeholder="Enter password..." autocomplete="off" autofocus><i onclick="showPassword(\'pw3\')" class="fa-solid fa-eye icon-hidepw"></i><label for=""><i class="fa-solid fa-key"></i>Confirm password</label><input type="password" id="pw4" class="input password" placeholder="Enter password..." autocomplete="off" autofocus><i onclick="showPassword(\'pw4\')" class="fa-solid fa-eye icon-hidepw1"></i><button onclick="login()" type="submit" class="login-btn" id="btnLogin">Confirm <i class="fa-solid fa-check"></i></button></div></div><div class="modal__login-footer"><span>Bạn chưa có tài khoản ?<a onclick="showForm(\'box-sign-up\')" class="sign-in " href="#"> Đăng ký tài khoản</a></span> <br></div></div></div></div></div>';
    const htmlToAdd2=`<div class="modal__detail">
    <div class="grid wide container__details">
        <div onclick="closed()" class="close-modal">
            <i class="fa-solid fa-xmark"></i>
        </div>
        <div class="details__name">
            <h1>Giày thể thao nữ giày sneaker nữ màu trắng bằng da màu trắng hiệu ZAVAS</h1>
            <p class="vote"><b></b> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i
                    class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> (132)</p>
        </div>
        <hr>
        <div class="row details__body">
            <div class="col l-5 body__picture">
                <div class="picture-main">
                    <img src="./assets/img/list products giay/giay1-removebg-preview.png" alt="">
                </div>
                <hr>
                <div class="picture-sup">
                    <img src="./assets/img/list products giay/giay1-removebg-preview.png" alt="">
                    <img src="./assets/img/list products giay/giay3-removebg-preview.png" alt="">
                    <img src="./assets/img/list products giay/giay4-removebg-preview.png" alt="">
                    <img src="./assets/img/list products giay/giay6-removebg-preview.png" alt="">
                </div>
            </div>
            <div class="col l-4 body__info">
                <div class="info__price">
                    <p>329.000 VNĐ</p>
                </div>
                <div class="trans">
                    <p><i class="fa-solid fa-clock"></i>Nhận hàng trong vài ngày</p>
                </div>
                <div class="info__sale">
                    <h2>ƯU ĐÃI VÀ KHUYẾN MÃI</h2>
                    <p><i class="fa-solid fa-circle-check"></i>Giảm giá các dịp đặc biệt</p>
                    <p><i class="fa-solid fa-circle-check"></i>Khuyến mãi tặng kèm khi mua hàng</p>
                    <p><i class="fa-solid fa-circle-check"></i>Giảm giá cho các khách hàng mới</p>
                    <p><i class="fa-solid fa-circle-check"></i>Giảm giá cho các khách hàng thân thiết</p>
                    <p><i class="fa-solid fa-circle-check"></i>Tặng voucher khi mua số lượng lớn</p>
                    <p><i class="fa-solid fa-circle-check"></i>Giảm giá thêm khi thanh toán online</p>
                </div>
                <div class="info__btn">
                    <button type="submit" class="addcart "><i class="fa-solid fa-cart-shopping"></i>Add the
                        cart</button>
                    <button type="submit" class="pay"><i class="fa-solid fa-credit-card"></i>Payment</button>
                </div>
                <div class="info__support">
                    <input type="text" placeholder="Để lại số điện thoại, chúng tôi sẽ gọi ngay">
                    <button type="submit">Gửi</button>
                </div>
            </div>
            <div class="col l-3 body__support">
                <div class="support__include">
                    <div>
                        <p>Bộ sản phẩm bao gồm:</p>
                    </div>
                    <div>
                        <p><i class="fa-solid fa-gift"></i>Hộp đựng sản phẩm tương ứng, chống sốc bảo vệ sản phẩm,
                            giấy tờ thông tin sản phẩm, giấy bảo hành, nhãn công ty, voucher, hóa đơn tương ứng và
                            giấy hướng dẫn sử dụng.</p>
                    </div>
                </div>
                <div class="support__commit">
                    <h2>Cam kết</h2>
                    <p><i class="fa-solid fa-circle-check"></i>Hàng nhập khẩu chất lượng</p>
                    <p><i class="fa-solid fa-circle-check"></i>Hệ thống cửa hàng toàn quốc</p>
                    <p><i class="fa-solid fa-circle-check"></i>Bảo hành, bảo trì nhanh chóng</p>
                    <p><i class="fa-solid fa-circle-check"></i>Cam kết chất lượng hàng hóa</p>
                    <p><i class="fa-solid fa-circle-check"></i>Cam kết chất lượng hàng hóa</p>
                    <p><i class="fa-solid fa-circle-check"></i>Cam kết bảo mật thông tin khách hàng</p>
                    <p><i class="fa-solid fa-circle-check"></i>Giá cả hợp lý cho người dùng</p>
                    <p><i class="fa-solid fa-circle-check"></i>Chính sách đổi trả linh hoạt</p>
                </div>
            </div>
        </div>
    </div>
</div>`
const combinedHTML = htmlToAdd1 + htmlToAdd2;
object.insertAdjacentHTML('beforeend', combinedHTML);
});
// function changeNew(type){
//     switch(type){
//         case 'nextPage':
//             document.querySelector('.nextPage').style.display='flex';
//             document.querySelector('.prevPage').style.display='none';
//             break;
//         case 'prevPage':
//             document.querySelector('.nextPage').style.display='none';
//             document.querySelector('.prevPage').style.display='flex';
//             break;
//     }
// };
// showPassword
function showPassword(type){
    let x= document.getElementById(type);
        if(x.type === "password"){
            x.type="text";
        }else{
            x.type="password";
        }
}
// show loginform
function showLoginForm(){
    document.getElementById('box-login').style.display="flex";
}
// show sign-up 
// document.addEventListener("DOMContentLoaded", function() {
//     const object = document.querySelector('.modal-container');
//     const htmlToAdd1= '<div class="col l-6 modal__sign-in"><h1 class="modal__login-headerText">REGISTER</h1><div class="modal__login-body"><label for=""><i class="fa-solid fa-user"></i>User name</label><input class="input username" id="un" type="text" placeholder="Email or user name..." autocomplete="off" autofocus/><label for=""><i class="fa-solid fa-key"></i>Password</label><div class="form-txtpw"><input type="password" id="pw" class="input password" placeholder="Enter password..." autocomplete="off" autofocus><i onclick="showPassword(\'pw"\'" class="fa-solid fa-eye icon-hidepw"></i><label for=""><i class="fa-solid fa-key"></i>Re-enter password</label><input type="password" id="pw1" class="input password" placeholder="Enter password..." autocomplete="off" autofocus><i onclick="showPassword("pw1")" class="fa-solid fa-eye icon-hidepw1"></i><button onclick="login()" type="submit" class="login-btn" id="btnLogin">Sign up <i class="fa-solid fa-check"></i></button></div></div><div class="modal__login-footer"><span>Bạn đã có tài khoản ?<a class="sign-in " href="#"> Đăng nhập</a></span> <br></div></div>'
//     object.insertAdjacentHTML('beforeend', htmlToAdd1);
// });
function showForm(type){
    switch (type) {
        case 'box-sign-in':
            document.getElementById('box-sign-in').style.display='block';
            document.getElementById('box-sign-up').style.display='none';
            document.getElementById('box-reset-pass').style.display='none';
            break;
        case 'box-sign-up':
            document.getElementById('box-sign-in').style.display='none';
            document.getElementById('box-sign-up').style.display='block';
            document.getElementById('box-reset-pass').style.display='none';
            break;
        case 'box-reset-pass':
            document.getElementById('box-sign-in').style.display='none';
            document.getElementById('box-sign-up').style.display='none';
            document.getElementById('box-reset-pass').style.display='block';
            break;
        default:
            break;
    }
}
// close form 
function closeForm(){
    document.getElementById('box-login').style.display="none";

}
openShopping.addEventListener('click', () => {
    cards.classList.add('active');
});
openLoving.addEventListener('click', () => {
    loves.classList.add('active');
})
closeShopping.addEventListener('click', () => {
    cards.classList.remove('active');
});
closeLoving.addEventListener('click', () => {
    loves.classList.remove('active');
})
// open form detail
let openForm = document.querySelectorAll('.boxshow-liked .container-icon i:nth-child(1)');
console.log(openForm);
function openDetails(){
    for(let i=0;i<openForm.length;i++){
        openForm[i].addEventListener('click',()=>{
            document.querySelector('.modal__detail').classList.add('active2');
        })
    }
}
openDetails();
// closed form detail
function closed(){
    document.querySelector('.modal__detail').classList.remove('active2');
}
