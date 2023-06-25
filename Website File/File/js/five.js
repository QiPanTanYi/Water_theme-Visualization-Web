//淡水资源详细展开画面
$("#four-dvback").on('click',function(){
    //返回第一个页面
    $("#main").css('display','flex')
    //取消掉第四个页面
    $('#four-main').css('display','none')
})

var img1 = document.getElementById('image1');
var img2 = document.getElementById('image2');
var img3 = document.getElementById('image3');
var img4 = document.getElementById('image4');
var img5 = document.getElementById('image5');
var img6 = document.getElementById('image6');
f1(img1,'./File/img4/TS-1.gif',img1.src)
f1(img2,'./File/img4/TS-5.gif',img2.src)
f1(img3,'./File/img4/TS-3.gif',img3.src)
f1(img4,'./File/img4/TS-4.gif',img4.src)
f1(img5,'./File/img4/TS-6.gif',img5.src)
f1(img6,'./File/img4/TS-2.gif',img6.src)
function f1(img,imgURL,imgURL2){
    img.addEventListener("mouseover", () => img.src = imgURL);
img.addEventListener("mouseout", () => img.src = imgURL2);
}