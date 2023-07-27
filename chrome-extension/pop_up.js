const message = document.querySelector("h1");
const button = document.querySelector("#change_message");

button.addEventListener("click", () => {
  message.textContent = "New message";
});
