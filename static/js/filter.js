$('#filter').on( 'click', 'a', function() {

    document.getElementById("proj_2").style.display = "block";
    document.getElementById("proj_1").style.display = "block";
    document.getElementById("proj_0").style.display = "block";

    var filterValue = $(this).attr('data-filter');

    if(!$("#proj_2").hasClass(filterValue)){
        document.getElementById("proj_2").style.display = "none";
    }

    if(!$("#proj_0").hasClass(filterValue)){
        document.getElementById("proj_0").style.display = "none";
    }

    if(!$("#proj_1").hasClass(filterValue)){
        document.getElementById("proj_1").style.display = "none";
    }


});