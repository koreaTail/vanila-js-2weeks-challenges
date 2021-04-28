const limitNumberPlace = document.querySelector(".limitNumberPlace")
const rangeForm = document.querySelector(".rangeForm")
const rangeInput = rangeForm.querySelector(".rangeInput")
const guessNumber = document.querySelector(".guess-number")
const iGuessNumberForm = document.querySelector(".iGuessNumberForm")
const iGuessNumberInput = iGuessNumberForm.querySelector(".iGuessNumberInput")
const iGuessNumberPlayBtn = iGuessNumberForm.querySelector(".iGuessNumberPlayBtn")
const choseAndResult = document.querySelector(".choseAndResult")
const iGuessNumberShowingPlace = choseAndResult.querySelector(".iGuessNumberShowingPlace")
const machineChoseNumberShowingPlace = choseAndResult.querySelector(".machineChoseNumberShowingPlace")
const lostText = choseAndResult.querySelector(".lostText")
const winText = choseAndResult.querySelector(".winText")
const probability = choseAndResult.querySelector(".probability")
const rottoProb = document.querySelector(".rottoProb")
const winShowing = document.querySelector(".winShowing")


rangeForm.addEventListener("input", rangeHandelr)

function rangeHandelr() {
    const limitNumber = rangeInput.value
    limitNumberPlace.innerText = limitNumber
    guessNumber.classList.remove("hide")
}


iGuessNumberForm.addEventListener("submit", playBtnHandler)

function playBtnHandler(event) {
    event.preventDefault();
    const iChoseNumber = parseInt(iGuessNumberInput.value);
    if (iChoseNumber == '') {
        alert("숫자를 맞춰보세요.")
    } else if (iChoseNumber < 0) {
        alert("0 이상의 정수를 입력해주세요.")
        iGuessNumberInput.value = "";
    } else if (iChoseNumber <= parseInt(rangeInput.value)) {
        paintChoseAndResult(iChoseNumber);
    } else {
        alert("숫자가 범위를 초과했어요")
        iGuessNumberInput.value = "";
    }

}

function paintChoseAndResult(iChoseNumber) {
    choseAndResult.classList.remove("hide")
    iGuessNumberShowingPlace.innerText = iChoseNumber
    const machineChoseNumber = Math.round(Math.random() * rangeInput.value)
    machineChoseNumberShowingPlace.innerText = machineChoseNumber
    if (machineChoseNumber == iChoseNumber) {
        winText.classList.remove("hide")
        lostText.classList.add("hide")
        winShowing.classList.remove("hide")
    } else {
        lostText.classList.remove("hide")
        winText.classList.add("hide")
    }
    console.log(parseInt(rangeInput.value) + 1)
    probability.innerText = ((1 / (parseInt(rangeInput.value) + 1)) * 100)
    const rottoProbility = (1 / 8145060) * 100
    rottoProb.innerText = rottoProbility
}



