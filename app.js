//home page buttons
const sign_in_btn = document.querySelector("#client-btn");
const sign_up_btn = document.querySelector("#artist-btn");
const container = document.querySelector(".container");
const login = document.querySelector('.log')

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
  login.style.display = "none";

});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
  login.style.display = "block"
});

