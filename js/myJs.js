const textConfig = {
  text1: "He luu em iu!",
  text2: "Em iu nhận được món quà húi lũi của anh chưa.",
  text3: "Em iu tha lỗi cho anh nha",
  text4: "Nếu em không trả lời mà thoát ra là chịu tha lỗi cho anh nha :v",
  text5: "Không",
  text6: "Tha lỗi cho anh đó",
  text7: "Anh biết em iu anh mà:vvvv",
  text8: "Yeahhhh <3",
  text9: "Lát anh xún đón nhoe",
  text10: "Tớ biết mà ^^ Yêu cậu 300.000",
  text11:
    "Tối nay tớ qua đón cậu đi chơi nhaa :v Còn giờ thì chờ gì nữa mà ko inbox cho tớ đi nàooo",
  text12: "Okii lunn <3",
};

$(document).ready(function () {
  // process bar
  setTimeout(function () {
    firstQuestion();
    $(".spinner").fadeOut();
    $("#preloader").delay(350).fadeOut("slow");
    $("body").delay(350).css({
      overflow: "visible",
    });
  }, 600);

  $("#text3").html(textConfig.text3);
  $("#text4").html(textConfig.text4);
  $("#no").html(textConfig.text5);
  $("#yes").html(textConfig.text6);

  function firstQuestion() {
    $(".content").hide();
    Swal.fire({
      title: textConfig.text1,
      text: textConfig.text2,
      imageUrl: "img/cuteCat.jpg",
      imageWidth: 300,
      imageHeight: 300,
      background: '#fff url("img/iput-bg.jpg")',
      imageAlt: "Custom image",
    }).then(function () {
      $(".content").show(200);
    });
  }

  // switch button position
  function switchButton() {
    var audio = new Audio("sound/duck.mp3");
    audio.play();
    var leftNo = $("#no").css("left");
    var topNO = $("#no").css("top");
    var leftY = $("#yes").css("left");
    var topY = $("#yes").css("top");
    $("#no").css("left", leftY);
    $("#no").css("top", topY);
    $("#yes").css("left", leftNo);
    $("#yes").css("top", topNO);
  }
  // move random button póition
  function moveButton() {
    var audio = new Audio("sound/Swish1.mp3");
    audio.play();
    if (screen.width <= 600) {
      var x = Math.random() * 300;
      var y = Math.random() * 500;
    } else {
      var x = Math.random() * 500;
      var y = Math.random() * 500;
    }
    var left = x + "px";
    var top = y + "px";
    $("#no").css("left", left);
    $("#no").css("top", top);
  }

  var n = 0;
  $("#no").mousemove(function () {
    if (n < 1) switchButton();
    if (n > 1) moveButton();
    n++;
  });
  $("#no").click(() => {
    if (screen.width >= 900) switchButton();
  });

  // generate text in input
  function textGenerate() {
    var n = "";
    var text = " " + textConfig.text9;
    var a = Array.from(text);
    var textVal = $("#txtReason").val() ? $("#txtReason").val() : "";
    var count = textVal.length;
    if (count > 0) {
      for (let i = 1; i <= count; i++) {
        n = n + a[i];
        if (i == text.length + 1) {
          $("#txtReason").val("");
          n = "";
          break;
        }
      }
    }
    $("#txtReason").val(n);
  }

  // show popup
  $("#yes").click(function () {
    var audio = new Audio("sound/tick.mp3");
    audio.play();
    
    // Hiển thị popup "Anh biết em iu anh mà:vvvv"
    Swal.fire({
      title: textConfig.text7,
      html: textConfig.text9, // Tùy chỉnh lại HTML ở đây nếu bạn không muốn câu hỏi
      width: 900,
      padding: "3em",
      background: '#fff url("img/iput-bg.jpg")',
      backdrop: `
                  rgba(0,0,123,0.4)
                  url("img/giphy2.gif")
                  left top
                  no-repeat
                `,
      showCancelButton: false,
      confirmButtonColor: "#fe8a71",
      confirmButtonText: textConfig.text8,
    }).then((result) => {
      if (result.value) {
        // Load lại trang sau khi nhấn vào "Yeahhhh <3"
        location.reload(); // Tải lại trang
      }
    });
  });
  
});
