$(function () {
	$("[id^=button]").click(function () {
		let index = $(this).attr("id").replace("button", "");
		$(".img" + index).fadeIn().siblings().fadeOut();
	});

});

$(document).ready(function(){ 
    // 처음 로딩 시 logo1만 보이게
    $('.logo2').hide();
    $('.logo1').show();

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            // 100 이상 스크롤 → logo2 보이게
            $('.header').addClass('header-scrolled');
            $('.logo1').hide();
            $('.logo2').show();
        } else {
            // 0~100 → logo1 보이게
            $('.header').removeClass('header-scrolled');
            $('.logo2').hide();
            $('.logo1').show();
        }
    });
});

$(document).ready(function(){ 
    // 처음 로딩 시 logo1만 보이게
    $('.Icon_search_b').hide();
    $('.Icon_search').show();
    $('.Icon_member_b').hide();
    $('.Icon_member').show();
    $('.Icon_shopping_b').hide();
    $('.Icon_shopping').show();

    $(window).scroll(function() {
        if ($(this).scrollTop() > 140) {
            // 100 이상 스크롤 → logo2 보이게
            $('.header').addClass('header-scrolled');
            $('.Icon_search').hide();
            $('.Icon_search_b').show();
            $('.Icon_member').hide();
            $('.Icon_member_b').show();
            $('.Icon_shopping').hide();
            $('.Icon_shopping_b').show();
        } else {
            // 0~100 → logo1 보이게
            $('.header').removeClass('header-scrolled');
            $('.Icon_search_b').hide();
            $('.Icon_search').show();
            $('.Icon_member_b').hide();
            $('.Icon_member').show();
             $('.Icon_shopping_b').hide();
            $('.Icon_shopping').show();
        }
    });
});

