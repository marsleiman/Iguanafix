$(document).ready(function(){

    //Add
    $(".quantity-add").click(function(e){
        //Vars
        var count = 1;
        var newcount = 0;
        
        //Wert holen + Rechnen
        var elemID = $(this).parent().attr("id");
        var countField = $("#"+elemID+'inp');
        var count = $("#"+elemID+'inp').val();
        var newcount = parseInt(count) + 1;
        
        //Neuen Wert setzen
        $("#"+elemID+'inp').val(newcount);
    });

    //Remove
    $(".quantity-remove").click(function(e){
        //Vars
        var count = 1;
        var newcount = 0;
        
        //Wert holen + Rechnen
        var elemID = $(this).parent().attr("id");
        var countField = $("#"+elemID+'inp');
        var count = $("#"+elemID+'inp').val();
        var newcount = parseInt(count) - 1;
        
        //Neuen Wert setzen
        $("#"+elemID+'inp').val(newcount);
        
    });


    


});
