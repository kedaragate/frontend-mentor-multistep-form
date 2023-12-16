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

  let nameRegex = new RegExp("^([a-zA-Z '.-]{2,75})$");
  let emailRegex = new RegExp(
    "^([a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-]+)$"
  );
  let data = new FormData(personalInfo);
  let userData = Object.fromEntries(data);
  if (nameRegex.test(userData.name) && emailRegex.test(userData.email)) {
    sessionStorage.setItem("personalInfo", JSON.stringify(userData));
    location.href = "./plan-selection-page.html";
  }
});

//JS for plan-selection-page.html
