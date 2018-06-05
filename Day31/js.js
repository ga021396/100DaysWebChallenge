// JavaScript Document
window.onload=function(){
	var oNavBar=document.getElementById('navbar');
	var oNav=oNavBar.getElementsByTagName('li');
	var oA=oNavBar.getElementsByTagName('a');
	var oTask=document.getElementsByClassName('onTask');
    var oFin=document.getElementsByClassName('finish');

    oA[0].onclick=function(){
       task("block","block",this);
    }
    oA[1].onclick=function(){
        task("block","none",this);
    }
    oA[2].onclick=function(){
       task("none","block",this);
    }
    
    function task(onDo,Fin,k){
         oFin[0].style.display=Fin;
         for(var i=0;i<oTask.length;i++)
            {
                oTask[i].style.display=onDo;
            }
        for(var j=0;j<oA.length;j++)
			{
				oNav[j].classList.remove('nav-active');
			}
        k.parentElement.classList.add('nav-active');
    }
}
