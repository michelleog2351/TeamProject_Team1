$(`document`).ready(function () {
    var ID = localStorage.getItem("ID",ID);
    $(`#fbody`).append(
                
        `

        <label class="form-label" for="Capacity">Capacity</label>
        <input class="form-control" type="text" name="Capacity" id="Capacity"></input>
        <br>`
        
    )

    getJsonData(ID);


    $("#cancel").click(function (e) 
    {
        location.replace("http://localhost:3000/Theatre/Theatre.html");  
    })

    $("#update").click(function (e) 
    {
        let Capacity = $(`#Capacity`).val();
        

        $.post(`http://localhost:3000/updateTheatre/${ID}`, {
            
            Capacity: Capacity
        })
        .done(function () {
            location.replace("http://localhost:3000/Theatre/Theatre.html");
        })
    });

});

function getJsonData(ID) {
    $.getJSON(`http://localhost:3000/Theatre/${ID}`, function(data){

        // Populate the input fields with the data
        $(`#Capacity`).val(data.Capacity);  // Corrected case to match your DB field
    });
}
