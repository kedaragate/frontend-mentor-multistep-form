const personalInfo = JSON.parse(sessionStorage.getItem("personalInfo"));
const planSelectionInfo = document.getElementById("step-2-form");
const toggleSwitch = document.getElementById("plan-toggle-switch");
const nextButton = document.querySelector(".step-2-next-btn");
const toggleSwitchContainer = document.querySelector(
  ".monthly-yearly-toggle-div"
);

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
    monthlyLable.style.color = "hsl(231, 11%, 63%)";
    yearlyLable.style.color = "hsl(213, 96%, 18%)";
  } else {
    yearlyLable.style.color = "hsl(231, 11%, 63%)";
    monthlyLable.style.color = "hsl(213, 96%, 18%)";
  }
});

const arcadePlanAmountElement = document.querySelector(".arcade-plan");
const advancedPlanAmountElement = document.querySelector(".advanced-plan");
const proPlanAmountElement = document.querySelector(".pro-plan");
const arcadePlanAmount = document.querySelector(".arcadePlanAmount");
const advancedPlanAmount = document.querySelector(".advancedPlanAmount");
const proPlanAmount = document.querySelector(".proPlanAmount");

toggleSwitch.addEventListener("change", () => {
  if (toggleSwitch.checked) {
    arcadePlanAmount.value = 90;
    arcadePlanAmountElement.textContent = "90/yr";
    advancedPlanAmount.value = 120;
    advancedPlanAmountElement.textContent = "120/yr";
    proPlanAmount.value = 150;
    proPlanAmountElement.textContent = "150/yr";
  } else {
    arcadePlanAmount.value = 9;
    arcadePlanAmountElement.textContent = "9/mo";
    advancedPlanAmount.value = 12;
    advancedPlanAmountElement.textContent = "12/mo";
    proPlanAmount.value = 15;
    proPlanAmountElement.textContent = "15/mo";
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
  // location.href = "/add-ons-page.html";
});
