const personalInfo = document.getElementById("step-1-form");
const stepOneIndicator = document.querySelector(".step-1-indicator");

function displayStepIndicator(element) {
  element.style = "background-color:hsl(206, 94%, 87%); color:black";
}

if (location.pathname === "/index.html") {
  console.log(true);
  displayStepIndicator(stepOneIndicator);
}
console.log("next");

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
  console.log("submit");
  let nameRegex = new RegExp("^([a-zA-Z '.-]{2,75})$");
  let emailRegex = new RegExp(
    "^([a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-]+)$"
  );
  let data = new FormData(personalInfo);
  let userData = Object.fromEntries(data);
  if (nameRegex.test(userData.name) && emailRegex.test(userData.email)) {
    sessionStorage.setItem("personalInfo", JSON.stringify(userData));
    location.href = "/plan-selection-page.html";
    console.log(true);
  }
});

//JS for plan-selection-page.html
