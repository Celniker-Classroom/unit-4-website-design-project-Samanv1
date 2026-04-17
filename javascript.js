const text = "Music Booth";
let index = 0;
const speed = 200;

function typeWriter() {
  if (index < text.length) {
    document.getElementById("title").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = function() {
  document.getElementById("title").innerHTML = "";
  setTimeout(typeWriter, 2000); // 2 second delay
};

function myFunction(x) {
  x.classList.toggle("fa-thumbs-down");
}

function MyFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}