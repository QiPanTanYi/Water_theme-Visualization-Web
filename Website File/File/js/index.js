//各省用水总量柱状图
var zhongliang=echarts.init(document.getElementById("table-bar"));
var option={
  // backgroundColor: 'rgba(0, 0, 0, 0.6)',
    title:{
        left:'center',
        top:'10px',
        text:'2021年各省用水总量  (单位：亿平方米)',
        textStyle:{
            color:'rgb(140, 208, 224)',
            fontStyle:'normal',
            fontSize:18,
            fontWeight:'bolder',
            fontFamily:"san-serif"
        }
    },
tooltip: {
    trigger: 'axis',
    axisPointer: {
    type: 'shadow'
    }
},
grid: { 
    left: '3%',
    top: '5%',
    right: '3%',
    bottom: '3%',
    containLabel: true
},
xAxis: {
    type: 'value',
    axisLabel: {
        show: false // 不显示x轴标签
    },
    axisLine: {
        // x轴线的颜色以及宽度
        show: true,
        lineStyle: {color: 'rgba(255,255,255,0.1)'}
        },
    axisTick: {
        show: false // x轴刻度线F
    },
    splitLine: { // x轴网格线
        show: true,
            lineStyle: {color: 'rgba(255,255,255,0.1)'}
        }
    },
yAxis: {
        type: 'category',
        title:{
            text:'亿平方米',
            show:true
        },
        axisTick: { show: false }, // y轴刻度线
        axisLabel: { color: 'black' }, // y轴文字的配置
        axisLine: {
            //x轴线的颜色
            show: true,
            lineStyle: {color: 'rgba(255,255,255,0.1)'}
        },
        data: [ 
         '青海','天津','西藏','北京', '海南','宁夏','澳门','重庆','山西','香港','陕西', '台湾','贵州','上海','甘肃','吉林',
         '辽宁','云南','浙江','河北','福建','内蒙古','山东','河南', '四川','江西', '广西','安徽','湖南','黑龙江','湖北','广东',
         '江苏','新疆', 
        ]
    },
    series: [
        {
        name: '用水总量',
        type: 'bar',
        stack: '总量',
        label: {
            normal: {
                show: true,
                // position: 'inside', //显示在柱子内部
                position:'right',
                textStyle: { color: 'gold',
                             },
                formatter: '{c}' //单位
            }
        },
        itemStyle: {
            color: {
                colorStops:[ //柱子的渐变色
                {
                    offset: 0,
                    // color: 'rgba(5, 80, 57, 1)' // 0% 处的颜色
                    color:'blue',
                },
                {
                    offset: 1,
                    color: 'rgb(140, 208, 224)' // 100% 处的颜色
                }
                ],
            global: false
            }
        },
        barWidth: 20, //柱子的宽度
        data: [
    24.5,32.3,32.4,40.8,45.0,68.1,68.4,72.1,72.6,87.5,91.8,102.3,104.1,105.8,110.1,110.2,129.0,160.3,166.4,
    181.9,182.6,191.7,210.1,222.9,224.3,249.4,268.5,271.7,322.4,324.5,336.1,407.0,567.5,573.9,

]
      },

]
};
zhongliang.setOption(option);
window.addEventListener("resize", () => {
    zhongliang.resize();
  });


//全国淡水资源折线图
var zhexian=echarts.init(document.getElementById("table-line"));
var optionline={
    title:[{
        left:'center',
        text:'2017-2021年全国淡水资源总量(单位：亿平方米)',
        top:'10px',
        textStyle:{
            color:'#6a7985',
            fontSize:16,
        }
    }],

    tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
    //   toolbox: {
    //     feature: {
    //       saveAsImage: {}
    //     }
    //   },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['2017', '2018', '2019', '2020', '2021']
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '淡水资源',
          type: 'line',
          stack: 'Total',
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: [28761.2, 27462.5, 29041, 31605.2, 29638.2]
        },]
}
zhexian.setOption(optionline),
window.addEventListener("resize", () => {
    zhexian.resize();
  });

