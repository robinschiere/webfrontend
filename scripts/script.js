// JavaScript Document

var rozeThema;

rozeThema = document.querySelector("section:nth-of-type(3) button");
body = document.querySelector("body");


rozeThema.addEventListener("click", doeRozeThema);


function doeRozeThema() {
    body.classList.toggle("roze");
}
