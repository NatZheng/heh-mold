# HEJ MOLD 專案交接紀錄

這份文件是給換電腦後的 Codex 或協作者看的。請先讀完這份，再開始修改網站。

## 專案目標

HEJ MOLD 是一個以手機瀏覽為主的靜態網站，用來介紹與銷售 3D 列印寵物訂製用品。

目前策略是先做內部溝通與版面確認，暫時不要每改一次就推上 GitHub Pages。等設計、文案、圖片都確認後，再一次性 `Push origin` 上線。

## Repo 與部署

- GitHub repo: `https://github.com/NatZheng/heh-mold`
- GitHub Pages 預期網址: `https://natzheng.github.io/heh-mold/`
- GitHub Pages 設定: `main` branch，`/(root)`
- 目前使用 GitHub Desktop 推送，因為終端機尚未設定 GitHub 認證。

換電腦流程：

1. 舊電腦先在 GitHub Desktop 按 `Push origin`
2. 新電腦登入同一個 GitHub 帳號
3. 用 GitHub Desktop clone `NatZheng/heh-mold`
4. 開啟 `index.html` 預覽
5. 新電腦的 Codex 先讀這份 `PROJECT_NOTES.md`

## 重要資料夾

目前有兩份檔案需要注意：

- GitHub Desktop 實際 repo: `/Users/amazingnat/Desktop/pet-print-studio/heh-mold`
- 使用者本機預覽: `/Users/amazingnat/Desktop/pet-print-studio`

修改時以 `heh-mold` repo 為主。若使用者正在用外層 `file:///Users/amazingnat/Desktop/pet-print-studio/index.html` 預覽，改完 repo 後要同步外層檔案，至少同步：

- `index.html`
- `styles.css`
- `script.js` 如有修改
- `assets/` 如有新增圖片或 logo

## 目前網站結構

主要檔案：

- `index.html`: 首頁
- `tag-diy.html`: 吊牌 DIY 產品頁
- `styles.css`: 全站樣式
- `script.js`: 互動功能，包含選單
- `assets/hej-mold-logo.svg`: 目前使用的 LOGO
- `assets/hej-mold-logo.jpg`: 舊版 JPG LOGO 備用

## 首頁目前方向

首頁是手機優先設計：

- 頂部固定在畫面最上方
- 左上角是 HEJ MOLD LOGO
- 右上角是三條橫線選單
- 選單內目前有：
  - 關於我們
  - 聯繫我們
  - Instagram QR Code
- 首頁主視覺是白底
- 標語目前是：
  - `3D Printed Pet Goods`
  - `為毛孩生活量身製作的訂製用品`
- 產品圖卡目前只保留五張：
  - `01 吊牌 DIY`，小字 `進入訂製頁面`
  - `02 寵物衣架`，小字 `小型犬專用`
  - `03 電子吊牌`，小字 `製作中`
  - `04 寵物雕像訂製`，小字 `進入訂製`
  - `05 娃包`，小字 `獨家製作`
- 已移除圖卡中的 `06 關於我們` 和 `07 聯繫我們`，因為選單和頁面下方已有這些區塊。

## 視覺原則

使用者目前想要：

- 整體背景偏純白，接近 LOGO 圖片白色框內的配色
- 乾淨、簡約、有質感
- 手機打開就好看，手機版優先
- 不要黑底
- 不要圖卡下方灰色陰影漸層
- 圖卡文字置中
- 圖卡標題不要換成兩行，尤其 `寵物雕像訂製`
- 不要過多說明文字，先做乾淨的品牌展示與產品入口

## 吊牌 DIY 頁

檔案：`tag-diy.html`

目前頁面方向：

- 獨立換頁，不是首頁往下滑的連續區塊
- 保留固定頂部 LOGO 與漢堡選單
- 底部有固定按鈕 `進入訂製`
- 按鈕連到 Google Form:
  `https://docs.google.com/forms/d/e/1FAIpQLScx-44lM4GZ6sVmiGCI82Ga-LqEifvNZSYOcZWOJEOEW6aUzw/viewform`

使用者已提供吊牌簡介圖，並要求不要把圖片中的所有文字直接當圖片使用，而是把重點文字轉成網頁文字呈現。

## 已討論過的重要決策

- 不用 Google Sites，因為質感和自由度不足。
- 使用 GitHub Pages 做免費網站。
- 網站主要給手機看，不追求桌機複雜版面。
- 先在本機和 repo 裡反覆調整，不急著每次推上線。
- 價格不應由 Codex 自行假設。任何價格、交期、商品規格都需要使用者確認。
- 圖片要由使用者提供，Codex 可以負責放到對應位置。

## 下一步可能要做

- 確認首頁五張產品圖卡的顏色或改成實拍圖。
- 補齊寵物衣架、電子吊牌、寵物雕像訂製、娃包的獨立產品頁。
- 統一所有頁面的白底、LOGO、選單、按鈕樣式。
- 補實際產品照片到 `assets/`。
- 上線前檢查手機版：
  - 頂部不被瀏覽器安全區遮住
  - 圖卡不出現灰底或陰影殘留
  - 標題不換行
  - 訂製按鈕不遮擋主要內容

## 給下一位 Codex 的提醒

- 回答使用者請用繁體中文。
- 使用者偏好直接實作，不要只給建議。
- 編輯檔案時以 repo `/Users/amazingnat/Desktop/pet-print-studio/heh-mold` 為主。
- 若使用者仍開著外層 `file://` 預覽，要同步外層 `/Users/amazingnat/Desktop/pet-print-studio`。
- 不要自行新增價格、交期或未確認的銷售承諾。
- 做完本地修改後可以 commit，但除非使用者明確要求「上傳」或「推上去」，先不要 push。
