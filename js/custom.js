$(document).ready(function () {
  $('.owl-carousel').owlCarousel();

  $('img[alt="Item 9"]').closest('.item').find('a').click(function (event) {
    event.preventDefault();
    alert('Produto esgotado');
  });





  $('.item:first-child .btn-comprar').after('<span class="new-item">Novo</span>');
});



$(document).ready(function () {

  $('.piscar-image').owlCarousel({
    loop: true,
    items: 1,
    autoplay: true,
    autoplayTimeout: 1000,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn'
  });


  $('.piscar-image').owlCarousel({
    loop: true,
    items: 1,
    autoplay: true,
    autoplayTimeout: 1000,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn'
  });

});;

$(document).ready(function () {

  let input = $('input[type="search"]');


  input.focus(function () {
    $(this).addClass('bg-primary');
  });


  input.blur(function () {
    $(this).removeClass('bg-primary');
    $(this).addClass('bg-light');
  });
});



$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: false,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    },
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
    animateOut: 'animate__slideOutDown',
    animateIn: 'animate__zoomIn'
  });
});



