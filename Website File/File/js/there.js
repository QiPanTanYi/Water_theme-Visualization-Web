// 点击人体按钮
$("#images2").on('click',function(){
    $("#main").css('display','none')
    $("#dvback").css('display','block')
    $("#two-main").css('display','flex')
    $('#dvrenti').css('display','none')
    $('#three-main').css('display','none')

})

//点击返回按钮
$("#dvback").on('click',function(){
    $("#main").css('display','flex')
    $("#dvback").css('display','none')
    $("#two-main").css('display','none')
    $('#dvrenti').css('display','block')
    $('#three-main').css('display','none')

})

//从水污染的图中返回
$('#three-btn').on('click',function(){
  $('#one-them').css('display','block')
  $("#main").css('display','flex')
  $("#dvback").css('display','none')
  $("#two-main").css('display','none')
  $('#dvrenti').css('display','block')
  $('#three-main').css('display','none')
  
})
//环形图占比图
//肝脏68%
var charts1=echarts.init(document.getElementById("two-pie1"))
const pieConf1 = {
title: {
text: '68%'+'\n'+'肝脏',
left: 'center',
top:'40%',
color:'red',
textStyle:{
  color:'#1890fe',
  fontSize:16
}
},
visualMap: {
show: false,
},
series: [
{
  type: 'pie',
  //环形显示饼状图，实际上显示的是50-80之间的部分
  //上限不建议设置为100，echarts自带动画效果，设置为100动画效果很丑
  radius: ['50%', '80%'],
  center: ['50%', '50%'],
  data: [   
  //itemSyle是单项的背景颜色设置。
    { value: 32, itemStyle: { color: '#f1f1f1' } },
    { value: 68, itemStyle: { color: 'rgb(212,141,49)' } },
  ],
  label: {
    //将视觉引导图关闭
    show: false,
  },
  itemStyle:{
      //设置的是每项之间的留白
    borderWidth:7,
    borderColor:'#fff'
  },
  // 初始化echarts的动画效果
  animationType: 'scale',
  animationEasing: 'elasticOut',
  animationDelay: function (idx) {
    return Math.random() * 200;
  }
}
]

}
charts1.setOption(pieConf1)

//肺  86%
var charts2=echarts.init(document.getElementById("two-pie2"))
const pieConf2 = {
title: {
text: '86%'+'\n'+'肺',
left: 'center',
top:'40%',
color:'red',
textStyle:{
  color:'#1890fe',
  fontSize:16
}
},
visualMap: {
show: false,
},
series: [
{
  type: 'pie',
  //环形显示饼状图，实际上显示的是50-80之间的部分
  //上限不建议设置为100，echarts自带动画效果，设置为100动画效果很丑
  radius: ['50%', '80%'],
  center: ['50%', '50%'],
  data: [   
  //itemSyle是单项的背景颜色设置。
    { value: 14, itemStyle: { color: '#f1f1f1' } },
    { value: 86, itemStyle: { color: 'rgb(183,183,183)' } },
  ],
  label: {
    //将视觉引导图关闭
    show: false,
  },
  itemStyle:{
      //设置的是每项之间的留白
    borderWidth:7,
    borderColor:'#fff'
  },
  // 初始化echarts的动画效果
  animationType: 'scale',
  animationEasing: 'elasticOut',
  animationDelay: function (idx) {
    return Math.random() * 200;
  }
}
]

}
charts2.setOption(pieConf2)

//肾脏   83%
var charts3=echarts.init(document.getElementById("two-pie3"))
const pieConf3 = {
title: {
text: '83%'+'\n'+'肾脏',
left: 'center',
top:'40%',
color:'red',
textStyle:{
  color:'#1890fe',
  fontSize:16
}
},
visualMap: {
show: false,
},
series: [
{
  type: 'pie',
  //环形显示饼状图，实际上显示的是50-80之间的部分
  //上限不建议设置为100，echarts自带动画效果，设置为100动画效果很丑
  radius: ['50%', '80%'],
  center: ['50%', '50%'],
  data: [   
  //itemSyle是单项的背景颜色设置。
    { value: 17, itemStyle: { color: '#f1f1f1' } },
    { value: 83, itemStyle: { color: 'rgb(155,104,77)' } },
  ],
  label: {
    //将视觉引导图关闭
    show: false,
  },
  itemStyle:{
      //设置的是每项之间的留白
    borderWidth:7,
    borderColor:'#fff'
  },
  // 初始化echarts的动画效果
  animationType: 'scale',
  animationEasing: 'elasticOut',
  animationDelay: function (idx) {
    return Math.random() * 200;
  }
}
]

}
charts3.setOption(pieConf3)

