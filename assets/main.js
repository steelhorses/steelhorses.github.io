const header = document.getElementById("header");
const titulo = document.getElementById("title");
const nav = document.getElementById("nav");

window.addEventListener("scroll", () => {
    let scroll = window.scrollY * 10;
    // header animation
    if (scroll < 5000) {
        header.style.backgroundColor = `rgba(27, 34, 46, ${1 - scroll / 10000 })`;
        header.style.height = `${20 - scroll / 500}vh`
        titulo.style.letterSpacing = `${2 - scroll / 3000}vw`;
        titulo.style.fontSize = `${3 - scroll / 10000}vw`;
        titulo.style.fontWeight = `${300 - scroll / 50}`;
        titulo.style.transform = `translateX(${0 - scroll / 150}vw)`;
        if (scroll > 2500) {
            nav.style.display = "block";
        } else {
            nav.style.display = "none"
        }
        nav.style.opacity = `${-1 + (scroll / 2500)}`;
        nav.style.transform = `translateX(${0 + scroll / 200}vw)`;
    } else {
        header.style.backgroundColor = "rgba(27, 34, 46, 0.5)";
        header.style.height = "10vh";
        titulo.style.letterSpacing = "0.34vw";
        titulo.style.fontSize = "2.5vw";
        titulo.style.fontWeight = "200";
        titulo.style.transform = "translateX(-33.33vw)";
        nav.style.opacity = "1";
        nav.style.transform = "translateX(25vw)";
        nav.style.display = "block";
    }
});