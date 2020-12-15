function GetBookings() {
  let url =
    "https://api.sheety.co/21f68e939f7567bfd0d166e36b99e2c2/bookingApp/bookings";
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      // Do something with the data
      console.log(json.bookings);
      let bookingList = document.getElementById("bookingList");
      bookingList.innerHTML = "";

      let jsonDiv = document.getElementById("json");
      jsonDiv.innerHTML = ""; //null list
      jsonDiv.innerHTML = json.bookings;

      for (let i = 0; i < json.bookings.length; i++) {
        let gName = json.bookings[i].name;
        let gEmail = json.bookings[i].email;
        let gPax = json.bookings[i].pax;
        let gId = json.bookings[i].id;

        bookingList.innerHTML +=
          gId + "-" + gName + ", " + gEmail + ", pax:" + gPax + "<br>";
      }
    });
}

let getBookingBBtn = document
  .getElementById("getBooking")
  .addEventListener("click", function () {
    GetBookings();
  });
