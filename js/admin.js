let x = document.querySelectorAll('.slidebar__menu li a ');
let titleName = document.querySelector('.title-list');
document.querySelector('.btn-add').addEventListener('click',()=>{
    document.querySelector('.modal').style.display='flex';
});
document.querySelector('.modal__closed').addEventListener('click',()=>{
    document.querySelector('.modal').style.display='none';
});
function showPassword(type){
    let x= document.getElementById(type);
        if(x.type === "password"){
            x.type="text";
        }else{
            x.type="password";
        }
}
function updateTime() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const now = new Date();
    const dayOfWeek = daysOfWeek[now.getDay()];
    const dateTimeString = dayOfWeek+ " " + now.toLocaleString();
    document.getElementById("datetime").innerHTML = dateTimeString;
}
setInterval(updateTime, 1000);
function changeTable(type, element) {
    for (let i = 0; i < x.length; i++) {
        x[i].classList.remove('active');
    }
    element.classList.add('active');
    switch (type) {
        case 'products':
            titleName.innerText = "Danh sách sản phẩm";
            document.getElementById('products').style.display = 'block';
            document.getElementById('account').style.display = 'none';
            document.getElementById('order').style.display = 'none';
            document.getElementById('comment').style.display = 'none';
            break;
        case 'account':
            titleName.innerText = "Danh sách tài khoản";
            document.getElementById('account').style.display = 'block';
            document.getElementById('products').style.display = 'none';
            document.getElementById('order').style.display = 'none';
            document.getElementById('comment').style.display = 'none';
            break;
        case 'order':
            titleName.innerText = "Danh sách hoá đơn";
            document.getElementById('order').style.display = 'block';
            document.getElementById('account').style.display = 'none';
            document.getElementById('products').style.display = 'none';
            document.getElementById('comment').style.display = 'none';
            break;
        case 'comment':
            titleName.innerText = "Danh sách phản hồi";
            document.getElementById('comment').style.display = 'block';
            document.getElementById('account').style.display = 'none';
            document.getElementById('order').style.display = 'none';
            document.getElementById('products').style.display = 'none';
            break;
        default:
            break;
    }
}
