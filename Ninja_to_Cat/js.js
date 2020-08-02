$(document).ready(function(){
    $('img').click(function() {
        temp = $(this).attr('data-alt-src');
        $(this).attr('data-alt-src', $(this).attr('src') );
        $(this).attr('src', temp );
      });
})

// $(this).hide()



// $(document).ready(function(){  
//     $('img').click(function(){   
//     $(this).attr('placeholder', $(this).attr('src'));
//     $(this).attr('src', $(this).attr('data-alt-src'));
//     $(this).attr('data-alt-src', $(this).attr('placeholder'));
// })
// })

