
function audioPrompt() {
    var audio = new Audio("audio/elephant.wav");
    //var audio = new Audio("audio/aughh.mp3");
    audio.play();
}
function incorrect() {
    var audio = new Audio("audio/no.mp3");
    audio.play();
}
function correct() {
    // Reveal the whole word, and play the audio.
    document.getElementById("word").innerHTML = "ELEPHANT";
    var audio = new Audio("audio/next_level.wav");
    audio.play();

    moveCar();

    // Switch to the next page. Hard coded time delays. Refer to moveCar.
    setTimeout(() => {
        window.location.href="spelling-finished.html";
        }, 4250);
}
function moveCar() {
    car = document.getElementById("car")

    for (let i = 1; i < 12; i++) {
        setTimeout(() => {
            car.style.transform = "translate(" + (2 * i) + "vw, 0)"
            }, (i + 1) * 250);
    }

    // Hard coded time delay. Refer to loop above.
    setTimeout(() => {
        car.hidden = true
        }, 3250);
}
function finish() {
    var audio = new Audio("audio/finished.wav");
    audio.play();
    
    // Exit activity. (For this demo, goes back to beginning).
    setTimeout(() => {
        window.location.href="index.html";
        }, 7000);
}
