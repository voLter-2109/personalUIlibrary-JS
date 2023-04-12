import $ from "../JS_Library_Demo/core.js";

// Slider
$("#carouselDemo").carousel();

// Modal Window
$('[data-target="#ModalDemo"]').modal();

//Tab
$("#tabsDemo>[data-tabpanel] .tab-item").tab();

// Accordion
$("#accordionDemo>.accordion-head").accordion();

// отмена перезакрузки при нажатии на кнопки в картоках
document.querySelectorAll(".card-body>a").forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
  });
});
