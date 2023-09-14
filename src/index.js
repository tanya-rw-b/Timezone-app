function showSelectedCountry(event) {
  if (event.target.value.length > 0) {
    if (event.target.value === "france") {
      alert(`Bonjour! It is currently ${parisTime} in Paris`);
    }
    if (event.target.value === "japan") {
      alert(`Kon'nichiwa! It is currently ${tokyoTime} in Tokyo`);
    }
    if (event.target.value === "australia") {
      alert(`G'day! It is currently ${sydneyTime} in Sydney`);
    }
  }
}

let countriesSelect = document.querySelector("#countries");
countriesSelect.addEventListener("change", showSelectedCountry);

let tokyoTime = moment().tz("Asia/Tokyo").format("dddd, MMMM D, YYYY h:m A");

let parisTime = moment().tz("Europe/Paris").format("dddd, MMMM D, YYYY h:m A");

let sydneyTime = moment()
  .tz("Australia/Sydney")
  .format("dddd, MMMM D, YYYY h:m A");
