// 化学污染
//点击返回按钮
$("#Chemistry-dvback").on('click', function () {
    // 设置要传递的参数
    localStorage.setItem('modifyCSS', 'true');
    var url = "./index.html";
    window.location.href = url;
})
// 生物污染
$("#biont-dvback").on('click', function () {
    // 设置要传递的参数
    localStorage.setItem('modifyCSS', 'true');
    var url = "./index.html";
    window.location.href = url;
})
// 物理污染
$("#physics-dvback").on('click', function () {
    // 设置要传递的参数
    localStorage.setItem('modifyCSS', 'true');
    var url = "./index.html";
    window.location.href = url;
})


//化学污染
// 获取元素
var front = document.querySelector(".front");
var back = document.querySelector(".back");

var front1 = document.querySelector(".front1");
var back1 = document.querySelector(".back1");

var front2 = document.querySelector(".front2");
var back2 = document.querySelector(".back2");

var front3 = document.querySelector(".front3");
var back3 = document.querySelector(".back3");

const box = document.querySelector(".box");
const content = document.querySelector(".content")
const boxRect = box.getBoundingClientRect();
document.addEventListener("mousemove", function (e) {
    const mouseX = e.clientX;    // 鼠标当前位置的 X 坐标
    const mouseY = e.clientY;    // 鼠标当前位置的 Y 坐标
    if (mouseX >= boxRect.left && mouseX <= boxRect.right && mouseY >= boxRect.top && mouseY <= boxRect.bottom) {
    } else {
        front.style.transform = "rotateY(0deg)";
        back.style.transform = "rotateY(180deg)";
        front1.style.transform = "rotateY(0deg)";
        back1.style.transform = "rotateY(180deg)";
        front2.style.transform = "rotateY(0deg)";
        back2.style.transform = "rotateY(180deg)";
        front3.style.transform = "rotateY(0deg)";
        back3.style.transform = "rotateY(180deg)";
    }
});

front.addEventListener("click", function () {
    front.style.transform = "rotateY(-180deg)";
    back.style.transform = "rotateY(0deg)";

});
front1.addEventListener("click", function () {
    front1.style.transform = "rotateY(-180deg)";
    back1.style.transform = "rotateY(0deg)";

});
front2.addEventListener("click", function () {
    front2.style.transform = "rotateY(-180deg)";
    back2.style.transform = "rotateY(0deg)";
});
front3.addEventListener("click", function () {
    front3.style.transform = "rotateY(-180deg)";
    back3.style.transform = "rotateY(0deg)";

});



