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
  let nameRegex = new RegExp(/^([a-zA-Z '.-]{2,75})$/);
  let emailRegex = new RegExp(
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/
  );
  let data = new FormData(personalInfoForm);
  let userData = Object.fromEntries(data);

  if (nameRegex.test(userData.name) && emailRegex.test(userData.email)) {
    let personalData = [];
    personalData.push(userData);
    sessionStorage.setItem("personalInfo", JSON.stringify(personalData));
    location.href = "pages/plan-selection-page.html";
  }
});
const userData = JSON.parse(sessionStorage.getItem("personalInfo"));
const customerName = document.getElementById("name");
const customerEmail = document.getElementById("email");
const customerPhoneNumber = document.getElementById("phone-no");
if (userData) {
  customerName.value = userData[0].name;
  customerEmail.value = userData[0].email;
  customerPhoneNumber.value = userData[0].phoneNumber;
}
