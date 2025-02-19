$(`document`).ready(function () {
    var ID = localStorage.getItem("ID",ID);
    $(`#fbody`).append(
                
        `<div class="mb-3">
					<label class="form-label" for="bookingID">Total Cost</label>
					<input
						class="form-control"
						type="text"
						id="bookingID"
						name="cost"
						placeholder="Enter total cost"
						step="0.01"
						required
					/>
				</div>

				<div class="mb-3">
					<label class="form-label" for="noOfSeats">Number of Seats</label>
					<input
						class="form-control"
						type="number"
						id="noOfSeats"
						name="noOfSeats"
						placeholder="Enter number of seats"
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
						type="number"
						id="email"
						name="email"
						placeholder="Enter email address"
						step="0.01"
						required
					/>
				</div>
        <br>`
        
    )
    
    getJsonData(ID);


    $("#cancel").click(function (e) 
    {
        location.replace("http://localhost:3000/booking.html");  
    })

    $("#update").click(function (e) 
    {
        let noSeats = $(`#noSeats`).val();
        let cost = $(`#cost`).val();
        let email = $(`#email`).val();
        $.post(`http://localhost:3000/updateBooking/${ID}`, {
            noSeats: noSeats,
            cost: cost,
            email: email
        })
        .done(function () {
            location.replace("http://localhost:3000/booking.html");
        })
    });

});

function getJsonData(ID) {
	$.getJSON(`http://localhost:3000/admin/${ID}`, function(data){
		$.each(data, function(i, value){
			$("#noSeats").val(data.NoSeats)
            $("#cost").val(data.Cost)
            $("#email").val(data.Email)

			});
            $(".updateButton").click(function (e) {
                let name = e.target.value;
    
                $.post(`http://localhost:3000/updateAdmin`, {
                    Name: name,
                    Email: email,
                    Password: password
                });
            });
	});
} 