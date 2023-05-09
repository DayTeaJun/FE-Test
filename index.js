const hrs = document.querySelector(".hrs .timeNum");
const min = document.querySelector(".min .timeNum");
const sec = document.querySelector(".sec .timeNum");

const startBtn = document.querySelector(".start");
const resetBtn = document.querySelector(".reset");

// const times = document.querySelectorAll(".timeNum");

// let timeNum = 0;

// times.forEach((item) => {
//   item.addEventListener("click", () => {
//     startBtn.classList.toggle("btnDisabled");
//     resetBtn.classList.toggle("btnDisabled");
//     timeNum += 10;
//     item.textContent = timeNum;
//     startBtn.innerHTML = `<img src="./img/start-default.svg" alt="타이머 시작버튼">`;
//     resetBtn.innerHTML = `<img src="./img/reset-default.svg" alt="타이머 시작버튼">`;
//   });
// });

let secNum = 0;
let minNum = 0;
let hrsNum = 0;

sec.addEventListener("click", () => {
  secNum += 10;
  sec.textContent = secNum;
  startBtn.innerHTML = `<img src="./img/start-default.svg" alt="타이머 시작버튼">`;
  resetBtn.innerHTML = `<img src="./img/reset-default.svg" alt="타이머 시작버튼">`;
  if (secNum || minNum || hrsNum) {
    startBtn.classList.remove("btnDisabled");
    resetBtn.classList.remove("btnDisabled");
  }
});

min.addEventListener("click", () => {
  minNum += 10;
  min.textContent = minNum;
  startBtn.innerHTML = `<img src="./img/start-default.svg" alt="타이머 시작버튼">`;
  resetBtn.innerHTML = `<img src="./img/reset-default.svg" alt="타이머 시작버튼">`;
  if (secNum || minNum || hrsNum) {
    startBtn.classList.remove("btnDisabled");
    resetBtn.classList.remove("btnDisabled");
  }
});

hrs.addEventListener("click", () => {
  hrsNum += 1;
  hrs.textContent = hrsNum;
  startBtn.innerHTML = `<img src="./img/start-default.svg" alt="타이머 시작버튼">`;
  resetBtn.innerHTML = `<img src="./img/reset-default.svg" alt="타이머 시작버튼">`;
  if (secNum || minNum || hrsNum) {
    startBtn.classList.remove("btnDisabled");
    resetBtn.classList.remove("btnDisabled");
  }
});

// let toggleTimer = true;

startBtn.addEventListener("click", () => {
  let time = parseInt(sec.textContent);

  let timer = setInterval(function () {
    time--;
    sec.textContent = time;
    if (time < 0) {
      clearInterval(timer);
      alert("Finish");
      sec.textContent = "00";
      startBtn.innerHTML = `<img src="./img/start-default.svg" alt="타이머 시작버튼">`;
      resetBtn.innerHTML = `<img src="./img/reset-default.svg" alt="타이머 시작버튼">`;
      startBtn.classList.add('btnDisabled"');
      startBtn.className += "btnDisabled";
      resetBtn.className += "btnDisabled";
    }
  }, 1000);

  startBtn.innerHTML = `<img src="./img/pause.svg" alt="타이머 시작버튼">`;
});

resetBtn.addEventListener("click", () => {
  //   clearInterval(timer);
  sec.textContent = "00";
  min.textContent = "00";
  hrs.textContent = "00";
});
