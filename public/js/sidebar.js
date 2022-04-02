let x = document.getElementById('sideBar');
let b = document.getElementById('bars');

let r = document.getElementById('bars');

function opCloseNav() {
    if ( r.className.includes('reopen') ) { 
        openNav();
        r.className = 'icon fa-lg weedify'; 
    }
    else {
        r.className += ' reopen';
        closeNav();
    }
}

function openNav() {
    document.getElementById('sideBar').style.width = '250px';
}

function closeNav() {
    document.getElementById('sideBar').style.width = '0';
}