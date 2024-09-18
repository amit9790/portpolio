$(document).ready(function () {
  $('.slider').slick({
    arrows: false,
    dots: true,
    appendDots: '.slider-dots',
    dotsClass: 'dots'
  });


  let hamberger = document.querySelector('.hamberger');
  let times = document.querySelector('.times');
  let mobileNav = document.querySelector('.mobile-nav');
  let resume_download = document.querySelector('.resume-download');

  hamberger.addEventListener('click', function () {
    mobileNav.classList.add('open');
  });

  times.addEventListener('click', function () {
    mobileNav.classList.remove('open');
  });

  resume_download.addEventListener('click', () => {
    window.open(
      'https://drive.google.com/file/d/1Pr2TOVkZUgHTAGv4srCUneXXPRCl1cun/view?usp=share_link', '_blank'
    )
  });

  function goToContact() {
    window.location.href = "localhost:3000/#contact"
  }


  function scrollToBlog() {
    const blogSection = document.querySelector('#contact');
    if (blogSection) {
        blogSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Add event listener to the button
document.addEventListener('DOMContentLoaded', function() {
    const contactButton = document.getElementById('contactButton');
    if (contactButton) {
        contactButton.addEventListener('click', scrollToBlog);
    }
});

document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
          el: '.swiper-pagination',
          clickable: true,
      },
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      breakpoints: {
          640: {
              slidesPerView: 2,
              spaceBetween: 20,
          },
          768: {
              slidesPerView: 3,
              spaceBetween: 30,
          },
          1024: {
              slidesPerView: 4,
              spaceBetween: 40,
          },
      },
  });
});

});