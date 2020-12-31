function GetBookings() {
  let url =
    "https://api.sheety.co/21f68e939f7567bfd0d166e36b99e2c2/spaceApp/bookings";
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      // Do something with the data
      //console.log(json.bookings);

      let bookingList = document.getElementById("booking-list");
      let bookingIds = [];

      //clear table rows
      for (let k = bookingList.rows.length - 1; k > 0; k--) {
        bookingList.deleteRow(k);
      }

      for (let i = 0; i < json.bookings.length; i++) {
        let gId = json.bookings[i].id;
        let gName = json.bookings[i].name;
        let gEmail = json.bookings[i].email;
        let gPhone = json.bookings[i].phone;
        let gDate = json.bookings[i].date;
        let gPax = json.bookings[i].pax;
        let gEvent = json.bookings[i].event;
        let gRemarks = json.bookings[i].remarks;
        let buttonId = "delete" + gId;

        let row = bookingList.insertRow(bookingList.rows.length);
        row.insertCell(0).innerHTML = gId;
        row.insertCell(1).innerHTML = gName;
        row.insertCell(2).innerHTML = gEmail;
        row.insertCell(3).innerHTML = gPhone;
        row.insertCell(4).innerHTML = gDate;
        row.insertCell(5).innerHTML = gPax;
        row.insertCell(6).innerHTML = gEvent;
        row.insertCell(7).innerHTML = gRemarks;
        row.insertCell(8).innerHTML =
          "<button id='" +
          buttonId +
          "' class='btn btn-danger'>Delete</button>";

        bookingIds.push(buttonId);
      }

      for (let j = 0; j < bookingIds.length; j++) {
        let el = document.getElementById(bookingIds[j]);
        el.addEventListener("click", function () {
          let theId = bookingIds[j].replace("delete", "");
          DeleteBooking(theId);
        });
      }
    });
}

window.addEventListener("load", function () {
  document.getElementById("refreshList").addEventListener("click", function () {
    GetBookings();
  });
});

function DeleteBooking(id) {
  let url =
    "https://api.sheety.co/21f68e939f7567bfd0d166e36b99e2c2/spaceApp/bookings/" +
    id;
  fetch(url, {
    method: "DELETE",
  }).then((response) => {
    GetBookings();
  });
}
