function myFunction() {
    var x = document.getElementById("sideBar");
    var l = document.getElementById("sideBarLinks");

    if (x.className === "sidebar.inactive") {
        x.style.width = 200;
        x.className = "sidebar";
        l.className = "visible";
    } 
    else {
        x.className = "sidebar.inactive";
        l.className = "hidden";
    }
}