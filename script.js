songs=['Human.mp3','legendary.mp3','thunder.mp3']
let song = document.querySelector('audio');
let playBtn = document.querySelector('#play');
var i =0;
playBtn.addEventListener('click', function()
{ 
    document.querySelector('audio').setAttribute('src',songs[i]);
    song.play();
    song.addEventListener('ended',nextSong)
});

function nextSong()
    {
    if(i===2)
    i = 0;
    else
    i++;
    document.querySelector('audio').setAttribute('src',songs[i]);
    song.play();
    }  

let repeatBtn = document.querySelector('#repeat');
clickCount=0;
repeatBtn.addEventListener("click", () => {
    clickCount++;
    if(clickCount%2==1)
    {
        song.loop =true;
        repeatBtn.style.background = "rgba(0,255,0,0.3)";
    }
    else
    {
    song.loop = false;
    repeatBtn.style.background = "rgba(255,0,0,0.3)";
    }
 });

let shuffleBtn = document.querySelector('#shuffle');
shuffleBtn.addEventListener('click',function()
{
    i = getRandomInt(3);
    document.querySelector('audio').setAttribute('src',songs[i]);
    song.play();
    song.addEventListener('ended',shuffleNext)

})
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
function shuffleNext()
{
    i = getRandomInt(3);
    document.querySelector('audio').setAttribute('src',songs[i]);
    song.play();
}

human = function humanPlay()
{
    document.querySelector('audio').setAttribute('src',songs[0]);
    song.play();

}
var human_sound =document.getElementById("humanDiv");
human_sound.addEventListener("click",human)

legendary = function legendaryPlay()
{
    document.querySelector('audio').setAttribute('src',songs[1]);
    song.play();

}
var legendary_sound =document.getElementById("legendaryDiv");
legendary_sound.addEventListener("click",legendary)

thunder = function thunderPlay()
{
    document.querySelector('audio').setAttribute('src',songs[2]);
    song.play();

}
var thunder_sound =document.getElementById("thunderDiv");
thunder_sound.addEventListener("click",thunder)

