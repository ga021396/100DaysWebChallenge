// JavaScript Document
/*jslint browser: true */
/*global window */
$(document).ready(function(){
    var btn=document.getElementsByClassName('btn')[0];
    var Anime=document.getElementById('anime');
    var canvas=document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');
    var ani =Anime.getContext('2d');
    var body=document.getElementsByClassName('body')[0];
    
    var screenW=800;
    var screenH=500;
    
    canvas.width=screenW;
    canvas.height=screenH;
    Anime.width=screenW;
    Anime.height=screenH;
 
    
    var x=canvas.offsetWidth;
    var y=canvas.offsetHeight;
    
  
    
    var k=225;
    var time = 0;
    //---
    var circleX=700;
    var circleY=100;
    
    function anime(){
        
        ani.clearRect(0, 0, screenW, screenH);
        ani.translate(screenW / 2, screenH / 2); //將畫布坐標系原點移至中心
        ani.rotate(0.04, 0.04); //如果是縮放，這裡是縮放代碼
        ani.translate(-screenW / 2, -screenH / 2); //修正畫布坐標系

        ani.beginPath();
                ani.fillStyle = "#F5AF5F";
                ani.arc(circleX,circleY,40,0,2*Math.PI); 
        ani.fill();
        
        ani.beginPath();
            ani.fillStyle = "#3676BB";
            ani.moveTo(600,400);
            ani.lineTo(635,470);
            ani.lineTo(565,465);
            ani.closePath;
        ani.fill();
        
        ani.beginPath();
            ani.fillStyle = "#E7465D";
            ani.moveTo(30,100);
            ani.lineTo(75,85);
            ani.lineTo(100,100);
            ani.lineTo(110,125);
            ani.lineTo(90,150);
            ani.lineTo(60,140);
            ani.closePath();
        ani.fill();
        
    }
    function show(){
        if(time<225){
            draw('white');
            time+=3;
        }
        if(time>=225){
            body.style.backgroundColor="white";
            btn.style.backgroundColor="white";
            btn.style.color="#001D2E";
            btn.style.borderColor="#001D2E"
            
            draw('#001D2E','black','#001D2E');
            k+=6;
        }
        if(k>500){
            body.style.backgroundColor='#001D2E';
            btn.style.backgroundColor="#001D2E";
            btn.style.color="white";
            btn.style.borderColor="white"
            draw('white');
            k=225;
            time=0;
        }   
    }
    function draw(color1,color2='white',color3='#F5AF5F'){
     
        //畫圓框
        ctx.clearRect(0, 0, screenW, screenH);
        ctx.beginPath();
            ctx.strokeStyle = color1;
            ctx.arc(x/2,y/2,time,0,2*Math.PI);
        ctx.stroke();
        
         ctx.beginPath();
            ctx.strokeStyle = color1;
            ctx.arc(x/2,y/2,k,0,2*Math.PI)
        ctx.stroke();
        
        //畫電池
        ctx.beginPath();
            ctx.fillStyle = color3;
            ctx.moveTo(362,188);
            ctx.lineTo(378,188);
            ctx.lineTo(378,216);
            ctx.lineTo(362,216);
            ctx.closePath();
        ctx.fill();
        
        ctx.beginPath();
            ctx.fillStyle = color3;
            ctx.moveTo(362,218);
            ctx.lineTo(378,218);
            ctx.lineTo(378,221);
            ctx.lineTo(362,221);
            ctx.closePath();
        ctx.fill();
        //電池頭
        ctx.beginPath();
            ctx.fillStyle = color2;
            ctx.moveTo(365,188);
            ctx.lineTo(375,188);
            ctx.lineTo(375,186);
            ctx.lineTo(365,186);
        ctx.fill();
        //閃電
        ctx.beginPath();
            ctx.fillStyle = "white";
            ctx.moveTo(370,190);
            ctx.lineTo(365,202);
            ctx.lineTo(375,204);
            ctx.lineTo(370,215);
        ctx.fill();
        
        //TITLE
         ctx.fillStyle = color1;
         ctx.font = '100 20px Arial';
         ctx.fillText('Radio Defense', x/2-70, y/2,150);
        
         ctx.fillStyle = color1;
         ctx.font = 'bold 60px Arial';
         ctx.fillText('R', x/2-15, y/2-30);
        //p
         ctx.fillStyle = color1;
         ctx.font = "14px '微軟正黑體'";
         ctx.fillText('你身負運送能量電池的任務', 15, 420);
        
         ctx.fillStyle = color1;
         ctx.font = "14px '微軟正黑體'";
         ctx.fillText('卻遭到幾何星人的埋伏', 15, 445);
        
         ctx.fillStyle = color1;
          ctx.font = "14px '微軟正黑體'";
         ctx.fillText('請協助從他們的手中奪回能量電池', 15, 470);
    }
    
    setInterval(show,30);
    setInterval(anime,30);
})
