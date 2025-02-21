$(`document`).ready(function () {
    nav();
    footer();
    var ID = localStorage.getItem("ScreeningID",ID);
    $(`#fbody`).append(
                
        `
        <div class="mb-3">
            <label  class="form-label" for="startTime">Start Time</label>
            <input class="form-control" type="time" name="startTime" id="startTime"></input>
        </div>

        <div class="mb-3">
            <label class="form-label" for="date">Date</label>
            <input class="form-control" type="date" name="date" id="date"></input>
        </div>

        <div class="mb-3">
            <label class="form-label" for="seatsRemaining">Seats Remaining</label>
            <input class="form-control" type="text" name="seatsRemaining" id="seatsRemaining"></input>
        </div>

        
        <div class="mb-3">
            <label class="form-label" for="films">Select Film</label>
            <select class="form-select" id="filmSelect" name="films">
            </select>
        </div>
        `
    );
    
    // <div class="mb-3">
    //         <label class="form-label" for="theatre">Select Theatre</label>
    //         <select class="form-select" id="theatreSelect" name="theatre">
            
    //         </select>
    //     </div>

    getJsonData(ID);


    $("#cancel").click(function (e) 
    {
        location.replace("http://localhost:3000/screening/screening.html");  
    })

    $("#update").click(function (e) 
    {
        let startTime = $(`#startTime`).val();
        let date = $(`#date`).val();
        let seatsRemaining  = $(`#seatsRemaining`).val();
        let theatreID  = $(`#theatreID`).val();
        let filmID = $(`#filmID`).val();
        

        $.post(`http://localhost:3000/updateScreening/${ID}`, {
            startTime: startTime,
            date: date,
            seatsRemaining: seatsRemaining,
            theatreID: theatreID,
            filmID: filmID
        })
        .done(function () {
            location.replace("http://localhost:3000/screening/screening.html");
        })
    });

});

function getJsonData(ID) {
    $.getJSON(`http://localhost:3000/screening/${ID}`, function(data){
        // Ensure data is an object, and access it directly
        let screeningDate = new Date(data.Date);
        let formattedDate = screeningDate.toISOString().split('T')[0];

        // Populate the input fields with the data
        $(`#startTime`).val(data.StartTime);  
        $(`#date`).val(formattedDate);        
        $(`#seatsRemaining`).val(data.SeatsRemaining);  
        $(`#theatreID`).val(data.TheatreID); 
        console.log(data.FilmID);
        getFilmData(data.FilmID);
        
    });
}


function getFilmData(FilmID) {
    console.log(FilmID);
    $.getJSON(`http://localhost:3000/films`, function (data) {
        $(`#filmSelect`).empty();
        $.each(data, function (i, value) {
            console.log(value.FilmID)
            let isSelected = (value.FilmID === FilmID) ? 'selected' : ''; // Check if it's the current film
            $(`#filmSelect`).append(`<option value="${value.FilmID}" ${isSelected}>${value.Name}</option>`);
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