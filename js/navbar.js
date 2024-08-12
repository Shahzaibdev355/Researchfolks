// -----------------------------------nav bar fixed when scroll--------------------------------//

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener('scroll', function () {
    var header = document.getElementById('header');
    var navbarHeight = header.offsetHeight;

    if (window.scrollY > 50) {
      header.classList.add('fixed-top', 'fade-in');
      document.body.style.paddingTop = navbarHeight + 'px';
    } else {
      header.classList.remove('fixed-top', 'fade-in');
      document.body.style.paddingTop = '0';
    }
  });
});

// -----------------------------------nav bar fixed when scroll--------------------------------//




/*** ==========================Mobile nav toggle========================== */
document.addEventListener('DOMContentLoaded', () => {
  "use strict";



  const mobileNavShow = document.querySelector('.mobile-nav-show');
  const mobileNavHide = document.querySelector('.mobile-nav-hide');

  document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
    el.addEventListener('click', function (event) {
      event.preventDefault();
      mobileNavToogle();
    })
  });

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavShow.classList.toggle('d-none');
    mobileNavHide.classList.toggle('d-none');
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navbar a').forEach(navbarlink => {

    if (!navbarlink.hash) return;

    let section = document.querySelector(navbarlink.hash);
    if (!section) return;

    navbarlink.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

  navDropdowns.forEach(el => {
    el.addEventListener('click', function (event) {
      if (document.querySelector('.mobile-nav-active')) {
        event.preventDefault();
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('dropdown-active');

        let dropDownIndicator = this.querySelector('.dropdown-indicator');
        dropDownIndicator.classList.toggle('bi-chevron-up');
        dropDownIndicator.classList.toggle('bi-chevron-down');
      }
    })
  });



});