

// Modified code of the W3 Modal script

// Get the modals
var modal = document.getElementsByClassName("modal");
var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
var modal4 = document.getElementById("myModal4");
// Get the buttons that opens the modal
var btn1 = document.getElementById("modal1");
var btn2 = document.getElementById("modal2");
var btn3 = document.getElementById("modal3");
var btn4 = document.getElementById("modal4");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");

// When the user clicks on the button, open the modal
btn1.onclick = function() {
  modal1.style.display = "flex";
}
btn2.onclick = function() {
  modal2.style.display = "flex";
}
btn3.onclick = function() {
  modal3.style.display = "flex";
}
btn4.onclick = function() {
  modal4.style.display = "flex";
}

// When the user clicks on <span> (x), close the modal
for (let i = 0; i < span.length; i++) {
  span[i].onclick = function() {
    for (let i = 0; i < modal.length; i++) {
      modal[i].style.display = "none";
    }
  
  }
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 