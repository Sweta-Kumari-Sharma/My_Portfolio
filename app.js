$(document).ready(function(){
  // $('.owl-carousel').owlCarousel({
  //     loop:true,
  //     margin:10,
  //     nav:true,
  //     responsive:{
  //         0:{
  //             items:1
  //         },
  //         600:{
  //             items:3
  //         },
  //         1000:{
  //             items:5
  //         }
  //     }
  // })
  var teamCarousel = function(){
    var owl = $('.owl-carousel-team');
    owl.owlCarousel({
        loop:true,
        margin:0,
        autoHeight:false,
        smartSpeed: 500,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            1000:{
                items:1,
                nav:false,
                dots: true,
            }
        }
    });
  };

  $(function () {
    $('#scrollToBottom').bind("click", function () {
        $('html, body').animate({ scrollTop: $(document).height() }, "1000");
        return false;
    });
    $('#scrollToTop').bind("click", function () {
        $('html, body').animate({ scrollTop: 0 },"1000");
        return false;
    });
  });
  $(window).scroll(function(){
        
    if(this.scrollY > 20){
        $('.navbar').addClass("fixed_nav");
    }else{
        $('.navbar').removeClass("fixed_nav");
    }
                
    if(this.scrollY > 500){
        $('#scrollToTop').addClass("show");
    }else{
        $('#scrollToTop').removeClass("show");
    }
    if(this.scrollY < 1000){
        $('#scrollToBottom').addClass("show");
    }else{
        $('#scrollToBottom').removeClass("show");
    }
  });

  var typed = new Typed(".auto_type_home", {
    strings: ["Student", "Programmer", "Web-Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

});

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
    
})
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

