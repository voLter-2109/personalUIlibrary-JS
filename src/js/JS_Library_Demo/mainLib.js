import $ from "./lib";

$("#first").on("click", () => {
  $(".text").childNodes("SPAN").eq(0).fadeToggle(800);
});
$('[data-count="second"]').on("click", () => {
  $(".text").childNodes("SPAN").eq(1).fadeToggle(800);
});
$("#three").on("click", () => {
  $(".text").childNodes("SPAN").fadeToggle(800);
});

$("#trigger").click(() => {
  $("#trigger").createModal({
    text: {
      title: "ModalTitle",
      body: "Lorem Lorem Lorem Lorem Lorem Lorem",
    },
    btns: {
      count: 3,
      settings: [
        ["Close", ["btn-danger", "mr-10"], true],
        [
          "Save changes",
          ["btn-success"],
          false,
          () => {
            console.log("Данные сохранены");
          },
        ],
        [
          "Another btn",
          ["btn-warning", "ml-10"],
          false,
          () => {
            console.log("Hello World");
          },
        ],
      ],
    },
  });
});

$("#trigger2").click(() => {
  $("#trigger2").createModal({
    text: {
      title: "ModalTitle",
      body: "Lorem",
    },
    btns: {
      count: 1,
      settings: [["Close", ["btn-danger", "mr-10"], true]],
    },
  });
});

$().get("https://jsonplaceholder.typicode.com/todos/1")
  // .then((res) => console.log(res));
