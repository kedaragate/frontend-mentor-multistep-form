let personalInfo = document.getElementById("step-1-form");

personalInfo.querySelectorAll("input").forEach((field) => {
  field.addEventListener("blur", () => {
    if (!field.value) {
      const errorMessage = document.createElement("span");
      errorMessage.className = "required-field-message";

      errorMessage.textContent = "This field is required.";

      if (field.nextElementSibling == null) {
        field.parentNode.appendChild(errorMessage);
      }
    }
  });
});

personalInfo.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = new FormData(personalInfo);
  let userData = Object.fromEntries(data);
  console.log(userData);
});
