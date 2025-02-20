function nav() {
    var navOutPut = `
    <ul class="navbar-nav">|
    <li class="nav-item">
    <a href ="/index.html">Home</a>
    </li> |
    <li class="nav-item">
    <a href ="/film/film.html">Film</a>
    </li> |
    <li class="nav-item">
    <a href ="/ticket/ticket.html"> Ticket</a>
    </li> |
    <li class="nav-item">
    <a href ="/screening/screening.html"> Screening </a>
    </li> | 
    <li class="nav-item">
    <a href ="/theatre/theatre.html"> Theatre </a>
    </li> | 
    <li class="nav-item">
    <a href ="/admin/admin.html"> Admin </a>
    </li> |
    <li class="nav-item">
    <a href ="/manager/manager.html"> Manager </a>
    </li>|`;
    // if (sessionStorage.getItem("login") == "true") {
    //     navOutPut += `
    //     <li class="nav-item">
    //     <a href ="/admin.html">Admin</a>
    //     </li> |
    //     <li class="nav-item">
    //     <a href ="/logout.html">Logout</a>
    //     </li> |`;
    // }

    //else {
        navOutPut += `<li class="nav-item">
        <a href ="/login.html">Login</a> 
        </li>`;
    //}
    navOutPut += `</ul>`;
    $("nav").html(navOutPut);
}

