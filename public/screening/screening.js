$(document).ready(function () {
    nav();
    footer();
    getJsonData();
    $(`#add`).append(
        `<button type="button" class="addButton">Add</button>`
    );

    $(".addButton").click(function () {
        location.replace("http://localhost:3000/screening/createScreening.html");
    });
});

async function getJsonData() {
    await $.getJSON(`http://localhost:3000/screenings`, function (data) {
        $.each(data, async function (i, value) {
            let screeningDate = new Date(value.Date);
            let formattedDate = screeningDate.toISOString().split('T')[0];
            let filmname = await getFilmData(value.FilmID);
            $(`#tbody`).append(
                `<tr>
                <td id="startTime${value.StartTime}">${value.StartTime}</td>
                <td id="date${formattedDate}">${formattedDate}</td>
                <td id="seatsRemaining${value.SeatsRemaining}">${value.SeatsRemaining}</td>
                <td id="theatreID${value.TheatreID}">${value.TheatreID}</td>
                <td id="filmID${filmname}">${filmname}</td>
                <td><button type="button" class="updateButton" value="${value.ScreeningID}">Update</button></td>
                <td><button type="button" class="deleteButton" value="${value.ScreeningID}">Delete</button></td>
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


async function getFilmData(ID) {
    data = await $.getJSON(`http://localhost:3000/film/${ID}`);
        console.log(data)
        return data.Name;
}