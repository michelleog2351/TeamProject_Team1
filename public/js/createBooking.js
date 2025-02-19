$(document).ready(function () {
  $("#fbody").append(`
        <div class="mb-3">
					<label class="form-label" for="bookingID">Booking ID</label>
					<input
						class="form-control"
						type="text"
						id="bookingID"
						name="bookingID"
						placeholder="Enter booking ID"
						step="0.01"
						required
					/>
				</div>

				<div class="mb-3">
					<label class="form-label" for="noOfSeats">No. Seats</label>
					<input
						class="form-control"
						type="number"
						id="noOfSeats"
						name="noOfSeats"
						placeholder="Enter total number of seats"
						min="1"
						required
					/>
				</div>

				<div class="mb-3">
					<label class="form-label" for="cost">Total Cost</label>
					<input
						class="form-control"
						type="number"
						id="cost"
						name="cost"
						placeholder="Enter total cost"
						step="0.01"
						required
					/>
				</div>

				<div class="mb-3">
					<label class="form-label" for="email">Email</label>
					<input
						class="form-control"
						type="text"
						id="email"
						name="email"
						placeholder="Enter email address"
						step="0.01"
						required
					/>
				</div>
        <br>
    `);
  $("#cancel").click(function () {
    location.replace("http://localhost:3000/booking.html");
  });

  $("#save").click(function () {
    let newBooking = {
      noOfSeats: $("#noOfSeats").val(),
      cost: $("#cost").val(),
      email: $("#email").val(),
    };
    $.post(`http://localhost:3000/createBooking`, newBooking)
      .done(function () {
        alert("Film created successfully!");
        location.replace("http://localhost:3000/booking.html");
      })
      .fail(function () {
        alert("Error creating booking.");
      });
  });
});
