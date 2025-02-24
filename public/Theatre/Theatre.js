$(`document`).ready(function () {
    nav();
    footer();
    getJsonData();
    $(`#add`).append(
        `<button type="button" class="addButton">Add</button>`
    )


    $(".addButton").click(function (e) 
    {
        location.replace("http://localhost:3000/Theatre/createTheatre.html");
    });
});

function getJsonData() {
    $.getJSON(`http://localhost:3000/Theatres`, function (data) {
        $.each(data, function (i, value) {
            $(`#tbody`).append(
                `<tr>
                <td id="TheatreID${value.TheatreID}">${value.TheatreID}</td>
                <td id="Capacity${value.Capacity}">${value.Capacity}</td>
                <td><button type="button" class="updateButton" value="${value.TheatreID}">Update</button></td>
                <td><button type="button" class="deleteButton" value="${value.TheatreID}">Delete</button></td>
                </tr>`
            );
        });

        $(".updateButton").click(function (e) {
            e.preventDefault();
            let ID = e.target.value;
            localStorage.setItem("ID", ID);
            location.replace("http://localhost:3000/Theatre/updateTheatre.html");
        });


        $(".deleteButton").click(function (e) {
            e.preventDefault();
            let ID = e.target.value;
            $.post(`http://localhost:3000/deleteTheatre/${ID}`)
                .done(function () {
                    location.replace("http://localhost:3000/Theatre/Theatre.html");
                });
        });
    });
}