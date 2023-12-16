let personalInfo = JSON.parse(sessionStorage.getItem("personalInfo"));

let text = personalInfo;
console.log(personalInfo);
document.querySelector("h1").textContent =
  personalInfo.name + " " + personalInfo.email + " " + personalInfo.phoneNumber;
