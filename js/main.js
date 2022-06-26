(function($) {
    "use strict";

    $(window).load(function() {
        var $container = $('#fh5co-projects-feed'),
            containerWidth = $container.outerWidth();

        $container.masonry({
            itemSelector: '.fh5co-project',
            columnWidth: function(containerWidth) {
                if (containerWidth <= 330) {
                    return 310;
                } else {
                    return 330;
                }
            },

            isAnimated: !Modernizr.csstransitions
        });
    });

})(window.jQuery);

// menu js
var mobileMenu = document.querySelector(".sub-menu-icon");
var subMenu = document.querySelector(".sub-menu");
const subMenuIcon = document.querySelector('.sub-menu-icon i')
mobileMenu.onclick = function() {
        if (subMenu.style.display === "flex") {
            subMenu.style.display = "none";
            subMenuIcon.classList.remove('icon-cross')
            subMenuIcon.classList.add('fa fa-bars')
        } else {
            subMenu.style.display = "flex";
            subMenuIcon.classList.add('icon-cross')
            subMenuIcon.classList.remove('fa fa-bars')
        }
    }
    // end menu js

// nav scroll bar js
const navPc = document.querySelector('.nav-pc')
const navMobile = document.querySelector('.mobile-nav');

window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        navPc.classList.remove('open-nav')
        navMobile.classList.add('open-mobile-nav')
            // $('#backtop').fadeIn();
        backtop.classList.add('backtop-open');

    } else {
        navPc.classList.add('open-nav')
        navMobile.classList.remove('open-mobile-nav')
            // $('#backtop').fadeOut();
        backtop.classList.remove('backtop-open');
    }
}
//end nav scroll bar js

// backtop js
$(document).ready(function() {
    $("#backtop").click(function() {
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    })
});
//end backtop js

// modal js

const commentBtns = document.querySelectorAll('.comment-js')
const close = document.querySelector('.js-modal-close')
const modal = document.querySelector('.js-modal')
const modalContainer = document.querySelector('.js-modal-container')
console.log(commentBtns)

function show() {
    modal.classList.add('active')
}

function hide() {
    modal.classList.remove('active')
}
for (const commentBtn of commentBtns) {
    commentBtn.addEventListener('click', show)
}
if (close) {
    close.addEventListener('click', hide)
    modal.addEventListener('click', hide)
    modalContainer.addEventListener('click', function(event) {
        event.stopPropagation()
    })
}

// end modal js