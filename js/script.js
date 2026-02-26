$('.effect').on('inview', function() {
    var $item = $(this);
    $item.addClass('start');
});

var $header = $('header');

var w_h = $(window).height();
var topBtn = $('.to_top');

/*
if ((navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1) || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
    $.sublime_slideshow({
            src:[
//            {url:"img/slide/mikata.png"},
//            {url:"img/slide/renga.jpg"},
//			{url:"img/slide/Meikyodo.jpg"}
            {url:"img/slide/mikatagoko.jpg"},
            {url:"img/slide/kumagawa.jpg"},
            {url:"img/slide/renga.jpg"},
            {url:"img/slide/kehijingu.jpg"},
            {url:"img/slide/DJI_0066.jpg"},
			{url:"img/slide/amihiki.jpg"}
            ],
            duration:   5,
            fade:       1,
            scaling:    false,
            rotating:   false,
//			overlay:    "img/slide/pattern.png"
        });
//$("ul.sm-slider").appendTo("#index_top");

$(window).scroll(function () {

        if ($(this).scrollTop() > 100 && menuOpen == false) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
} else {
     $.sublime_slideshow({
            src:[
//            {url:"img/slide/mikata.png"},
//            {url:"img/slide/renga.jpg"},
//			{url:"img/slide/Meikyodo.jpg"}

            {url:"img/slide/mikatagoko.jpg"},
            {url:"img/slide/kumagawa.jpg"},
            {url:"img/slide/renga.jpg"},
            {url:"img/slide/kehijingu.jpg"},
            {url:"img/slide/DJI_0066.jpg"},
            {url:"img/slide/amihiki.jpg"}
            ],
            duration:   5,
            fade:       1,
            scaling:    1.07,
            rotating:   false,
	//		overlay:    "img/slide/pattern.png"
        });
//$("ul.sm-slider").appendTo("#index_top");
*/
$(window).scroll(function () {
	var w_h = $(window).height();
		var s_top = $(this).scrollTop(); //スクロールの値を取得
		var l_top = w_h / 2;
		var ml_top = l_top + s_top / 2;

        if ($(this).scrollTop() > 100 && menuOpen == false) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
		 if ($(window).scrollTop() > 300) {
                $header.addClass('fixed');
            } else {
                $header.removeClass('fixed');
            }
    });
/*
}
*/
/*
$(window).onload = $(function(){
	var imgpass = "../img/slide/";
	// 表示させたい画像のファイル名＋拡張子を配列に格納
	var imgfile = [];
	imgfile[0] = 'akarenga.jpg';
	imgfile[1] = 'amihiki.jpg';
	imgfile[2] = 'kehijingu.jpg';
	imgfile[3] = 'kehimatubara.jpg';
    imgfile[4] = 'kumagawa.jpg';
    imgfile[5] = 'Meikyodo.jpg';
    imgfile[6] = 'mikata.png';
    imgfile[7] = 'mikatagoko.jpg';
    imgfile[8] = 'rainbowline.jpg';
    imgfile[9] = 'sotomo.jpg';
	// 画像の数を元に、ランダムな数値を算出
	var n = Math.floor(Math.random() * imgfile.length);
	// 算出したランダムな数値の順番にいるファイル情報をbackground-imageに設定する
	$('.index_top').css('background-image', 'url(' + imgpass + imgfile[n] + ')');
});*/

// $(function(){
	
// 	topBtn.hide();

// $('a[href^=#]').click(function(){
// var speed = 500;
// var href= $(this).attr("href");
// var target = $(href == "#" || href == "" ? 'html' : href);
// var position = target.offset().top;
// $("html, body").animate({scrollTop:position}, speed, "swing");
// return false;
// });


// });

$(function(){
	topBtn.hide();
    $('a[href^=#]').click(function(){
        var speed = 500;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        // スクロール位置の調整量（例：ヘッダーの高さやフェードイン影響を考慮）
        var offsetAdjustment = 50; // 例えば50px上に調整する
        var position = target.offset().top + offsetAdjustment;  // 調整後の位置
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });
});



$(function(){
    $(window).bind("scroll", function() {
    scrollHeight = $(document).height();
    scrollPosition = $(window).height() + $(window).scrollTop();
    footHeight = $("footer").height();

    if ( scrollHeight - scrollPosition  <= footHeight ) {
        $(".to_top").css({"position":"fixed","bottom": footHeight});
    } else {
        $(".to_top").css({"position":"fixed","bottom": "10px"});
        }
    });
});

//スマホメニュー
var bnrBtn = $('#g_navi');
var bnrBtn2 = $('#h_box_sp');
var menuOpen = false;
var scrollpos;

$('.bg_bl').hide();

var ttt = false;

$(function(){
        $(".menu_btn").on("click", function() {
	if(ttt == false) {
          bnrBtn.stop().animate({'left' : '20%'}, 300);
		  bnrBtn2.stop().animate({'left' : '0%'}, 300);
          menuOpen = true;
		  $('.om').hide();
		  $('.to_top').hide();
		  $('.bg_bl').fadeIn();
		  scrollpos = $(window).scrollTop();
      $('body').addClass('fixed').css({'top': -scrollpos});
	        $(".menu_btn").addClass('opened');
	  ttt = true;
	} else {
		bnrBtn.stop().animate({'left' : '100%'}, 300);
		  bnrBtn2.stop().animate({'left' : '100%'}, 300);
          menuOpen = false;
		  $('.om').show();
		  $('.bg_bl').fadeOut();
		  $('body').removeClass('fixed').css({'top': 0});
		  $(".menu_btn").removeClass('opened');
      window.scrollTo( 0 , scrollpos );
	  ttt = false;
	}
        });
});


$('#g_navi a[href]').on('click', function(event) {
	if(ttt == true) {
    $('.menu_btn').trigger('click');
	}
});

$(window).resize(function(){
    var w = $(window).width();
    var x = 960;
    if (w >= x) {
		bnrBtn.stop().animate({'left' : '100%'}, 300);
		bnrBtn2.stop().animate({'left' : '100%'}, 300);
        menuOpen = false;
		$('.bg_bl').hide();
		ttt = false;
		$(".menu_btn").removeClass('opened');
    }
});

//アコーディオン
$(function(){
        $(".ac_menu").on("click", function() {
            $(this).next().slideToggle(); 
            $(this).toggleClass("active"); 
        });
});

// サイトアクセス時フェードイン 
$(function(){
 
    $('body').hide();
    $('body').fadeIn(300);
     
});

$(window).fadeThis();

// $(document).ready(function(){
//     var firstClick = true; // 初回クリックを追跡するフラグ

//     $('#g_navi a[href^="#"]').on('click', function(event) {
//         if (firstClick) {
//             event.preventDefault(); // デフォルトのリンク動作を無効化
//             var target = $($(this).attr('href'));
//             if (target.length) {
//                 $('html, body').animate({
//                     scrollTop: target.offset().top
//                 }, 500);
//             }
//             firstClick = false; // フラグを更新して次回以降のクリックを通常動作に
//         } else {
//             // クリックイベントリスナーを解除してデフォルト動作を実行
//             $('#g_navi a[href^="#"]').off('click');
//         }
//     });
// });


