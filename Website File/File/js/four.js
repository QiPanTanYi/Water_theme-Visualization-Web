// 上边的第二个盒子
var chartswurang=echarts.init(document.getElementById("three-top2"))
// 绘制左侧面
const CubeLeft = echarts.graphic.extendShape({
shape: {
    x: 0,
    y: 0
},
buildPath: function(ctx, shape) {
    // 会canvas的应该都能看得懂，shape是从custom传入的
    const xAxisPoint = shape.xAxisPoint
    const c0 = [shape.x + 7, shape.y]
    const c1 = [shape.x - 23, shape.y - 6]
    const c2 = [xAxisPoint[0] - 23, xAxisPoint[1] - 13]
    const c3 = [xAxisPoint[0] + 7, xAxisPoint[1]]
    ctx.moveTo(c0[0], c0[1]).lineTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).closePath()
}
})
// 绘制右侧面
const CubeRight = echarts.graphic.extendShape({
shape: {
    x: 0,
    y: 0
},
buildPath: function(ctx, shape) {
    const xAxisPoint = shape.xAxisPoint
    const c1 = [shape.x + 7, shape.y]
    const c2 = [xAxisPoint[0] + 7, xAxisPoint[1]]
    const c3 = [xAxisPoint[0] + 25, xAxisPoint[1] - 15]
    const c4 = [shape.x + 25, shape.y - 15]
    ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath()
}
})
// 绘制顶面
const CubeTop = echarts.graphic.extendShape({
shape: {
    x: 0,
    y: 0
},
buildPath: function(ctx, shape) {
    const c1 = [shape.x + 7, shape.y]
    const c2 = [shape.x + 25, shape.y - 15] //右点
    const c3 = [shape.x - 5, shape.y - 20]
    const c4 = [shape.x - 23, shape.y - 6]
    ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath()
}
})
// 注册三个面图形
echarts.graphic.registerShape('CubeLeft', CubeLeft)
echarts.graphic.registerShape('CubeRight', CubeRight)
echarts.graphic.registerShape('CubeTop', CubeTop)
const VALUE = [ 1523,1035,2835]
option = {
backgroundColor: "#fff",
title: {
    text: '2021年水污染类型(单位：万吨)',
    textStyle: {
        color: '#7ebaf2',
        fontWeight: '800',
        fontSize: 12,
    },
    left: 'center',
    top: '1%'
},
tooltip: {
    trigger: 'axis',
    axisPointer: {
        type: 'shadow'
    },
    formatter: function(params, ticket, callback) {
        const item = params[1]
        return item.name + ' : ' + item.value;
    }
},
grid: {
    left: '5%',
    right: '5%',
    top: '12%',
    bottom: '5%',
    containLabel: true
},
xAxis: {
    type: 'category',
    data: ['化学污染','生物污染','物理污染'],
    axisLine: {
        show: true,
        lineStyle: {
            color: '#7ebaf2'
        }
    },
    axisTick: {
        show: false,
        length: 9,
        alignWithLabel: true,
        lineStyle: {
            color: '#7DFFFD'
        }
    },
    axisLabel: {
        fontSize: 12
    }
},
yAxis: {
    type: 'value',
    min: 0,
    max:3200,
    axisLine: {
        show: true,
        lineStyle: {
            color: '#7ebaf2'
        }
    },
    splitLine: {
        show: false
    },
    splitArea: {
        show: true,
        areaStyle: {
            color: [
                "rgba(26,50,83,1)",
                "rgba(30,57,92,1)",
            ]
        }
    },
    axisTick: {
        show: false
    },
    axisLabel: {
        fontSize: 12
    },
    boundaryGap: ['20%', '20%']
},
series: [{
    type: 'custom',
    renderItem: (params, api) => {
   
        let cubeLeftStyle = ''
        let cubeRightStyle = ''
        let cubeTopStyle = ''
        if (params.dataIndex == 0) {
            cubeLeftStyle = new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(0,255,186,1)'
            }, {
                offset: 1,
                color: 'rgba(0,148,109,1)'
            }])
            cubeRightStyle = new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(0,255,186,0.3)'
            }, {
                offset: 1,
                color: 'rgba(0,148,109,0.3)'
            }])
            cubeTopStyle = new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(189,255,237,1)'
            }, {
                offset: 1,
                color: 'rgba(189,255,237,1)'
            }])
        } else if (params.dataIndex == 1) {
            cubeLeftStyle = new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(222,231,235,1)'
            }, {
                offset: 1,
                color: 'rgba(141,153,165,1)'
            }])
            cubeRightStyle = new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(222,231,235,0.3)'
            }, {
                offset: 1,
                color: 'rgba(222,231,235,0.3)'
            }])
            cubeTopStyle = new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(255,255,255,1)'
            }, {
                offset: 1,
                color: 'rgba(255,255,2555,1)'
            }])

        } else if (params.dataIndex <35) {
            cubeLeftStyle = new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(62,255,255,1)'
            }, {
                offset: 1,
                color: 'rgba(0,126,191,1)'
            }])
            cubeRightStyle = new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(23,176,255,1)'
            }, {
                offset: 1,
                color: 'rgba(0,138,255,0.3)'
            }])
            cubeTopStyle = new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(163,232,255,1)'
            }, {
                offset: 1,
                color: 'rgba(163,232,255,1)'
            }])
        } 
       //  else if (params.dataIndex ==3) {
       //      cubeLeftStyle = new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
       //          offset: 0,
       //          color: 'rgba(255,217,217,1)'
       //      }, {
       //          offset: 1,
       //          color: 'rgba(180,97,97,1)'
       //      }])
       //      cubeRightStyle = new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
       //          offset: 0,
       //          color: 'rgba(178,95,95,0.3)'
       //      }, {
       //          offset: 1,
       //          color: 'rgba(89,47,47,0.3)'
       //      }])
       //      cubeTopStyle = new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
       //          offset: 0,
       //          color: 'rgba(255,217,217,1)'
       //      }, {
       //          offset: 1,
       //          color: 'rgba(255,217,217,1)'
       //      }])
       //  }
        const location = api.coord([api.value(0), api.value(1)])
        return {
            type: 'group',
            children: [{
                    type: 'CubeLeft',
                    shape: {
                        api,
                        xValue: api.value(0),
                        yValue: api.value(1),
                        x: location[0],
                        y: location[1],
                        xAxisPoint: api.coord([api.value(0), 0])
                    },
                    style: {
                        fill: cubeLeftStyle
                    }
                }, {
                    type: 'CubeRight',
                    shape: {
                        api,
                        xValue: api.value(0),
                        yValue: api.value(1),
                        x: location[0],
                        y: location[1],
                        xAxisPoint: api.coord([api.value(0), 0])
                    },
                    style: {
                        fill: cubeRightStyle
                    }
                },
                {
                    type: 'CubeTop',
                    shape: {
                        api,
                        xValue: api.value(0),
                        yValue: api.value(1),
                        x: location[0],
                        y: location[1],
                        xAxisPoint: api.coord([api.value(0), 0])
                    },
                    style: {
                        fill: cubeTopStyle
                    }
                },


            ]
        }
    },
    data: VALUE
}, 
{
    type: 'bar',
    label: {
        normal: {
            show: true,
            position: 'top',
            fontSize: 14,
            color: '#fff',
            offset: [2, -25]
        }
    },
    itemStyle: {
        color: 'transparent'
    },
    tooltip: {

    },
    data: VALUE
}
]
}

chartswurang.setOption(option)