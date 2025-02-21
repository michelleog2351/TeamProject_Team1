$(document).ready(function () {
    nav();
    footer();
    getJsonData();
    $(`#add`).append(
        `<button type="button" class="addButton btn btn-primary">Add</button>`
    );

    $(".addButton").click(function () {
        location.replace("http://localhost:3000/screening/createScreening.html");
    });
});

function getJsonData() {
    $.getJSON(`http://localhost:3000/screenings`, function (data) {
        $.each(data, function (i, value) {
            let screeningDate = new Date(value.Date);
            let formattedDate = screeningDate.toISOString().split('T')[0];
            $(`#tbody`).append(
                `<tr>
                <td id="startTime${value.StartTime}">${value.StartTime}</td>
                <td id="date${formattedDate}">${formattedDate}</td>
                <td id="seatsRemaining${value.SeatsRemaining}">${value.SeatsRemaining}</td>
                <td id="theatreID${value.TheatreID}">${value.TheatreID}</td>
                <td id="filmID${value.FilmID}">${value.FilmID}</td>
                <td><button type="button" class="updateButton btn btn-secondary" value="${value.ScreeningID}">Update</button></td>
                <td><button type="button" class="deleteButton btn btn-danger" value="${value.ScreeningID}">Delete</button></td>
                </tr>`
            );
        });

        $(".updateButton").click(function (e) {
            let ID = e.target.value;
            localStorage.setItem("ScreeningID", ID);
            location.replace("http://localhost:3000/screening/updateScreening.html");
        });


        $(".deleteButton").click(function (e) {
            let ID = e.target.value;
            $.post(`http://localhost:3000/deleteScreening/${ID}`)
                .done(function () {
                    location.replace("http://localhost:3000/screening/screening.html");
                });
        });
    });
}