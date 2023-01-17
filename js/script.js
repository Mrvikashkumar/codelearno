// toggle menu
let menuBtn = document.getElementById('toggle-menu')
// side bar
let sideBar = document.getElementsByTagName('aside');
// tap to top button
let tapToTop = document.getElementById('tap-to-top')
// close sidebar btn
let closeSidebarBtn = document.querySelector('.close-sidebar')



// event listener when mousedown
menuBtn.addEventListener('mousedown', () => {
  menuBtn.classList.add('click')
})

// event listener for mouseup
menuBtn.addEventListener('mouseup', () => {
  menuBtn.classList.remove('click')
  sideBar[0].style.display = 'block'
  sideBar[0].children[0].style.animation = `show-aside .5s linear forwards`
})

// hide aside bar
addEventListener('click', e => {
  let target = e.target;
  showHideAside(target)
})
closeSidebarBtn.addEventListener('click', e => {
  let target = e.currentTarget.parentElement.parentElement;
  showHideAside(target)
})

// function for hide/show aside bar
function showHideAside(target){
  if(target.id === 'aside'){
    sideBar[0].children[0].style.animationName = 'hide-aside'
    setTimeout(()=>{
      sideBar[0].style.display = 'none'
    }, 500)
  }
}

// show/hide faq
let questions = document.querySelectorAll('.question')
questions.forEach(question => {
  question.addEventListener('click', e => {
    e.currentTarget.classList.toggle('show-hide')
    let plusIcon = e.currentTarget.children[0].children[0]
    if(plusIcon.classList.contains('uil-plus')){
      plusIcon.classList.remove('uil-plus')
      plusIcon.classList.add('uil-minus')
    }else{
      plusIcon.classList.remove('uil-minus')
      plusIcon.classList.add('uil-plus')
    }
  })
})
// scroll effect


addEventListener('scroll', e => {
  let categoriesText = document.querySelector('.categories-text');
  let categoryContainer = document.querySelector('.category-container')
  let courseHeading = document.querySelector('.course-heading');
  let courses = document.querySelector('.courses');
  let titles = document.querySelector('.titles')
  let writeBtn = document.querySelector('.write-btn')
  let hr = document.querySelector('#testimonial hr')
  let testimonials = document.querySelector('.testimonials')
  if(scrollY >= 100){
    menuBtn.parentElement.parentElement.style.backgroundColor = 'var(--color-primary)';
    tapToTop.style.animation = 'pop-up .5s linear forwards'
  }else{
    menuBtn.parentElement.parentElement.style.backgroundColor = 'transparent'
    tapToTop.style.animationName = 'pop-down'
  }
  // translate left to right
  ltr(categoriesText, 200)
  ltr(courseHeading, 600)
  questions.forEach(question => {
    ltr(question, 1400)
  })
  ltr(titles, 1800)
  ltr(writeBtn, 1800)
  
  // translate bottom to top
  btt(categoryContainer, 200)
  btt(courses, 700)
  btt(testimonials, 1900)

  // opacity effect
  opacity(hr, 1850)
})

// left to right animation
function ltr(element, scrollValue){
  if(scrollY >= scrollValue){
    element.classList.add('translateLtr')
  }else{
    element.classList.remove('translateLtr')
  }
}

// bottom to top animation
function btt(element, scrollValue){
  if(scrollY >= scrollValue){
    element.classList.add('translateBtt')
    setTimeout(()=>{
      element.style.opacity = '1'
    }, 1000)
  }else{
    element.classList.remove('translateBtt')
  }
}

// opacity effect
function opacity(element, scrollValue){
  if(scrollY >= scrollValue){
    element.classList.add('opacity-effect')
  }else{
    element.classList.remove('opacity-effect')
  }
}

// bottom to top animation

// event on tap to top button
tapToTop.addEventListener('click', e => {
  
})