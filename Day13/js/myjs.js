// JavaScript Document
$(document).ready(function(e) {
	
	$('#about').click(function(e){
		$(window).scrollTop($('.about').offset().top);
		})
	$('#edu').click(function(e){
		$(window).scrollTop($('.edu').offset().top);
		})
	$('#exp').click(function(e){
		$(window).scrollTop($('.exp').offset().top);
		})
	$('#skills').click(function(e){
		$(window).scrollTop($('.skills').offset().top);
		})
	$('#con').click(function(e){
		$(window).scrollTop($('.con').offset().top);
		})
		
	$(window).scroll(function(){
		
		//if($(window).scrollTop()>$('.about').offset().top/2){
		//$('.fn').fadeIn(1000);
		//}	
		
		if($(window).scrollTop()>$('.about').offset().top/2 && $('.about').hasClass('hidden')){
		$('.about').removeClass('hidden');
		}	
		
		if($(window).scrollTop()>$('.edu').offset().top/2 && $('.edu').hasClass('hidden')){
		$('.edu').removeClass('hidden');
		}
		
		if($(window).scrollTop()>$('.exp').offset().top/2 && $('.exp').hasClass('hiddenright')){
		$('.exp').removeClass('hiddenright');
		}	
		
		if($(window).scrollTop()>$('.skills').offset().top/2 && $('.skills').hasClass('hidden')){
		$('.skills').removeClass('hidden');
		}	
		
		
		
			
		})
});