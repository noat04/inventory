// document.addEventListener('DOMContentLoaded', function() {
//     let snowflakes = document.getElementsByClassName('snowflake');
//     let screenHeight = window.innerHeight;
//     for (let i = 0; i < snowflakes.length; i++) {
//         snowflakes[i].style.top = `${-Math.random() * screenHeight}px`;
//     }
// });
// document.addEventListener('DOMContentLoaded', function() {
//     function createSnowflakes(num) {
//         const snowflakesContainer = document.querySelector('.snowflakes');
//         for (let i = 0; i < num; i++) {
//             let snowflake = document.createElement('div');
//             snowflake.className = 'snowflake';
//             snowflake.style.left = `${Math.random() * 100}vw`;
//             snowflakesContainer.appendChild(snowflake);
//         }
//     }

//     let numSnowflakes = window.innerWidth <= 480 ? 20 : 50; // Giảm số lượng tuyết cho thiết bị di động
//     createSnowflakes(numSnowflakes);

//     let snowflakes = document.getElementsByClassName('snowflake');
//     let screenHeight = window.innerHeight;

//     // Set keyframes based on screen height and width
//     let fallDistance = window.innerWidth <= 480 ? screenHeight / 2 : screenHeight * 2;
//     let styleSheet = document.styleSheets[0];
//     styleSheet.insertRule(`
//         @keyframes snowflakes-fall {
//             0% { top: -50px; }
//             100% { top: ${fallDistance}px; }
//         }
//     `, styleSheet.cssRules.length);

//     for (let i = 0; i < snowflakes.length; i++) {
//         snowflakes[i].style.top = `${-Math.random() * screenHeight}px`;
//     }
// });

