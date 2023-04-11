/*=== Menu Show ===*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu');

/*=== Active and remove menu ===*/
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    // Active link
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    //Remove menu mobile
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*=== Skills ===*/

const skillsContent = document.getElementsByClassName('skills_content'),
    skillsHeader = document.querySelectorAll('.skills_header');

function toggleSkills(){
    let itemClass = this.parentNode.className;

    for (i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills_content skills_close';
    }
    if (itemClass === 'skills_content skills_close'){
        this.parentNode.className = 'skills_content skills_open';
    }
}

skillsHeader.forEach((el) =>{
    el.addEventListener('click', toggleSkills)
})

/*=== Show Scroll Up ===*/

function scollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if (this.scrollY >= 560) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scollUp);

/*=== Scroll Reveal animation ===*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/*Scroll home*/
sr.reveal('.home_title',{})
sr.reveal('.button_home',{delay: 200})
sr.reveal('.home_img',{delay: 400})
sr.reveal('.home_social-icon',{interval: 200})

/*Scroll about*/
sr.reveal('.about_img',{})
sr.reveal('.about_subtitle',{delay: 200})
sr.reveal('.about_text',{delay: 200})
sr.reveal('.about_button',{delay: 400})

/*Scroll skills*/
sr.reveal('.skills_content',{interval: 200})

/*Scroll skills*/
sr.reveal('.work_box',{interval: 200})

/*Scroll skills*/
sr.reveal('.contact_imput',{interval: 200})

/*=== Email JS ===*/

const contactForm = document.getElementById("contact-form"),
    contactName = document.getElementById("contact-name"),
    contactEmail = document.getElementById("contact-email"),
    contactProject = document.getElementById("contact-project"),
    contactMessage = document.getElementById("contact-message");

const sendEmail = (e) =>{
    e.preventDefault()

    //Check if the field has a value
    if (contactName.value === '' || contactEmail.value === '' || contactProject.value === ''){
        //Add and remove color
        contactMessage.classList.remove('color_blue');
        contactMessage.classList.add('color_red');

        //Show message
        contactMessage.textContent = 'Remplissez tous les champs de texte !!';
    }
    else {
        // serviceID - templateID - #form - publicKey
        emailjs.sendForm('service_vp77km4','template_qjx670d','#contact-form','4xexnCeUqsN7R1-fU')
            .then(() => {
                //Show message and add color
                contactMessage.classList.add('color_blue');
                contactMessage.textContent = 'Message envoyé';

                //Remove message after 5 seconds
                setTimeout(() => {
                    contactMessage.textContent = ''
                }, 5000)
            });

        //To clear the input field
        contactName.value = '';
        contactEmail.value = '';
        contactProject.value = '';
    }
}
contactForm.addEventListener('submit', sendEmail);

// /*=== Home Projet ===*/
//
// window.addEventListener("scroll", function (){
//     const header = document.querySelector('header');
//     header.classList.add('sticky');
// });


