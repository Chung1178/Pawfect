// 加載 Swiper 的 CDN 版本
const swiperScript = document.createElement("script");
swiperScript.src =
  "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js";
swiperScript.onload = () => {
  // Swiper 縮圖
  const swiperThumbs = new Swiper(".mySwiper", {
    spaceBetween: 16,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true,

    breakpoints: {
      // Tablet and above
      768: {
        slidesPerView: 4,
        spaceBetween: 16,
      },
      // Desktop and above
      1024: {
        slidesPerView: 6,
        spaceBetween: 16,
      },
      // Large desktop and above
      1440: {
        slidesPerView: 8,
        spaceBetween: 16,
      },
    },
  });

  // Swiper 初始化代碼，確保 Swiper 加載後執行
  const swiper = new Swiper(".mySwiper2", {
    spaceBetween: 16,
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

// 日期 input 選擇
import AirDatepicker from "air-datepicker";
import localeZH from "air-datepicker/locale/zh";
import "air-datepicker/air-datepicker.css";
const dataShowElems = document.querySelectorAll("[data-date-show]");

const basicSettings = {
  locale: localeZH,
  range: true,
  minDate: new Date(),
  onSelect({ date, formattedDate }) {
    selectSitterObj.dateRange = formattedDate;
    dataShowElems.forEach((item) => (item.innerHTML = ""));
  },
};

const dataPickerPhone = new AirDatepicker("#date-picker-phone", {
  isMobile: true,
  ...basicSettings,
});

const dataPickerDesk = new AirDatepicker("#date-picker-desk", {
  ...basicSettings,
});
