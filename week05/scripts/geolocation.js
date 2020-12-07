let elLocate = document.getElementById("locate");
elLocate.addEventListener("click", function () {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      let elLate = document.getElementById("lat");
      let elLong = document.getElementById("long");

      elLate.innerHTML = "Latitude : " + position.coords.latitude;
      elLong.innerHTML = "Longitude : " + position.coords.latitude;
    });
  } else {
    alert("Geolocation is not supported by this browser");
  }
});
