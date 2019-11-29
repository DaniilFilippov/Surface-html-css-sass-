const navButton = document.querySelector('.main-nav__toggle');
const navMain = document.querySelector('.main-nav__wrapper--nav');
const navMainHeader = document.querySelector('.main-nav__wrapper');
const navMainDesktop = document.querySelector('.main-nav');

function onScrollNav () {
  if (window.innerWidth < 1200) {
    if (pageYOffset > 350) {
      navMainHeader.style.backgroundColor = "rgba(0,0,0, 0.9)";
      navMain.style.backgroundColor = "rgba(0,0,0, 0.9)";
    }
    else {
      navMainHeader.style.backgroundColor = "rgba(0,0,0, 0.3)";
      navMain.style.backgroundColor = "rgba(0,0,0, 0.3)";
    }
  }
  if (window.innerWidth >= 1200) {
    if (pageYOffset > 350) {
      navMainDesktop.style.backgroundColor = "rgba(0,0,0, 0.9)";
    }
    else {
      navMainDesktop.style.backgroundColor = "rgba(0,0,0, 0.3)";
    }
  }
}

function onClickToggle () {
    if(navMain.classList.contains('main-nav--opened')) {
      navMain.classList.remove('main-nav--opened');
      navMain.classList.add('main-nav--closed');

    } else {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
    }
}

function setOpacityToHeader(opacity1, opacity2) {
  navMainHeader.style.backgroundColor = opacity1;
  navMain.style.backgroundColor = opacity1;
  navMainDesktop.style.backgroundColor = opacity2;
}

function onResizeWindow () {
    if (window.innerWidth >= 1200 && pageYOffset < 350) {
      setOpacityToHeader("rgba(0,0,0, 0)","rgba(0,0,0, 0.3)");
    } else if (window.innerWidth >= 1200 && pageYOffset > 350){
        setOpacityToHeader("rgba(0,0,0, 0)","rgba(0,0,0, 0.9)");
    } else if (window.innerWidth < 1200 && pageYOffset > 350) {
        setOpacityToHeader("rgba(0,0,0, 0.9)","rgba(0,0,0, 0)");
    } else {
        setOpacityToHeader("rgba(0,0,0, 0.3)","rgba(0,0,0, 0)");
    }
}

window.addEventListener('scroll', onScrollNav);
window.addEventListener('resize', onResizeWindow);
navButton.addEventListener('click', onClickToggle);
