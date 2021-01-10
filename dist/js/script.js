function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});
jQuery(function($) {
 
  $('.swiper-object .swiper-container').each(function(index, value) {
 
    var mySwiper = new Swiper(value, {
      autoplay: {
        delay: 5000,
      },
      navigation: {
        nextEl: value.nextElementSibling.nextElementSibling,
        prevEl: value.nextElementSibling,
      },
      pagination: {
        el: value.nextElementSibling.nextElementSibling.nextElementSibling,
        clickable: true,
      },
      slidesPerView: 'auto',
    });
 
  });
});
$(document).ready(function() {
  var mySwiper = new Swiper('.swiper-container.blog-slider', {
    // Optional parameters
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })
  
  var sliderQuotes = new Swiper('.swiper-container.quotes-slider', {
    pagination: {
      el: '.swiper-pagination',
    },
    slidesPerView: "auto"
  })
  $(".gallery-photo").hover(function() {
    $(this).children(".gallery-photo__loop").toggleClass("active")
  })

  $(".gallery-photo").on("click", function() {
    $("body").append(
      "<div class='gallery-popup'>" +
        "<img src=" + $(this).children("picture").children("img").attr("src") + " alt='' class='gallery-popup__photo'>" +
      "</div>")
    $("body").toggleClass("lock")
  })
  $("body").click(function(e) {
    if(e.target.classList.value == "gallery-popup" || e.target.classList.value == "gallery-popup__photo")
      $(".gallery-popup").remove();
      $("body").removeClass("lock")
  })
})

$(document).ready(function() {
  $('.faq-list__question').on('click',function(){
    $answer = $(this).closest('li').find(".faq-list__answer");
    $answer
      .closest('li')
      .toggleClass("active");
  })
})