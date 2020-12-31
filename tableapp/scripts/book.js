function BookNow(guestName, guestEmail, guestPax, guestRemarks) {
  let url =
    "https://api.sheety.co/21f68e939f7567bfd0d166e36b99e2c2/bookingApp/bookings";
  let body = {
    booking: {
      name: guestName,
      email: guestEmail,
      pax: guestPax,
      remarks: guestRemarks,
    },
  };
  fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      alert(json.bookings.name + " added!");
    });
}

window.addEventListener("load", function () {
  document.getElementById("bookNow").addEventListener("click", function () {
    let userName = document.getElementById("userName").value;
    let userEmail = document.getElementById("userEmail").value;
    let userPax = document.getElementById("userPax").value;
    let userRemarks = document.getElementById("userRemarks").value;

    BookNow(userName, userEmail, userPax, userRemarks);
  });
});