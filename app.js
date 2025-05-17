// 1. 載入資料
fetch('https://script.google.com/macros/s/你的部署ID/exec')
  .then(res => res.json())
  .then(payload => {
    console.log('slides', payload.slides);
    initCarousel(payload.slides);
    initCircuitBackground();
    startAutoRotate();
  })
  .catch(err => console.error('載入資料錯誤', err));

// 2. 背景特效
function initCircuitBackground() {
  const circuitBg = document.getElementById('circuitBackground');
  if (!circuitBg) return;
  circuitBg.innerHTML = '';
  // createCircuitBackground 的程式碼...
}

// 3. 建立 carousel DOM
function initCarousel(slides) {
  const container = document.getElementById('slideshowMasterContainer');
  slides.forEach((slide, i) => {
    // 動態插入 .column-group-slide 與 3.～6. 各分支邏輯
  });
}

// 4. 自動捲動與輪播邏輯
function startAutoRotate() {
  // startAutoScrollOnSlide, showSlide, setInterval 等
}

// 5. 窗口 resize 時重畫背景
window.addEventListener('resize', debounce(initCircuitBackground, 250));

// 6. 每分鐘自動重整
setInterval(() => window.location.reload(true), 60000);

// debounce helper
function debounce(fn, wait) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(fn, wait);
  };
}
