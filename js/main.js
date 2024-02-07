$(function () {
  $(".navi li").on("click", function () {
    target = $(this).children("a").attr("href");
    targetpos = $(target).offset().top;
    movescroll(targetpos);
  });

  function movescroll(targetpos) {
    $("html, body").stop().animate({ scrollTop: targetpos }, 1000);
  }
  //con1 일러스트
  //con1 일러스트
  //con1 일러스트
  $("#con1 li").eq(1).addClass("on");
  $(".shake1").eq(1).addClass("on");
  $(".shake2").eq(1).addClass("on");
  for (let i = 0; i <= 2; i++) {
    $("#con1 li")
      .eq(i)
      .on("mouseenter", function () {
        $("#con1 li").removeClass("on");
        $(".visualicon").removeClass("on");
        $(".visualicon").removeClass("on");
        $(this).addClass("on");
        $(`#con1 li:nth-of-type(${i + 1}) .visualicon`).addClass("on");
        $(".shake1").eq(i).addClass("on");
        $(".shake2").eq(i).addClass("on");
      });
  }

  //con3 기획서 모달
  //con3 기획서 모달
  //con3 기획서 모달
  $("#con3 .btn1").on("click", function () {
    $("#con3 .planbg").addClass("on");
  });
  $("#con3 .planclose").on("click", function () {
    $("#con3 .planbg").removeClass("on");
  });

  //con3 기획서 모달 슬라이드
  //con3 기획서 모달 슬라이드
  //con3 기획서 모달 슬라이드
  let total3 = $("#con3 .planslide ul li").length;
  let i3 = 0;

  $("#con3 .plannavi .planprev").on("click", function () {
    $("#con3 .planslide li").last().prependTo(".planslide ul");
    if (i3 == 0) {
      i3 = total3 - 1;
    } else {
      i3--;
    }
    fade3();
  });

  $("#con3 .plannavi .plannext").on("click", function () {
    $("#con3 .planslide li").first().appendTo(".planslide ul");
    if (i3 == total3 - 1) {
      i3 = 0;
    } else {
      i3++;
    }
    fade3();
  });

  function fade3() {
    $(".plannavi span").text(i3 + 1);
  }
  //con4 기획서 모달 슬라이드
  //con4 기획서 모달 슬라이드
  //con4 기획서 모달 슬라이드
  let total4 = $("#con4 .planslide1 ul li").length;
  let i4 = 0;

  $("#con4 .plannavi1 .planprev1").on("click", function () {
    $("#con4 .planslide1 li").last().prependTo(".planslide1 ul");
    if (i4 == 0) {
      i4 = total4 - 1;
    } else {
      i4--;
    }
    fade4();
  });

  $("#con4 .plannavi1 .plannext1").on("click", function () {
    $("#con4 .planslide1 li").first().appendTo(".planslide1 ul");
    if (i4 == total4 - 1) {
      i4 = 0;
    } else {
      i4++;
    }
    fade4();
  });

  function fade4() {
    $(".plannavi1 span").text(i4 + 1);
  }

  //con4 기획서 모달
  //con4 기획서 모달
  //con4 기획서 모달

  $("#con4 .btn1").on("click", function () {
    $("#con4 .planbg1").addClass("on");
  });
  $("#con4 .planclose1").on("click", function () {
    $("#con4 .planbg1").removeClass("on");
  });

  //con5 카드 회전
  //con5 카드 회전
  //con5 카드 회전
  for (let i = 1; i <= 7; i++) {
    $(`.card${i}`).on("mouseenter", function () {
      $(`.cardbox${i}`).addClass("on");
    });
    $(`.card${i}`).on("mouseleave", function () {
      $(`.cardbox${i}`).removeClass("on");
    });
  }

  //con5 디자인 모달
  //con5 디자인 모달
  //con5 디자인 모달
  $(".view").on("click", function () {
    let n = $(this).index(".view");
    $(".con5modal > div").eq(n).addClass("on");
  });
  $(".con5modal span").on("click", function () {
    $(".con5modal > div").removeClass("on");
  });

  //해당 컨테이너 올때 작동
  //해당 컨테이너 올때 작동
  //해당 컨테이너 올때 작동
  $(".navi_circle").eq(0).addClass("on");
  $("ul li:nth-of-type(2)").eq(0).addClass("on");
  $(window).on("scroll", function () {
    let baseline = -390; //조금 더 빨리 노출
    let con1 = $("#con1").offset().top + baseline;
    let con2 = $("#con2").offset().top + baseline;
    let con3 = $("#con3").offset().top + baseline;
    let con4 = $("#con4").offset().top + baseline;
    let con5 = $("#con5").offset().top + baseline;
    let con6 = $("#con6").offset().top + baseline;
    // console.log(con2);

    let scroll = $(this).scrollTop();
    $(".navi_circle").removeClass("on");
    $("ul li:nth-of-type(2)").removeClass("on");
    if (scroll >= con1 && scroll < con2) {
      $(".navi_circle").eq(0).addClass("on");
      $("ul li:nth-of-type(2)").eq(0).addClass("on");
    } else if (scroll >= con2 && scroll < con3) {
      $(".navi_circle").eq(1).addClass("on");
      $("ul li:nth-of-type(2)").eq(1).addClass("on");
      $("#con2 .title").addClass("on");
      $("#con2 .wrap").addClass("on");
      // 게이지
      $("#con2 .in").eq(0).addClass("on1");
      $("#con2 .in").eq(1).addClass("on2");
      $("#con2 .in").eq(2).addClass("on3");
      $("#con2 .in").eq(3).addClass("on4");
      $("#con2 .in").eq(4).addClass("on5");
      $("#con2 .in").eq(5).addClass("on6");
    } else if (scroll >= con3 && scroll < con4) {
      $(".navi_circle").eq(2).addClass("on");
      $("ul li:nth-of-type(2)").eq(2).addClass("on");
      $("#con3 .title").addClass("on");
      $("#con3 ul").addClass("on");
      $("#con3 .btn").addClass("on");
    } else if (scroll >= con4 && scroll < con5) {
      $(".navi_circle").eq(3).addClass("on");
      $("ul li:nth-of-type(2)").eq(3).addClass("on");
      $("#con4 .title").addClass("on");
      $("#con4 ul").addClass("on");
      $("#con4 .btn").addClass("on");
    } else if (scroll >= con5 && scroll < con6) {
      $(".navi_circle").eq(4).addClass("on");
      $("ul li:nth-of-type(2)").eq(4).addClass("on");
      $("#con5 ul").addClass("on");
      $("#con5 .title").addClass("on");
    } else if (scroll >= con6) {
      $(".navi_circle").eq(5).addClass("on");
      $("ul li:nth-of-type(2)").eq(5).addClass("on");
      $("#con6 ul").addClass("on");
      $("#con6 .title").addClass("on");
      $("#con6 .namecard").addClass("on");
    }
  });
});
