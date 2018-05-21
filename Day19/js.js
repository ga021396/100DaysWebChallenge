// JavaScript Document
window.onload=function(){
	
	var div1=document.getElementById('div1');
	var div2=document.getElementById('div2');
	var chi=div1.children.length;
	var par=div2.parentNode;
	var ul=document.getElementsByTagName('ul')[0];
	var oli=document.getElementsByClassName('li');
	div2.onclick=function(){
		par.style.width='1000px';
		div1.style.width=1000;
		}
	
	
	ul.firstElementChild.style.background="red";
	for(i=0;i<oli.length;i++)
	oli[i].style.background="red";
	
	
	
	}