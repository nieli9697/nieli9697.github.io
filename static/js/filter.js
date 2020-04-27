$('#filter').on( 'click', 'a', function() {

    document.getElementById("proj_9").style.display = "block";
    document.getElementById("proj_8").style.display = "block";
    document.getElementById("proj_7").style.display = "block";
    document.getElementById("proj_6").style.display = "block";
    document.getElementById("proj_5").style.display = "block";
    document.getElementById("proj_4").style.display = "block";
    document.getElementById("proj_3").style.display = "block";
    document.getElementById("proj_2").style.display = "block";
    document.getElementById("proj_1").style.display = "block";
    document.getElementById("proj_0").style.display = "block";

    var filterValue = $(this).attr('data-filter');

    if(!$("#proj_9").hasClass(filterValue)){
        document.getElementById("proj_9").style.display = "none";
    }

    if(!$("#proj_8").hasClass(filterValue)){
        document.getElementById("proj_8").style.display = "none";
    }

    if(!$("#proj_7").hasClass(filterValue)){
        document.getElementById("proj_7").style.display = "none";
    }
    if(!$("#proj_6").hasClass(filterValue)){
        document.getElementById("proj_6").style.display = "none";
    }

    if(!$("#proj_5").hasClass(filterValue)){
        document.getElementById("proj_5").style.display = "none";
    }

    if(!$("#proj_4").hasClass(filterValue)){
        document.getElementById("proj_4").style.display = "none";
    }

    if(!$("#proj_3").hasClass(filterValue)){
        document.getElementById("proj_3").style.display = "none";
    }

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