let perPage = 6
let currentPage = 1;
let start = 0;
let end = perPage;
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

function renderProduct(){
    let element = ``;
    products.map((value, index) => {

    })

}