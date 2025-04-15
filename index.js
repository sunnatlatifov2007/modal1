const openmodalbtn = document.querySelector(".opener")
const modalwindow = document.querySelector(".modal-window")
const closemodalbtn = document.getElementById("x")

openmodalbtn.addEventListener("click", () => {
  modalwindow.style.display = "block";
})

closemodalbtn.addEventListener("click", () => {
  modalwindow.style.display = "none"
})