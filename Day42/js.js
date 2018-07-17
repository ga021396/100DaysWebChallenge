// JavaScript Document
/*jslint browser: true */
/*global window */
$(document).ready(function(){
    var btn=document.getElementsByClassName('btn')[0];
    var canvas=document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');
    canvas.width=800;
    canvas.height=500;
    var x=canvas.offsetWidth;
    var y=canvas.offsetHeight;
    var time = 0;
    //---
    var circleX=700;
    var circleY=100;
    
    function draw(){
        time++;    
        //清除
        ctx.clearRect(0,0,800,500);
        
        //畫圓框
        ctx.beginPath();
            ctx.strokeStyle = "white";
            ctx.arc(x/2,y/2,165,0,2*Math.PI);
        ctx.stroke();
        
         ctx.beginPath();
            ctx.strokeStyle = 'rgba(255,255,255,0.5)';
            ctx.arc(x/2,y/2,225,0,2*Math.PI)
        ctx.stroke();
        
         //畫圓形
            ctx.beginPath();
                ctx.fillStyle = "#F5AF5F";
                ctx.arc(circleX,circleY,40,0,2*Math.PI);
            ctx.fill();
        //畫三角
        ctx.beginPath();
            ctx.fillStyle = "#3676BB";
            ctx.moveTo(600,400);
            ctx.lineTo(635,470);
            ctx.lineTo(565,465);
            ctx.closePath;
        ctx.fill();
        
        //畫六角
        ctx.beginPath();
            ctx.fillStyle = "#E7465D";
            ctx.moveTo(30,100);
            ctx.lineTo(75,85);
            ctx.lineTo(100,100);
            ctx.lineTo(110,125);
            ctx.lineTo(90,150);
            ctx.lineTo(60,140);
            ctx.closePath();
        ctx.fill();
        
        //畫電池
        ctx.beginPath();
            ctx.fillStyle = "#F5AF5F";
            ctx.moveTo(362,188);
            ctx.lineTo(378,188);
            ctx.lineTo(378,216);
            ctx.lineTo(362,216);
            ctx.closePath();
        ctx.fill();
        
        ctx.beginPath();
            ctx.fillStyle = "#F5AF5F";
            ctx.moveTo(362,218);
            ctx.lineTo(378,218);
            ctx.lineTo(378,221);
            ctx.lineTo(362,221);
            ctx.closePath();
        ctx.fill();
        //電池頭
        ctx.beginPath();
            ctx.fillStyle = "white";
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
         ctx.fillStyle = "white";
         ctx.font = '100 20px Arial';
         ctx.fillText('Radio Defense', x/2-70, y/2,150);
        
         ctx.fillStyle = "white";
         ctx.font = 'bold 60px Arial';
         ctx.fillText('R', x/2-15, y/2-30);
        //p
         ctx.fillStyle = "white";
         ctx.font = "14px '微軟正黑體'";
         ctx.fillText('你身負運送能量電池的任務', 15, 420);
        
         ctx.fillStyle = "white";
         ctx.font = "14px '微軟正黑體'";
         ctx.fillText('卻遭到幾何星人的埋伏', 15, 445);
        
         ctx.fillStyle = "white";
          ctx.font = "14px '微軟正黑體'";
         ctx.fillText('請協助從他們的手中奪回能量電池', 15, 470);
        
        console.log(time);
    }
    draw();
   
    btn.onclick=function(){
        //setInterval(draw,30);
    }
})
