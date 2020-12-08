window.onload = function () {
  //window.onload scripts tag dekat head tag
  let video = document.getElementById("myVideo");

  let playBtn = document.getElementById("playBtn");
  playBtn.addEventListener("click", function () {
    video.play();
  });

  let pauseBtn = document.getElementById("pauseBtn");
  pauseBtn.addEventListener("click", function () {
    video.pause();
  });

  let freezeBtn = document.getElementById("freezeBtn");
  freezeBtn.addEventListener("click", function () {
    video.freeze();
  });
};
