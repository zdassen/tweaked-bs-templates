/**
 *
 * svg.js
 *
 */

 
/* スクロールバーを非表示にする */
function hiddenScrollbar() {

  // body 要素を取得
  let b = document.querySelector("body");

  // スクロールバーを非表示にする
  b.style.overflow = "hidden";
  b.style.overflowY = "hidden";

}


/* SVG 要素のサイズを画面一杯に設定する ( マージン指定可 ) */
function setupFullSize(svgId, hMinus) {

  // スクロールバーを非表示にする
  hiddenScrollbar();

  // SVG 要素を取得
  let svg = document.getElementById(svgId);

  // サイズを設定する ( アスペクト比の部分がまだ理解しきれていない )
  let w = window.innerWidth;
  let h = window.innerHeight;
  svg.setAttribute("viewBox", `0 0 ${w} ${h}`);

  return svg;
}


(function () {

  let svg = setupFullSize("graphArea");

}());