document.querySelectorAll('.drum-button').forEach(button => {
    button.addEventListener('click',() =>{
        playSound(button);
    });
});

document.addEventListener("keydown",(event) => {
    const key = event.key.toUpperCase();
    const button = document.querySelector(`.drum-button[data-key="${key}"]`);
    if(button){
        playSound(button);
        button.classList.add('active');
        setTimeout(() =>{button.classList.remove('active');},100);
    }
});

function playSound(button){
    const sound = button.getAttribute('data-sound');
    const audio = new Audio(sound);
    audio.play();
}