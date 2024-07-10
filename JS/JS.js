document.addEventListener("DOMContentLoaded", function() {
    // Chọn tất cả các phần tử cần hiển thị
    var elementsToShow = document.querySelectorAll('.title h1, .title h2, .title h4, .invitation h3, .time_location h5, .time_location h3, .event h3, .event-time, .events-main::after, .section, .information, .content-text, .content-left,.bride-right,.bride-left,.groom-left,.groom-right,.icon,.icon-past,.past-title,.box-number,.box-left,.video-title,.video-slide video,.photo-title,.picture,.rvsp, .divider');
    var line = document.querySelector('.events-main::after');
    // Lặp qua từng phần tử và thiết lập độ trễ cho mỗi phần tử
    elementsToShow.forEach(function(element, index) {
        element.style.setProperty('--index', index);
    });
    
});
const observer= new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    });
});
const hiddenElements= document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
