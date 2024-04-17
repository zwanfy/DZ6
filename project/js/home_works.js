// GMAIL BLOCK-PARTY 1
const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailSpan = document.querySelector('#gmail_result')

const regExp =/^[a-zA-Z0-9_.-]{6,30}@gmail.com+$/

gmailButton.onclick = () => {
    if(regExp.test(gmailInput.value)){
        gmailSpan.innerHTML = 'account find'
        gmailSpan.style.color = 'green'
    } else {
        gmailSpan.innerHTML = 'account not find'
        gmailSpan.style.color = 'red'
    }

}

//MOVE BLOCK-PARTY1(2)


const blockSquare = document.querySelector('.parent_block')
const redSquare = document.querySelector('.child_block')
const mainWight = blockSquare.offsetWidth - redSquare.offsetWidth
const mainHeight = blockSquare.offsetHeight - redSquare.offsetHeight

let positionX = 0
let positionY = 0

const moveBlock = () => {
    if (positionX < mainWight && positionY === 0) {
        positionX += 3
        redSquare.style.left = `${positionX}px`
        requestAnimationFrame(moveBlock)
    } else if (positionX === mainHeight && positionY < mainHeight) {
        positionY += 3
        redSquare.style.top = `${positionY}px`
        requestAnimationFrame(moveBlock)
    } else if (positionY === mainWight && positionX !== 0) {
        positionX -= 3
        redSquare.style.left = `${positionX}px`
        requestAnimationFrame(moveBlock)
    } else if (positionX === 0 && positionY !== 0) {
        positionY -= 3
        redSquare.style.top = `${positionY}px`
        requestAnimationFrame(moveBlock)
    }
}
moveBlock()

const buttonStart = document.querySelector('#start')
const buttonStop = document.querySelector('#stop')
const buttonReset = document.querySelector('#reset')
const second = document.querySelector('#seconds')
let counter = 0
let running = false
let timerInterval;
const seconds1 = () => {
    counter++
    second.textContent = counter
}
const start = () => {
    if (!running) {
        timerInterval = setInterval(seconds1, 1000)
        running = true
    }
}
buttonStart.onclick = start

const stop = () => {
    clearInterval(timerInterval)
    running = false
}
buttonStop.onclick = stop

const reset = () => {
    clearInterval(timerInterval)
    counter = 0
    second.textContent = counter
    running = false
}
buttonReset.onclick = reset






