function GetBookings() {
  let url =
    "https://api.sheety.co/21f68e939f7567bfd0d166e36b99e2c2/bookingApp/bookings";
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      // Do something with the data
      console.log(json.bookings);
    });
}

let getBookingBBtn = document
  .getElementById("getBooking")
  .addEventListener("click", function () {
    GetBookings();
  });
