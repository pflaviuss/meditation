const app = () => {
  const song = document.querySelector(".song");
  const play = document.querySelector(".play");
  const outline = document.querySelector(".moving-outline circle");
  const video = document.querySelector(".vid-container video");
  const volume = document.querySelector("#volume");

  //Sounds
  const sound = document.querySelectorAll(".sound-picker button");
  //Time Display
  const timeDisplay = document.querySelector(".time-display");
  const timeSelect = document.querySelectorAll('.time-select button')
  //Get the length of the outline
  const outlineLength = outline.getTotalLength();
  //Duration
  let fakeDuration = 600;

  outline.style.strokeDasharray = outlineLength;
  outline.style.strokeDashoffset = outlineLength;

  //pick different sounds

  sound.forEach(sound =>{
    sound.addEventListener('click', function(){
        song.src= this.getAttribute('data-sound');
        video.src= this.getAttribute('data-video');
        checkPlaying(song);
    })
  })

  // play sound

  play.addEventListener("click", () => {
    checkPlaying(song);
  });

  //select sound

  timeSelect.forEach(option =>{
    option.addEventListener('click', function(){
        fakeDuration = this.getAttribute('data-time');
        timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(fakeDuration % 60)}`
    })
  })

  //create a function specific to stop and play the sounds and also change the icons
  const checkPlaying = (song) => {
    if (song.paused) {
      song.play();
      video.play();
      play.src= './svgs/pause.svg'
    }else{
        song.pause();
        video.pause();
        play.src = './svgs/play.svg'
    }
  };

  //adjust volume 

  volume.addEventListener('change', function(e){
    song.volume = e.currentTarget.value / 100;
  })

  //animate the circle and check the time 

  song.ontimeupdate = () => {
     let currentTime = song.currentTime;
     let elapsed = fakeDuration - currentTime;
     let seconds = Math.floor(elapsed % 60);
     let minutes = Math.floor(elapsed / 60);

     //animating the circle
     let progress = outlineLength - (currentTime / fakeDuration) * outlineLength;
     outline.style.strokeDashoffset = progress;

     //animate the text

     timeDisplay.textContent= `${minutes}:${seconds}`;
    
    
     //reset the song when the time is over
     if(currentTime >= fakeDuration){
        song.pause();
        song.currentTime = 0;
        play.src='./svgs/play.svg';
        video.pause();
     }
  };
};

app();