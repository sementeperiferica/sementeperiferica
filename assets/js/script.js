const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')


const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id')
        
        const link = document.querySelector('.nav__menu a[href*=' + sectionId + ']');
        
        if (link) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                link.classList.add('active-link');
            } else {
                link.classList.remove('active-link');
            }
        }
    })
}
window.addEventListener('scroll', scrollActive)


function scrollHeader(){
    const nav = document.getElementById('header')
    if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "bx-sun";
const logo = document.getElementById("logo");

// Verifique se os caminhos das imagens estão corretos
const lightLogo = "assets/img/SEMENTE PERIFERICA.png"; // Modo claro
const darkLogo = "assets/img/semente 6.png";   // Modo escuro

// Obtém o tema salvo no localStorage (se houver)
const selectedTheme = localStorage.getItem("selected-theme");

// Aplica o tema salvo ao carregar a página
if (selectedTheme) {
    document.body.classList.toggle(darkTheme, selectedTheme === "dark");
    
    // Define a imagem correta ao carregar a página
    if (selectedTheme === "dark") {
        logo.src = darkLogo;
    } else {
        logo.src = lightLogo;
    }
} else {
    // Se não houver tema salvo, usa a imagem padrão do modo claro
    logo.src = lightLogo;
}

// Evento de clique para alternar tema e trocar a imagem do logotipo
themeButton.addEventListener("click", () => {
    document.body.classList.toggle(darkTheme);
    const isDark = document.body.classList.contains(darkTheme);

    // Define a imagem correta conforme o tema
    logo.src = isDark ? darkLogo : lightLogo;

    // Salva a escolha do usuário no localStorage
    localStorage.setItem("selected-theme", isDark ? "dark" : "light");
});




const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal(`.home__data, .home__img,
            .menu__content,
            .app__data, .app__img,
            .contact__data, .contact__button,
            .footer__content`, {
    interval: 200
})