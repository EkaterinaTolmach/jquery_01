function showSelectors(selector) {
    var length = String(selector.length),
        nameSelector = selector.selector;
    return "На странице "+length+" элемент(ов) с селектором "+nameSelector;
}
function showSomeShitInConsole(e){
    e.preventDefault();
    console.log("Какая-нибудь хрень");
}
function goToPlans(e) {
    e.preventDefault();
    var offsetPlans = $("#plans").offset().top;
    $("html, body").animate({
        scrollTop: offsetPlans
    },1000);
}
function showModal(e){
    e.preventDefault();
    console.log(e);
    alert("Алерт!");
    prompt("Промпт:");
    confirm("Конферм?");
}
function initActiveNavLink(){
    $
}
$(function() {
    // НАЧАЛО 1-ОГО ЗАДАНИЯ
    /*начало 2-ого пункта*/
    console.group("Первое задание");
    console.log(showSelectors($("*"))); // все селекторы
    console.log(showSelectors($("[name = 'subscribe_email']"))); //с атрибутом name = 'subscribe_email'
    console.log(showSelectors($("[name *= 'email']"))); //с атрибутом name, в значении которого есть 'email'
    console.log(showSelectors($("input"))); //все input на странице
    console.log(showSelectors($("button")));
    console.log(showSelectors($("input[type='checkbox']")));
    console.log(showSelectors($('*:disabled')));
    console.log(showSelectors($('*:checked')));
    console.log(showSelectors($('.social > *'))); //все дети тега с классом social
    console.log($('.social').children()); //все дети тега с классом social
    console.log($('#subscribe_email'));
    /*конец 2-ого пункта*/

    console.log(showSelectors($('[href][class]')));
    console.log(showSelectors($('.footer-nav__link[href]')));
    $("button").on("click",showSomeShitInConsole);
    $("a.logo").on("click",showModal);
    $(".js-get-started").on("click", goToPlans);
    console.groupEnd();
    //КОНЕЦ 1-ОГО ЗАДАНИЯ

    //НАЧАЛО 2-ОГО ЗАДАНИЯ
    console.group("Второе задание");
    console.group("Первая картинка на странице");
    console.log($("img").first());
    console.groupEnd();
    console.group("Последняя картинка на странице");
    console.log($("img").last());
    console.groupEnd();
    console.group("Блоки с классом container, имеющие поле ввода");
    console.log($(".container").has("input"));
    console.groupEnd();
    console.log(initActiveNavLink());
    //КОНЕЦ 2-ОГО ЗАДАНИЯ
});
