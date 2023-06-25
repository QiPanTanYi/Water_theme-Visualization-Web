$(document).ready(function() {
    $("#prevent1-dvback").on('click', function() {
        // 设置要传递的参数
        localStorage.setItem('modifyCSS', 'true');

        var url = "./index.html";
        window.location.href = url;
    });
});
//通过<img>标签获取所有图片对象
var imgs = document.getElementsByTagName("img");
//利用for循环，对图片绑定鼠标事件mouseover和mouseout
for (var i = 4; i < imgs.length; i++) {
	imgs[i].onmouseover = function () {
		startMov(this, { width: 200, height: 200, top: 0, left: 0 });
	}

	imgs[i].onmouseout = function () {
		startMov(this, { width: 200, height: 500, top: -66, left: -150 });
	}
	//设置图像计时器为空值
	imgs[i].timer = null;
}
//定义startMov()函数，element为图片对象，styles为动画对象的样式属性
function startMov(element, styles) {
	clearInterval(element.timer); 	//执行动画之前清除动画
	//setInterval()函数以给定的时间间隔重复执行一个函数
	element.timer = setInterval(function () {
		//for in循环语句循环遍历对象的属性，attr为属性名
		for (var attr in styles) {
			var icur = 0;
			if (attr == 'width') {
				//round()把对象四舍五入为最接近的整数
				icur = Math.round(parseFloat(getStyle(element, attr)) * 100);
			} else {
				//parseInt()函数可解析一个字符串，并返回一个整数
				icur = parseInt(getStyle(element, attr));
			}

			//设置运动速度
			var speed = 0;
			speed = (styles[attr] - icur) / 8;
			//ceil()，floor()分别为Math的上舍入和下舍入函数
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
			if (attr == 'width') {
				element.style.width = (icur + speed) / 100;
			} else {
				element.style[attr] = icur + speed + 'px';
			}
		}
	}, 30);
}
function getStyle(obj, attr) {
	if (obj.currentStyle) {
		return obj.currentStyle[attr]; 		//仅限IE兼容
	} else {
		return getComputedStyle(obj, false)[attr]; 	//兼容FF
	}
}
