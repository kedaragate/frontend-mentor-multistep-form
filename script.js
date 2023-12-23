const personalInfoForm = document.getElementById("step-1-form");
const stepOneIndicator = document.querySelector(".step-1-indicator");

function displayStepIndicator(element) {
  element.style = "background-color:hsl(206, 94%, 87%); color:black";
}

if (location.pathname === "/index.html") {
  console.log(true);
  displayStepIndicator(stepOneIndicator);
}
console.log("next");

personalInfoForm.querySelectorAll("input").forEach((field) => {
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

personalInfoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("submit");
  let nameRegex = new RegExp("^([a-zA-Z '.-]{2,75})$");
  let emailRegex = new RegExp(
    `/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/`
  );
  let data = new FormData(personalInfoForm);
  let userData = Object.fromEntries(data);

  if (nameRegex.test(userData.name)) {
    sessionStorage.setItem("personalInfo", JSON.stringify(userData));
    location.href = "/plan-selection-page.html";
  }
});

//JS for plan-selection-page.html
