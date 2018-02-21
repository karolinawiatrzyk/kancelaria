//po wczytaniu dokumentu uruchom funkcje:
$(document).ready (function(){
    listener_scrollDown();
    menu();
    menu_anim();
  
})

function listener_scrollDown(){
 
        $('a[href^="#"]').click(function() {    
            var hash = $(this).attr('href');
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000);
            return false;
        });    
}
function menu(){
$('#menu_btn_container').on ('click', function(){
    $('.menu').stop().slideToggle(500);
  });   
}

function menu_anim(){
    $('#menu_btn_container').click(function(){
		$(this).toggleClass('open');
	});
}