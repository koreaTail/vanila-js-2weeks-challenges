// 수강생 belliemun 님의 작품


const lable = document.querySelector("h2");

// You're gonna need this
function getTime() {
    // Don't delete this.
    const xmasDay = new Date("2021-12-24:00:00:00+0900");
    const leftTime = new Date(xmasDay - Date.now());

    const date = Math.floor(leftTime / 1000 / 60 / 60 / 24);
    const hours =
        leftTime.getHours() - 9 < 0
            ? leftTime.getHours() - 9 + 24
            : leftTime.getHours() - 9;
    const minutes = leftTime.getMinutes();
    const seconds = leftTime.getSeconds();

    lable.innerText = `${date < 10 ? `0${date}` : date}d ${hours < 10 ? `0${hours}` : hours
        }h ${minutes < 10 ? `0${minutes}` : minutes}m ${seconds < 10 ? `${seconds}` : seconds
        }s`;
}

function init() {
    setInterval(() => getTime(), 1000);
}

init();

// 노마드코더 정답

// const clockTitle = document.querySelector(".js-clock");

// function getTime() {
//   const xmasDay = new Date(`${new Date().getFullYear()}-12-24:00:00:00+0900`);
//   const now = new Date();

//   const difference = new Date(xmasDay - now);
//   const secondsInMs = Math.floor(difference / 1000);
//   const minutesInMs = Math.floor(secondsInMs / 60);
//   const hoursInMs = Math.floor(minutesInMs / 60);
//   const days = Math.floor(hoursInMs / 24);
//   const seconds = secondsInMs % 60;
//   const minutes = minutesInMs % 60;
//   const hours = hoursInMs % 24;
//   const daysStr = `${days < 10 ? `0${days}` : days}d`;
//   const hoursStr = `${hours < 10 ? `0${hours}` : hours}h`;
//   const minutesStr = `${minutes < 10 ? `0${minutes}` : minutes}m `;
//   const secondsStr = `${seconds < 10 ? `0${seconds}` : seconds}s`;
//   clockTitle.innerHTML = `${daysStr} ${hoursStr} ${minutesStr} ${secondsStr}`;
// }

// function init() {
//   getTime();
//   setInterval(getTime, 1000);
// }
// init();
