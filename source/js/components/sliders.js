import Swiper from 'swiper';
import vars from "../_vars";

import {Grid, Navigation, Pagination} from 'swiper/modules';

import {disableScroll} from "../functions/disable-scroll";
import {enableScroll} from "../functions/enable-scroll";
import swiper from "../vendor/swiper";

const {
  ratingSliders,
  aboutSliders,
  areasSliders,
  mainSliders,
  colorsSliders,
  cardsSliders,
  chooseSliders,
  gallerySliders,
  consultantSlider
} = vars;


ratingSliders && ratingSliders.forEach(function(slider){
  const swiper = slider.querySelector('.swiper-container');
  const sliderPrev = slider.querySelector('.arrow-button--prev');
  const sliderNext = slider.querySelector('.arrow-button--next');
  let flag = true;

  new Swiper(swiper, {
    modules: [Navigation],
    spaceBetween  : 30,
    slidesPerView : 3,
    speed         : 800,
    observer      : true,
    observeParents: true,

    navigation: {
      nextEl: sliderNext && sliderNext,
      prevEl: sliderPrev && sliderPrev,
    },

    breakpoints: {
      0: {
        slidesPerView: 'auto',
      },
      1024: {
        slidesPerView: 3,
      },
    },
    
    on: {
      slideChangeTransitionStart: function () {
        if (window.innerWidth > 1240 && flag) {
          sliderPrev.style.display = 'flex';
          sliderPrev.style.marginRight = 'auto';
          flag = false;
        }
      }
    }
  });
  window.addEventListener('resize', function() {
    if (window.innerWidth <= 1240) {
      sliderPrev.style.marginRight = '0';
    } else {
      sliderPrev.style.marginRight = 'auto';
    }
  });
});

aboutSliders && aboutSliders.forEach(function(slider){
  const swiper = slider.querySelector('.swiper-container');
  const sliderPrev = slider.querySelector('.arrow-button--prev');
  const sliderNext = slider.querySelector('.arrow-button--next');
  let flag = true; 

  new Swiper(swiper, {
    modules: [Grid, Navigation],
    slidesPerView: 'auto',
    spaceBetween: 16,
    observer: true,
    observeParents: true,
    watchSlidesProgress: true,

    grid: {
      fill: 'row',
      rows: 2,
    },

    navigation: {
      nextEl: sliderNext && sliderNext,
      prevEl: sliderPrev && sliderPrev,
    },

    breakpoints: {
      0: {
        slidesPerView: 'auto',
      },
      1441:{
        slidesPerView: 3,
      },
    },
    
    on: {
      slideChangeTransitionStart: function () {
        if (flag) {
          sliderPrev.style.display = 'flex';
          sliderPrev.style.marginRight = 'auto';
          flag = false;
        }
      }
    }
  });
});

areasSliders && areasSliders.forEach(function(slider){
    const sliderContainer = slider.querySelector('.areas-slider__container');
    const sliderPagination = slider.querySelector('.swiper-pagination');
    let swiper;
    
    function initSwiper(container) {
      return new Swiper(container, {
        modules: [Pagination],
        slidesPerView: 1,
        spaceBetween: 30,
        observer: true,
        observeParents: true,

        pagination: {
          el: sliderPagination,
          clickable: true,
        },
    
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          400:{
            slidesPerView: 'auto',
          },
          576:{
            slidesPerView: 1.3,
          },
          840: {
            slidesPerView: 2,
          }
        },
      });
    }
    
    function destroy(item){
      if (item) {
        item.destroy();
        item = null;
      }
    }
    
    function updateSlider() {
      if (window.innerWidth < 1024 && slider) {
        destroy(swiper);
        initSwiper(sliderContainer);
      } else {
        destroy(swiper);
      }
    }
    
    window.addEventListener('load', updateSlider);
    window.addEventListener('resize', updateSlider);
})

