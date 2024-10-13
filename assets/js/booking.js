// 加載 Swiper 的 CDN 版本
const swiperScript = document.createElement("script");
swiperScript.src =
  "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js";
swiperScript.onload = () => {
  // Swiper 縮圖
  const swiperThumbs = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });

  // Swiper 初始化代碼，確保 Swiper 加載後執行
  const swiper = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    navigation: {
      nextEl: ".custom-swiper-next", //".swiper-button-next",
      prevEl: ".custom-swiper-prev", //".swiper-button-prev",
    },
    thumbs: {
      swiper: swiperThumbs, // 將縮略圖 Swiper 關聯到主要 Swiper
    },
  });
};
document.body.appendChild(swiperScript);