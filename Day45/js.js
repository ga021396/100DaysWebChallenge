// JavaScript Document
/*jslint browser: true */
/*global window */
$(document).ready(function(){
    //html
    var select=document.getElementsByClassName('select')[0];
    var rune=document.getElementsByClassName('rune')[0];
    var text=document.getElementsByClassName('text')[1];
    var img_1=select.getElementsByTagName('img')[0];
    var img_2=select.getElementsByTagName('img')[1];
    var img_3=select.getElementsByTagName('img')[2];
    var selected=document.getElementsByClassName('selected')[0];
    var h2=text.getElementsByTagName('h2')[0];
    var p=text.getElementsByTagName('p')[0];
    var tog=true;
  
    //html content

    var fir_img_src="https://upload.cc/i1/2018/07/31/o7O5VD.png";
    var fir_h2="Pug";
    var fir_p="JADE is a proprietary object-oriented software development and deployment platform product";
    
    var sec_img_src="https://upload.cc/i1/2018/07/31/yjOoJH.png";
    var sec_h2="Slim";
    var sec_p="Slim is a template language whose goal is to reduce the syntax to the essential parts without becoming cryptic.";
    
    var thr_img_src="https://upload.cc/i1/2018/07/31/M0AdEO.png";
    var thr_h2="Haml";
    var thr_p="Haml is a templating engine for HTML. It's designed to make it both easier and more pleasant to write HTML documents";
    
    //css
    var select2=document.getElementsByClassName('select')[1];
    var rune2=document.getElementsByClassName('rune')[1];
    var text2=document.getElementsByClassName('text')[2];
    var img_4=select2.getElementsByTagName('img')[0];
    var img_5=select2.getElementsByTagName('img')[1];
    var img_6=select2.getElementsByTagName('img')[2];
    var selected2=document.getElementsByClassName('selected')[1];
    var h22=text2.getElementsByTagName('h2')[0];
    var p2=text2.getElementsByTagName('p')[0];
    var tog2=true;
    
    //css content
    var fir_img_src_2="https://upload.cc/i1/2018/07/31/fZuCye.png";
    var fir_h2_2="Sass";
    var fir_p_2="Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.";
    
    var sec_img_src_2="https://upload.cc/i1/2018/07/31/A4MF2C.png";
    var sec_h2_2="Stylus";
    var sec_p_2="Stylus is a revolutionary new language, providing an efficient, dynamic, and expressive way to generate CSS.";
    
    var thr_img_src_2="https://upload.cc/i1/2018/07/31/BvPrLu.png";
    var thr_h2_2="PostCSS";
    var thr_p_2="PostCSS is a tool for transforming styles with JS plugins. ";
    //
    //javaScript
    var select3=document.getElementsByClassName('select')[2];
    var rune3=document.getElementsByClassName('rune')[2];
    var text3=document.getElementsByClassName('text')[3];
    var img_7=select3.getElementsByTagName('img')[0];
    var img_8=select3.getElementsByTagName('img')[1];
    var img_9=select3.getElementsByTagName('img')[2];
    var selected3=document.getElementsByClassName('selected')[2];
    var h23=text3.getElementsByTagName('h2')[0];
    var p3=text3.getElementsByTagName('p')[0];
    var tog3=true;
    
     //js content
    var fir_img_src_3="https://upload.cc/i1/2018/07/31/yT2gzO.png";
    var fir_h2_3="Vue";
    var fir_p_3="Vue.js is an MIT-licensed open source project.";
    
    var sec_img_src_3="https://upload.cc/i1/2018/07/31/gGzNEB.png";
    var sec_h2_3="React";
    var sec_p_3="React is a JavaScript library for building user interfaces.";
    
    var thr_img_src_3="https://upload.cc/i1/2018/07/31/uneVgH.png";
    var thr_h2_3="Angular";
    var thr_p_3="Angular is a development platform for building mobile and desktop web applications using Typescript/JavaScript and other languages.";
    //
    var k=0;
    var l=0;
    //
    var main=document.getElementsByClassName('main-rune')[0];
    //
    
    function slide(){
        if(tog==true){
           toggOn(select,text);
            tog=false;
        }
        else{
           toggOff(select,text);
            tog=true;
        } 
    }
    function slide2(){
        if(tog2==true){
           toggOn(select2,text2);
            tog2=false;
        }
        else{
           toggOff(select2,text2);
            tog2=true;
        } 
    }
    function slide3(){
        if(tog3==true){
           toggOn(select3,text3);
            tog3=false;
        }
        else{
           toggOff(select3,text3);
            tog3=true;
        } 
    }
    function toggOn(sele,txt){
            txt.style.zIndex="0";
            sele.style.transition="1s all";
            txt.style.transition="none";
            sele.style.opacity="1";
            txt.style.opacity="0";
    }
    function toggOff(sele,txt){
            txt.style.zIndex="10";
            sele.style.transition="none";
            txt.style.transition="1s all";
            sele.style.opacity="0";
            txt.style.opacity="1";
            tog=true;
    }
    function change(src,title,con){
         selected.src=src;
         selected.style.opacity="1";
         slide();
         h2.textContent=title;
         p.textContent=con;
        //
        if(k==0){
            rune.classList.remove('active');
            rune2.classList.add('active');
            k=1;
            rune2.addEventListener("click", function(){
            slide2();
     });
    }
    }
    function change2(src,title,con){
         selected2.src=src;
         selected2.style.opacity="1";
         slide2();
         h22.textContent=title;
         p2.textContent=con;
        if(l==0){
            rune2.classList.remove('active');
            rune3.classList.add('active');
            l=1;
            rune3.addEventListener("click", function(){
           slide3();
     });
        }
    }
     function change3(src,title,con){
         selected3.src=src;
         selected3.style.opacity="1";
         slide3();
         h23.textContent=title;
         p3.textContent=con;
         rune3.classList.remove('active');
         main.classList.add('active');
    }
     rune.addEventListener("click", function(){
           slide();
     });
     img_1.addEventListener("click",function(){
         change(fir_img_src,fir_h2,fir_p)
        });
    img_2.addEventListener("click", function(){
          change(sec_img_src,sec_h2,sec_p);
        });
    img_3.addEventListener("click", function(){
        change(thr_img_src,thr_h2,thr_p);
    });
    //css
    img_4.addEventListener("click",function(){
         change2(fir_img_src_2,fir_h2_2,fir_p_2)
        });
    img_5.addEventListener("click", function(){
          change2(sec_img_src_2,sec_h2_2,sec_p_2);
        });
    img_6.addEventListener("click", function(){
        change2(thr_img_src_2,thr_h2_2,thr_p_2);
    });
    //js
    img_7.addEventListener("click",function(){
         change3(fir_img_src_3,fir_h2_3,fir_p_3)
        });
    img_8.addEventListener("click", function(){
          change3(sec_img_src_3,sec_h2_3,sec_p_3);
        });
    img_9.addEventListener("click", function(){
        change3(thr_img_src_3,thr_h2_3,thr_p_3);
    });      
})
