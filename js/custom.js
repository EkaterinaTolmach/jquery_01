
$(function() {
    // console.log($("*")); // все селекторы
    console.log($("[name = 'subscribe_email']")); //с атрибутом name = 'subscribe_email'
    console.log($("[name *= 'email']")); //с атрибутом name, в значении которого есть 'email'
});
