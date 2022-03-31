let x = document.getElementById("sideBar");
let l = document.getElementById("sideBarLinks");

function myFunction() {
    if (x.className === "sidebar.inactive") {
        x.className = "sidebar";
        l.className = "visible";
    } 
    else {
        x.className = "sidebar.inactive";
        l.className = "hidden";
    }
}