//水污染饼图
var mainEl = document.getElementById('table-pie');
var chart = echarts.init(mainEl);
var colorList = [
    '#c23531', '#2f4554', '#61a0a8',
    '#d48265', '#91c7ae','#749f83',
    '#ca8622', '#bda29a','#6e7074',
    '#546570', '#c4ccd3'
];

var data = [
    {value: 19848, name: '铅'},
    {value: 683, name: '汞'},
    {value: 3292, name: '镉'},
    {value: 3986, name: '六价铬'},
    {value: 17810, name: '铬'},
    {value: 9401, name: '砷'},

];
var legendData = [];

echarts.util.each(data, function (item, index) {
    item.itemStyle = {
        normal: {color: colorList[index]}
    };
    legendData.push(item.name);
});

chart.setOption({
    title:{
        text:'2021年重金属水污染主要占比',
        left:'center',
        top:'6px',
        // link:'./test02.html',
        textStyle:{
            fontSize:18
        }
    },
    legend: {
        data: legendData,
        x:'left',
        y:'bottom',
        formatter: function (name) {
            return name.replace(/\n/g, ' + ');
        }
    },

    // toolbox: {
    //     left: 'left',
    //     feature: {
    //         dataView: {},
    //         saveAsImage: {}
    //     }
    // },
    tooltip: {},
    series: [{
        name: '水污染类型',
        type: 'pie',
        selectedMode: 'single',
        selectedOffset: 30,
        clockwise: true,
        label: {
            normal: {
                textStyle: {
                    fontSize: 18,
                    color: '#333'
                }
            }
        },
        labelLine: {
            normal: {
                lineStyle: {
                    color: '#333'
                }
            }
        },
        data: data
    }]
});

var dragging;
var draggingDataIndex;
var dx;
var dy;
var zr = chart.getZr();

chart.on('mousedown', function (params) {
  $('#main').css('display','none')
  $('#three-main').css('display','block')
  $('#three-btn').css('display','block')
    draggingDataIndex = getHoveredDataIndex(params);
    if (draggingDataIndex != null) {

        var srcSector = params.event.target;
        dragging = new echarts.graphic.Sector({
            shape: echarts.util.extend({}, srcSector.shape),
            style: {
                fill: srcSector.style.fill,
                opacity: 0.5
            },
            silent: true,
            z: 10000
        });

        dx = params.event.offsetX - srcSector.shape.cx;
        dy = params.event.offsetY - srcSector.shape.cy;

        zr.add(dragging);
    }
});

chart.on('mouseup', function (params) {
    if (dragging) {
        var targetDataIndex = getHoveredDataIndex(params);
        if (targetDataIndex != null
            && targetDataIndex !== draggingDataIndex
        ) {
            data[targetDataIndex].value += data[draggingDataIndex].value;
            data[targetDataIndex].name += '\n' + data[draggingDataIndex].name;
            legendData[targetDataIndex] = data[targetDataIndex].name;
            data.splice(draggingDataIndex, 1);
            legendData.splice(draggingDataIndex, 1);
            chart.setOption({
                legend: {data: legendData},
                series: {data: data}
            });
        }
    }
});

mainEl.addEventListener('mousemove', function (e) {
    var box = mainEl.getBoundingClientRect();
    var zrX = e.clientX - box.left;
    var zrY = e.clientY - box.top;

    if (dragging) {
        dragging.setShape({
            cx: zrX - dx,
            cy: zrY - dy
        });
    }
});

document.addEventListener('mouseup', function (e) {
    if (dragging) {
        zr.remove(dragging);
        dragging = null;
    }
});

function getHoveredDataIndex(params) {
    return params.componentType === 'series'
        && params.componentSubType === 'pie'
        && params.dataIndex;
}


