


function addSound(event) {

    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);

    const key = document.querySelector(`div[data-key="${event.keyCode}"]`);

    // document.getElementById("demo").style.fontSize = "x-large";

    key.style.padding = '100px';

    key.classList.add("playing");



    console.log(audio);

    audio.currentTime = 0;

    audio.play();

    console.log(event.keyCode);

    audio.addEventListener("ended", function (e) {
        key.classList.remove("playing");
        key.style.padding = '0px';
    })

}


window.addEventListener("keydown", addSound);