$(document).on('click', ".button-arrow", function (e) {
  var myButton = this;
  $(".button-arrow").each(function (key, value) {
    if (!(value == myButton) && $(value).hasClass('show') && !$(myButton).hasClass('card-body__level2')) {
      $(value).toggleClass('show');
      $(value).toggleClass('hide');
      $(value).closest('.card').children('.collapse').removeClass('show');
    }
  })
  $(this).toggleClass('hide');
  $(this).toggleClass('show');
});




$(function () {
  // Owl Carousel
  var owl = $(".owl-threeItems");
  owl.owlCarousel({
    items: 3,
    autoWidth:true,
    margin: 30,
    loop: true,
    nav: true
  });
  
  
});



$(function () {
  // Owl Carousel
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 1,
    margin: 10,
    loop: true,
    nav: true
  });
});


$(document).ready(function() {
  $('.select').select2();
});