//根据不同的省份获取表格数据
//创建两个数组来获取name和data
Numname=[]
Numdata=[]
function paramsname(name){
Numname.push(name)
//获取json值
var getJson=function(url){
  var xhttp = new XMLHttpRequest();
xhttp.open("get",url,true);
xhttp.send()
xhttp.onreadystatechange=function(){
            //判断xhttp.readyStatewei4，请求完成，并且statuswie200，页面存在
            if(xhttp.readyState==4 & xhttp.status==200){
                var data=JSON.parse(xhttp.responseText);
                dixiadata(data,Numname[Numname.length-1])
                }
            }
        }
var Dixia=getJson("http://175.178.223.138:555/json/two.json")


function dixiadata(data,name){
  Numdata.push(data)

//多个柱状图
var charts4=echarts.init(document.getElementById('bar2'))

var option={
  title:{
    text:'2021年到2013年'+name+'水资源情况 (单位/亿立方米))',
    left:'center',
  },
    backgroundColor:'',
        color:["#FF2160","#E8E637","#30B1FB"],
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '2%',
          right: '4%',
          bottom: '14%',
          top:'16%',
          containLabel: true
        },
         legend: {
        data: ['地下水资源量', '地表水资源量','地表水与地下水资源重复量'],
        right: 10,
        top:12,
        textStyle: {
            color: "black"
        },
        itemWidth: 12,
        itemHeight: 10,
        // itemGap: 35
    },
        xAxis: {
          type: 'category',
          data: ['2021年','2020年','2019年','2018年','2017年','2016年','2015年','2014年','2013年'],
          axisLine: {
            lineStyle: {
              color: 'black'
 
            }
          },
          axisLabel: {
            // interval: 0,
            // rotate: 40,
            textStyle: {
              fontFamily: 'Microsoft YaHei'
            }
          },
        },
 
        yAxis: {
          type: 'value',
          max:'1200',
          axisLine: {
            show: false,
            lineStyle: {
              color: 'white'
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: 'rgba(255,255,255,0.3)'
            }
          },
          axisLabel: {}
        },
        // dataZoom: [
        //   {
        //     show: true,
        //     realtime: true,
        //     start: 50,
        //     end: 100,
        //     textStyle: {
        //       color: '#fff'
        //     }
        //   },
        //   {
        //     type: 'inside',
        //     realtime: true,
        //     start: 50,
        //     end: 100,
        //     textStyle: {
        //       color: '#fff'
        //     }
        //   }
        // ],
        series: [{
          name: '地下水资源量',
          type: 'bar',
          barWidth: '10%',
          itemStyle: {
         
            barBorderRadius: 3,
          },
          data:Numdata[0][0][name]
        },
        {
          name: '地表水资源量',
          type: 'bar',
          barWidth: '10%',
          itemStyle: {
          
            barBorderRadius: 3,
         
          },
          data:Numdata[0][1][name]
        },
        {
          name: '地表水与地下水资源重复量',
          type: 'bar',
          barWidth: '10%',
          itemStyle: {
         
            barBorderRadius: 3,
         
          },
          data:Numdata[0][2][name]
        },

        ]
}
charts4.setOption(option)

//降雨折线图
var charts5=echarts.init(document.getElementById('line-jiangyu'))
var showTime = ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'];
var showOption = {
  title:{
    text:name+'2021年每月降雨图 (单位/mm)',
    left:'center',
    textStyle:{
      color:'rgb(134, 193, 225)',
      fontSize:16
    }
  },
  tooltip: {
trigger: 'axis',
axisPointer: {
type: 'cross',
label: {
backgroundColor: '#6a7985'
}
}
},      grid: {
left: '3%',
right: '4%',
bottom: '3%',
containLabel: true
},
  xAxis: {
        type: 'category',
        data: showTime,
        axixLine:{
              show:true,
              lineStyle:{
                  color:"#fff"
              }
          },
          axisLabel:{
              show:true,
              textStyle:{
                  color:"black",
                  fontSize:16
              }
          },
      },
      yAxis: {
        type: 'value',
        axixLine:{
              show:true,
              lineStyle:{
                  color:"red",
                  wdith:5,
                  type:"solid"
              }
          },
          axisLabel:{
              show:true,
              textStyle:{
                  color:"black",
                  fontSize:16
              }
          },
      },
      series: [
        {
          data: Numdata[0][3][name],
          type: 'line',
          symbolSize: 10,
          lineStyle: {
            color: 'rgb(134, 193, 225)',
            width: 4
          }
        }
      ]
    };
charts5.setOption(showOption);

}
}

//先行页面
