const stepThreeIndicator = document.querySelector(".step-3-indicator");
const userData = JSON.parse(sessionStorage.getItem("userData"));
console.log(userData);
function displayStepIndicator(element) {
  element.style = "background-color:hsl(206, 94%, 87%); color:black";
}

if (location.pathname === "/add-ons-page.html") {
  displayStepIndicator(stepThreeIndicator);
}

if ((userData[0].planDuration = "monthly")) {
}

const addOnsDataElement = document.getElementById("step-3-form");

addOnsDataElement.querySelectorAll("input[type=checkbox]").forEach((ele) => {
  if (ele.checked) {
    console.log(ele);
  }
});

addOnsDataElement.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target);
  const data = new FormData(e.target);

  const addOnsData = Object.fromEntries(data);
  console.log(addOnsData);
});

console.log(JSON.parse(sessionStorage.getItem("userData")));
