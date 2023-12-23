const stepThreeIndicator = document.querySelector(".step-3-indicator");

function displayStepIndicator(element) {
  element.style = "background-color:hsl(206, 94%, 87%); color:black";
}

if (location.pathname === "/add-ons-page.html") {
  displayStepIndicator(stepThreeIndicator);
}

const addOnsDataElement = document.getElementById("step-3-form");

addOnsDataElement.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target);
  const data = new FormData(e.target);

  const addOnsData = Object.fromEntries(data);
});
