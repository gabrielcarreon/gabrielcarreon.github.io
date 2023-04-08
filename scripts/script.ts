const navheight = $(".navbar").height();
$('#home').css('height', 'calc(100vh - '+navheight+'px - 1rem)');

jQuery(() =>{
    let webwidth = $('body').width();
    $(window).on('resize', ()=>{
        webwidth = $('body').width();
    });
    if(webwidth > 991){
        const offerSection =  $('#offer')[0];
        setObserver(offerSection);
    }
   
});
function setObserver(section){
    const scrollObserver = new IntersectionObserver(entries =>{
        let bgColor = entries[0].isIntersecting ? 'white' : 'transparent';
        entries[0].isIntersecting ? $("nav a, active").addClass('textblack') : $("nav a, active").removeClass('textblack');
        $(".navbar").css('background-color', bgColor);


    },{
        threshold: .9,
    });
    scrollObserver.observe(section);
}