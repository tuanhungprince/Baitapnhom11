$(document).ready(function() {
    // Ẩn tất cả các slide ngoại trừ slide đang hoạt động (active)
    $('.slide').hide();
    $('.slide.active').show();

    // Hàm xử lý khi nhấn nút "Next"
    $('.service1-next').click(function() {
        let current = $('.slide.active'); // Lấy slide hiện tại
        let next = current.next('.slide'); // Lấy slide tiếp theo

        // Nếu không có slide tiếp theo, chuyển đến slide đầu tiên
        if (next.length === 0) {
            next = $('.slide').first();
        }

        // Thay đổi trạng thái của các slide
        current.removeClass('active').fadeOut(500, function() {
            next.addClass('active').fadeIn(500);
        });
    });

    // Hàm xử lý khi nhấn nút "Previous"
    $('.service1-prev').click(function() {
        let current = $('.slide.active'); // Lấy slide hiện tại
        let prev = current.prev('.slide'); // Lấy slide trước đó

        // Nếu không có slide trước đó, chuyển đến slide cuối cùng
        if (prev.length === 0) {
            prev = $('.slide').last();
        }

        // Thay đổi trạng thái của các slide
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




