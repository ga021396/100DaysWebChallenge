function ajax(url,fnSucc,fnfail){
         //1 創建
       var oAjax=new XMLHttpRequest();
       //2 連結 (方法 文件 非同步)
       oAjax.open('GET',url,true);//每次更新(防止緩存)
       //3 請求
       oAjax.send();
       //4 接收
       oAjax.onreadystatechange=function(){
           if(oAjax.readyState==4){
               if(oAjax.status==200){
                   fnSucc(oAjax.responseText);
               }
               else
                   if(fnfail){
                   alert(oAjax.status);
                   }
           }
       }
}