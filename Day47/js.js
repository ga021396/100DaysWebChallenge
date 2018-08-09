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
           setTimeout(function(){
               container.style.opacity="1";
           },2000);
        },4000); 
    }   
}), 


function load(){
    item=document.getElementsByClassName('item');
}
function change(){
    
}
let item;   

new Vue({
  el: '#app',
  data () {
    return {
      success: true,
      message: "報名成功！",
      nickName: "gonsakon",
      timeStamp: 1527035405000,
      Certificate:"獎狀網址",
      chapter:[{no:'No.1',title:"todolist"},
               {no:'No.2',title:"filiter"}
              ]
    }
  },
 methods: {
    prompt: function() {
        let self=this;
        //--------------
    axios.post(' https://www.thef2e.com/api/isSignUp', {
     email: "ga021396@gmail.com"
  })
  .then(function (response) {
    console.log(response);
        self.success=response.data.success;
        self.message=response.data.message;
        self.nickName=response.data.nickName;
        self.timeStamp=response.data.timeStamp;
        self.Certificate=response.data.Certificate;
  })
  .catch(function (error) {
    console.log(error);
  });
//      //---------------
    },
     hover: function(event){
        let self=this;
         targetId = event.currentTarget;
         console.log(targetId);
     }
  },
 mounted:function(){
     
 }
})
