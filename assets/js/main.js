(function() {
  "use strict";

  /**
   * selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)]; // Selects all matching elements
    } else {
      return document.querySelector(el); // Selects the first matching element
    }
  }

  /**
   * event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener)); // Attaches the event listener to all elements
      } else {
        selectEl.addEventListener(type, listener); // Attaches the event listener to the element
      }
    }
  }

  /**
   * on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener); // Attaches the scroll event listener to the element
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true);
  const navbarlinksActive = () => {
    let position = window.scrollY + 200;
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return;
      let section = select(navbarlink.hash);
      if (!section) return;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active'); // Adds the active class to the navbar link if the corresponding section is in view
      } else {
        navbarlink.classList.remove('active'); // Removes the active class from the navbar link if the corresponding section is not in view
      }
    });
  }
  window.addEventListener('load', navbarlinksActive);
  onscroll(document, navbarlinksActive);

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header');
    let offset = header.offsetHeight;

    if (!header.classList.contains('header-scrolled')) {
      offset -= 16;
    }

    let elementPos = select(el).offsetTop;
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    });
  }

  /**
   * Header fixed top on scroll
   */
  let selectHeader = select('#header');
  if (selectHeader) {
    let headerOffset = selectHeader.offsetTop;
    let nextElement = selectHeader.nextElementSibling;
    const headerFixed = () => {
      if ((headerOffset - window.scrollY) <= 0) {
        selectHeader.classList.add('fixed-top'); // Adds the fixed-top class to the header if it reaches the top of the viewport
        nextElement.classList.add('scrolled-offset'); // Adds additional spacing to the next element to compensate for the header height
      } else {
        selectHeader.classList.remove('fixed-top'); // Removes the fixed-top class from the header if it is not at the top of the viewport
        nextElement.classList.remove('scrolled-offset'); // Removes the additional spacing from the next element
      }
    }
    window.addEventListener('load', headerFixed);
    onscroll(document, headerFixed);
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top');
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active'); // Adds the active class to the back-to-top button when the page is scrolled down
      } else {
        backtotop.classList.remove('active'); // Removes the active class from the back-to-top button when the page is at the top
      }
    }
    window.addEventListener('load', toggleBacktotop);
    onscroll(document, toggleBacktotop);
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile'); // Toggles the navbar-mobile class on the navbar element
    this.classList.toggle('bi-list'); // Toggles the bi-list class on the mobile nav toggle button
    this.classList.toggle('bi-x'); // Toggles the bi-x class on the mobile nav toggle button
  });

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault();
      this.nextElementSibling.classList.toggle('dropdown-active'); // Toggles the dropdown-active class on the next sibling of the clicked dropdown link
    }
  }, true);

  /**
   * Scroll with offset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault();

      let navbar = select('#navbar');
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile'); // Removes the navbar-mobile class from the navbar when a link is clicked
        let navbarToggle = select('.mobile-nav-toggle');
        navbarToggle.classList.toggle('bi-list'); // Toggles the bi-list class on the mobile nav toggle button
        navbarToggle.classList.toggle('bi-x'); // Toggles the bi-x class on the mobile nav toggle button
      }
      scrollto(this.hash); // Scrolls to the corresponding section with an offset
    }
  }, true);

  /**
   * Scroll with offset on page load with hash links in the URL
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash); // Scrolls to the corresponding section on page load if a hash link is present in the URL
      }
    }
  });

  /**
   * Hero carousel indicators
   */
  let heroCarouselIndicators = select("#hero-carousel-indicators");
  let heroCarouselItems = select('#heroCarousel .carousel-item', true);

  heroCarouselItems.forEach((item, index) => {
    (index === 0) ?
      heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "' class='active'></li>" :
      heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "'></li>";
  });

  /**
   * Most popular recipes isotope and filter
   */
  window.addEventListener('load', () => {
    let popularRecipesContainer = select('.popularRecipes-container');
    if (popularRecipesContainer) {
      let popularRecipesIsotope = new Isotope(popularRecipesContainer, {
        itemSelector: '.portfolio-item'
      });

      let popularRecipesFilters = select('#popularRecipes-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        popularRecipesFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        popularRecipesIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });

      }, true);

    }

  });

  /**
   * Initiate most popular recipes lightbox 
   */
  const popularRecipesLightbox = GLightbox({
    selector: '.popularRecipes-lightbox'
  });

  /**
   * Most popular recipes details slider
   */
  new Swiper('.popularRecipes-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  document.addEventListener('DOMContentLoaded', function() {

    const nav = document.querySelector('.navbar');
    const allNavItems = document.querySelectorAll('.nav-link');
    const navList = document.querySelector('.navbar-collapse');
    const btn = document.querySelector('.navbar-toggler');

    // Hide navigation menu on link click
    allNavItems.forEach(item => item.addEventListener('click', () => navList.classList.remove('show')));

    // Add shadow to header on click
    btn.addEventListener('click', () => nav.classList.add('shadow-bg'));

    // Add shadow to header on scroll
    function addShadow() {
      if (window.scrollY >= 200) {
        nav.classList.add('shadow-bg');
      } else if (window.scrollY == 0) {
        nav.classList.remove('shadow-bg');
      }
    }

    // Initialize shadow on page load
    window.addEventListener('load', addShadow);

    // Add shadow on scroll
    window.addEventListener('scroll', addShadow);

  });

})();
