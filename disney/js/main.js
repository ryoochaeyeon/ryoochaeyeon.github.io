$(function(){
  var pcBg=['img/main1-pc.jpg','img/main2-pc.jpg'];
  var moBg=['img/main1-mo.jpg','img/main2-mo.jpg'];
  var menuIndex=[
  "A film studio in the United States The studio entertainment department of Walt Disney Company.",
  "Walt Disney Pictures, Walt Disney Animation Studio, Pixar, Marvel Studio, Lucasfilm.",
  "Winter Kingdom 2 Released in Korea in December this year... expectation amplification."]
  var mobileIcon=['img/mobile-icon1.png','img/mobile-icon2.png','img/mobile-icon3.png']
  var mainSwiperSetting={
    effect:'fade',
    loop: true,
    autoplay:{
    delay:3000
   },
    pagination: {
        el: '.main-slide .swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '"><span class="circle"></span><img class="mobile-icon" src="'+(mobileIcon[index])+'" alt=""><span class="text">'+menuIndex[index]+'</span></span>';
        },
      },
  };
  var movieSwiperSetting={
    slidesPerView: 6,
    spaceBetween: 30,
    breakpoints: {
     1024: {
       slidesPerView: 3
     },
     767:{
       slidesPerView:2
     },
     500: {
       slidesPerView:1
     },
  }
}

  var mainSwiper = new Swiper('.main-slide', mainSwiperSetting);
  var movieSwiper = new Swiper('.movie-swiper', movieSwiperSetting);
  $(window).resize(function(){
    var widthW = $(window).width();
    if(widthW < 1200){
        $('.language ul').removeClass('open');
    }
    mainSwiper.destroy();
    movieSwiper.destroy();
    if(widthW < 768){
      $('.bg').each(function(i){
          $(this).css('background-image','url('+moBg[i]+')');
      })
      $('.main-slide .swiper-pagination-bullet-active').toggleClass('text');
    }else{
      $('.bg').each(function(i){
        $(this).css('background-image','url('+pcBg[i]+')');
      })
      $('.main-slide swiper-pagination-bullet-active').toggleClass('circle');
      $('.main-slide swiper-pagination-bullet-active').append(
        '<img src="img/main-icon-c.png" alt="">'
      );
    }
    mainSwiper = new Swiper('.main-slide', mainSwiperSetting);
    movieSwiper = new Swiper('.movie-swiper', movieSwiperSetting);
  }).resize();

  $('.language > a').on('click',function(){
    $('.language ul').toggleClass('open');
  });

  $('.language ul li a').on('click',function(){
    $('.language ul li a').removeClass('active');
    $(this).addClass('active');
  })


  $(window).scroll(function(){
    var heightW= $(document).scrollTop();
    if(heightW>100){
      $('header').addClass('scroll');
    }else{
      $('header').removeClass('scroll');
    }
  })

  /*feature film영역*/
  $(window).resize(function(){
    var film1H=$('.film2').height();
    $('.film1 img').height(film1H);
    var film2H=$('.film3').height();
    $('.film4 img').height(film2H);
  }).resize();
  /*----------/ feature film 영역*/

  /*marvel영역*/
  $('.icon-topbtn').click(function(){
    $(this).fadeOut();
    $('.top-button ul').fadeIn();
    $('.marvel-pre .row').toggleClass('slidup');
  });
  $('.icon-close').click(function(){
    $('.top-button ul').fadeOut();
    $('.icon-topbtn').fadeIn();
    $('.marvel-pre .row').toggleClass('slidup');
  })

  var trailerVid = {
    trailer1:{src:'video/captain'},
    trailer2:{src:'video/thor'},
    trailer3:{src:'video/avengers'},
    trailer4:{src:'video/spiderman'}
  }
  $('.marvel .row div').on({
    mouseenter:function(){
      var marvelImg=$(this).find('img').attr('src').replace('-g','');
      $(this).find('img').attr('src',marvelImg);
    },mouseleave:function(){
      var marvelImg=$(this).find('img').attr('src').replace('.jpg','-g.jpg')
      $(this).find('img').attr('src',marvelImg);
    },
    click:function(){
      var key=$(this).find('img').attr('class');
      $('.marvel').find('.video-box').empty();
      $('.marvel').find('.video-box').append(
        '<video src="' + trailerVid[key].src +'.mp4" controls loop muted >'
      );
      $('.top-button ul').fadeOut();
      $('.icon-topbtn').fadeIn();
      $('.marvel-pre .row').toggleClass('slidup');
    }
  });
  /*movie*/
    $(".movie .swiper-slide").flip({
      axis: 'y',
      trigger: 'hover'
  });
  $('.title').on('click',function(){
    $('.sitemap').slideToggle();
    $('.title').toggleClass('rot2')
  });
});

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    // 위도, 경도값 넣기
    center: {lat: 34.156662, lng: -118.325182},
    zoom: 8
  });
  var marker = new google.maps.Marker({
    position: {lat: 34.156662, lng: -118.325182},
    map: map,
    title: 'Disney Studio'
  });
}

