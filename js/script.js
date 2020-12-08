// $(function() {
//     // articleをホバーで発動
//     $('p::after').hover(
//         function() {
//         //     $('p::after').css('width','50px');
//         // },
//         // function() {
//         //     $('p::after').css('width',)
//         // }
//         $(this).toggleClass('.ling_lg');
//         });
// });

$(function () {
    $('article')
        .on('mouseover',function () {
            $(this).find('.line_bt').addClass('active');        
        })
        .on('mouseleave',function () {
            $(this).find('.line_bt').removeClass('active');        
        });
});