$(document).ready(function(){
    $('#btn1').click(function(){
        $('#mid').slideToggle(1000);
        $('.last').slideUp(1000);
   
    });

    $('#undos').click(function(){
        $('#mid').slideUp(1000);
        $('.last').slideUp(1000);
      
    });


});

$(document).ready(function(){
    $('#finish').click(function(){
        $('.last').slideToggle(1000);
    });
});