const initCounter = (id, endValue = 100) => {
  $(`#${id}`).easy_number_animate({
    start_value: 0,
    end_value: endValue,
  });
};

UIkit.scrollspy("#numbers", { cls: "_active" });
const callbackFunc = () => {
  initCounter("first_number", 42);
  initCounter("second_number", 123);
  initCounter("third_number", 15);
  initCounter("fourth_number", 99);
  initCounter("fifth_number", 24);
};
UIkit.util.on("#numbers", "inview", callbackFunc);

const installHeaderStyles = () => {
  const $nav = $(".navigation");
  const $topBtn = $(".to-top");

  if ($nav.length) {
    $(document).on("scroll", (e, d) => {
      const offset = $(document).scrollTop();
      if (
        offset > 40 &&
        !$nav.hasClass("_shadow") &&
        !$topBtn.hasClass("_visible")
      ) {
        $nav.addClass("_shadow");
        $topBtn.addClass("_visible");
      } else if (
        offset <= 40 &&
        $nav.hasClass("_shadow") &&
        $topBtn.hasClass("_visible")
      ) {
        $nav.removeClass("_shadow");
        $topBtn.removeClass("_visible");
      }
    });
  }
};

window.onload = () => installHeaderStyles();
