const GIS_URL = "https://ornate-cendol-14a51b.netlify.app";
const RIVER_URL = "https://cdn.jsdelivr.net/gh/Sunny-stack-crypto/QGIS_images@main/india_photo/india_river.png";
const SOIL_URL = "https://cdn.jsdelivr.net/gh/Sunny-stack-crypto/QGIS_images@main/india_photo/india_soil.png";

const gisFrame = document.getElementById("gis-frame");
const gisImage = document.getElementById("gis-image");
const gisMessage = document.getElementById("gis-message");

const riverBtn = document.getElementById("river-btn");
const soilBtn = document.getElementById("soil-btn");
const religionBtn = document.getElementById("religion-btn");

function isImageUrl(url) {
  return /\.(png|jpg|jpeg|gif|webp)$/i.test(url);
}

function updateDisplay(url) {
  if (!gisMessage) return;

  gisMessage.hidden = true;

  if (isImageUrl(url)) {
    // 画像の場合：iframeを隠して、画像を綺麗に表示する
    if (gisFrame) gisFrame.style.display = "none";
    if (gisImage) {
      gisImage.src = url;
      gisImage.style.display = "block";
    }
  } else {
    // 通常のウェブページ・GISの場合：画像を隠して、iframeを表示する
    if (gisImage) gisImage.style.display = "none";
    if (gisFrame) {
      gisFrame.style.display = "block";
      gisFrame.src = url;
    }
  }
}

// 初期化処理
if (gisMessage) {
  if (GIS_URL.includes("example.com/your-gis-map")) {
    if (gisFrame) gisFrame.style.display = "none";
    if (gisImage) gisImage.style.display = "none";
    gisMessage.hidden = false;
  } else {
    updateDisplay(GIS_URL);
  }
}

if (riverBtn) {
  riverBtn.addEventListener("click", () => {
    updateDisplay(RIVER_URL);
  });
}

if (soilBtn) {
  soilBtn.addEventListener("click", () => {
    updateDisplay(SOIL_URL);
  });
}

if (religionBtn) {
  religionBtn.addEventListener("click", () => {
    updateDisplay(GIS_URL);
  });
}