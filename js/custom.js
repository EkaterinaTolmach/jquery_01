function showSelectors(selector) {
    var length = String(selector.length),
        nameSelector = selector.selector;
    return "На странице "+length+" элемент(ов) с селектором "+nameSelector;
}
$(function() {
    // console.log($("*")); // все селекторы
    console.log(showSelectors($("[name = 'subscribe_email']"))); //с атрибутом name = 'subscribe_email'
    console.log(showSelectors($("[name *= 'email']"))); //с атрибутом name, в значении которого есть 'email'
    console.log(showSelectors($("input"))); //все input на странице
    console.log(showSelectors($("button")));
    console.log($("button"));
});
