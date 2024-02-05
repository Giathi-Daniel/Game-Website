let game_bx_1 = document.getElementById("game_bx_1");
let left_btn = document.getElementById("left_btn");
let right_btn = document.getElementById("right_btn");

left_btn.addEventListener('click', () => {
    game_bx_1.scrollLeft -= 250;
})

right_btn.addEventListener('click', () => {
    game_bx_1.scrollLeft += 250;
})