mainSliders && mainSliders.forEach(function(slider){
  const swiper = slider.querySelector('.swiper-container');
  const sliderPrev = slider.querySelector('.arrow-button--prev');
  const sliderNext = slider.querySelector('.arrow-button--next');
  const sliderPagination = slider.querySelector('.swiper-pagination');
  let flag = true;

  new Swiper(swiper, {
    modules: [Navigation, Pagination],
    slidesPerView : 1,
    speed         : 800,
    observer      : true,
    observeParents: true,

    navigation: {
      nextEl: sliderNext && sliderNext,
      prevEl: sliderPrev && sliderPrev,
    },

    pagination: {
      el: sliderPagination,
      clickable: true,
    },
    
    on: {
      slideChangeTransitionStart: function () {
        if (flag) {
          sliderPrev.style.opacity = '1';
          sliderPrev.style.visibility = 'visible';
          flag = false;
        }
      }
    }
  });
});

colorsSliders && colorsSliders.forEach(function(slider){
  const sliderContainer = slider.querySelector('.swiper-container');
  const sliderPagination = slider.querySelector('.swiper-pagination');
  let swiper;
  
  function initSlider(container) {
    return new Swiper(container, {
      modules: [Grid, Pagination],
      slidesPerView: 'auto',
      spaceBetween: 33,
      observer: true,
      observeParents: true,
      watchSlidesProgress: true,
  
      grid: {
        fill: 'row',
        rows: 3,
      },
  
      pagination: {
        el: sliderPagination,
        clickable: true,
      }
    });
  }
  
  function destroy() {
    if (swiper) {
        swiper.destroy();
        swiper = null;
    }
}
  
  function updateSlider() {
    if (window.innerWidth < 768) {
      destroy(swiper);
      swiper = initSlider(sliderContainer);
    } else {
      destroy(swiper);
    }
  }
  
  window.addEventListener('DOMContentLoaded', updateSlider);
  window.addEventListener('resize', updateSlider);
})

cardsSliders && cardsSliders.forEach(function(slider){
  const sliderContainer = slider.querySelector('.swiper-container');
  const sliderPagination = slider.querySelector('.swiper-pagination');
  let swiper;
  
  function initSlider(container) {
    return new Swiper(container, {
      modules: [Pagination],
      slidesPerView: 'auto',
      spaceBetween: 30,
      observer: true,
      observeParents: true,
      watchSlidesProgress: true,
      initialSlide: 1,
      centeredSlides: true,
  
      pagination: {
        el: sliderPagination,
        clickable: true,
      }
    });
  }
  
  function destroy() {
    if (swiper) {
        swiper.destroy();
        swiper = null;
    }
}
  
  function updateSlider() {
    if (window.innerWidth < 576) {
      destroy(swiper);
      swiper = initSlider(sliderContainer);
    } else {
      destroy(swiper);
    }
  }
  
  window.addEventListener('DOMContentLoaded', updateSlider);
  window.addEventListener('resize', updateSlider);
})

chooseSliders && chooseSliders.forEach(function(slider){
  const swiper = slider.querySelector('.swiper-container');
  const sliderPagination = slider.querySelector('.swiper-pagination');

  new Swiper(swiper, {
    modules: [Pagination],
    slidesPerView : 'auto',
    speed         : 800,
    spaceBetween: 40,
    observer      : true,
    observeParents: true,
    centeredSlides: true,
    // centerInsufficientSlides: true,
    // centeredSlidesBounds: true,
    initialSlide: 4,
    slideToClickedSlide: true,
    slideVisibleClass: 'swiper-slide-visible',

    breakpoints: {
      0: {
        slidesPerView: 1.4,
      },
      500: {
        slidesPerView: 1.6,
      },
      650: {
        slidesPerView: 2,
      },

      768: {
        slidesPerView: 2.3,
      },

      1025: {
        slidesPerView: 3,
      },
      1250: {
        slidesPerView: 3.5,
      },
      1400: {
        slidesPerView: 4,
      },
      1500: {
        slidesPerView: 4.5,
      },
      1700: {
        slidesPerView: 5,
      },
      1920: {
        slidesPerView: 5.5,
      },
      2300: {
        slidesPerView: 6,
      },
      2400: {
        slidesPerView: 7,
      }
    },

    pagination: {
      el: sliderPagination,
      clickable: true,
    },
  });
});

