const ariBoxes = document.querySelectorAll(".ari-box");
    const allRegionsEmpty = document.querySelector(".all-regions-empty");
    ariBoxes.forEach(ariBox => {
      ariBox.addEventListener("click", function() {
          allRegionsEmpty.style.display = 'none';
      });
    });
// Create a media condition that targets viewports at least 768px wide
const mediaQuery = window.matchMedia('(max-width: 991.98px)')
// Check if the media query is true
if (mediaQuery.matches) {
  document.addEventListener('DOMContentLoaded', function() {
    const backLinks = document.querySelectorAll('.back-btn');
  
    backLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();
  
        const ariBoxes = document.querySelectorAll('.ari-box');
        ariBoxes.forEach(box => {
          box.classList.remove('active');
        });  

        const activeTabPane = document.querySelector('.tab-pane.show.active');
        activeTabPane.classList.remove('show', 'active');  

        backLinks.forEach(link => {
          link.classList.remove('active');
        });
      });
    });
  });


}

var logoCarouselSliders = document.querySelectorAll('.logo-carousel-slider');

if (logoCarouselSliders.length > 0) {
  logoCarouselSliders.forEach(function (slider) {
    var swiper = new Swiper(slider, {
      loop: true,
      speed: 5000,
      slidesPerView: 'auto',
      spaceBetween: 15,
      autoplay: {
        delay: 0,
      },
      breakpoints: {
        992: {
          slidesPerView: 5,
          spaceBetween: 24
        }
      }
    });

    slider.addEventListener('mouseover', function (e) {
      console.log('stop autoplay');
      swiper.autoplay.stop();
    });

    slider.addEventListener('mouseout', function (e) {
      console.log('start autoplay');
      swiper.autoplay.start();
    });
  });
}
// Function to add a class to the body element
function addClassToBody() {
  const body = document.body;

  if (window.scrollY >= 10) {
    body.classList.add('fixed');
  } else {
    body.classList.remove('fixed');
  }
}

// Attach the scroll event listener to the window
window.addEventListener('scroll', addClassToBody);

// Initial check in case the page is already scrolled
addClassToBody();

