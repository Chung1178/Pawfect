import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

//標題下拉陰影
window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var scrollPosition = window.scrollY;
  
    if (scrollPosition > 0) {
      navbar.classList.add('navbar-shadow'); // 添加陰影
    } else {
      navbar.classList.remove('navbar-shadow'); // 移除陰影
    }
  });