const initCounter = (id, endValue = 100) => {
    $(`#${id}`).easy_number_animate({
        start_value: 0,
        end_value: endValue,
    });
};

UIkit.scrollspy('#numbers', { cls: '_active' });
const callbackFunc = () => {
    initCounter("first_number", 42);
    initCounter("second_number", 123);
    initCounter("third_number", 15);
    initCounter("fourth_number", 99);
    initCounter("fifth_number", 24);
}
UIkit.util.on('#numbers', 'inview', callbackFunc);