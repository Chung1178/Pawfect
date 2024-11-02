import{A as o,d as g}from"./air-datepicker-9a8d606c.js";function r(t){return new URL(t,import.meta.url).href}const d=[{title:"新莊狗狗日托",rate:4.2,commentNum:4,address:"新莊區,新北市 (8.2km)",bookedNum:6,price:550,imgUrlSm:r("../images/search-page/pet-sitter/sm/sitter-1.png"),imgUrlLg:r("../images/search-page/pet-sitter/lg/sitter-1.png"),intro:"目前到府服務經驗4年多，自己本身也有養狗養貓，愛動物的我，有空也會去外面餵浪..."},{title:"貓狗到府照顧",rate:4.6,commentNum:7,address:"永和區,新北市 (2.4km)",bookedNum:8,price:300,imgUrlSm:r("../images/search-page/pet-sitter/sm/sitter-2.png"),imgUrlLg:r("../images/search-page/pet-sitter/lg/sitter-2.png"),intro:"很愛狗的我把狗當孩子疼，家有大空間在家工作，狗狗寄宿照護最適合我這個人來擔任啦！..."},{title:"毛媽寵物度假村",rate:4.8,commentNum:2,address:"萬華區,台北市 (2.9km)",bookedNum:6,price:600,imgUrlSm:r("../images/search-page/pet-sitter/sm/sitter-3.png"),imgUrlLg:r("../images/search-page/pet-sitter/lg/sitter-3.png"),intro:"從小我就很喜歡小動物，也養過很多種動物，如狗、貓、鳥、老鼠、兔子...，對於寵物都非常..."},{title:"小捷貓狗寄宿",rate:4.7,commentNum:2,address:"信義區,台北市 (9.6km)",bookedNum:3,price:350,imgUrlSm:r("../images/search-page/pet-sitter/sm/sitter-4.png"),imgUrlLg:r("../images/search-page/pet-sitter/lg/sitter-4.png"),intro:"來自獸醫師家庭，從小接觸各種動物，非常愛毛小孩，有老寵照顧經驗，家裡寵物都活超過一..."},{title:"莉莎的家",rate:4.6,commentNum:9,address:"中山區,台北市 (5.3km)",bookedNum:12,price:500,imgUrlSm:r("../images/search-page/pet-sitter/sm/sitter-5.png"),imgUrlLg:r("../images/search-page/pet-sitter/lg/sitter-5.png"),intro:"我是1個很愛毛小孩的人平常我自己煮鮮食給她們吃散步養狗狗有16年，我目前有4隻狗狗（貴賓..."},{title:"亮亮寵物保母",rate:4.5,commentNum:13,address:"土城區,新北市 (5.4km)",bookedNum:18,price:450,imgUrlSm:r("../images/search-page/pet-sitter/sm/sitter-6.png"),imgUrlLg:r("../images/search-page/pet-sitter/lg/sitter-6.png"),intro:"我愛狗，欣賞狗狗優雅的氣質及獨有的個性。狗兒對於環境變化非常敏感，尤其主人不在身時..."},{title:"雙北寵物安親",rate:4,commentNum:4,address:"文山區,台北市 (6.5km)",bookedNum:2,price:250,imgUrlSm:r("../images/search-page/pet-sitter/sm/sitter-7.png"),imgUrlLg:r("../images/search-page/pet-sitter/lg/sitter-7.png"),intro:"從小家人養狗狗和魚開啟了我喜歡寵物的人生，因為喜歡的太多了無法全養所以就藉由幫大家照..."},{title:"好生活貓咪保母",rate:4.1,commentNum:4,address:"新莊區,新北市 (8.2km)",bookedNum:4,price:400,imgUrlSm:r("../images/search-page/pet-sitter/sm/sitter-8.png"),imgUrlLg:r("../images/search-page/pet-sitter/lg/sitter-8.png"),intro:"純飼料餵食, 乾淨空間, 全年無休 含電梯含冷氣費用，且鋪防滑溫暖木紋磁磚地板，友善老或胖狗..."}],c=document.querySelector("[data-sitter-container]");function p(){let t="";d.forEach(e=>{t+=`
      <div class="col-md-6 col-lg-4 col-xl-3">
        <div class="card-sitter position-relative">
          <picture>
            <source media="(min-width:996px)"
              srcset="${e.imgUrlLg}">
            <img src="${e.imgUrlSm}"
              class="card-sitter__img object-fit-cover mb-4"
              alt="sitter-1-sm">
          </picture>
          <h3 class="fs-7 text-gray-200 mb-2">${e.title}</h3>
          <div class="d-flex align-items-center mb-1 mb-md-2">
            <div class="d-flex align-items-center me-1">
              <img src="../assets/images/search-page/star-primary.svg"
                alt="icon-star"
                class="me-1">
              <span class="fs-10 text-primary fw-bold me-1">${e.rate}</span>
              <span class="fs-10 text-gray-500">(${e.commentNum})</span>
            </div>
            <div class="d-flex align-items-center me-1">
              <img src="../assets/images/search-page/map-primary.svg"
                alt="icon-map"
                class="me-1">
              <p class="fs-10 text-gray-500">${e.address}</p>
            </div>
            <div class="d-flex align-items-center">
              <img src="../assets/images/search-page/member-primary.svg"
                alt="icon-map"
                class="me-1">
              <span class="fs-10 text-gray-500">${e.bookedNum}</span>
            </div>
          </div>
          <p class="fs-10 text-gray-200 mb-2 mb-md-4">
            ${e.intro}
          </p>
          <div class="d-flex justify-content-between align-items-center">
            <p class="fs-7 fw-bold text-gray-200">
              NT$ ${e.price}
              <span class="fs-11 text-gray-500 fw-normal">每次</span>
            </p>
            <a href="booking.html" class="fs-10 text-primary fw-bold opacity-70-hover transition-base
              stretched-link z-0">
              了解更多
            </a>
          </div>
        </div>
      </div>
    `}),c.innerHTML=t}p();const a={serviceType:"",catNum:0,dogNum:0,area:"",dateRange:[]},n=document.querySelectorAll("[data-service-select]");n.forEach(t=>{t.addEventListener("click",e=>{e.preventDefault();const s=e.currentTarget.dataset.serviceSelect;a.serviceType=s,n.forEach(i=>i.classList.remove("active")),e.currentTarget.classList.add("active")})});const u=["台北市","新北市","桃園市","台中市","台南市","高雄市","基隆市","新竹市","嘉義市","新竹縣","苗栗縣","彰化縣","南投縣","雲林縣","嘉義縣","屏東縣","宜蘭縣","花蓮縣","台東縣","澎湖縣","金門縣","連江縣"],f=document.querySelectorAll("[data-city-select]");function h(){let t="";u.forEach(e=>{t+=`
      <li>
        <a class="dropdown-item py-2 px-4 mb-2 bg-gray-1000-hover"
          data-area-select
          href="#">
          ${e}
        </a>
      </li>`}),f.forEach(e=>{e.innerHTML=t})}h();const v=document.querySelectorAll("[data-area-select]"),N=document.querySelectorAll("[data-area-show]");v.forEach(t=>{t.addEventListener("click",e=>{e.preventDefault(),N.forEach(s=>{s.innerText=t.innerText}),a.area=t.innerText})});const y=document.querySelectorAll("[data-count-btn]"),S=document.querySelectorAll("[data-dog-num]"),b=document.querySelectorAll("[data-cat-num]"),L=document.querySelectorAll("[data-petNum-show]");y.forEach(t=>{t.addEventListener("click",e=>{e.preventDefault();const s=e.target.dataset.petType,i=e.target.dataset.countBtn;s==="cat"&&a.catNum>=0?i==="+"?a.catNum++:a.catNum--:s==="dog"&&a.dogNum>=0&&(i==="+"?a.dogNum++:a.dogNum--),x({e,countType:i,petType:s}),k(s)})});function x({e:t,countType:e,petType:s}){const i=t.target.closest("div").querySelector('[data-count-btn="-"]');e==="+"?(i.classList.remove("text-gray-800","pe-none"),i.classList.add("text-gray-500")):e==="-"&&(s==="cat"&&a.catNum===0||s==="dog"&&a.dogNum===0)&&(i.classList.remove("text-gray-500"),i.classList.add("text-gray-800","pe-none"))}function k(t){t==="cat"?b.forEach(e=>e.innerText=a.catNum):t==="dog"&&S.forEach(e=>e.innerText=a.dogNum)}const E=document.querySelectorAll(".petNumDropdown");E.forEach(t=>{t.addEventListener("hide.bs.dropdown",()=>{L.forEach(e=>{if(a.catNum===0&&a.dogNum===0)e.innerHTML="貓 / 狗";else{const s=a.catNum?`貓 ${a.catNum}隻`:"",i=a.dogNum?`狗 ${a.dogNum}隻`:"";e.innerText=`${s} ${s&&i?"/":""} ${i}`}})})});const U=document.querySelectorAll("[data-date-show]"),l={locale:g,range:!0,minDate:new Date,onSelect({date:t,formattedDate:e}){a.dateRange=e,U.forEach(s=>s.innerHTML="")}};new o("#date-picker-phone",{isMobile:!0,...l});new o("#date-picker-desk",{...l});const w=document.querySelector("[data-search-btn]"),m=document.querySelector("[data-search-spinner]");function T(t){t.preventDefault(),m.classList.toggle("d-none"),c.classList.remove("animate__fadeInUp"),setTimeout(()=>{m.classList.toggle("d-none"),c.classList.add("animate__fadeInUp")},2e3)}w.addEventListener("click",T);
