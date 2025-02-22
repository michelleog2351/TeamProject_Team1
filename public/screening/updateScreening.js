$(`document`).ready(function () {
    nav();
    footer();

    var ID = localStorage.getItem("ID",ID);
    $(`#fbody`).append(
                
        `<label  class="form-label" for="startTime">Start Time</label>
        <input class="form-control" type="text" name="startTime" id="startTime"></input>

        <label class="form-label" for="date">Date</label>
        <input class="form-control" type="text" name="date" id="date"></input>
        
        <label class="form-label" for="seatsRemaining">Seats Remaining</label>
        <input class="form-control" type="text" name="seatsRemaining" id="seatsRemaining"></input>

        <label class="form-label" for="theatreID">TheatreID</label>
        <input class="form-control" type="text" name="theatreID" id="theatreID"></input>

        <label class="form-label" for="filmID">FilmID</label>
        <input class="form-control" type="text" name="filmID" id="filmID"></input>
        <br>`
        
    )
    
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
        $(`#startTime`).val(data.StartTime);  // Corrected case to match your DB field
        $(`#date`).val(formattedDate);        // Corrected formatted date for the input
        $(`#seatsRemaining`).val(data.SeatsRemaining);  // Corrected to match your DB field
        $(`#theatreID`).val(data.TheatreID);  // Corrected to match your DB field
        $(`#filmID`).val(data.FilmID);        // Corrected to match your DB field
    });
}
