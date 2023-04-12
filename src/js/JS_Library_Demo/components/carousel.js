import $ from "../core";

$.prototype.carousel = function () {
  for (let i = 0; i < this.length; i++) {
    const width = window.getComputedStyle(
      this[i].querySelector(".carousel-inner")
    ).width;
    const slidesField = this[i].querySelector(".carousel-slides");
    slidesField.style.transition = "transform 1.5s";
    const slides = this[i].querySelectorAll(".carousel-item");
    let offset = 0;
    const dots = this[i].querySelectorAll(".carousel-indicators li");
    let slideIndex = 0;

    slidesField.style.width = 100 * slides.length + "%";
    slides.forEach((slide) => {
      slide.style.width = width;
    });

    function setDots() {
      dots.forEach((dot) => {
        dot.classList.remove("active");
      });
      dots[slideIndex].classList.add("active");
    }

    $(this[i].querySelector('[data-slide="next"]')).click((e) => {
      e.preventDefault();
      if (offset === +width.replace(/\D/g, "") * (slides.length - 1)) {
        offset = 0;
        slideIndex = 0;
      } else {
        offset += +width.replace(/\D/g, "");
        slideIndex++;
      }
      slidesField.style.transform = `translateX(${-offset}px)`;
      setDots();
    });

    $(this[i].querySelector('[data-slide="prev"]')).click((e) => {
      e.preventDefault();
      if (offset === 0) {
        offset = +width.replace(/\D/g, "") * (slides.length - 1);
        slideIndex = slides.length - 1;
      } else {
        offset -= +width.replace(/\D/g, "");
        slideIndex--;
      }
      slidesField.style.transform = `translateX(${-offset}px)`;
      setDots();
    });

    let test = 1;

    setInterval(() => {
      if (test === slides.length) {
        test = 0;
        slideIndex = test;
        offset = +width.replace(/\D/g, "") * test;
        slidesField.style.transform = `translateX(${-offset}px)`;
        setDots();
        test++;
      } else {
        slideIndex = test;
        offset = +width.replace(/\D/g, "") * test;
        slidesField.style.transform = `translateX(${-offset}px)`;
        setDots();
        test++;
      }
    }, 3000);

    const slideId = this[i].getAttribute("id");
    $(`#${slideId} .carousel-indicators li`).click((e) => {
      const slideTo = e.target.getAttribute("data-slide-to");
      slideIndex = slideTo;
      offset = +width.replace(/\D/g, "") * slideTo;
      slidesField.style.transform = `translateX(${-offset}px)`;
      setDots();
    });
  }
};

$("#carousel2").carousel();
