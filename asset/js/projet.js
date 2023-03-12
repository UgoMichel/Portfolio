window.addEventListener("scroll", function (){
    const header = document.getElementById('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});