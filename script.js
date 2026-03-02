let random = document.getElementById("random");
let btn = document.getElementById("btn");
let startBtn = document.getElementById("startBtn");
let section2 = document.getElementById("section2");

section2.style.display = "none"
const topic = ["学校は週4日制にするべきである","制服は廃止するべきである","スマホの使用時間を法律で制限すべきである","給食は完全無料にすべきである","消費税を廃止すべきである","校則は生徒投票で決めるべきである","AIを教師にするべきである"];

function showRandom(){
  let index = Math.floor(Math.random() * topic.length);
  random.textContent = topic[index];
  btn.disabled = true;
  section2.style.display = "block"
};

function timeStart(){
  let time = 5 * 60; // 秒
  let timerEl = document.getElementById("time");

  let countdown = setInterval(function(){

    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    timerEl.textContent =
      String(minutes).padStart(2, "0") + ":" +
      String(seconds).padStart(2, "0");

    time--;

    if(time < 0){
      clearInterval(countdown);
      alert("時間終了！");
    }
    startBtn.disabled = true;

  }, 1000);
}






