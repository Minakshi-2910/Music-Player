var arr = [
    {songname: "Kahani meri" , url: "./songs/Kahani Meri.mp3", img: "./images/kahani meri.jpg", time: "2:18 min"}, 
    {songname: "kana yaari" , url: "./songs/Kana Yaari - Kaifi Khalil, Eva B, Wahab Bugti_320(MyMp3Song).mp3", img: "./images/kana yaari.jpg", time: "4:00 min"}, 
    {songname: "Slow Motion Angreza" , url: "./songs/Slow Motion Angreza (From Bhaag Milkha Bhaag).mp3", img: "./images/slow motion angreza.jpg", time: "4:56 min"}, 
    {songname: "Tabaah ho gaye" , url: "./songs/Tabaah-Ho-Gaye(Pagal-World.Com.In).mp3", img: "./images/tabah ho gaye.jpg", time: "2:01 min"}, 
    {songname: "tu jhoom" , url: "./songs/Tu Jhoom - Abida Parveen, Naseebo Lal_320(MyMp3Song).mp3", img: "./images/tu jhoom.jpg", time: "6:41 min"}

]



var allSongs = document.querySelector("#all-songs")
var poster = document.querySelector("#left")

var back = document.querySelector("#back")
var play = document.querySelector("#play")
var forward = document.querySelector("#forward")



var audio = new Audio()

var selectedSong = 0
var flag = 0
function mainFunction() {
    var clutter = ""

    arr.forEach(function (elem, index) {
        clutter += `<div class="song-card" id="${index}">
    <div class="part1">
        <img src="${elem.img}" alt="picture">
        <h2>${elem.songname}</h2>
    </div>
    <h6>${elem.time}</h6>
</div>`
    })
    allSongs.innerHTML = clutter

    audio.src = arr[selectedSong].url
    poster.style.backgroundImage = `url("${arr[selectedSong].img}")`
}
mainFunction()

allSongs.addEventListener("click", function(dets) {
    selectedSong = dets.target.id
    
    mainFunction()
    play.innerHTML = `<i class="ri-pause-circle-fill"></i>`
    flag = 1
    audio.play()
})

play.addEventListener("click", function(){
    if(flag == 0){
          play.innerHTML = `<i class="ri-pause-circle-fill"></i>`
          mainFunction()
          audio.play()
          flag = 1
    }
    else{
          play.innerHTML = `<i class="ri-play-fill"></i>`
          mainFunction()
          audio.pause()
        flag = 0
    }
    

})
forward.addEventListener("click", function(){
    if(selectedSong<arr.length-1){
        selectedSong++
        mainFunction()
        audio.play()

    }
    else{
        forward.style.opacity = 0.3
    }
    

})
back.addEventListener("click", function(){
    if(selectedSong>0){
        selectedSong--
        mainFunction()
        audio.play()

    }
    else{
        back.style.opacity = 0.3
    }
    

})




