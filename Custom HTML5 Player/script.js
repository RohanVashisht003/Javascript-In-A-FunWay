const player = document.querySelector(".player");

const video = document.querySelector(".player__video");
const color = document.querySelector(".progress__filled");
const btn = document.getElementById("play-pause");
const ranges = document.querySelectorAll(".player__slider");
const skipButtons = document.querySelectorAll("[data-skip]");

function togglePlayPause() {
  if (video.paused) {
    btn.className = "pause";
    video.play();
  } else {
    btn.className = "play";
    video.pause();
  }
}

btn.onclick = function () {
  togglePlayPause();
};

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

video.addEventListener("timeupdate", function () {
  var colorPos = video.currentTime / video.duration;
  color.style.width = colorPos * 100 + "%";

  if (video.ended) {
    btn.className = "play";
  }
});

video.addEventListener("click", togglePlayPause);

ranges.forEach((range) => range.addEventListener("change", handleRangeUpdate));
ranges.forEach((range) =>
  range.addEventListener("mousemove", handleRangeUpdate)
);
skipButtons.forEach((button) => button.addEventListener("click", skip));
