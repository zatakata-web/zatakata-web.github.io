const navLinks = $('.header__nav-link');

const navOpenBtn = $('.header__burger'),
    navContainer = $('.header__nav--main'),
    navCloseBtn = $('.header__nav-close');


// scroll
navLinks.click(e => {
    navLinks.removeClass('active');
    $(e.target).addClass('active');
    navContainer.removeClass('active')
})

$('a[href^="#"]').click(function () {
    const target = $(this).attr('href');
    $('html, body').animate({ scrollTop: $(target).offset().top - 85 }, 800);
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
const headerHeight = $('.header')[0].clientHeight,
    headerTop = $('.header__top-scroll')

$(window).scroll(function () {
    if ($(this).scrollTop() > headerHeight) {
        headerTop.addClass('header__top-scroll--animate');
    } else {
        headerTop.removeClass('header__top-scroll--animate');
    }
});
