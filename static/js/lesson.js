Howtoplay();

function startClick() {
  var hand = document.getElementById("hand").value;
  if (hand == "0") {
    var clip = document.getElementById("clip");
    clip.src = "https://www.youtube.com/embed/AUC-UzcUu6w?autoplay=1&mute=1";
  } else if (hand == "1") {
    var clip = document.getElementById("clip");
    clip.src = "https://www.youtube.com/embed/rF2Xtr_1TX0?autoplay=1&mute=1";
  } else if (hand == "2") {
  } else if (hand == "3") {
  } else if (hand == "4") {
  }
}
function Easy() {
  var hand = document.getElementById("hand").value;
  if (hand == "0") {
    console.log("0");

    var countdown = document.getElementById("countdown");

    var countItDown = function () {
      var currentTime = parseFloat(countdown.textContent);
      if (currentTime >= 20) {

        alertwinEasy();
        window.clearInterval(timer);
        countdown.textContent = "0";
      } else {
        countdown.textContent = currentTime + 1;
      }

      console.log(currentTime);
    };
    var timer = window.setInterval(countItDown, 1000);
  } else if (hand == "1") {
    var countdown = document.getElementById("countdown");
    var countItDown = function () {
      var currentTime = parseFloat(countdown.textContent);
      if (currentTime >= 20) {
        alertwinEasy();
        window.clearInterval(timer);
        document.getElementById("last-finger").style.animation = "";
        document.getElementById("last-finger1").style.animation = "";
        countdown.textContent = "0";
      } else {
        countdown.textContent = currentTime + 1;
      }
    };
    var timer = window.setInterval(countItDown, 1000);
    document.getElementById("last-finger").style.animation =
      "finger-5-animation 10s infinite linear";
    document.getElementById("last-finger1").style.animation =
      "finger-6-animation 10s infinite linear";
  } else if (hand == "2") {
    var countdown = document.getElementById("countdown");

    var countItDown = function () {
      var currentTime = parseFloat(countdown.textContent);
      if (currentTime >= 20) {
        alertwinEasy();
        window.clearInterval(timer);
        document.getElementById("last-finger").style.animation = "";
        document.getElementById("last-finger1").style.animation = "";
        countdown.textContent = "0";
      } else {
        countdown.textContent = currentTime + 1;
      }
    };
    var timer = window.setInterval(countItDown, 1000);
    document.getElementById("last-finger").style.animation =
      "finger-7-animation 10s infinite linear";
    document.getElementById("last-finger1").style.animation =
      "finger-8-animation 10s infinite linear";
  } else if (hand == "3") {
    var countdown = document.getElementById("countdown");

    var countItDown = function () {
      var currentTime = parseFloat(countdown.textContent);
      if (currentTime >= 20) {
        alertwinEasy();
        window.clearInterval(timer);
        document.getElementById("last-finger").style.animation = "";
        document.getElementById("last-finger1").style.animation = "";
        countdown.textContent = "0";
      } else {
        countdown.textContent = currentTime + 1;
      }
    };
    var timer = window.setInterval(countItDown, 1000);
    document.getElementById("last-finger").style.animation =
      "finger-9-animation 10s infinite linear";
    document.getElementById("last-finger1").style.animation =
      "finger-10-animation 10s infinite linear";
  } else if (hand == "4") {
    var countdown = document.getElementById("countdown");

    var countItDown = function () {
      var currentTime = parseFloat(countdown.textContent);
      if (currentTime >= 20) {
        alertwinEasy();
        window.clearInterval(timer);
        document.getElementById("last-finger").style.animation = "";
        document.getElementById("last-finger1").style.animation = "";
        countdown.textContent = "0";
      } else {
        countdown.textContent = currentTime + 1;
      }
    };
    var timer = window.setInterval(countItDown, 1000);
    document.getElementById("last-finger").style.animation =
      "finger-11-animation 10s infinite linear";
    document.getElementById("last-finger1").style.animation =
      "finger-12-animation 10s infinite linear";
  }
}
function Normal() {
  var hand = document.getElementById("hand").value;
  if (hand == "0") {
    console.log("0");
    var countdown = document.getElementById("countdown");

    var countItDown = function () {
      var currentTime = parseFloat(countdown.textContent);
      if (currentTime >= 40) {
        alertwinNormal();
        window.clearInterval(timer);
        countdown.textContent = "0";
      } else {
        countdown.textContent = currentTime + 1;
      }
      console.log(currentTime);
    };
    var timer = window.setInterval(countItDown, 1000);
  } else if (hand == "1") {
    var countdown = document.getElementById("countdown");

    var countItDown = function () {
      var currentTime = parseFloat(countdown.textContent);
      if (currentTime >= 40) {
        alertwinNormal();
        window.clearInterval(timer);
        document.getElementById("last-finger").style.animation = "";
        document.getElementById("last-finger1").style.animation = "";
        countdown.textContent = "0";
      } else {
        countdown.textContent = currentTime + 1;
      }
    };
    var timer = window.setInterval(countItDown, 1000);
    document.getElementById("last-finger").style.animation =
      "finger-5-animation 6s infinite linear";
    document.getElementById("last-finger1").style.animation =
      "finger-6-animation 6s infinite linear";
  } else if (hand == "2") {
    var countdown = document.getElementById("countdown");

    var countItDown = function () {
      var currentTime = parseFloat(countdown.textContent);
      if (currentTime >= 40) {
        alertwinNormal();
        window.clearInterval(timer);
        document.getElementById("last-finger").style.animation = "";
        document.getElementById("last-finger1").style.animation = "";
        countdown.textContent = "0";
      } else {
        countdown.textContent = currentTime + 1;
      }
    };
    var timer = window.setInterval(countItDown, 1000);
    document.getElementById("last-finger").style.animation =
      "finger-7-animation 6s infinite linear";
    document.getElementById("last-finger1").style.animation =
      "finger-8-animation 6s infinite linear";
  } else if (hand == "3") {
    var countdown = document.getElementById("countdown");

    var countItDown = function () {
      var currentTime = parseFloat(countdown.textContent);
      if (currentTime >= 40) {
        alertwinNormal();
        window.clearInterval(timer);
        document.getElementById("last-finger").style.animation = "";
        document.getElementById("last-finger1").style.animation = "";
        countdown.textContent = "0";
      } else {
        countdown.textContent = currentTime + 1;
      }
    };
    var timer = window.setInterval(countItDown, 1000);
    document.getElementById("last-finger").style.animation =
      "finger-9-animation 6s infinite linear";
    document.getElementById("last-finger1").style.animation =
      "finger-10-animation 6s infinite linear";
  } else if (hand == "4") {
    var countdown = document.getElementById("countdown");

    var countItDown = function () {
      var currentTime = parseFloat(countdown.textContent);
      if (currentTime >= 40) {
        alertwinNormal();
        window.clearInterval(timer);
        document.getElementById("last-finger").style.animation = "";
        document.getElementById("last-finger1").style.animation = "";
        countdown.textContent = "0";
      } else {
        countdown.textContent = currentTime + 1;
      }
    };
    var timer = window.setInterval(countItDown, 1000);
    document.getElementById("last-finger").style.animation =
      "finger-11-animation 6s infinite linear";
    document.getElementById("last-finger1").style.animation =
      "finger-12-animation 6s infinite linear";
  }
}

