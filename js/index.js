const navLinks = $('.header__nav-link');

const navOpenBtn = $('.header__burger'),
    navContainer = $('.header__nav'),
    navCloseBtn = $('.header__nav-close');


// scroll
navLinks.click(e => {
    navLinks.removeClass('active');
    $(e.target).addClass('active');
    navContainer.removeClass('active')
})

$('a[href^="#"]').click(function () {
    const target = $(this).attr('href');
    $('html, body').animate({ scrollTop: $(target).offset().top }, 800);
    return false;
});


// mobile menu
navOpenBtn.click(function () {
    navContainer.addClass('active')
})

navCloseBtn.click(function () {
    navContainer.removeClass('active')
})

// scroll
const headerHeight = $('.header')[0].clientHeight;
const headerTop = $('.header__top');

$(document).on("mousewheel", function () {
    if ($(document).scrollTop() > headerHeight) {
        headerTop.addClass('header__top--fixed');
        headerTop.addClass('header__top--animate');
    } else {
        headerTop.removeClass('header__top--fixed');
        headerTop.removeClass('header__top--animate');
    }
});