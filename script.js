// ハンバーガーメニュー
let nav = document.querySelector("#navArea");
let btn = document.querySelector(".toggle-btn");
let mask = document.querySelector("#mask");
let inner = document.querySelector(".inner");

btn.onclick = () => {
  nav.classList.toggle("open");
}

mask.onclick = () => {
  nav.classList.toggle("open");
}

// メニューを選択した場合もクローズ
inner.onclick = () => {
  nav.classList.toggle("open");
}
