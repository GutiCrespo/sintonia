document.addEventListener("DOMContentLoaded", () => {

    console.log("funcionando");
    

    const wheel = document.getElementById("item-3")

    wheel.addEventListener("click", () => {
        console.log("click funcionando");
        const rotation = Math.random() * (2160 - 360) + 360

        console.log(rotation);
        

        wheel.style.transition = "transform 2s ease-out"
        wheel.style.transform = `rotate(${rotation}deg)`
    })

})