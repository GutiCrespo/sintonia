const spinner = document.getElementById('#spinner')
const blindCover = document.getElementById('#spinner')

spinner.addEventListener('click', () => {
    const spin = getRandomInt(360)
    console.log(spin);
    blindCover.style.transform = `rotate(${spin}deg)`
})

    function getRandomInt(max) {
        return Math.floor(Math.random() * max)
    }