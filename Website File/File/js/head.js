var headMax = document.querySelector('#headMax')
var headBtn = document.querySelector('.bottle')
headBtn.addEventListener('click',function(){
    $('#headMax').css('display','none')
    $('#one-them').css('display','block')
    // headMax.remove()
})
    // 检查是否要修改 CSS 属性
    var modifyCSS = localStorage.getItem('modifyCSS');
    if (modifyCSS === 'true') {
        $('#one-them').css('display','block')
        $("#main").css('display','none')
        $('#headMax').css('display','none')
        $("#three-main").css("display","block")
        $("#prevent1-main").css("display",'none')

        // 清除参数
        localStorage.removeItem('modifyCSS');
    }
