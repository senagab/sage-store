$(document).ready(function() {
    $('.gallery img').hover(function() {
        $(this).css('transform', 'scale(1.2)'); /* Adjust the scaling factor for desired zoom level */
    }, function() {
        $(this).css('transform', 'scale(1)');
    });
});