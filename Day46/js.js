// JavaScript Document
/*jslint browser: true */
/*global window */
new Vue({
  el: '#app',
  data () {
    return {
      success: true,
      message: "報名成功！",
      nickName: "gonsakon",
      timeStamp: 1527035405000,
      Certificate:"獎狀網址"
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
    }
  }
})