function Hard() {
  var hand = document.getElementById("hand").value;
  if (hand == "0") {
    console.log("0");

    var countdown = document.getElementById("countdown");

    var countItDown = function () {
      var currentTime = parseFloat(countdown.textContent);
      if (currentTime >= 60) {
        alertwinhard();
        window.clearInterval(timer);
        countdown.textContent = "0";
      } else {
        countdown.textContent = currentTime + 1;
      }

      console.log(currentTime);
    };
    var timer = window.setInterval(countItDown, 1000);
  } else if (hand == "1") {
    var countdown = document.getElementById("countdown");

    var countItDown = function () {
      var currentTime = parseFloat(countdown.textContent);
      if (currentTime >= 60) {
        alertwinhard();
        window.clearInterval(timer);
        document.getElementById("last-finger").style.animation = "";
        document.getElementById("last-finger1").style.animation = "";
        countdown.textContent = "0";
      } else {
        countdown.textContent = currentTime + 1;
      }
    };
    var timer = window.setInterval(countItDown, 1000);
    document.getElementById("last-finger").style.animation =
      "finger-5-animation 3s infinite linear";
    document.getElementById("last-finger1").style.animation =
      "finger-6-animation 3s infinite linear";
    // console.log("1");
  } else if (hand == "2") {
    var countdown = document.getElementById("countdown");

    var countItDown = function () {
      var currentTime = parseFloat(countdown.textContent);
      if (currentTime >= 60) {
        alertwinhard();
        window.clearInterval(timer);
        document.getElementById("last-finger").style.animation = "";
        document.getElementById("last-finger1").style.animation = "";
        countdown.textContent = "0";
      } else {
        countdown.textContent = currentTime + 1;
      }
    };
    var timer = window.setInterval(countItDown, 1000);
    document.getElementById("last-finger").style.animation =
      "finger-7-animation 3s infinite linear";
    document.getElementById("last-finger1").style.animation =
      "finger-8-animation 3s infinite linear";
  } else if (hand == "3") {
    var countdown = document.getElementById("countdown");

    var countItDown = function () {
      var currentTime = parseFloat(countdown.textContent);
      if (currentTime >= 60) {
        alertwinhard();
        window.clearInterval(timer);
        document.getElementById("last-finger").style.animation = "";
        document.getElementById("last-finger1").style.animation = "";
        countdown.textContent = "0";
      } else {
        countdown.textContent = currentTime + 1;
      }
    };
    var timer = window.setInterval(countItDown, 1000);
    document.getElementById("last-finger").style.animation =
      "finger-9-animation 3s infinite linear";
    document.getElementById("last-finger1").style.animation =
      "finger-10-animation 3s infinite linear";
  } else if (hand == "4") {
    var countdown = document.getElementById("countdown");

    var countItDown = function () {
      var currentTime = parseFloat(countdown.textContent);
      if (currentTime >= 60) {
        alertwinNormal();
        window.clearInterval(timer);
        document.getElementById("last-finger").style.animation = "";
        document.getElementById("last-finger1").style.animation = "";
        countdown.textContent = "0";
      } else {
        countdown.textContent = currentTime + 1;
      }
    };
    var timer = window.setInterval(countItDown, 1000);
    document.getElementById("last-finger").style.animation =
      "finger-11-animation 3s infinite linear";
    document.getElementById("last-finger1").style.animation =
      "finger-12-animation 3s infinite linear";
  }
}

function alertwinEasy() {
  Swal.fire({
    title: "<i>Good!!</i>",
    html: "You pass level: <b>Easy</b>",
    confirmButtonText: "<u>done</u>",
  });
}
function alertwinNormal() {
  Swal.fire({
    title: "<i>Great!!</i>",
    html: "You pass level: <b>Normal</b>",
    confirmButtonText: "<u>done</u>",
  });
}
function alertwinhard() {
  Swal.fire({
    title: "<i>Excellent!!</i>",
    html: "You pass level: <b>Hard</b>",
    confirmButtonText: "<u>done</u>",
  });
}
function Howtoplay() {
  Swal.fire({
    title: "<i>HOW TO PLAY</i>",
    html: "1.Choose type of Hand Therapy.<br><br>2.Learn Hand Therapy from video and start.<br><br>3.Choose level.<br><br> <b>Easy</b> 20 Seconds\n <b>Normal</b> 40 Seconds\n <b>Hard</b> 60 Seconds",
    confirmButtonText: "<u>got it.</u>",
  });
}
