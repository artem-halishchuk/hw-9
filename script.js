document.addEventListener("DOMContentLoaded", function() {
    let content = document.querySelector(".content");
    content.style.display = "none";
    let preloaderItem = document.querySelector(".preloaderItem");
    let deg = 0;
    let t = setInterval(function () {
        deg += 8;
        preloaderItem.style.transform = 'rotate(' + deg + 'deg)';
        let rgb = () => Math.round(Math.random()*255);
        preloaderItem.style.backgroundColor = 'rgb(' + rgb() +','+ rgb() +','+ rgb() +')';
    }, 25)
    window.onload = function () {
        clearInterval(t);
        let preloader = document.querySelector(".preloader");
        preloader.style.display = "none";
        let content = document.querySelector(".content");
        content.style.display = "block";
    }
})