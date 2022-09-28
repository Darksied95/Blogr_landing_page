const hamburger = document.getElementById("hamburger");
const nav_lists_container = document.getElementById(
    "nav-lists-container"
);
const sub_list = document.getElementById("sub-list");
const connect = document.getElementById("connect");
const closeIcon = document.getElementById("close-icon");

hamburger.addEventListener("click", () => {
    hamburger.style.display = "none";
    nav_lists_container.style.display = "block";
    closeIcon.style.display = "block";
});
closeIcon.addEventListener("click", () => {
    hamburger.style.display = "block";
    nav_lists_container.style.display = "none";
    closeIcon.style.display = "none";
});

connect.addEventListener("click", () => {
    console.log(sub_list.style.display);
    if (sub_list.style.display === "" || sub_list.style.display == "none") {
        sub_list.style.display = "block";
    } else {
        sub_list.style.display = "none";
    }
});