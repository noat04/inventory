/* JavaScript */
document.addEventListener("DOMContentLoaded", function() {
    // Chọn tất cả các phần tử cần hiển thị
    var elementsToShow = document.querySelectorAll('.title h1, .title h2, .title h4, .invitation h3, .time_location h5, .time_location h3, .event h3, .event-time, .events-main::after, .section, .information, .content-text, .content-left,.bride-right,.bride-left,.groom-left,.groom-right,.icon,.icon-past,.past-title,.box-number,.box-left,.video-title,.video-slide video,.photo-title,.picture,.rvsp');
    var line = document.querySelector('.events-main::after');
    // Lặp qua từng phần tử và thiết lập độ trễ cho mỗi phần tử
    elementsToShow.forEach(function(element, index) {
        element.style.setProperty('--index', index);
    });
    
});
// Hàm kiểm tra xem một phần tử có hiển thị trong viewport không
function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
// Hàm để chạy video khi nó hiển thị trên màn hình
function runVideoIfVisible() {
    if (isElementInViewport(video)) {
        video.classList.add('animate'); // Thêm lớp animate để kích hoạt animation
        // Ngừng lắng nghe sự kiện sau khi video đã bắt đầu phát
        window.removeEventListener('scroll', runVideoIfVisible);
    }
}
// Hàm để xử lý sự kiện khi cuộn trang
function handleScroll() {
    var elements = document.querySelectorAll('.animated'); // Lấy tất cả các phần tử có class 'animated'
    elements.forEach(function(element) {
        if (isInViewport(element)) {
            element.classList.add('fadeInUp'); // Thêm lớp để kích hoạt animation cho các phần tử khác
        }
    });
}

// Thêm sự kiện cuộn trang
window.addEventListener('scroll', handleScroll);

const form = document.getElementById('myForm');
const confirmationMessage = document.getElementById('confirmationMessage');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    confirmationMessage.style.display = 'block';
    form.reset();
});

const myModal = new bootstrap.Modal(
    document.getElementById("modalId"),
    options,
);

function copyPhoneNumber() {
    // Lấy nội dung của phần tử có id là "phone-number"
    var phoneNumber = document.getElementById("phone-number").innerText.trim();

    // Sao chép nội dung vào clipboard
    navigator.clipboard.writeText(phoneNumber)
        .then(function() {
            document.getElementById("btkh").style.display = "inline";
            // Ẩn thông báo sau 3 giây
            setTimeout(function(){
                document.getElementById("btkh").style.display = "none";
            }, 3000);
        })
        .catch(function(err) {
            // Xử lý lỗi khi không thể sao chép
            console.error("Không thể sao chép: ", err);
        });

}

