//регулярные выражения 
const gmailInput = document.getElementById('gmail_input')
const gmailButton = document.getElementById('gmail_button')
const gmailResult = document.getElementById('gmail_result')
const regExp = /^(.+)@(gmail.com)$/
gmailButton.onclick = () => {
    if( regExp.test(gmailInput.value)){
        gmailResult.innerHTML = 'OK'
        gmailResult.style.color = 'green'
    }else{
        gmailResult.innerHTML = 'Неправильный формат'
        gmailResult.style.color = 'red'
    }
}
//move block
const childBlock = document.querySelector('.child_block')
let positionX =0,positionY = 0
const moveBlock = () => {
    if(positionX<= 450 && positionY ===0){
        positionX++
        childBlock.style.left = positionX+'px'
        setTimeout(moveBlock, 0)
    }else if(positionY <= 450&& positionX> 440){
        positionY++
        childBlock.style.top = positionY+'px'
        setTimeout(moveBlock, 0)
    }else if(positionX>=0){
        positionX--
        childBlock.style.left = positionX+'px'
        setTimeout(moveBlock, 0)
    }else if (positionY >=0){
        positionY--
        childBlock.style.top = positionY+'px'
        setTimeout(moveBlock, 0)
    }
}
moveBlock()

//timer
const start = document.querySelector("#start")
const stop = document.querySelector("#stop")
const reset = document.querySelector("#reset")
 const seconds = document.querySelector("#seconds")


 let counter = 0
 let switcher = true

 start.onclick = () => {
    if(switcher === true){
        const timerId = setInterval(() => {
            if(counter <= 999){
                counter +=1
                seconds.innerHTML = `${counter}`
            }
        },100)
        stop.onclick = () => {
            clearInterval(timerId)
            switcher = true
        }
        reset.onclick = () => {
            counter= 0
            seconds.innerHTML = `${counter}`
            switcher = true
        }
        switcher= false
    }
 }


