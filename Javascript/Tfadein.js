    $(window).on("load", function () {
        function fade() {
          let animation_width = $(window).innerWidth() * 0.5;
          let ratio = Math.round((1 / animation_width) * 10000) / 10000;
            $(".fadeT").each(function () {
            let objectTop = $(this).offset().top;
            let windowBottom = $(window).scrollTop() + $(window).innerWidth();
            if (objectTop < windowBottom) {
            if (objectTop < windowBottom - animation_width) {
                $(this).css({
                    transition: "opacity 1s linear",
                    transition: "bottom 1s linear",
                    opacity: 1,
                    bottom: "0px",
                });
                } else {
                $(this).css({
                    transition: "opacity 3s linear",
                    opacity: (windowBottom - objectTop) * ratio,
                    transition: "bottom 1s linear",
                    bottom: `${500 * (1 - (windowBottom - objectTop) * ratio)}px`,
                });
                }
            } else {
                $(this).css({
                opacity: 0,
                bottom: "500px",
                });
            }
            });
        }
        $(".fadeT").css({
            opacity: 0,
            bottom: "500px",
        });
        fade();

        $(window).scroll(function () {
            fade();
        });
        });