function showSelectors(selector) {
    var length = String(selector.length),
        nameSelector = selector.selector;
    // return "На странице "+length+" элемент(ов) с селектором "+nameSelector;
    return selector;
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

    /*********Активная ссылка меню***********************/
    $('.nav .nav__item').on('click', function () {
        $('.nav .nav__item').removeClass("nav__item--active");
        $(this).addClass("nav__item--active");
    });

    /***************Прилипающее меню**************/
    $(document).on('scroll', function () {
        var headerH = $("#hosting").height();
        var docScroll = $(this).scrollTop();
        if (docScroll > headerH) {
            $("#js-nav-container").addClass("nav-container--fixed");
            $("#hosting").css("paddingTop", $("#js-nav-container").innerHeight());
        } else {
            $("#js-nav-container").removeClass("nav-container--fixed");
            $("#hosting").removeAttr("style");
        }
    });

    /***************Модальное окно******************/
    $('.js-show-modal').on('click', function (e) {
        e.preventDefault();
        $('.js-modal, #js-overlay').fadeIn();
        $('body').addClass("open-modal");
    });
    $('#js-overlay').on('click', function (e) {
        $('.js-modal, #js-overlay').fadeOut();
        $('body.open-modal').removeClass("open-modal");
    });

    /******************Проверка поля с урл*************************/
    $('form.search-form .btn_search').on('click', function () {
        var domainValue = $("form #js-domain-search").val();
        var regEx = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
        console.log(regEx.test(domainValue));
        if (!regEx.test(domainValue)) {
            $('.domain-search').addClass("error_message");
        } else {
            $('.domain-search').removeClass("error_message");
        }
    });

    /************************Замена заголовка сайта************************/
    $(".slogan").text("New slogan");

    /***************************Четные и нечетные пункты меню******************************/
    console.group("Четные и нечетные пункты меню");
    console.log($('.nav-container .nav a:nth-child(2n)'));
    console.log($('.nav-container .nav a:nth-child(2n+1)'));
    console.groupEnd();

    /***************************Родительские и дочерние элементы списка в футере******************************/
    console.group("Дочерние элементы одного из списков в футере");
    console.log($('.footer .footer-block:first-child ul').children());
    console.groupEnd();
    console.group("Родительские элементы одного из списков в футере");
    console.log($('.footer .footer-block:first-child ul').parents());
    console.groupEnd();

    /***************************Перемещение блока с картой******************************/
    var map = $('#contacts').detach();
    $('#testimonials').after(map);

    /***************************Удаление из футера блока с телефоном и копирайтом******************************/
    $('.footer-phone').remove();
    $('.footer-block .copyright').remove();

    console.groupEnd();
    //КОНЕЦ 2-ОГО ЗАДАНИЯ
    
    
    //НАЧАЛО 3-ЕГО ЗАДАНИЯ
    /**********************Аккордеон в блоке FAQ************************/
    $('.js-faq-title').on('click', function (e) {
        e.preventDefault();
        var active = $(this);
        var questionId = active.attr('href');
        if (!active.hasClass('active')) {
            $('.js-faq-content').slideUp();
            $(this).removeClass('active');
        }

        active.toggleClass('active');
        $(questionId).slideToggle();
    });
    /**********************Вслывающая подсказка************************/
    $('.js-popup').hover(function () {
        var $this = $(this);
        var popupId = $this.attr('href');

        $(popupId).fadeIn();
    }, function () {
        var $this = $(this);
        var popupId = $this.attr('href');

        $(popupId).fadeOut();
    });

    /**********************Слик слайдер************************/
    $('#js-slider-testimonials').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true
    });

    /**********************Owl-carousel слайдер************************/
    $(".owl-carousel").owlCarousel({
        items: 1,
        nav: true,
        loop: true
    });

    /**********************BXslider слайдер************************/
    $('.bxslider').bxSlider();

    /*********************Анимация появления блоков steps********************/
    var wow = new WOW(
        {
            boxClass:     'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset:       150,          // distance to the element when triggering the animation (default is 0)
            mobile:       false
        }
    );
    wow.init();

    /*********************Карта яндекса********************/
    ymaps.ready(function () {
        var myMap = new ymaps.Map('yandex-map', {
                center: [52.279419, 104.255262],
                zoom: 16
            }, {
                searchControlProvider: 'yandex#search'
            }),

            // Создаём макет содержимого.
            MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
            ),

            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                hintContent: 'Собственный значок метки',
                balloonContent: 'Это красивая метка'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'i/map-pin.png',
                // Размеры метки.
                iconImageSize: [40, 51],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-20, -51]
            });
        myMap.behaviors.disable('scrollZoom');
        myMap.geoObjects
            .add(myPlacemark);
    });

    /*********************Набегающие цифры********************/
    $('.js-counter').counterUp({
        time: 1500
    });

    /*********************Автонабор текста https://github.com/mattboldt/typed.js********************/
    var options = {
        strings: ["Доброе утро!", "В смысле, добрый день!", "В общем, доброго времени суток :)"],
        typeSpeed: 40,
        showCursor: true,
        typeSpeed: 100,
        backSpeed: 50,
        // loop: true,
        // autoInsertCss: false,
    }
    var typed = new Typed(".js-typed", options);

    /*********************Стилизация чекбокса и радио-кнопок https://github.com/fronteed/icheck********************/
    $('input').iCheck({
        checkboxClass: 'icheckbox_flat-red',
        radioClass: 'iradio_flat-red'
    });
    $('.js-someCheck').on('ifChecked', function(event){
        $('.btn.js-modal-close').prop('disabled',false);
    });
    $('.js-someCheck').on('ifUnchecked', function(event){
        $('.btn.js-modal-close').prop('disabled',true)
    });
});
