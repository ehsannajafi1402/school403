
const video = document.querySelector("video")



function PlayPause() {
  video.paused ?  video.play() : video.pause()
}


function toggleMute() {
  video.muted = !video.muted
}


function changePlaybackSpeed(speed) {
  video.playbackRate = speed
}


// Captions
const captions = video.textTracks[0]
captions.mode = "hidden"


function toggleCaptions() {
  if(captions.mode === "hidden")
    captions.mode = "showing"
  else
    captions.mode = "hidden"

}


function goTime(time) {
  video.currentTime = time
}


function videoClicked(){
  alert("You can't do it ;)")
}
    
    
