function openDetail(title, text) {
  document.getElementById("modalTitle").innerText = title;
  document.getElementById("modalText").innerText = text;
  document.getElementById("detailModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("detailModal").style.display = "none";
}

function openContact() {
  document.getElementById("contactModal").style.display = "flex";
}

function closeContact() {
  document.getElementById("contactModal").style.display = "none";
}

window.onclick = function (e) {
  if (e.target.classList.contains("modal")) {
    e.target.style.display = "none";
  }
};