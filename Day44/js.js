// JavaScript Document
/*jslint browser: true */
/*global window */
$(document).ready(function(){
    //OP
    var rect=document.getElementsByClassName('rect')[0];
    var cir=document.getElementsByClassName('cir')[0];
    var tri1=document.getElementsByClassName('tri1')[0];
    var tri2=document.getElementsByClassName('tri2')[0];
    var text=document.getElementsByClassName('text')[0];
    //Q
    var question=document.getElementsByClassName('question')[0];
    var dec=document.getElementsByClassName('dec')[0];
    var btn=document.getElementsByClassName('btn');
    var Qq=document.getElementsByClassName('Q')[0];
    var tag=document.getElementsByClassName('tag')[0];
    
    var don=document.getElementsByClassName('don')[0];
    var rect1=document.getElementsByClassName('rect')[1];
    var cir1=document.getElementsByClassName('cir')[1];
    var tri11=document.getElementsByClassName('tri1')[1];
    var timer;
    var k=0;
    var j=0;
    
    OP();
    
    function click(){
        for(i=0;i<3;i++){
            btn[i].onmousedown=function(){
                    clearInterval(timer);
                    Qq.style.opacity="0";
                    rect1.style.display="none";
                    cir1.style.display="none";
                    tri11.style.display="none";
                setTimeout(function(){
                    //question.style.width="100%";
                    Qq.style.transform="translateX(-1000px)";
                    dec.style.transform="translateX(0)";
                    setTimeout(function(){
                        
                        don.style.display="block";
                        don.style.opacity="1";
                    },1000)
                },500) 
            }
        }
    }
    
    function done(){
        
    }
    function Q(){
        setTimeout(function(){
            question.style.opacity="1";
            dec.style.transform="translateX(60%)";
            setTimeout(function(){
                rect1.style.transform="translate(0)";
                cir1.style.transform="translate(0)";
                tri11.style.transform="translate(0)";
                setTimeout(function(){
                    rect1.style.transition="all 0.01s";
                    cir1.style.transition="all 0.01s";
                    tri11.style.transition="all 0.01s";
                    click();
                    timer=setInterval(function(){
                        k+=2;
                        rect1.style.transform="rotate("+k+"deg)";
                        tri11.style.transform="rotate(-"+k+"deg)";
                        if(k==360){
                            k=0;
                        }
                        },30)       
                },4000)
            },500)
        },1000)
    }
    
    function OP(){
        setTimeout(function(){
        rect.style.transform="rotate(-360deg)";
        cir.style.transform="scale(1.2) ";
        tri1.style.transform="rotate(360deg)";
        tri2.style.transform="rotate(360deg)";
        setTimeout(function(){
            rect.style.transform="rotate(-360deg)";
            cir.style.transform="scale(.95) ";
            tri1.style.transform="rotate(360deg)";
            tri2.style.transform="rotate(360deg)";
            setTimeout(function(){
                 rect.style.transition="all .5s";
                 rect.style.transform="scale(10)";
                 setTimeout(function(){
                     cir.style.transition="all .5s";
                     cir.style.transform="scale(10)";
                     setTimeout(function(){
                         tri1.style.transition="all .5s";
                         tri2.style.transition="all .5s";
                         tri1.style.transform="scale(10)";
                         tri2.style.transform="scale(10)"; 
                         setTimeout(function(){
                             rect.style.transition="all 1s";
                             cir.style.transition="all 1s";
                             tri1.style.transition="all 1s";
                             tri2.style.transition="all 1s";
                             
                             //tri1.style.borderTop=" 280px solid #1469FF "
                             //tri2.style.borderTop=" 280px solid #1469FF "
                             rect.style.opacity="0";
                             cir.style.opacity="0";
                             tri1.style.opacity="0";
                             tri2.style.opacity="0";
                             text.style.opacity="0";
                             Q();
                         },250)
                     },250)
                },250)
            },2000)
        },2000)
    },1000);   
    }
})
