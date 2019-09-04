
$(document).ready(function(){
  $('.slick').slick({
    	prevArrow : '<button type="button" class="my-arrow-prev"><img src="img/prev-arrow.png"></button>',
    	nextArrow : '<button type="button" class="my-arrow-next"><img src="img/prev-arrow.png"></button>',
    	infinite: true,
  		slidesToShow: 1,
  		adaptiveHeight: true,
  });
});

var dropBtn = document.querySelector('.drop-btn');
var dropMenu = document.querySelector('.drop-menu');

dropBtn.addEventListener('click' ,  showMenu(dropMenu));

function showMenu(element){
	return function(){
		element.classList.toggle('active');
	}	
}
