const navLinks = $('.header__nav-link');

const navOpenBtn = $('.header__burger'),
    navContainer = $('.header__nav--main'),
    navCloseBtn = $('.header__nav-close');


//preloader 
function preloader() {
    $(() => {
        setTimeout(() => {
            let p = $('.preloader');
            p.fadeOut();
            $('body, html').css('overflow', 'auto');

        }, 1000);
    });
}

preloader()


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

// portfolio
const moreBtn = $('.portfolio__more-btn');
const portfolioContainer = $('.portfolio__list');
const portfolioPages = Math.ceil(portfolio.length / 4);
let portfolioCurrentPage = 0;


const loadPortfolioItems = () => {
    moreBtn.addClass('portfolio__more-btn--loading');
    moreBtn.attr('disabled', true);
    const startIndex = portfolioCurrentPage * 4;
    const endIndex = startIndex + 4;
    setTimeout(() => {
        for (let i = startIndex; i < endIndex; i++) {
            if (i > portfolio.length - 1) {
                moreBtn.remove();
                break;
            }

            const { preview, fullPreview, images, lightbox } = portfolio[i];
            const portfolioTemp = `
                <div class="portfolio-card portfolio__card">
                    <a href="img//portfolio/${fullPreview}" data-lightbox="${lightbox}">
                        <img class="portfolio-card__img" src="img/portfolio/${preview}" alt="card">
                    </a>
                    ${images ? images.map(item => `<a href="img//portfolio/${lightbox}/${item}" data-lightbox="${lightbox}"></a>`).join('') : ''} 
                </div>
            `;

            portfolioContainer.append(portfolioTemp);

        }
        portfolioCurrentPage++;
        moreBtn.removeClass('portfolio__more-btn--loading');
        moreBtn.removeAttr('disabled');
    }, 1500)
}

moreBtn.click(loadPortfolioItems)

loadPortfolioItems()