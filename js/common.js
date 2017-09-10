


function scrollBanner() {
  $(document).scroll(function(){
  	var scrollPos = $(this).scrollTop();
  	$('#banner-1').css({
  	  'top' : (scrollPos/1.3)+100+'px',
  	  'opacity' : 1-(scrollPos/360)
  	});
  	$('#banner-2').css({
  	  'top' : (scrollPos/1.5)+120+'px',
  	  'opacity' : 1-(scrollPos/360)
  	});
  	
  });    
}
scrollBanner();