gallerySliders && gallerySliders.forEach(function(slider){
  const swiper = slider.querySelector('.swiper-container');
  const sliderPrev = slider.querySelector('.arrow-button--prev');
  const sliderNext = slider.querySelector('.arrow-button--next');
  const sliderPagination = slider.querySelector('.swiper-pagination');
  let flag = true;

  new Swiper(swiper, {
    modules: [Navigation, Pagination],
    slidesPerView : 1,
    speed         : 800,
    observer      : true,
    observeParents: true,
    spaceBetween: 16,

    navigation: {
      nextEl: sliderNext && sliderNext,
      prevEl: sliderPrev && sliderPrev,
    },

    pagination: {
      el: sliderPagination,
      clickable: true,
    },
    
    on: {
      slideChangeTransitionStart: function () {
        if (flag) {
          sliderPrev.style.opacity = '1';
          sliderPrev.style.visibility = 'visible';
          flag = false;
        }
      }
    }
  });
});

// const bannerSections = document.querySelectorAll('.banner-section');
// const categorySlider = document.querySelectorAll('.category-slider');
// const mainSlider = document.querySelectorAll('.main-slider');

// bannerSections.length && bannerSections.forEach((bannerSection) => {
//   const slider = bannerSection.querySelector('.swiper-container');
//   const sliderPrev = bannerSection.querySelector('.arrow-button--prev');
//   const sliderNext = bannerSection.querySelector('.arrow-button--next');
//   const sliderPagination = bannerSection.querySelector('.swiper-pagination');

//   new Swiper(slider, {
//     watchOverflow        : true,
//     watchSlidesVisibility: true,
//     slidesPerView        : 1,
//     centeredSlides       : true,
//     spaceBetween         : 20,
//     speed                : 800,

//     autoplay: {
//       delay               : 5000,
//       disableOnInteraction: false,
//     },

//     navigation: {
//       nextEl: sliderNext && sliderNext,
//       prevEl: sliderPrev && sliderPrev,
//     },

//     pagination: {
//       el       : sliderPagination,
//       clickable: true,
//     }
//   });

// })

// categorySlider.length && categorySlider.forEach((slider) => {
//   const swiper = slider.querySelector('.swiper-container');
//   const sliderPrev = slider.querySelector('.arrow-button--prev');
//   const sliderNext = slider.querySelector('.arrow-button--next');

//   new Swiper(swiper, {
//     watchOverflow        : true,
//     watchSlidesVisibility: true,
//     slidesPerView        : 'auto',
//     centeredSlides       : false,
//     // spaceBetween: 25,
//     speed: 800,

//     navigation: {
//       nextEl: sliderNext && sliderNext,
//       prevEl: sliderPrev && sliderPrev,
//     }
//   });

// })

// mainSlider.length && mainSlider.forEach((slider) => {
//   let flag = slider.classList.contains('main-slider--offer')
//   const swiper = slider.querySelector('.swiper-container');
//   const sliderPrev = slider.querySelector('.arrow-button--prev');
//   const sliderNext = slider.querySelector('.arrow-button--next');
//   const asideSectionParent = slider.closest('.aside-section');

//   const hasAsideBreakpoints = {
//     0: {
//       spaceBetween         : 15,
//       slidesPerView: flag ? 'auto' : 2.5,
//     },
//     641: {
//       spaceBetween         : 15,
//       slidesPerView: flag ? 2 : 3,
//     },

//     961: {
//       spaceBetween         : 20,
//       slidesPerView: flag ? 2 : 3,
//     },

//     1201: {
//       spaceBetween         : 20,
//       slidesPerView:  flag ? 2 : 3,
//     }
//   }

//   const defaultBreakpoints = {
//     0: {
//       spaceBetween         : 15,
//       slidesPerView: flag ? 'auto' : 2.5,
//     },
//     641: {
//       spaceBetween         : 15,
//       slidesPerView: flag ? 'auto' : 3,
//     },

//     961: {
//       spaceBetween         : 15,
//       slidesPerView: flag ? 'auto' : 4,
//     },

//     1201: {
//       spaceBetween         : 20,
//       slidesPerView:  flag ? 2.5 : 5,
//     }
//   }

//   new Swiper(swiper, {
//     watchOverflow        : true,
//     watchSlidesVisibility: true,
//     // slidesPerView        : flag ? 2.5 : 5,
//     centeredSlides       : false,
//     spaceBetween         : 20,
//     speed                : 800,

//     navigation: {
//       nextEl: sliderNext && sliderNext,
//       prevEl: sliderPrev && sliderPrev,
//     },

//     breakpoints: asideSectionParent ? hasAsideBreakpoints : defaultBreakpoints,
//   });

// })




























