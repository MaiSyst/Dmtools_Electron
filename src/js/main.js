let li = document.querySelectorAll(".sidebar nav li");
let spanItem = document.querySelectorAll(".sidebar nav li a .menuItem");
let hamburger = document.querySelector("#hamburger");
let sidebar = document.querySelector(".sidebar");
let titleC = document.querySelector(".container_title");
let titleSigle = document.querySelector(".container_titleSigle");
let topbar=document.querySelector(".topbar");
const addSelector = () => {
  li.forEach((el, i) => {
    let span = document.createElement("span");
    span.style.position = "absolute";
    span.style.left = "0px";
    span.style.top = "18px";
    span.style.width = "7px";
    span.style.height = "25px";
    span.style.background = "#0080ff";
    span.style.borderRadius = "5px";
    span.style.transition = "all 0.5s";
    span.style.transform = "translateY(-50px)";
    el.appendChild(span);
    if (el.className == "active") {
      span.style.transform = "translateY(0px)";
    }
  });
};
addSelector();
//Items sidebar
li.forEach((el, i) => {
  el.addEventListener("click", (e) => {
    window.ipcRenderer.send(e.target.id);
    if (el.className == "active") {
      el.querySelector("span").style.transform = "translateY(0px)";
    }
  });
  el.addEventListener("mouseenter", (e) => {
    e.preventDefault();
    if (el.className == "active") {
      el.querySelector("span").style.transform = "translateY(0px)";
    } else {
      el.querySelector("span").style.transition =
        "all 0.5s cubic-bezier(0.42, 2, 0.58, 1)";
      el.querySelector("span").style.transform = "translateY(0px)";
      el.querySelector("span").addEventListener("transitionend", () => {
        el.querySelector("span").style.transition =
          "all 0.5s cubic-bezier(0.42, 2, 0.58, 1)";
        el.querySelector("span").style.transform = "translateY(0px)";
      });
    }
  });
  el.addEventListener("mouseleave", (e) => {
    e.preventDefault();
    if (el.className == "active") {
      el.querySelector("span").style.transform = "translateY(0px)";
    } else {
      el.querySelector("span").style.transform = "translateY(50px)";
      el.querySelector("span").addEventListener("transitionend", () => {
        el.querySelector("span").style.transform = "translateY(-50px)";
        el.querySelector("span").style.transition = "none";
      });
    }
  });
});

hamburger.addEventListener("click",()=>{
	sidebar.classList.toggle("active");
	titleC.classList.toggle("active");
	titleSigle.classList.toggle("active");
	topbar.classList.toggle("active");
	spanItem.forEach((el) => (el.classList.toggle("active")));
})