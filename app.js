let btn = document.querySelector("#tg-btn");
let sidebar = document.querySelector(".sidebar");
let searchbtn= document.querySelector(".fa-search");


btn.onclick = function(){
    sidebar.classList.toggle("active");
    console.log("clicked")
}
searchbtn.onclick = function(){
    sidebar.classList.toggle("active");
    console.log("clicked")
}