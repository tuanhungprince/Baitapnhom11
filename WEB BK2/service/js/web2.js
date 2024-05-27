$(document).ready(function() {
    $('.slide').hide();
    $('.slide.active').show();

    $('.next').click(function() {
        let current = $('.slide.active');
        let next = current.next('.slide');

        if (next.length === 0) {
            next = $('.slide').first();
        }

        current.removeClass('active').fadeOut(500, function() {
            next.addClass('active').fadeIn(500);
        });
    });

    $('.prev').click(function() {
        let current = $('.slide.active');
        let prev = current.prev('.slide');

        if (prev.length === 0) {
            prev = $('.slide').last();
        }

        current.removeClass('active').fadeOut(500, function() {
            prev.addClass('active').fadeIn(500);
        });
    });

});

$(document).ready(function() {
    let currentIndex = 0;
    const slides = $('.slideshow-show');
    const buttons = $('.item-btn button');
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.fadeOut(500).removeClass('active');
        buttons.removeClass('active');
        $(`#slide-${index}`).fadeIn(500).addClass('active');
        $(`#btn-${index} button`).addClass('active');
    }

    buttons.click(function() {
        currentIndex = $(this).parent().attr('id').split('-')[1];
        showSlide(currentIndex);
    });

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }

    setInterval(nextSlide, 5000); // Thay đổi slide mỗi 5 giây
});