$(function(){
  var filmImg = [
    {
      src:'img/dinosaur.jpg',
      title:'THE GOOD DINOSAUR',
      date:'2015.11.17'
    },
    {
      src:'img/zootopia.jpg',
      title:'ZOOTOPIA',
      date:'2016.02.17'
    },
    {
      src:'img/coco.jpg',
      title:'COCO',
      date:'2017.11.22'
    },
    {
      src:'img/frozen.jpg',
      title:'FROZEN',
      date:'2013.11.27'
    },
    {
      src:'img/tangled.jpg',
      title:'TANGLED',
      date:'2010.11.24'
    },
    {
      src:'img/bighero.jpg',
      title:'BIG HERO',
      date:'2014.11.07'
    },
    {
      src:'img/ralph.jpg',
      title:'WRECK-IT RALPH',
      date:'2012.11.02'
    },
    {
      src:'img/insideout.jpg',
      title:'INSIDE OUT',
      date:'2015.06.19'
    },
    {
      src:'img/monster.jpg',
      title:'MONSTER UNIVERSITY',
      date:'2013.06.21'
    }
  ];
  var filmPopup = new Swiper('.pixar-popup .swiper-container', {
    navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
     },
    loop:true,
  });

  $('.pixar .wrapper img').on('click',function(){
    $('.pixar-popup').fadeIn();
    var imgIndex=$('.pixar .wrapper img').index(this);
    for (var i in filmImg) {
      $('.pixar-popup .swiper-wrapper').append(
        '<div class="swiper-slide">'+
          '<div class="left col-sm-6">'+
            '<img src="'+filmImg[i].src+'" alt="" >'+
          '</div>'+
          '<div class="right col-sm-6">'+
            '<h4>'+filmImg[i].title+'</h4>'+
            '<p>'+filmImg[i].date+'</p>'+
            '<a href="#">LEARN MORE</a>'+
          '</div>'+
        '</div>'
      );
    }
    filmPopup.update();
    filmPopup.slideTo(imgIndex, 0, true);
  });
  $('.pixar-popup .flim1').off('click',function(){
    $('.pixar-popup').hide();
  });
  $('.pixar-popup .icon-close').on('click',function(){
    $('.pixar-popup').fadeOut();
  });

  $(window).on('scroll',function(){
    if($(window).scrollTop()>300){
      $('header').addClass('bg');
    }else{
      $('header').removeClass('bg');
    }
  });

  var sectionTopValue=0;
    $(window).resize(function(){
        w=$(window).width();

        if(w>767){
            //마우스 휠
            sectionTopValue=70;
            $('.window').on('mousewheel',function(e,delta){
                if(delta>0){
                    if($(this).prev().is('.window')){
                        var prev=$(this).prev().offset().top;
                        $('html').stop().animate({
                           scrollTop:prev-70
                       },1000)
                   }
               }else if(delta<0){
                    if($(this).next().is('.window')){
                        var next=$(this).next().offset().top;
                        $('html').stop().animate({
                            scrollTop:next-70
                        },1000)
                    }
               }
           })
        }else{
            sectionTopValue=5;
        }

        //스파이 스크롤
        var windowH=$('.window').height();
        $(window).on('scroll',function(){
            var scrollTop=$(window).scrollTop()+sectionTopValue;
            var sec1=Math.floor($('#film').offset().top);
            var sec2=Math.floor($('#marvel').offset().top);
            var sec3=Math.floor($('#movie').offset().top);
            var i=0;
            if(scrollTop>=0 && scrollTop<sec2){
                i=0;
            }else if(scrollTop>=sec2 && scrollTop<sec3){
                i=1;
            }else if(scrollTop>=sec3 && scrollTop<sec4){
                i=2;
            }else if(scrollTop>=sec4){
                i=3;
            }
        })
    }).resize();


    //메뉴클릭
    $('header nav ul li a').on('click',function(e){
      e.preventDefault();
      id=$(this).attr('href');
      sectionTop=$(id).offset().top;
      $('html, body').stop().animate({
        scrollTop:sectionTop-sectionTopValue
      })
    });
});
