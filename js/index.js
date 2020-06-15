
const navLinks = $('.header__nav-link');

navLinks.click(e => {
    navLinks.removeClass('active');
    $(e.target).addClass('active');
})

$('a[href^="#"]').click(function () {
    const target = $(this).attr('href');
    $('html, body').animate({ scrollTop: $(target).offset().top }, 800);
    return false;
});