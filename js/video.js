// Add js here.

// Page Load
var video = document.getElementById("videoplayer");
video.preload = true;
video.autoplay = false;
video.loop = false;

// Play Button
var play_button = document.getElementById("play");
play_button.onclick = function(){
    video.play();
}

// Pause Button
var pause_button = document.getElementById("pause");
pause_button.onclick = function(){
    video.pause();
}

// const speed_list = [0.5, 1, 2]
// Slow Down
var slow_down_button = document.getElementById("slower");
slow_down_button.onclick = function(){
    if(video.playbackRate != 0.5){
        video.playbackRate *= 0.5;
    }
    else{
        alert("Video is at slowest speed!");
    }
}

// Speed Up
var speed_up_button = document.getElementById("faster");
speed_up_button.onclick = function(){
    if(video.playbackRate != 2){
        video.playbackRate *= 2;
    }
    else{
        alert("Video is at fastest speed!");
    }
}

// Skip Ahead
var skip_button = document.getElementById("skip");
skip_button.onclick = function(){
    // alert(video.duration)
    video.currentTime += 15;
    if(video.currentTime >= video.duration){
        video.currentTime = 0;
        video.play();
    }
}

// Mute
var mute_button = document.getElementById("mute");
mute_button.onclick = function(){
    if(video.muted == true){
        video.muted = false;
        mute_button.innerHTML = "Mute";
    }
    else{
        video.muted = true;
        mute_button.innerHTML = "Unmute";
    }
}

// Volume Slider
var volume_slider = document.getElementById("slider");
var volume = document.getElementById("volume");
volume.innerHTML = volume_slider.value;
volume_slider.oninput = function(){
    video.volume = volume_slider.value / 100;
    volume.innerHTML = volume_slider.value;
}


