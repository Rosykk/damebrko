let x = document.getElementById("sideBar");
let l = document.getElementById("sideBarLinks");

function openNav() {
    document.getElementById("sideBar").style.width = "250px";
}

function closeNav() {
    document.getElementById("sideBar").style.width = "0";
}

// function myFunction() {
//     if (x.className === "sidebar hidden") {
//         x.className = "sidebar visible";
//         l.className = "visible";
//     } 
//     else {
//         x.className = "sidebar hidden";
//         l.className = "hidden";
        
//     }
// }