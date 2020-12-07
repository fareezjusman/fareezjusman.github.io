let elLocate = document.getElementById("locate");
elLocate.addEventListener("click", function () {
  let elLate = document.getElementById("lat");
  let elLong = document.getElementById("long");

  elLate.innerHTML = "Latitude : " + position.coords.latitude;
  elLong.innerHTML = "Longitude : " + position.coords.latitude;
});
