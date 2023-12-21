let personalInfo = JSON.parse(sessionStorage.getItem("personalInfo"));
const toggleSwitch = document.getElementById("plan-toggle-switch");

console.log(toggleSwitch.getAttribute);
console.log(personalInfo);
let planDuration = "";

toggleSwitch.addEventListener("click", (e) => {
  if (e.target.checked) {
    toggleSwitch.value = "yearly";
  } else {
    toggleSwitch.value = "monthly";
  }
});
