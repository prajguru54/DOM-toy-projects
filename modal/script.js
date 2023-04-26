"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const showModalButtons = document.querySelectorAll(".show-modal");
const closeModalButton = document.querySelector(".close-modal");

const showModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let btn of showModalButtons) {
  btn.addEventListener("click", showModal);
}
closeModalButton.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
