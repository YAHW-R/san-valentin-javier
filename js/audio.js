document.addEventListener('click', ()=> {
    const audio = document.getElementById('audio');
    const title = document.querySelector('.title');

    setTimeout(()=> {
        audio.play();
    }, 1000);

    
}, {once: true});

title.addEventListener('click', ()=> {
    if (audio.paused) {
        audio.play();
    }
    else {
        audio.pause();
    }
});