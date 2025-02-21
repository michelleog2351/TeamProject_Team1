$(document).ready(function () {
    nav();
    footer();
    $("#fbody").append(`
        <div class="mb-3">
            <label  class="form-label" for="startTime">Start Time</label>
            <input class="form-control" type="time" name="startTime" id="startTime" />
        </div>

        <div class="mb-3">
            <label class="form-label" for="date">Date</label>
            <input class="form-control" type="date" name="date" id="date"></             >
        </div>

        <div class="mb-3">
            <label class="form-label" for="seatsRemaining">Seats Remaining</label>
            <input class="form-control" type="text" name="seatsRemaining" id="seatsRemaining"></input>
        </div>

        
        <div class="mb-3">
            <label class="form-label" for="seatsRemaining">Select Film</label>
            <select class="form-select" id="filmSelect" name="films">
            </select>
        </div>
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

// function getTheatreData() {
//     $.getJSON(`http://localhost:3000/theatre`, function (data) {
//         $.each(data, function (i, value) {
//             $(`#theatreSelect`).append(`<option value=${value.TheatreID}>${value.TheatreID}</option>`);
//         });
//     });
// }