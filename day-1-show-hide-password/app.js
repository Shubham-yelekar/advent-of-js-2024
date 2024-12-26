function myFunction() {
  let passInput = document.getElementById("passwordInput");
  let eyeIcon = document.querySelector(".eye-box");
  let lockIcon = document.getElementById("lockIcon");

  if (passInput.type === "password") {
    passInput.type = "text";
    passInput.classList.add("show");
    eyeIcon.classList.add("show");
    lockIcon.classList = "";
    lockIcon.classList.add("java-icon");
  } else {
    passInput.type = "password";
    eyeIcon.classList.remove("show");
    passInput.classList.remove("show");
    lockIcon.classList = " ";
    lockIcon.classList.add("dark-icon");
  }
}
