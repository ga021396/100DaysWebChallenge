// JavaScript Document
/*jslint browser: true */
/*global window */
$( document ).ready(function() {
    var thisdata;
    var le;
          var name ;
          var purpose ;
          var address ;
          var opentime ;
          var img ;
          var list ;
  $.ajax({
      type:'GET',
      url: "eduagency.json",
      success: function( result ) {
      thisdata = JSON.parse(result);
      le = thisdata.length;
      $('.howmany').html('Showing '+le+' results');
      list='';
          
      for(i=0;i<le;i++){    
           name = thisdata[i].o_tlc_agency_name;
           purpose = thisdata[i].o_tlc_agency_purpose.substr(0,50);
           address = thisdata[i].o_tlc_agency_address;
           opentime = thisdata[i].o_tlc_agency_opentime;
           img = thisdata[i].o_tlc_agency_img_front;
          
          if(img==""){
 img='http://www.lct.tp.edu.tw/ezfiles/1/1001/agency/2/agency_132_4853798_78147.jpg';
          }
          if(purpose.length==50){
              purpose=purpose+'...';
          }
          
          
        list+='<div class="card">'+
            '<div class="img">'+
                 '<img src='+img+'>'+
            '</div>'+
            '<div class="introduction">'+
                '<h2 class="name">'+name+'</h2>'+
                '<p class="purpose">'+purpose+'</p>'+
                '<span class="aut">Healthy</span>'+
                '<span class="cardResult">Sports</span>'+
                '<div class="loc">'+
                    '<span ><i class="fas fa-map-marker-alt"></i><span class="address">'+address+'</span></span>'+
                    '<span ><i class="far fa-calendar-alt"></i><span class="opentime">'+opentime+'</span></span>'+
                '</div>'+
            '</div>'+
        '</div>';
      }    
            $('#list').html(list);
      
  }
});
    $("#all").change(function(){
        list='';
       for(i=0;i<le;i++)
           {       name = thisdata[i].o_tlc_agency_name;
                   purpose = thisdata[i].o_tlc_agency_purpose.substr(0,50);
                   address = thisdata[i].o_tlc_agency_address;
                   opentime = thisdata[i].o_tlc_agency_opentime;
                   img = thisdata[i].o_tlc_agency_img_front;

                  if(img==""){
                      img='http://www.lct.tp.edu.tw/ezfiles/1/1001/agency/2/agency_132_4853798_78147.jpg';
                  }
                  if(purpose.length==50){
                      purpose=purpose+'...';
                  }

            if(name=="臺北市中正運動中心")  
                {
                     list=list+'<div class="card">'+
            '<div class="img">'+
                 '<img src='+img+'>'+
            '</div>'+
            '<div class="introduction">'+
                '<h2 class="name">'+name+'</h2>'+
                '<p class="purpose">'+purpose+'</p>'+
                '<span class="aut">Healthy</span>'+
                '<span class="cardResult">Sports</span>'+
                '<div class="loc">'+
                    '<span ><i class="fas fa-map-marker-alt"></i><span class="address">'+address+'</span></span>'+
                    '<span ><i class="far fa-calendar-alt"></i><span class="opentime">'+opentime+'</span></span>'+
                '</div>'+
            '</div>'+
        '</div>';
                }
           }
         $('#list').html(list);
    })
});