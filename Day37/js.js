// JavaScript Document
/*jslint browser: true */
/*global window */
$( document ).ready(function() {
    var thisdata;
    var le;
    var long=0;
    var tag=$(".locaTag");
          var name ;
          var purpose ;
          var address ;
          var opentime ;
          var img ;
          var list ;
          var str;
          var loca;
          var all;
  $.ajax({
      type:'GET',
      url: "eduagency.json",
      success: function( result ) {
      thisdata = JSON.parse(result);
      le = thisdata.length;
      $('.howmany').html('Showing '+le+' results');
      list='';
      for(i=0;i<le;i++){    
        getData(i);
        list+=show(img,name,purpose,address,opentime);
      }    
            $('#list').html(list);
  }
});
    $(".YourLocation").change(function(){
        long=0;
        list='';
        all='';
          $( "select option:selected" ).each(function() {
         
                for(i=0;i<le;i++){     
                getData(i);
                all+=show(img,name,purpose,address,opentime);
                if($(this).text()==loca)  
                    {
                    long+=1;
                    list+=show(img,name,purpose,address,opentime);
                    }
            }
              if($(this).text()=="ALL"){
                  list=all;
                  long=le;
              }
                tag.html($(this).text());
    });  
         $('.howmany').html('Showing '+long+' results');
         $('#list').html(list);
    })
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    function show(ig, ne, pe, as, oe){
         str='<div class="card">'+
            '<div class="img">'+
                 '<img src='+ig+'>'+
            '</div>'+
            '<div class="introduction">'+
                '<h2 class="name">'+ne+'</h2>'+
                '<p class="purpose">'+pe+'</p>'+
                '<span class="aut">Healthy</span>'+
                '<span class="cardResult">Sports</span>'+
                '<div class="loc">'+
                    '<span ><i class="fas fa-map-marker-alt"></i><span class="address">'+as+'</span></span>'+
                    '<span ><i class="far fa-calendar-alt"></i><span class="opentime">'+oe+'</span></span>'+
                '</div>'+
            '</div>'+
        '</div>';
        return str;
    }
    function getData(a){
           name = thisdata[a].o_tlc_agency_name;
           purpose = thisdata[a].o_tlc_agency_purpose.substr(0,50);
           address = thisdata[a].o_tlc_agency_address;
           opentime = thisdata[a].o_tlc_agency_opentime;
           img = thisdata[a].o_tlc_agency_img_front;
           loca= thisdata[a].location;
          if(img==""){
 img='http://www.lct.tp.edu.tw/ezfiles/1/1001/agency/2/agency_132_4853798_78147.jpg';
          }
          if(purpose.length==50){
              purpose=purpose+'...';
          }
        
    }
});