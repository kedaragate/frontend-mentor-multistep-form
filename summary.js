const stepFourIndicator = document.querySelector(".step-4-indicator");
const allUpdatedData = JSON.parse(sessionStorage.getItem("allUpdatedData"));
console.log(allUpdatedData);
function displayStepIndicator(element) {
  element.style = "background-color:hsl(206, 94%, 87%); color:black";
}

if (
  location.pathname === "/pages/summary-page.html" ||
  location.pathname === "/pages/thank-you-page.html"
) {
  displayStepIndicator(stepFourIndicator);
}

const choosenBasePlan = document.querySelector(".base-plan-name");
const basePlanAmount = document.querySelector(".base-plan-amount-summary");
const addOnsSumamryContainer = document.querySelector(
  ".add-ons-summary-container"
);

const totalAmountText = document.querySelector(".total-amount-text");
const totalAmountValueElement = document.querySelector(".total-amount");

choosenBasePlan.textContent = `${allUpdatedData[0].basePlan}(${allUpdatedData[0].basePlanDuration})`;
basePlanAmount.textContent = `${allUpdatedData[0].basePlanAmount}${
  allUpdatedData[0].basePlanDuration === "monthly" ? "/mo" : "/yr"
}`;

allUpdatedData[0].addOnServices.forEach((service) => {
  htmlContent = `<div class="add-ons-summary">
  <span>${service.addOnServiceName.replace(/([a-z])([A-Z])/g, "$1 $2")}</span>
    <span class="add-ons-summary-amount">+$${service.addOnServiceAmount}${
    allUpdatedData[0].basePlanDuration === "monthly" ? "/mo" : "/yr"
  }</span>
  </div>`;

  addOnsSumamryContainer.insertAdjacentHTML("afterbegin", htmlContent);
});

totalAmountText.textContent = `${
  allUpdatedData[0].basePlanDuration === "monthly"
    ? "Total (per month)"
    : "Total (per year)"
}`;

function getTotalAmount(data) {
  const basePlanAmount = data.basePlanAmount;
  const addOnServicesTotalAmount = data.addOnServices.reduce(
    (totalAmount, currentElement) => {
      return totalAmount + currentElement.addOnServiceAmount;
    },
    0
  );
  return basePlanAmount + addOnServicesTotalAmount;
}

const totalAmount = getTotalAmount(allUpdatedData[0]);

totalAmountValueElement.textContent = `${
  allUpdatedData[0].basePlanDuration === "monthly"
    ? totalAmount + "/mo"
    : totalAmount + "/yr"
}`;

const confirmButton = document.querySelector(".confirm-btn");

confirmButton.addEventListener("click", (e) => {
  e.preventDefault();

  location.href = "/pages/thank-you-page.html";
});
