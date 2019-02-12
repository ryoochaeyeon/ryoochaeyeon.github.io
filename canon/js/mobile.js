$(function(){
  /* header*/
  $('.icon-search').on('click',function(){
    $('.icon-search').hide();
    $('.search-form').fadeIn();
    $('.sns').hide();
  });
  $('.search-form .icon-close').on('click',function(){
    $('.icon-search').fadeIn();
    $('.search-form').fadeOut();
    $('.sns').show();
  });
/* ---------/ header*/

/*main*/
  var swiper = new Swiper('.main-slide .swiper-container', {
    pagination: {
      el: '.main-slide .swiper-pagination',
      type: 'fraction',
    },
    loop:true,
    autoplay:{
      delay:2000
    },
    on:{
      sliderMove:function(){
        $('.icon-pause').hide();
        $('.icon-play').show();
      }
    },
  });
  $('.icon-play').click(function(){
    swiper.autoplay.start();
    $('.icon-pause').show();
    $('.icon-play').hide();
  })
  $('.icon-pause').click(function(){
    swiper.autoplay.stop();
    $('.icon-play').show();
    $('.icon-pause').hide();
  })
/*-------/ main*/

/*survice*/
    var swiper1 = new Swiper('.survice .swiper-container', {
        pagination: {
          el: '.survice .swiper-pagination',
          clickable: true,
        },
        loop:true,
      });
/*-----/ survice*/

/*gallery*/
  $('.gallery ul li:lt(6)').show();
    var items =  18;
    var shown =  6;
    $('.more').click(function () {
        shown = $('.gallery ul li:visible').length+6;
        if(shown< items) {
          $('.gallery ul li:lt('+shown+')').show(300);
        } else {
          $('.gallery ul li:lt('+items+')').show(300);
        }
     });
/*-------- /gallery*/

/*login-popup*/
  $('nav #login').on('click',function(){
    $('.login-popup').fadeIn();
  });

  $('.login-popup .icon-close').on('click',function(){
    $('.login-popup').fadeOut();
  })

  $('#btn_login').on('click',function(){
    var id=$('#id').val();
    var password=$('#pw').val();

    if(id==''){
      $('#id').text('<p class="message">아이디를 입력하세요.</p>').focus()
    }else if(password==''){
      $('#pw').text('<p class="message">패스워드를 입력하세요.</p>').focus()
    }else{
      $('.login-popup').fadeOut();
      $('nav #login').text('LOGOUT/MY');
    }
  })
/*------/ login-popup*/

/*----/ gallery-popup*/
    var galleryImg = [
       {
         src:'img/mobile/gallery1-B.jpg',
         title:'봄을 맞이하는 순간'
       },
      {
        src:'img/mobile/gallery2-B.jpg',
        title:'하늘로 올라가고 싶은 자동차'
      },
      {
        src:'img/mobile/gallery3-B.jpg',
        title:'2019년 첫 일출'
      },
      {
        src:'img/mobile/gallery4-B.jpg',
        title:'시선'
      },
      {
        src:'img/mobile/gallery5-B.jpg',
        title:'잠자는 고양이'
      },
      {
        src:'img/mobile/gallery6-B.jpg',
        title:'PALAU SKINDIVING'
      },
      {
        src:'img/mobile/gallery7-B.jpg',
        title:'마카롱 군단'
      },
      {
        src:'img/mobile/gallery8-B.jpg',
        title:'달의 산책'
      },
      {
        src:'img/mobile/gallery9-B.jpg',
        title:'사막의 달'
      },
      {
        src:'img/mobile/gallery10-B.jpg',
        title:'상쾌해져라'
      },
      {
        src:'img/mobile/gallery11-B.jpg',
        title:'빛과 색이 향연'
      },
      {
        src:'img/mobile/gallery12-B.jpg',
        title:'바이올린 이야기 '
      },
      {
        src:'img/mobile/gallery13-B.jpg',
        title:'친퀘 테레의 밤'
      },
      {
        src:'img/mobile/gallery14-B.jpg',
        title:'다원의 빛'
      },
      {
        src:'img/mobile/gallery15-B.jpg',
        title:'교감'
      },
      {
        src:'img/mobile/gallery16-B.jpg',
        title:'가을 향기'
      },
      {
        src:'img/mobile/gallery17-B.jpg',
        title:'더워질때면 생각나는 스위스입니다'
      },
      {
        src:'img/mobile/gallery18-B.jpg',
        title:'walking on the cloud'
      }
  ];

      var galleryPopup = new Swiper('.gallery-popup .swiper-container', {
        pagination: {
          clickable: true,
        },
        loop:true,
      });

      $('.gallery .wrap > img').on('click',function(){
        $('.gallery-popup').fadeIn();
        var imgIndex=$('.gallery .wrap > img').index(this);
        for (var i in galleryImg) {
          $('.gallery-popup .swiper-wrapper').append(
            '<div class="swiper-slide">'+
            '  <img src="'+galleryImg[i].src+'" alt="" >'+
            '  <div class="text-box"><p>'+'제목 : '+galleryImg[i].title+'</p></div>'+
            '</div>'
          );
        }
        galleryPopup.update();
        galleryPopup.slideTo(imgIndex, 0, true);
      });

      $('.gallery-popup .icon-close').on('click',function(){
        $('.gallery-popup').fadeOut();
      });

});
