let modal = document.getElementById('contact');
         
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const btn = document.getElementById("btn")
const contact = document.getElementById('contact') 
btn.addEventListener("click", () => {
  contact.style.display="block";
})