//脾脏 76%
var charts4=echarts.init(document.getElementById("two-pie4"))
const pieConf4 = {
title: {
text: '76%'+'\n'+'脾脏',
left: 'center',
top:'40%',
color:'red',
textStyle:{
  color:'#1890fe',
  fontSize:16
}
},
visualMap: {
show: false,
},
series: [
{
  type: 'pie',
  //环形显示饼状图，实际上显示的是50-80之间的部分
  //上限不建议设置为100，echarts自带动画效果，设置为100动画效果很丑
  radius: ['50%', '80%'],
  center: ['50%', '50%'],
  data: [   
  //itemSyle是单项的背景颜色设置。
    { value: 24, itemStyle: { color: '#f1f1f1' } },
    { value: 76, itemStyle: { color: 'rgb(120,90,71)' } },
  ],
  label: {
    //将视觉引导图关闭
    show: false,
  },
  itemStyle:{
      //设置的是每项之间的留白
    borderWidth:7,
    borderColor:'#fff'
  },
  // 初始化echarts的动画效果
  animationType: 'scale',
  animationEasing: 'elasticOut',
  animationDelay: function (idx) {
    return Math.random() * 200;
  }
}
]

}
charts4.setOption(pieConf4)

//肠胃 75%
var charts5=echarts.init(document.getElementById("two-pie5"))
const pieConf5 = {
title: {
text: '75%'+'\n'+'肠胃',
left: 'center',
top:'40%',
color:'red',
textStyle:{
  color:'#1890fe',
  fontSize:16
}
},
visualMap: {
show: false,
},
series: [
{
  type: 'pie',
  //环形显示饼状图，实际上显示的是50-80之间的部分
  //上限不建议设置为100，echarts自带动画效果，设置为100动画效果很丑
  radius: ['50%', '80%'],
  center: ['50%', '50%'],
  data: [   
  //itemSyle是单项的背景颜色设置。
    { value: 25, itemStyle: { color: '#f1f1f1' } },
    { value: 75, itemStyle: { color: 'rgb(255,224,151)' } },
  ],
  label: {
    //将视觉引导图关闭
    show: false,
  },
  itemStyle:{
      //设置的是每项之间的留白
    borderWidth:7,
    borderColor:'#fff'
  },
  // 初始化echarts的动画效果
  animationType: 'scale',
  animationEasing: 'elasticOut',
  animationDelay: function (idx) {
    return Math.random() * 200;
  }
}
]

}
charts5.setOption(pieConf5)


//心   79%
var charts6=echarts.init(document.getElementById("two-pie6"))
const pieConf6 = {
title: {
text: '79%'+'\n'+'心脏',
left: 'center',
top:'40%',
color:'red',
textStyle:{
  color:'#1890fe',
  fontSize:16
}
},
visualMap: {
show: false,
},
series: [
{
  type: 'pie',
  //环形显示饼状图，实际上显示的是50-80之间的部分
  //上限不建议设置为100，echarts自带动画效果，设置为100动画效果很丑
  radius: ['50%', '80%'],
  center: ['50%', '50%'],
  data: [   
  //itemSyle是单项的背景颜色设置。
    { value: 21, itemStyle: { color: '#f1f1f1' } },
    { value: 79, itemStyle: { color: 'rgb(255,147,77)' } },
  ],
  label: {
    //将视觉引导图关闭
    show: false,
  },
  itemStyle:{
      //设置的是每项之间的留白
    borderWidth:7,
    borderColor:'#fff'
  },
  // 初始化echarts的动画效果
  animationType: 'scale',
  animationEasing: 'elasticOut',
  animationDelay: function (idx) {
    return Math.random() * 200;
  }
}
]

}
charts6.setOption(pieConf6)


//人体图
var myChart=echarts.init(document.getElementById('two-renti'))
var option;
ROOT_PATH='http://175.178.223.138:555/json/svg/'
$.get(
  ROOT_PATH + 'Veins_Medical_Diagram_clip_art.svg',
  function (svg) {
    echarts.registerMap('organ_diagram', { svg: svg });
    option = {
      title:{
        text:'人体主要器官含水量(单位：/g)',
        top:"8%",
        left:'45%',
        textStyle:{
          color: 'rgb(55, 83, 108)',
          fontSize:25,
          fontWeigth:'bold',
          fontFamily: '"微软雅黑", Arial, sans-serif',
        }
      },
      tooltip: {},
      geo: {
        left: 10,
        right: '50%',
        map: 'organ_diagram',
        selectedMode: 'multiple',
        emphasis: {
          focus: 'self',
          itemStyle: {
            color: null
          },
          label: {
            position: 'bottom',
            distance: 0,
            textBorderColor: '#fff',
            textBorderWidth: 2
          }
        },
        blur: {},
        select: {
          itemStyle: {
            color: '#b50205'
          },
          label: {
            show: false,
            textBorderColor: '#fff',
            textBorderWidth: 2
          }
        }
      },
      grid: {
        left: '60%',
        top: '20%',
        bottom: '20%'
      },
      xAxis: {},
      yAxis: {
        data: [
          '心脏',
          '大肠',
          '小肠',
          '脾脏',
          '肾',
          '肺',
          '肝脏'
        ]
      },
      series: [
        {
          type: 'bar',
          emphasis: {
            focus: 'self'
          },
          data: [1015, 825, 140, 150, 1500, 1400, 225]
        }
      ]
    };
    myChart.setOption(option);
    myChart.on('mouseover', { seriesIndex: 0 }, function (event) {
      myChart.dispatchAction({
        type: 'highlight',
        geoIndex: 0,
        name: event.name
      });
    });
    myChart.on('mouseout', { seriesIndex: 0 }, function (event) {
      myChart.dispatchAction({
        type: 'downplay',
        geoIndex: 0,
        name: event.name
      });
    });
  }
);



