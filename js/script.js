// //=========================================== TEMA OSCURO ==========================================//
    const chk = document.getElementById('chk');

    chk.addEventListener('change', () => {
    document.body.classList.toggle('dark-theme');
});

//============================= TypeWriter Effect ===================//
new Typewriter('#typewriter', {
  strings: ['Wilberd Cristopher Espino Gamboa', 'Front & Back End Developer'],
  autoStart: true,
  loop: true,
  cursor: "|"
});

console.log("TYPEWRITER EFFECT CORRIENDO")

//============================= Portafolio Swiper ===================//

var swiper = new Swiper(".blog-slider", {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel:{
        invert: false
    },

    pagination: {
      el: ".blog-slider__pagination",
      clickable: true,
    },
    // mousewheel: true,
    keyboard: true,
  });
console.log("PORTAFOLIO SWPIER EFFECT CORRIENDO")

//============================= Scroll Up ===================//

function scrollUp(){
    const scrollup = document.getElementById('scroll-up');
    if(this.scrollY >= 560) {
        scrollup.classList.add('show-scroll');
    }
    else {
        scrollup.classList.remove('show-scroll');
    }
    console.log("Scrollup working");
}

window.addEventListener('scroll', scrollUp)

//============================= Scroll Section Active Highlight ===================//

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY < sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active')
        } else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active') 
        }
    })
    console.log("Section highlight working");
}

window.addEventListener('scroll', scrollActive)


//============================= HIDE SHOW MENU ===================//

let ubicacionPrincipal  = window.pageYOffset;
window.onscroll = function() {
    let Desplazamiento_Actual = window.pageYOffset;
    if(ubicacionPrincipal >= Desplazamiento_Actual){
        document.getElementById('navbar').style.top = '0';
    }
    else{
        document.getElementById('navbar').style.top = '-100px';
    }
    ubicacionPrincipal = Desplazamiento_Actual;
}














function showModal(titleHtml, contentHtml, buttons) {
    const modal = document.createElement("div");
  
    modal.classList.add("modal");
    modal.innerHTML = `
          <div class="modal__inner">
              <div class="modal__top">
                  <div class="modal__title"><strong>${titleHtml}</strong></div>
                  
              </div>
              <br>
              <div class="modal__content">${contentHtml}</div>
              <div class="modal__bottom"></div>
          </div>
      `;
  
    for (const button of buttons) {
      const element = document.createElement("button");
  
      element.setAttribute("type", "button");
      element.classList.add("modal__button");
      element.textContent = button.label;
      element.addEventListener("click", () => {
        if (button.triggerClose) {
          document.body.removeChild(modal);
        }
  
        button.onClick(modal);
      });
  
      modal.querySelector(".modal__bottom").appendChild(element);
    }

    modal.addEventListener("click", ()=> {
        document.body.removeChild(modal);
    })

    modal.querySelector(".modal__button").addEventListener("click", () => {
        document.body.removeChild(modal);
      });
  
    document.body.appendChild(modal);
  }
  
  showModal("Bienvenido a mi portafolio web!", "<p>Actualmente la p??gina no est?? adaptada para visualizarla en m??vil pero no te preocupes, estoy trabajando en ello!. PD: Tienes para elegir entre el tema de tu preferencia: Tema Claro o Tema Oscuro :D.<br><center>??Espero disfrutes tu estadia!.</center></p>", [
    {
      label: "??De acuerdo!",
      onClick: (modal) => {

      },
      triggerClose: false
    }
  ]);
  