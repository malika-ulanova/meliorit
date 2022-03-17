$('.popular_slide').slick({
    slidesToShow: 4,
    responsive:
        [
            {
        breakpoint: 1025,
        settings: {
            slidesToShow:3,
        }
        },

            {
        breakpoint: 937,
        settings: {
            slidesToShow: 2,

        }
        },
            {
        breakpoint: 635,
        settings: {
            slidesToShow: 1,
        }
    }
        ]
})

$('.subscriptions_slide').slick({
    slidesToShow: 3,
    responsive:
        [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow:2,
                }
            },


            {
                breakpoint: 635,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
})


$(document).ready(function (){
    $('.header__burger').click(function (event){
        $('.header__burger').toggleClass('active');
    });
});