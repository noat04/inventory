document.addEventListener('DOMContentLoaded', function() {
    let snowflakes = document.getElementsByClassName('snowflake');
    let screenHeight = window.innerHeight;

    // Đặt vị trí ban đầu của tuyết ngẫu nhiên dọc theo chiều dài trang web
    for (let i = 0; i < snowflakes.length; i++) {
        snowflakes[i].style.top = `${-Math.random() * screenHeight}px`;
    }
});
