$(function(){
  /*language*/
  $('.login > li:nth-child(1)').click(function(){
    $('.login > li:nth-child(1) ul').toggleClass('open');
    $('header .login > li:nth-child(1) >a').toggleClass('rot');
  });
/*-------/ language --------*/

  /* search */
  $('.search-form').hide();
  $('.icon-search').click(function(){
    $('.search-form').fadeIn();
    $('.icon-search').hide();
  })
  $('.search-form > button').on('click',function(){
    $('.search-form').fadeOut();
    $('.icon-search').fadeIn();
  });
/*-------/ search ----------*/

/* header nav*/
  $('.gnb li:nth-child(1)').on({
    mouseenter:function(){
      $('header nav').css('height','460px');
      $('.dropdown').css('height','400px');
    }
  });
  $('.gnb li').on({
    mouseleave:function(){
      $('header nav').css('height','60px');
      $('.dropdown').css('height','0px');
    }
  });
  $('header .swiper-slide').on({
    mouseenter:function(){
      var src=$(this).find('img').attr('src').replace('-g','');
      $(this).find('img').attr('src',src);
    },
    mouseleave:function(){
        var src=$(this).find('img').attr('src').replace('.jpg','-g.jpg');
        $(this).find('img').attr('src',src);
    }
  })

  var swiper = new Swiper('.gnb .swiper-container',{
    navigation:{
      nextEl:'.gnb .swiper-button-next',
      prevEl:'.gnb .swiper-button-prev',
    },
    slidesPerView:6,
    slidesPerGroup:6,
    spaceBetween: 40,
  });
/*-------/ header nav ------*/
/* main-slide*/
  var swiper2 = new Swiper('.main-slide.swiper-container',{
    pagination:{
      el:'.controls .swiper-pagination',
      clickable: true,
    },
    autoplay:{
      delay:2000
    },
    loop:true,
    on:{
      sliderMove:function(){
        $('.icon-pause').hide();
        $('.icon-play').show();
      }
    },
  })
  $('.swiper-pagination-bullet').click(function(){
    $('.icon-pause').hide();
    $('.icon-play').show();
  })
$('.icon-play').click(function(){
  swiper2.autoplay.start();
  $('.icon-pause').show();
  $('.icon-play').hide();
})
$('.icon-pause').click(function(){
  swiper2.autoplay.stop();
  $('.icon-pause').hide();
  $('.icon-play').show();
})

/*-------/ main-slide------*/

/* support*/
  var support=[
    {
      title:'정품등록',
      description:'정품을 등록하고 다양한 혜택을 받으세요.',
      source:'img/registation.jpg'
    },
    {
      title:'기술지원',
      description:'소프트웨어, 메뉴얼, 펌웨어를 다운로드하실 수 있습니다.',
      source:'img/skill.jpg'
    },
    {
      title:'매장안내',
      description:'캐논 제품의 판매 또는 수리 서비스 매장을 안내해드립니다.',
      source:'img/store-guide.jpg'
    },
    {
      title:'AS안내',
      description:'픽업 또는 서비스센터 방문을 통해 제품 수리를 받을 수 있습니다.',
      source:'img/as-guide.jpg'
    }
  ];

  $('.support-nav .support-icon').click(function(){
    $('.support-nav .support-icon').each(function(){
      var origin=$(this).find('img').attr('src').replace('-w.png','.png');
      $(this).find('img').attr('src',origin);
    })
    var whiteImg = $(this).find('img').attr('src').replace('.png','-w.png');
    $(this).find('img').attr('src',whiteImg);

    var guide=$('.support-nav .support-icon').index(this);
    $('.support .text-box h3').text(support[guide].title);
    $('.support .text-box p').text(support[guide].description);
    $('.support').css({'background':'url('+support[guide].source+')'});
  });



/*gallery*/
  var gallerylist = $('.gallery-list').isotope({
    itemSelector:'.item'
  })

  $('.btn').on('click',function(){
    $('.btn').removeClass('active');
    $(this).addClass('active');

    var selector = $(this).attr('data-filter');

    gallerylist.isotope({
      filter:selector
    })
  });
/*-------/ gallery*/

/*사이트맵*/
  $('.sitemap-open').on('click',function(e){
    e.preventDefault();
    $('.sitemap').slideToggle();
    $('.sitemap-open').toggleClass('rot2');
  })
/*-------/ 사이트 맵*/


/*login pop*/
  $('.login-popup').hide();

  $('.login > li:nth-child(2)').on('click',function(){
    $('.login-popup').fadeIn();
    $('body').append('<div class="bg"></div>');
  });
  $('.login-popup > button.icon-close').on('click',function(){
    $('.login-popup').fadeOut();
    $('.bg').remove();
  });

  $('.btn-save').on('click',function(){
    $('.btn').toggleClass('left');
  })
  $('#btn-login').click(function(){
    var id=$('#id').val();
    var password=$('#pw').val();
    if(id==''){
        $('#id').text('<p class="message">아이디를 입력하세요.</p>').focus()
    }else if(password==''){
        $('#pw').text('<p class="message">비밀번호를 입력하세요.</p>').focus()
    }else{
        $('.login-popup').fadeOut();
        $('#logout').text('LOGOUT');
        $('#my').text('MY');
        $('.bg').remove();
      }
  })


/*-----------/ login pop*/







/*주문창 popup*/

  $('.order-popup').hide();
  $('.new-product  .icon-plus').on('click',function(){
    $('.order-popup').fadeIn();
    $('body').append('<div class="bg"></div>');
  });


$('.small-img a').click(function(e){
  e.preventDefault();
  var thumbNail=$('.small-img a').find('img').attr('src').replace('-S.jpg','-L.jpg');
  $('.big-img img').attr('src',thumbNail);
 })



 var popup = {
   // x1: ['img/eosr1','img/eosr1', 'img/eosr2', 'img/eosr3', 'img/eosr4', 'EOS R','', '출시일 : 2018.10', '원산지 : 일본'],
   x1:{
     src:['img/eosr1', 'img/eosr2', 'img/eosr3', 'img/eosr4'],
     name:'EOS R',
     date:'출시일 : 2018.10',
     company:'원산지 : 일본'
   },
   x2:{
     src:['img/35mm1', 'img/35mm2', 'img/35mm3', 'img/35mm4'],
     name:'RF 35mm F1.8<br>MACRO IS STM',
     date:'출시일 : 2018.12',
     company:'원산지 : 타이완'
   },
   x3:{
     src:['img/28mm1', 'img/28mm2', 'img/28mm3', 'img/28mm4'],
     name:'RF 28-70mm F2L<br>USM',
     date:'출시일 : 2018.12',
     company:'원산지 : 일본'
   },
   x4:{
     src:['img/50mm1', 'img/50mm2', 'img/50mm3', 'img/50mm4'],
     name:'RF 50mm F1.2L<br>USM',
     date:'출시일 : 2018.10',
     company:'원산지 : 일본'
   }
 }

  $('.icon-plus > img').on('click', function(){
  var key = $(this).attr('class')
  $('div.order-popup').find('div.big-img').empty();
  $('div.order-popup').find('div.big-img').append(
    '<img src="' + popup[key].src[0] + '-L.jpg">'
  );

  $('ul.small-img > li').empty();

  for (var i in popup[key].src) {
    $('ul.small-img > li').eq(i).append(
      '<a href="#"><img src="' +popup[key].src[i] +'-S.jpg"></a>'
    );
    if(i==0){
      $('ul.small-img > li').eq(i).addClass('active');
    }
  }

  $('div.order-popup').find('div.text-box').empty();
  $('div.order-popup').find('div.text-box').append(
    '<dl>' +
      '<dt>' +
        '<strong>'+popup[key].name +'</strong>' +
      '</dt>' +
      '<dd>' + popup[key].date + '</dd>' +
      '<dd>' + popup[key].company + '</dd>' +
    '</dl>'
  );
  $('div.order-popup').find('div.text-box').append(
    '<a href="#">구매하기</a>'
  );
});

var i=0;
$('.small-img').on('click','a', function(e){
  e.preventDefault();
  i=$('.small-img a').index(this);
  var src=$('.small-img a').eq(i).find('img').attr('src').replace('-S.jpg','-L.jpg');
  $('.big-img img').attr('src',src);
  $('.small-img li').removeClass('active');
  $('.small-img li').eq(i).addClass('active');
});

$('.order-popup button.icon-close').click(function(){
  $('.order-popup').fadeOut();
  $('.bg').remove();
})
/*-------/ 주문창 popup*/

/* top*/
  var windowH=$(window).height();
  $('.btn-top').click(function(e){
    e.preventDefault();
    var i=$('btn-top').index(this);
    var nowTop=i*windowH;
    $('html').stop().animate({
      'scrollTop':nowTop
    },1000);
  });

});
