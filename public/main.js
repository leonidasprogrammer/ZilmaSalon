/* Abre e fecha o menu quando clicar no icone: hamburguer e x*/
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')
const focus = document.querySelector('.focus')
const arrow = document.querySelectorAll('main .go-to-about')
const load = document.querySelector('body .load')

const back = document.querySelector('.go-to-about')
const backtop = document.querySelector('.back-to-top')

function preLoad() {
  load.classList.add('hidden')
  const elemento = document.querySelector('#header')
  elemento.id = 'heade'
}
setTimeout(preLoad, 3000)

/*setTimeout(function(){
  document.querySelector('.load').classList.add('visivel');
}, 3 * 1000);*/

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
    focus.classList.toggle('focused')
  })
}

for (const element of arrow) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
    focus.classList.toggle('focused')
  })
}

/* quando clicar em um item do menu, esconder o menu*/
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
    if (window.innerWidth <= 1199) {
      focus.classList.toggle('focused')
    }
  })
}

// retira menu e efeto embasado
window.addEventListener('resize', function () {
  if (window.innerWidth >= 1200) {
    nav.classList.remove('show')
    focus.classList.remove('focused')
    //back.classList.toggle('off')
    backtop.classList.remove('on')
  } else {
    //back.classList.toggle('off')
    //backtop.classList.add('on')
  }
})

//embasar fundo

/*for (const focu of focus) {
  focu.addEventListener('click', function () {
    focus.classList.add('focused')
  })
}*/

/*function ofuscarFocus() {
  if (window.scrollY <= navHeight) {
    focus.classList.add('focused')
    //alert('teste focus')
  } else {
    focus.classList.remove('focused')
  }
}*/

//const focus = document.querySelector('.focus')

/*for (const element of main) {
  element.addEventListener('click', function () {
    focus.classList.main('show')
  })
}*/

/* mudar o header da pagina quando der scroll*/

const header = document.querySelector('#header')
const navHome = home.offsetHeight

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHome && window.scrollY <= 3150) {
    //scroll é maior que a altura do header

    header.classList.add('scroll')
  } else {
    // menor que a altura do header
    header.classList.remove('scroll')
  }
}

/* Testimonials carousel slider swiper */
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 3,
      setWrapperSize: true
    }
  }
})

/* ScrollReveal: mostrar elementos quando der scroll na página */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 1400,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials
  .contact, .text, #contact .links,
  footer .brand, .footer, .social,  .swiper-wrapper
  `,
  { interval: 100 }
)

/* Visibility Buttom back to top */

function backToTop() {
  const backToTopButton = document.querySelector('.back-to-top')
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/* Menu ativo conforme a seção visível na página */
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
    /*sections.addEventListener('mouseover', function () {
      nav.classList.remove('active')
    })*/
  }
}

/*when scroll*/
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
  ofuscarFocus()
})
