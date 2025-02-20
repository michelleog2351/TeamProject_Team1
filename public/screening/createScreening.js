$(document).ready(function () {
    $("#fbody").append(`<label  class="form-label" for="startTime">Start Time</label>
        <input class="form-control" type="time" name="startTime" id="startTime"></input>

        <label class="form-label" for="date">Date</label>
        <input class="form-control" type="date" name="date" id="date"></input>
        
        <label class="form-label" for="seatsRemaining">Seats Remaining</label>
        <input class="form-control" type="text" name="seatsRemaining" id="seatsRemaining"></input>

        <label class="form-label" for="theatreID">TheatreID</label>
        <input class="form-control" type="text" name="theatreID" id="theatreID"></input>
        <br>
        <select class="form-select" id="filmSelect" name="films">
            <option value="0">Select Film</option>
        </select>
        <br>
    `);


    getFilmData()

    $("#cancel").click(function () {
        location.replace("http://localhost:3000/screening/screening.html");
    });

    $("#save").click(function () {
        let newScreening = {
         startTime: $(`#startTime`).val(),
         date : $(`#date`).val(),
         seatsRemaining : $(`#seatsRemaining`).val(),
         theatreID : $(`#theatreID`).val(),
         filmID: $(`#filmID`).val()
        };
        $.post(`http://localhost:3000/createScreening`, newScreening)
            .done(function () {
                alert("Film created successfully!");
                location.replace("http://localhost:3000/screening/screening.html");
            })
    });

});

function getFilmData() {
    $.getJSON(`http://localhost:3000/films`, function (data) {
        $.each(data, function (i, value) {
            $(`#filmSelect`).append(`<option value=${value.Id}>${value.Name}</option>`);
        });
    });
}
