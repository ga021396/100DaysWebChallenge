// JavaScript Document
/*jslint browser: true */
/*global window */
$(document).ready(function(){
    var tit = $(".title");
    var tit1=$('.title1');
    var op =$('.op');
    var container =$('.container')[0];
    var btn=$('#input_btn');
    var open=$('.open')[0];
    var items=$('.item');
    var gd=$('.gd')[0];
    var chapter=$('.chapter')[0];
    var fin=$('.finish')[0];
    fin.addEventListener("click", function(){
            gd.style.transform="translateX(0)";
            chapter.style.transform="translateX(0)";
            fin.style.transform="translateY(-200%)";
        });
    items.each(function (index){
        this.addEventListener("mouseover", function(){
            this.style.transition="all 1s";
            this.style.background='url(images/'+index+'.jpg)';
            this.style.backgroundPosition= "center center";
            this.style.backgroundSize='cover';
            this.innerHTML='';
        });
        this.addEventListener('mouseout',function(){
            this.style.background='rgba(0,0,0,.6)';
            this.innerHTML='No.'+(index+1);
        });
        this.addEventListener("click", function(){
            gd.style.transform="translateX(-200%)";
            chapter.style.transform="translateX(200%)";
            fin.style.transform="translateY(0)";
        });
    })
    btn.click(function(){
        ani();
    })
    function ani(){
        open.remove();
        tit.fadeIn(2000);
        setTimeout(function(){
            tit1.fadeIn(2000);
        },1500);
        setTimeout(function(){
            op.fadeOut(2000);
            container.style.display="flex";
           setTimeout(function(){
               container.style.opacity="1";
           },2000);
        },4000); 
    }   
}), 

new Vue({
  el: '#app',
  data () {
    return {
      Account:'',
      success: true,
      nickName: "guest",
      Certificate:"#",
      mission:[],
      mail: "hexschool@gmail.com",
      stage: 0,
      tag: "UI, CSS  web layout, CSS Flexbox",
      timeStamp: 1526566114000,
      url: "https://www.google.com.tw"
    }
  },
 methods: {
    prompt: function() {
        let self=this;
        //--------------
    axios.post(' https://www.thef2e.com/api/isSignUp', {
     email: self.Account
  })
  .then(function (response) {
    console.log(response);
        if(response.data.success==true){
            self.nickName=response.data.nickName;
            self.Certificate=response.data.Certificate;
        }
  })
  .catch(function (error) {
    console.log(error);
  });
//      //---------------
         //--------------
    axios.post(' https://www.thef2e.com/api/stageCheck', {
    email: self.Account
  })
  .then(function (response) {
    console.log(response);
        self.mission=response;
  })
  .catch(function (error) {
    console.log(error);
  });
//      //---------------
    },
    show: function(index){
        let self=this;
        console.log(self.mission.data[index]);
        self.mail=self.mission.data[index].mail;
        self.stage=self.mission.data[index].stage;
        self.tag=self.mission.data[index].tag;
        self.timeStamp=self.mission.data[index].timeStamp;
        self.url=self.mission.data[index].url;
    }
  },
 mounted:function(){
     
 }
})
