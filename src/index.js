let now = new Date();
let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
let month = months[now.getMonth()];
let cardDate = document.querySelector("#cardDate");
cardDate.innerHTML = `Now ${month} ${date}  /  ${day}  /  ${hours}:${minutes}`;

function submit(event) {
  event.preventDefault();
  let inp = document.querySelector("#city");
  let cityValue = document.querySelector("#card-city");
  cityValue.innerHTML = inp.value;
}
let form = document.querySelector("form");
form.addEventListener("submit", submit);

let celsius = document.querySelector("#celsius-link");
let fahrenheit = document.querySelector("#fahrenheit-link");
let temperature = document.querySelector("#temperature");
function showcel(event) {
  temperature.innerHTML = 35;
}
function showfahr(event) {
  temperature.innerHTML = 95;
}
celsius.addEventListener("click", showcel);
fahrenheit.addEventListener("click", showfahr);
