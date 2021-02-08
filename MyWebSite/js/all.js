$(document).ready(function() {

	
	$('#btnAbout').unbind('click').on('click', function() {
       	 $('html,body').animate({scrollTop:$('#aboutWrap').offset().top}, 500); 
    });
    $('#btnWeb').unbind('click').on('click', function() {
       	 $('html,body').animate({scrollTop:$('#webDesignWrap').offset().top}, 500); 
    });
    $('#btnApp').unbind('click').on('click', function() {
       	 $('html,body').animate({scrollTop:$('#AppWrap').offset().top}, 500); 
    });
    $('#btnBanner').unbind('click').on('click', function() {
       	 $('html,body').animate({scrollTop:$('#bannerWrap').offset().top}, 500); 
    });

	$(".navBtn").on("click", function (e) {
		// e.preventDefault();
		if($(this).parent().hasClass('open'))
        {
        	$(this).parent().removeClass('open');
        }
        else{
        	$(this).parent().addClass('open');
        }
	});

  $("nav a").on("click", function (e) {
    e.preventDefault();
    $(this).parent().parent().parent().removeClass('open');
  });


	//捲軸滾動，選單跟著動
  	$('nav ul').onePageNav({
      currentClass: 'act',
      changeHash: false,
      scrollSpeed: 750,
      scrollThreshold: 0.1,
      filter: '',
      easing: 'swing',
      begin: function() {
      },
      end: function() {
      },
      scrollChange: function($currentListItem) {
      }
    });

});