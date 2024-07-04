// document.addEventListener('DOMContentLoaded', function() {
//     let snowflakes = document.getElementsByClassName('snowflake');
//     let screenHeight = window.innerHeight;
//     for (let i = 0; i < snowflakes.length; i++) {
//         snowflakes[i].style.top = `${-Math.random() * screenHeight}px`;
//     }
// });
document.addEventListener('DOMContentLoaded', function() {
    function createSnowflakes(num) {
        const snowflakesContainer = document.querySelector('.snowflakes');
        for (let i = 0; i < num; i++) {
            let snowflake = document.createElement('div');
            snowflake.className = 'snowflake';
            snowflake.style.left = `${Math.random() * 100}vw`;
            snowflakesContainer.appendChild(snowflake);
        }
    }

    let numSnowflakes = window.innerWidth <= 480 ? 20 : 50; // Giảm số lượng tuyết cho thiết bị di động
    createSnowflakes(numSnowflakes);

    let snowflakes = document.getElementsByClassName('snowflake');
    let screenHeight = window.innerHeight;

    for (let i = 0; i < snowflakes.length; i++) {
        if (window.innerWidth <= 480) { // Nếu là thiết bị di động
            snowflakes[i].style.top = `${-Math.random() * screenHeight / 2}px`; // Giảm độ cao bắt đầu
        } else {
            snowflakes[i].style.top = `${-Math.random() * screenHeight}px`;
        }
    }
});
