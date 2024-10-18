// core version + navigation, pagination modules:
import Swiper from "swiper";
import { Autoplay, Navigation } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// init Swiper:
const swiper = new Swiper(".swiper-comment", {
  // configure Swiper to use modules
  modules: [Navigation, Autoplay],
  slidesPerView: 1.2,
  spaceBetween: 12,
  navigation: {
    nextEl: ".swiper-button-comment-pre",
    prevEl: ".swiper-button-comment-next",
  },
  autoplay: true,
  breakpoints: {
    768: {
      slidesPerView: 2.5,
      spaceBetween: 24,
      centeredSlides: true,
    },
    996: {
      slidesPerView: 3.4,
      spaceBetween: 48,
      centeredSlides: true,
    },
    1320: {
      slidesPerView: 4.2,
      spaceBetween: 48,
      centeredSlides: true,
    },
  },
});

// 使用者評論區 body 高度
const comments = document.querySelectorAll("[data-user-comment]");
comments.forEach((comment) => {
  const height = comment.getBoundingClientRect().height;
  const parentBody = comment.closest(".card-comment-body");
  if (height === 48) {
    parentBody.classList.add("pb-14");
  } else if (height === 72) {
    parentBody.classList.add("pb-8");
  } else if (height === 96) {
    parentBody.classList.add("pb-3");
  }
});

// banner搜尋區塊
const selectSitterObj = {
  serviceType: '',
  catNum: 0,
  dogNum: 0,
  area: '',
  dateRange: [],
}


// 加入地圖選單選項
const taiwanCities = [
  "台北市", "新北市", "桃園市", "台中市", "台南市", "高雄市", 
  "基隆市", "新竹市", "嘉義市", 
  "新竹縣", "苗栗縣", "彰化縣", "南投縣", "雲林縣", "嘉義縣", 
  "屏東縣", "宜蘭縣", "花蓮縣", "台東縣", 
  "澎湖縣", "金門縣", "連江縣"
];

const citySelects = document.querySelectorAll('[data-city-select]');

function renderCities() {
  let str = '';
  taiwanCities.forEach(city => {
    str += `
      <li>
        <a class="dropdown-item py-2 px-4 mb-2 bg-gray-1000-hover"
          data-area-select
          href="#">
          ${city}
        </a>
      </li>`
  });
  citySelects.forEach(select => {
    select.innerHTML = str;
  });
}
renderCities();

const areaSelect = document.querySelectorAll('[data-area-select]');
const areaShowElems = document.querySelectorAll('[data-area-show]');

areaSelect.forEach(select => {
  select.addEventListener('click', (e) => {
    e.preventDefault();
    areaShowElems.forEach(elem => {
      elem.innerText = select.innerText;
    })
    selectSitterObj.area = select.innerText;
  })
})


// 貓狗數量選擇
const countPetButtons = document.querySelectorAll('[data-count-btn]');
const petDogNumElems = document.querySelectorAll('[data-dog-num]');
const petCatNumElems = document.querySelectorAll('[data-cat-num]');
const petNumShowElems = document.querySelectorAll('[data-petNum-show]');

countPetButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const petType = e.target.dataset.petType;
    const countType = e.target.dataset.countBtn;
    if (petType === 'cat' && selectSitterObj.catNum >= 0) {
      countType === '+' ? selectSitterObj.catNum ++ : selectSitterObj.catNum --;
    } else if (petType === 'dog' && selectSitterObj.dogNum >= 0) {
      countType === '+' ? selectSitterObj.dogNum ++ : selectSitterObj.dogNum --;
    }
    checkDisabled(e);
    renderCountPet(petType);
  })
})

function checkDisabled(e) {
  if (selectSitterObj.dogNum === 0 || selectSitterObj.catNum === 0) {
    const btn = e.target.closest('div').querySelector('[data-count-btn="-"]');
    btn.classList.remove('text-gray-500')
    btn.classList.add('text-gray-800', 'pe-none');
  }
  if (selectSitterObj.dogNum > 0 || selectSitterObj.catNum > 0) {
    const btn = e.target.closest('div').querySelector('[data-count-btn="-"]');
    btn.classList.remove('text-gray-800', 'pe-none')
    btn.classList.add('text-gray-500')
  }
}

function renderCountPet(petType) {
  if (petType === 'cat') {
    petCatNumElems.forEach(item => item.innerText = selectSitterObj.catNum)
  } else if (petType === 'dog') {
    petDogNumElems.forEach(item => item.innerText = selectSitterObj.dogNum)
  }
}

const petNumDropdowns = document.querySelectorAll('.petNumDropdown');
petNumDropdowns.forEach(drop => {
  drop.addEventListener('hide.bs.dropdown', () => {
    petNumShowElems.forEach(elem => {
      const catText = selectSitterObj.catNum ? `貓 ${selectSitterObj.catNum}隻` : '';
      const dogText = selectSitterObj.dogNum ? `狗 ${selectSitterObj.dogNum}隻` : '';
      elem.innerText = `${catText} ${ catText && dogText ? '/' : '' } ${dogText}`;
    })
  })
})

// 日期 input 選擇
import AirDatepicker from 'air-datepicker';
import localeZH from 'air-datepicker/locale/zh';
import 'air-datepicker/air-datepicker.css';
const dataShowElems = document.querySelectorAll('[data-date-show]');

const basicSettings = {
  locale: localeZH,
  range: true,
  minDate: new Date(),
  onSelect({ date, formattedDate }) {
    selectSitterObj.dateRange = formattedDate;
    dataShowElems.forEach(item => item.innerHTML = '');
  }
}

const dataPickerPhone = new AirDatepicker('#date-picker-phone', {
  isMobile: true,
  ...basicSettings,
})

const dataPickerDesk = new AirDatepicker('#date-picker-desk', {
  ...basicSettings,
})

