const personalInfo = JSON.parse(sessionStorage.getItem("personalInfo"));
const planSelectionInfo = document.getElementById("step-2-form");
const toggleSwitch = document.getElementById("plan-toggle-switch");
const nextButton = document.querySelector(".step-2-next-btn");
const toggleSwitchContainer = document.querySelector(
  ".monthly-yearly-toggle-div"
);

const defaultPlanDuration = document.querySelector(".default-plan-duration");
const monthlyLable = document.querySelector(".monthly-lable");
const yearlyLable = document.querySelector(".yearly-lable");

const stepTwoIndicator = document.querySelector(".step-2-indicator");

function displayStepIndicator(element) {
  element.style = "background-color:hsl(206, 94%, 87%); color:black";
}

if (location.pathname === "/plan-selection-page.html") {
  displayStepIndicator(stepTwoIndicator);
}

toggleSwitch.addEventListener("click", (e) => {
  if (e.target.checked) {
    toggleSwitch.value = "yearly";
    defaultPlanDuration.disabled = true;
    monthlyLable.style.color = "hsl(231, 11%, 63%)";
    yearlyLable.style.color = "hsl(213, 96%, 18%)";
  } else {
    defaultPlanDuration.disabled = false;
    toggleSwitch.value = "monthly";
    yearlyLable.style.color = "hsl(231, 11%, 63%)";
    monthlyLable.style.color = "hsl(213, 96%, 18%)";
  }
});

planSelectionInfo.addEventListener("submit", (e) => {
  e.preventDefault();

  let data = new FormData(e.target);
  let formData = Object.fromEntries(data);
  console.log(formData);
  const userData = {
    planOption: formData["plan-option"],
    billingDuration: formData["billing-duration"],
  };

  sessionStorage.setItem("userData", JSON.stringify(userData));

  console.log(JSON.parse(sessionStorage.getItem("userData")));
  location.href = "/add-ons-page.html";
});
