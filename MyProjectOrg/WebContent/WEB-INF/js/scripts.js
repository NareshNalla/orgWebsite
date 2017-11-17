// Empty JS for your own code to be here
  $(document).ready(function () {
        $(".nav li").removeClass("active");//this will remove the active class from  
                                           //previously active menu item 
        $('#home').addClass('active');
        //for demo
        //$('#demo').addClass('active');
        //for sale 
        //$('#sale').addClass('active');
    });
  
  var _urlpath = $(location).attr('pathname').split('/').pop();

  $('#menu > li').each(function(){
      var _this = $(this);
      var _str = _this.find('a').attr('href');
      _str !== _urlpath ? _this.removeClass('active') : _this.addClass('active');
  });
