//=========================================== TEMA OSCURO ==========================================//
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-brightness'

//======================================== TOPICO SELECCIONADO PREVIAMENTE =================================//
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//============================== OBTENER EL TEMA ACTUAL PARA QUE LA INTERFAZ VALIDE EL TEMA OSCURO =================================//
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => document.body.classList.contains(iconTheme) ? 'uil-moon' : 'uil-brightness'

//============================== VALIDAR SI EL USUARIO ELIGIO UN TOPICO PREVIAMENTE =================================================//
if(selectedTheme){
    document.body.classList[selectedTheme == 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon == 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

//============================== ACTIVAR O DESACTIVAR EL TEMA MANUALMENTE =================================================//
themeButton.addEventListener('click', () => {
    //=============== AGREGAR O REMOVER EL SOL/LUNA icon -- icon theme =================//
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    //=============== GUARDAR EL TEMA Y EL ICONO ACTUAL QUE EL USUARIO ELIGIO ==========//
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

console.log("TEMA CORRIENDO")

//============================== MENU MOSTRAR Y OCULTAR =============================//
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

//=========== MOSTRAR MENU ==================//
/* VALIDAR SI LA CONSTANTE EXISTE */
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

//=========== OCULTAR MENU ==================//
/* VALIDAR SI LA CONSTANTE EXISTE */
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

console.log("MENU Y AJUSTES CORRIENDO")

//============================ REMOVER MENU =============================//
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // CUANDO DEMOS CLICK EN nav__links REMOVEMOS EL MOSTRAR MENU
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))
console.log("REMOVER MENU CORRIENDO")

//============================= TypeWriter Effect ===================//
new Typewriter('#typewriter', {
  strings: ['Wilberd Cristopher Espino Gamboa', 'Front & Back End Developer'],
  autoStart: true,
  loop: true,
  cursor: "|"
});

console.log("TYPEWRITER EFFECT CORRIENDO")
