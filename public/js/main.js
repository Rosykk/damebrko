// Load modal if user is first comer
document.addEventListener("DOMContentLoaded", function () { openModal(); });

let x = document.getElementById('sideBar');
let n = document.getElementById('respNavbar');
let b = document.getElementById('bars');
let c = document.getElementById('close');

let m = document.getElementById("myModal");

// Gets user session
function getSession() {
    let bool = localStorage.getItem('pid');
    return bool;
}

// If user does not have a session, saves one for him.
function saveSession() {
    let rand = Math.random().toString(15);

    localStorage.setItem('pid', rand);
}

// If confirmed, hide modal and save session to localStorage.
function hideModal() {
    enableScroll();
    document.body.style.overflow = "visible";
    m.style.display = 'none';

    if ( !getSession() ) {
        saveSession();
    }
}

// Open modal if user is there for the first time
function openModal() {
    if ( !getSession() ) {
        disableScroll();
        document.body.style.overflow = "hidden";
        m.style.display = 'block';
    }
}

// Sidebar section thingie (*laughs in misleading names*) 
function opCloseNav() {
    if (b.className.includes('reopen')) {
        b.className = 'icon fa-lg weedify';
        openNav();
    }
    else {
        b.className += ' reopen';
        closeNav();
    }
}

function openNav() {
    x.style.width = '250px';
    b.style.transitionDuration = '0.5s';
    b.style.transform = 'rotate(90deg)';
    b.style.zIndex = '9999990';
}

function closeNav() {
    x.style.width = '0';
    b.style.transitionDuration = '0.5s';
    b.style.transform = 'rotate(0deg)';
}

///////////////////////////////////////////////////////////////////
//      IGNORE EVERYTHING IN THAT SECTION (DISABLING SCROLL)     //
///////////////////////////////////////////////////////////////////
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
    e.preventDefault();
  }
  
  function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
      preventDefault(e);
      return false;
    }
  }
  
var supportsPassive = false;

try {
    window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
        get: function () { supportsPassive = true; }
    }));
} catch (e) { }

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

function disableScroll() {
    window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

function enableScroll() {
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
    window.removeEventListener('touchmove', preventDefault, wheelOpt);
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}