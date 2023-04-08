var navheight = $(".navbar").height();
$('#home').css('height', 'calc(100vh - ' + navheight + 'px - 1rem)');
jQuery(function () {
    var webwidth = $('body').width();
    $(window).on('resize', function () {
        webwidth = $('body').width();
    });
    if (webwidth > 991) {
        var offerSection = $('#offer')[0];
        setObserver(offerSection);
    }
});
function setObserver(section) {
    var scrollObserver = new IntersectionObserver(function (entries) {
        var bgColor = entries[0].isIntersecting ? 'white' : 'transparent';
        entries[0].isIntersecting ? $("nav a, active").addClass('textblack') : $("nav a, active").removeClass('textblack');
        $(".navbar").css('background-color', bgColor);
    }, {
        threshold: .9,
    });
    scrollObserver.observe(section);
}
