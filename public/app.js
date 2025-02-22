$(document).ready(function () {
  nav();
  footer();

  //search();
  
});

// function search() {
//   $.getJSON(http://localhost:3000/films, function (data) {
//     $.each(data, function (i, value) {
//       let releaseDate = new Date(value.ReleaseDate).toISOString().split("T")[0];
//       $("#filmCards").append(
//                 <div class="col-md-4 mb-3">
//                     <div class="card">
//                         <img src="${value.CoverImage}" class="card-img-top img-fluid" alt="${value.Name}" style="height: 200px; object-fit: cover;">
//                         <div class="card-body">
//                             <h5 class="card-title">${value.Name}</h5>
//                             <p class="card-text">${value.Category} | ${value.Genre}</p>
//                             <p class="card-text"><small>Released: ${releaseDate}</small></p>
//                             <button type="button" class="btn btn-primary viewDetailsButton" data-id="${value.FilmID}">
//                                 View Details
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             );
//     });
//     $(document).on("click", ".viewDetailsButton", function () {
//       let filmID = $(this).data("id");
//       console.log("Selected Film ID:", filmID);
//       location.href = filmDetails.html?filmID=${filmID};
//     });
//   }).fail(function () {
//     alert("Failed to load films.");
//   });

//   var filteredProductsCount = await productsQuery.CountAsync();
// if (!string.IsNullOrEmpty(searchString))
// {
//     if (filteredProductsCount == 0)
//     {
//         ViewBag.SearchMsg = $"No results found for '{searchString}'.";
//     }
//     else
//     {
//         ViewBag.SearchMsg = $"Showing {filteredProductsCount} result(s) for '{searchString}'.";
//     }
// }
// }