// Load modal if user is first comer
document.addEventListener("DOMContentLoaded", function () { openModal(); });

let x = document.getElementById('sideBar');
let n = document.getElementById('respNavbar');
let b = document.getElementById('bars');

let m = document.getElementById("myModal");

function saveSession() {
    let rand = Math.floor(Math.random() * 9999999) + 1000000;

    localStorage.setItem('pid', rand);
}

function getSession() {
    let bool = localStorage.getItem('pid');
    return bool;
}

// Modal policy
function openModal() {
    if (!getSession()) {
        disableScroll();
        document.body.style.overflow = "hidden";
        m.style.display = 'block';
    } else {
        document.body.style.overflow = "visible";
        m.style.display = 'none';
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
    // window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

function enableScroll() {
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
    // window.removeEventListener('touchmove', preventDefault, wheelOpt);
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}