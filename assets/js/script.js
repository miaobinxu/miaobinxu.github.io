$(document).ready(function() {
    $('#sidebar-button').click(function(){
      if($('.sidebar-container').hasClass('sidebar-active')) {
         $('body').removeClass('no-scroll');
         $('#sidebar-button').removeClass('button-active');
         $('.sidebar-container').removeClass('sidebar-active');
         $('#wrapper').removeClass('wrapper-active');
      } else {
         $('#sidebar-button').addClass('button-active');
         $('.sidebar-container').addClass('sidebar-active');
         $('#wrapper').addClass('wrapper-active');
          setTimeout(function(){
            $('body').addClass('no-scroll');
            }, 300);   
        }
  });

    $('#carousel-next').click(function(){
      var margin = parseInt($('#carousel').css('margin-left').replace("px", ""));
      if (margin == -3840) {
        false;
         } else {
          $('#carousel').css('margin-left', margin - 960);
         }
      });
    $('#carousel-prev').click(function(){
      var margin = parseInt($('#carousel').css('margin-left').replace("px", ""));
      if (margin == 0) {
        false;
         } else {
          $('#carousel').css('margin-left', margin + 960);
         }
      });
  $("#sidebar-critism").click(function(){
    $(".critismto").show();
    $(".interviewto").hide();
    $(".essayto").hide();
  });
  $("#sidebar-interview").click(function(){
    $(".interviewto").show();
    $(".critismto").hide();
    $(".essayto").hide();
  });
  $("#sidebar-essay").click(function(){
    $(".essayto").show();
    $(".critismto").hide();
    $(".interviewto").hide();
  });
  
  });
