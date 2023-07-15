// For collapsibles

const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

// Get the modal
let modal = document.getElementById("myModal"); //this needs to be an ID because if you open up by class any and all with that class will open and may crash the browser

// Get the image and insert it inside the modal - use its "alt" text as a caption
let img = document.getElementById("myImg");
let modalImg = document.getElementById("img01");
let captionText = document.getElementById("caption");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};

// Get modal content
let modalContent = document.getElementsByClassName("modal-content");

const closeModal = () => {
  modal.style.display = "none";
};

const notClickModalContent = (event) => {
  if (event.target === modal) {
    console.log("test works1");
    closeModal();
  }
};

// event listener if not click modal content
window.addEventListener("click", notClickModalContent);

// JavaScript code to enable smooth scrolling for specific links
const smoothScrollLinks = document.querySelectorAll(".smooth-scroll-link");

smoothScrollLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const targetId = link.getAttribute("href");
    document.querySelector(targetId).scrollIntoView({
      behavior: "smooth",
    });
  });
});


