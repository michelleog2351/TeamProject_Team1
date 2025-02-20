function nav() {
    var navOutPut = `
    <ul class="navbar-nav">|
    <li class="nav-item">
    <a href ="/index.html">Home</a>
    </li> |
    <li class="nav-item">
    <a href ="/film.html">Film</a>
    </li> |
    <li class="nav-item">
    <a href ="/ticket.html"> Ticket</a>
    </li> |
    <li class="nav-item">
    <a href ="/screening/screening.html"> Screening </a>
    </li> | 
    <li class="nav-item">
    <a href ="/theatre.html"> Theatre </a>
    </li> | 
    <li class="nav-item">
    <a href ="/admin.html"> Admin </a>
    </li> |
    <li class="nav-item">
    <a href ="/manager.html"> Manager </a>
    </li>|
    <li class="nav-item">
    <a href ="/Customer/Film/cFilm.html"> Films Showing </a>
    </li>|
    `;
    if (sessionStorage.getItem("login") == "true") {
        navOutPut += `
        <li class="nav-item">
        <a href ="/admin.html">Admin</a>
        </li> |
        <li class="nav-item">
        <a href ="/logout.html">Logout</a>
        </li> |`;
    }

    else {
        navOutPut += `<li class="nav-item">
        <a href ="/login.html">Login</a> 
        </li>`;
    }
    navOutPut += `</ul>`;
    $("nav").html(navOutPut);
}

