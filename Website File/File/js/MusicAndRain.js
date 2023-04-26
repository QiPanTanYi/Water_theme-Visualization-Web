var musicBox=document.querySelector(".music")
var music = document.querySelector(".music>audio")
var coin = document.querySelector(".coin")
musicBox.addEventListener("click",function(){
    if(music.paused){
        music.play()
        coin.src = "./test/image/coin2.png"
    }else{
        music.pause()
        coin.src = "./test/image/coin1.png"
    }
    console.dir(music.paused)
})

const box = document.getElementById('rainBox');
let boxHeight = box.clientHeight;
let boxWidth = box.clientWidth;
//页面大小发生变化时，改变盒子大小
window.onresize = function () {
    boxHeight = box.clientHeight;
    boxWidth = box.clientWidth;
}
//每隔一段时间，添加雨滴
setInterval(() => {
    const rain = document.createElement('div');
    rain.classList.add('rain');
    rain.style.top = 0;
    //随机刷新雨点位置
    rain.style.left = Math.random() * boxWidth + 'px';
    //随机雨点透明度
    rain.style.opacity = Math.random();
    box.appendChild(rain);
    //每隔一段时间，雨水下落
    let race = 1;
    const timer = setInterval(() => {
        if (parseInt(rain.style.top) > boxHeight) {
            clearInterval(timer);
            box.removeChild(rain);
        }
        race++;
        rain.style.top = parseInt(rain.style.top) + race + 'px'
    }, 20)
}, 50)