function BookNow(
  guestName,
  guestEmail,
  guestPhone,
  guestDate,
  guestPax,
  guestEvent,
  guestRemarks
) {
  let url =
    "https://api.sheety.co/21f68e939f7567bfd0d166e36b99e2c2/spaceApp/bookings";

  let body = {
    booking: {
      name: guestName,
      email: guestEmail,
      phone: guestPhone,
      date: guestDate,
      pax: guestPax,
      event1: guestEvent,
      remarks: guestRemarks,
    },
  };

  fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      // Do something with the data
      //console.log(json.bookings);
      alert(json.booking.name + " Your booking is added");
    });
}

window.addEventListener("load", function () {
  document.getElementById("bookNow").addEventListener("click", function () {
    let userName = document.getElementById("userName").value;
    let userEmail = document.getElementById("userEmail").value;
    let userPhone = document.getElementById("userPhone").value;
    let userDate = document.getElementById("userDate").value;
    let userPax = document.getElementById("userPax").value;
    let userEvent = document.getElementById("userEvent").value;
    let userRemarks = document.getElementById("userRemarks").value;

    BookNow(
      userName,
      userEmail,
      userPhone,
      userDate,
      userPax,
      userEvent,
      userRemarks
    );
  });
});
