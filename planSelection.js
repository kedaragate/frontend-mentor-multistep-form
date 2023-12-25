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

if (location.pathname === "/pages/plan-selection-page.html") {
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

const arcadePlanAmountTextDisplayElement =
  document.querySelector(".arcade-plan");
const advancedPlanAmountTextDisplayElement =
  document.querySelector(".advanced-plan");
const proPlanAmountTextDisplayElement = document.querySelector(".pro-plan");

const arcadePlan = document.querySelector("#plan-option-1");
const advancedPlan = document.querySelector("#plan-option-2");
const proPlan = document.querySelector("#plan-option-3");

toggleSwitch.addEventListener("change", () => {
  if (toggleSwitch.checked) {
    arcadePlan.dataset.amount = 90;
    arcadePlanAmountTextDisplayElement.textContent = "90/yr";
    arcadePlan.dataset.planDuration = "yearly";
    advancedPlan.dataset.amount = 120;
    advancedPlanAmountTextDisplayElement.textContent = "120/yr";
    advancedPlan.dataset.planDuration = "yearly";
    proPlan.dataset.amount = 150;
    proPlanAmountTextDisplayElement.textContent = "150/yr";
    proPlan.dataset.planDuration = "yearly";
  } else {
    arcadePlan.dataset.amount = 9;
    arcadePlanAmountTextDisplayElement.textContent = "9/mo";
    arcadePlan.dataset.planDuration = "monthly";
    advancedPlan.dataset.amount = 12;
    advancedPlanAmountTextDisplayElement.textContent = "12/mo";
    advancedPlan.dataset.planDuration = "monthly";
    proPlan.dataset.amount = 15;
    proPlanAmountTextDisplayElement.textContent = "15/mo";
    proPlan.dataset.planDuration = "monthly";
  }
});

nextButton.addEventListener("click", (e) => {
  e.preventDefault();
  const selectedPlan = [];
  planSelectionInfo.querySelectorAll("input[type = radio]").forEach((ele) => {
    console.log(ele);
    if (ele.checked && personalInfo) {
      console.log(ele.value, ele.dataset.amount, ele.dataset.planDuration);

      selectedPlan.push({
        name: personalInfo[0].name,
        email: personalInfo[0].email,
        phoneNumber: personalInfo[0].phoneNumber,
        basePlan: ele.value,
        basePlanAmount: Number(ele.dataset.amount),
        basePlanDuration: ele.dataset.planDuration,
      });
    }
    //if (!personalInfo) {
    //location.href = "/index.html";
    //}
  });
  console.log(selectedPlan);
  sessionStorage.setItem("userData", JSON.stringify(selectedPlan));

  location.href = "/pages/add-ons-page.html";
});

const selectedPlanData = JSON.parse(sessionStorage.getItem("userData"));

console.log(selectedPlanData);

if (selectedPlanData) {
  let plan = Array.from(
    planSelectionInfo.querySelectorAll("input[type = radio]")
  ).filter((ele) => {
    return selectedPlanData[0].basePlan === ele.value;
  });

  plan[0].checked = true;
  if (selectedPlanData[0].basePlanDuration === "yearly") {
    toggleSwitch.checked = true;
  }
}
