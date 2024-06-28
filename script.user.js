// ==UserScript==
// @name        Ap-Pro Mobile
// @description Ap-Pro Mobile Version
// @version     0.2
// @author      PSIget
// @namespace   ap-pro.ru
// @match       *://ap-pro.ru/*
// @grant       none
// @downloadURL https://raw.githubusercontent.com/PSIget/appro-mobile/main/script.user.js
// ==/UserScript==

(function () {
  "use strict";

  // Проверяем наличие секции head
  var head = document.head || document.getElementsByTagName("head")[0];
  if (!head) {
    console.error("Head section not found.");
    return;
  }

  // Создаем новый мета-тег для viewport
  var metaViewport = document.createElement("meta");
  metaViewport.name = "viewport";
  metaViewport.content =
    "width=device-width, initial-scale=1, maximum-scale=5.0, minimum-scale=0.86";

  // Проверяем, существует ли уже мета-тег viewport
  var existingMetaViewport = document.querySelector('meta[name="viewport"]');
  if (existingMetaViewport) {
    existingMetaViewport.content = metaViewport.content;
  } else {
    head.appendChild(metaViewport);
  }

  // Создаем или обновляем мета-тег для theme-color
  var metaThemeColor = document.createElement("meta");
  metaThemeColor.name = "theme-color";
  metaThemeColor.content = "#171a21";

  // Проверяем, существует ли уже мета-тег theme-color
  var existingMetaThemeColor = document.querySelector('meta[name="theme-color"]');
  if (existingMetaThemeColor) {
    existingMetaThemeColor.content = metaThemeColor.content;
  } else {
    head.appendChild(metaThemeColor);
  }

  // Функция для загрузки CSS после тега body
  function loadCSSAfterBody() {
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = 'https://cdn.jsdelivr.net/gh/PSIget/appro-mobile/style.css';

    // Проверяем наличие секции body
    var body = document.body || document.getElementsByTagName("body")[0];
    if (body) {
      body.parentNode.insertBefore(link, body.nextSibling);
    } else {
      // Если body еще не загружен, ждем его загрузки
      document.addEventListener("DOMContentLoaded", function () {
        document.body.parentNode.insertBefore(link, document.body.nextSibling);
      });
    }
  }

  // Вызываем функцию для загрузки CSS
  loadCSSAfterBody();
})();
