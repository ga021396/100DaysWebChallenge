// JavaScript Document
$(document).ready(function(e) {
    $('.news h1').click(function(e){
		$('.new li').fadeToggle(3000);
		$('.new').slideToggle(3000)
		})
		
	$(window).scroll(function(){
		
		if($(window).scrollTop()>$('.new').offset().top/2){
		$('.new').fadeIn(1000);
		}	
		
		if($(window).scrollTop()>$('.show').offset().top/2 && $('.show').hasClass('hidden')){
		$('.show').removeClass('hidden');
		}	
		
		})
	
	
	
});