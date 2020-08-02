$(document).ready(function(){
    console.log("js ready");
   
    $("img").hover(function () {
        console.log("hover");
       $(this).addClass("hover");
          
    }, function () {
        console.log("remove Hover");
        $(this).removeClass("hover");
    })
});

        



