const stepThreeIndicator = document.querySelector(".step-3-indicator");
const userData = JSON.parse(sessionStorage.getItem("userData"));
const step3FormDataElement = document.getElementById("step-3-form");
const step3NextButton = document.querySelector(".step-3-next-btn");

function displayStepIndicator(element) {
  element.style = "background-color:hsl(206, 94%, 87%); color:black";
}

if (location.pathname === "/pages/add-ons-page.html") {
  displayStepIndicator(stepThreeIndicator);
}

const onlineServiceTextElement = document.getElementById("online-service-text");
const largerStorageTextElement = document.getElementById("larger-storage-text");
const customizableProfileTextElement = document.getElementById(
  "customizable-profile-text"
);
console.log(userData[0]);

if (userData[0].basePlanDuration === "yearly") {
  onlineServiceTextElement.textContent = "$10/yr";
  largerStorageTextElement.textContent = "$20/yr";
  customizableProfileTextElement.textContent = "$20/yr";
}

const addOnService = [];
step3NextButton.addEventListener("click", (e) => {
  e.preventDefault();
  step3FormDataElement
    .querySelectorAll("input[type=checkbox]")
    .forEach((ele) => {
      if (ele.checked) {
        if (userData[0].basePlanDuration === "monthly") {
          console.log(ele);
          addOnService.push({
            addOnServiceName: ele.name,
            addOnServiceAmount: Number(ele.dataset.addOnServiceAmount),
          });
        } else {
          console.log(Number(ele.dataset.addOnServiceAmount) * 10);
          addOnService.push({
            addOnServiceName: ele.name,
            addOnServiceAmount: Number(ele.dataset.addOnServiceAmount) * 10,
          });
        }
      }
    });
  userData[0].addOnServices = addOnService;
  sessionStorage.setItem("allUpdatedData", JSON.stringify(userData));

  location.href = "/pages/summary-page.html";
});

const cachedAddOnServicesData = JSON.parse(
  sessionStorage.getItem("allUpdatedData")
)[0].addOnServices;

console.log(cachedAddOnServicesData);

if (cachedAddOnServicesData) {
  const cachedAddOnServiceName = Array.from(cachedAddOnServicesData).map(
    (ele) => {
      return ele.addOnServiceName;
    }
  );
  console.log(cachedAddOnServiceName);
  const addOnCheckboxElements = Array.from(
    step3FormDataElement.querySelectorAll("input[type=checkbox]")
  );
  addOnCheckboxElements.map((checkboxElement) => {
    cachedAddOnServiceName.map((cachedAddOnService) => {
      if (checkboxElement.name === cachedAddOnService) {
        checkboxElement.checked = true;
      }
    });
  });
}
