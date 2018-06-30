// JavaScript Document
/*jslint browser: true */
/*global window */
$(document).ready(function(){
    var tit = $(".title");
    var tit1=$('.title1');
    var op =$('.op');
         tit.fadeIn(2000);
    setTimeout(function(){
		tit1.fadeIn(2000);
	},1500);
   setTimeout(function(){
		op.fadeOut(2000);
	},4000);
})
