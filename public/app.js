$(document).ready(function () {
  nav();
  footer();

  //search();
  filmDD();
  dateDD();
  startTimeDD();
});

function filmDD() {
  $.getJSON("http://localhost:3000/films", function (data) {
    $("#selectFilm").html('<option value="" selected>Select Film</option>');

    $.each(data, function (i, film) {
      $("#selectFilm").append(
        `<option value="${film.FilmID}">${film.Name}</option>`
      );

      $("#filmCards").append(
        `<br />
        <div class="col-md-4 mb-3">
          <div class="card">
            <img src="images/${film.Name.replace(/\s+/g, "_")}.jpg" 
                 class="card-img-top img-fluid w-100"
                 alt="${film.Name}"
                 style="height: 400px;  
								 width: 100px;
								 object-fit: cover;"
            />
            </div> 
						<h5 class="card-title">${film.Name}</h5>
          </div>
        </div>`
      );
    });
  });
}

function dateDD() {
  $.getJSON("http://localhost:3000/screenings", function (data) {
    $("#selectDate").html(
      '<option value="screenings" selected>Select Date</option>'
    );

    $.each(data, function (i, screening) {
      let date = new Date(screening.Date).toISOString().split("T")[0];
      $("#selectDate").append(`<option value="${date}">${date}</option>`);
    });
  });
}

function startTimeDD() {
  $.getJSON("http://localhost:3000/screenings", function (data) {
    $("#selectStartTime").html(
      '<option value="" selected>Select Time</option>'
    );

    $.each(data, function (i, screening) {
      $("#selectStartTime").append(
        `<option value="${screening.StartTime}">${screening.StartTime}</option>`
      );
    });
  });
}

//  function search() {
//    $.getJSON(http:localhost:3000/films, function (data) {
//      $.each(data, function (i, value) {
//        let releaseDate = new Date(value.ReleaseDate).toISOString().split("T")[0];
//        $("#filmCards").append(
//                  <div class="col-md-4 mb-3">
//                      <div class="card">
//                          <img src="${value.CoverImage}" class="card-img-top img-fluid" alt="${value.Name}" style="height: 200px; object-fit: cover;">
//                          <div class="card-body">
//                              <h5 class="card-title">${value.Name}</h5>
//                              <p class="card-text">${value.Category} | ${value.Genre}</p>
//                              <p class="card-text"><small>Released: ${releaseDate}</small></p>
//                              <button type="button" class="btn btn-primary viewDetailsButton" data-id="${value.FilmID}">
//                                  View Details
//                              </button>
//                          </div>
//                      </div>
//                  </div>
//              );
//      });
//      $(document).on("click", ".viewDetailsButton", function () {
//        let filmID = $(this).data("id");
//        console.log("Selected Film ID:", filmID);
//        location.href = filmDetails.html?filmID=${filmID};
//      });
//    }).fail(function () {
//      alert("Failed to load films.");
//    });

//    var filteredProductsCount = await productsQuery.CountAsync();
//  if (!string.IsNullOrEmpty(searchString))
//  {
//      if (filteredProductsCount == 0)
//      {
//          ViewBag.SearchMsg = $"No results found for '{searchString}'.";
//      }
//      else
//      {
//          ViewBag.SearchMsg = $"Showing {filteredProductsCount} result(s) for '{searchString}'.";
//      }
//  }
//  }
