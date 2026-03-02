let random = document.getElementById("random");
let btn = document.getElementById("btn");
let startBtn = document.getElementById("startBtn");
let section2 = document.getElementById("section2");
let endBtn = document.getElementById("endBtn");
let timerEl = document.getElementById("time");

let countdown = null; // ← nullにするのがポイント
let defaultTime = 5 * 60;

section2.style.display = "none";
endBtn.style.display = "none";

const topic = [
  "学校は週4日制にするべきである",
  "制服は廃止するべきである",
  "スマホの使用時間を法律で制限すべきである",
  "給食は完全無料にすべきである",
  "校則は生徒投票で決めるべきである",
  "AIを教師にするべきである"
];

// ----------------------------

function showRandom(){
  let index = Math.floor(Math.random() * topic.length);
  random.textContent = topic[index];

  btn.disabled = true;
  section2.style.display = "block";

  resetTimerDisplay();
}

// ----------------------------

function timeStart(){

  if(countdown !== null) return; // ← 二重起動防止

  let time = defaultTime;

  startBtn.style.display = "none";
  endBtn.style.display = "inline-block";

  countdown = setInterval(function(){

    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    timerEl.textContent =
      String(minutes).padStart(2, "0") + ":" +
      String(seconds).padStart(2, "0");

    time--;

    if(time < 0){
      finishRound();
    }

  }, 1000);
}

// ----------------------------

function finishRound(){

  clearInterval(countdown);
  countdown = null; // ← これ超重要

  alert("ラウンド終了！");

  section2.style.display = "none";
  btn.disabled = false;

  startBtn.style.display = "inline-block";
  endBtn.style.display = "none";

  resetTimerDisplay();
}

// ----------------------------

function endTimer(){
  finishRound();
}

// ----------------------------

function resetTimerDisplay(){
  timerEl.textContent = "05:00";
}





