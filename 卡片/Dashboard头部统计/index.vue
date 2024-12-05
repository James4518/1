<template>
  <div class="easy-layout-page">
    <div class="easy-layout-card" v-for="(i, index) in list" :key="index">
      <div class="card-row" style="margin-bottom: 20px">
        <div class="card-icon-bar" v-html="i.icon"></div>
        <div>
          <h3>文章</h3>
          <h1>{{ i.label }}</h1>
        </div>
      </div>
      <h3>{{ i.date }}</h3>
      <countTo
        class="card-num-bar"
        :startVal="0"
        :endVal="i.value"
        :duration="800"
      ></countTo>
      <div class="card-chart-box" :id="'charts' + index"></div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts@5.5.1";
import countTo from "vue-count-to";
export default {
  data() {
    return {
      color: ["238, 183, 18", "97, 104, 143", "226, 100, 49", "230, 16, 51"],
      list: [
        {
          label: "展现数",
          icon: '<?xml version="1.0" encoding="UTF-8"?><svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6H6V17H20V6Z" fill="#ffffff" stroke="#ffffff" stroke-width="1" stroke-linejoin="round"/><path d="M42 31H28V42H42V31Z" fill="#ffffff" stroke="#ffffff" stroke-width="1" stroke-linejoin="round"/><path d="M42 6H28V23H42V6Z" fill="#ffffff" stroke="#ffffff" stroke-width="1" stroke-linejoin="round"/><path d="M20 25H6V42H20V25Z" fill="#ffffff" stroke="#ffffff" stroke-width="1" stroke-linejoin="round"/></svg>',
          value: 126800,
          date: "2024/11/04",
          xAxisData: [
            "2023/12/01",
            "2023/12/02",
            "2023/12/03",
            "2023/12/04",
            "2023/12/05",
            "2023/12/06",
            "2023/12/07",
            "2023/12/08",
            "2023/12/09",
            "2023/12/10",
            "2023/12/11",
            "2023/12/12",
            "2023/12/13",
            "2023/12/14",
            "2023/12/15",
            "2023/12/16",
            "2023/12/17",
            "2023/12/18",
            "2023/12/19",
            "2023/12/20",
            "2023/12/21",
            "2023/12/22",
            "2023/12/23",
            "2023/12/24",
            "2023/12/25",
            "2023/12/26",
            "2023/12/27",
            "2023/12/28",
          ],
          seriesData: [
            "400",
            "600",
            "710",
            "800",
            "960",
            "1000",
            "1180",
            "1200",
            "1100",
            "1000",
            "1000",
            "1100",
            "1210",
            "1300",
            "1260",
            "1200",
            "1180",
            "1200",
            "1100",
            "1000",
            "1000",
            "1100",
            "1210",
            "1300",
            "1260",
            "1200",
            "1180",
            "1200",
            "1100",
            "1000",
          ],
        },
        {
          label: "阅读数",
          icon: '<?xml version="1.0" encoding="UTF-8"?><svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 7H16C20.4183 7 24 10.5817 24 15V42C24 38.6863 21.3137 36 18 36H5V7Z" fill="#ffffff" stroke="#ffffff" stroke-width="1" stroke-linejoin="round"/><path d="M43 7H32C27.5817 7 24 10.5817 24 15V42C24 38.6863 26.6863 36 30 36H43V7Z" fill="#ffffff" stroke="#ffffff" stroke-width="1" stroke-linejoin="round"/></svg>',
          value: 12600,
          date: "2024/11/04",
          xAxisData: [
            "2023/12/01",
            "2023/12/02",
            "2023/12/03",
            "2023/12/04",
            "2023/12/05",
            "2023/12/06",
            "2023/12/07",
            "2023/12/08",
            "2023/12/09",
            "2023/12/10",
            "2023/12/11",
            "2023/12/12",
            "2023/12/13",
            "2023/12/14",
            "2023/12/15",
            "2023/12/16",
            "2023/12/17",
            "2023/12/18",
            "2023/12/19",
            "2023/12/20",
            "2023/12/21",
            "2023/12/22",
            "2023/12/23",
            "2023/12/24",
            "2023/12/25",
            "2023/12/26",
            "2023/12/27",
            "2023/12/28",
          ],
          seriesData: [
            "1000",
            "1100",
            "1210",
            "1300",
            "1260",
            "1200",
            "1180",
            "1200",
            "1100",
            "1000",
            "1000",
            "1100",
            "1210",
            "1300",
            "1260",
            "1200",
            "1180",
            "1200",
            "1100",
            "1000",
            "1000",
            "1100",
            "1210",
            "1300",
            "1260",
            "1200",
            "1180",
            "1200",
            "1100",
            "1000",
          ],
        },
        {
          label: "点赞数",
          icon: '<?xml version="1.0" encoding="UTF-8"?><svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.18898 22.1733C4.08737 21.0047 5.00852 20 6.18146 20H10C11.1046 20 12 20.8954 12 22V41C12 42.1046 11.1046 43 10 43H7.83363C6.79622 43 5.93102 42.2068 5.84115 41.1733L4.18898 22.1733Z" fill="#ffffff" stroke="#ffffff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/><path d="M18 21.3745C18 20.5388 18.5194 19.7908 19.2753 19.4345C20.9238 18.6574 23.7329 17.0938 25 14.9805C26.6331 12.2569 26.9411 7.33595 26.9912 6.20878C26.9982 6.05099 26.9937 5.89301 27.0154 5.73656C27.2861 3.78446 31.0543 6.06492 32.5 8.47612C33.2846 9.78471 33.3852 11.504 33.3027 12.8463C33.2144 14.2825 32.7933 15.6699 32.3802 17.0483L31.5 19.9845H42.3569C43.6832 19.9845 44.6421 21.2518 44.2816 22.5281L38.9113 41.5436C38.668 42.4051 37.8818 43 36.9866 43H20C18.8954 43 18 42.1046 18 41V21.3745Z" fill="#ffffff" stroke="#ffffff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/></svg>',
          value: 1863,
          date: "2024/11/04",
          xAxisData: [
            "2023/12/01",
            "2023/12/02",
            "2023/12/03",
            "2023/12/04",
            "2023/12/05",
            "2023/12/06",
            "2023/12/07",
            "2023/12/08",
            "2023/12/09",
            "2023/12/10",
            "2023/12/11",
            "2023/12/12",
            "2023/12/13",
            "2023/12/14",
            "2023/12/15",
            "2023/12/16",
            "2023/12/17",
            "2023/12/18",
            "2023/12/19",
            "2023/12/20",
            "2023/12/21",
            "2023/12/22",
            "2023/12/23",
            "2023/12/24",
            "2023/12/25",
            "2023/12/26",
            "2023/12/27",
            "2023/12/28",
          ],
          seriesData: [
            "90",
            "100",
            "110",
            "100",
            "120",
            "120",
            "110",
            "100",
            "100",
            "100",
            "100",
            "110",
            "120",
            "100",
            "120",
            "120",
            "110",
            "120",
            "110",
            "100",
            "100",
            "110",
            "121",
            "130",
            "160",
            "100",
            "110",
            "120",
            "110",
            "100",
          ],
        },
        {
          label: "评论数",
          icon: '<?xml version="1.0" encoding="UTF-8"?><svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M44.0001 24C44.0001 35.0457 35.0458 44 24.0001 44C18.0266 44 4.00006 44 4.00006 44C4.00006 44 4.00006 29.0722 4.00006 24C4.00006 12.9543 12.9544 4 24.0001 4C35.0458 4 44.0001 12.9543 44.0001 24Z" fill="#ffffff" stroke="#ffffff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 18L32 18" stroke="#FFF" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 26H32" stroke="#FFF" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 34H24" stroke="#FFF" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/></svg>',
          value: 1027,
          date: "2024/11/04",
          xAxisData: [
            "2023/12/01",
            "2023/12/02",
            "2023/12/03",
            "2023/12/04",
            "2023/12/05",
            "2023/12/06",
            "2023/12/07",
            "2023/12/08",
            "2023/12/09",
            "2023/12/10",
            "2023/12/11",
            "2023/12/12",
            "2023/12/13",
            "2023/12/14",
            "2023/12/15",
            "2023/12/16",
            "2023/12/17",
            "2023/12/18",
            "2023/12/19",
            "2023/12/20",
            "2023/12/21",
            "2023/12/22",
            "2023/12/23",
            "2023/12/24",
            "2023/12/25",
            "2023/12/26",
            "2023/12/27",
            "2023/12/28",
          ],
          seriesData: [
            "30",
            "40",
            "60",
            "70",
            "100",
            "100",
            "120",
            "120",
            "110",
            "100",
            "100",
            "110",
            "121",
            "130",
            "160",
            "120",
            "110",
            "100",
            "110",
            "100",
            "100",
            "100",
            "110",
            "100",
            "160",
            "120",
            "110",
            "120",
            "110",
            "100",
          ],
        },
      ],
    };
  },
  components: {
    countTo,
  },
  mounted() {
    this.query();
  },
  methods: {
    query() {
      this.$nextTick(() => {
        for (let i = 0; i < this.list.length; i++) {
          this.doCharts(this.list[i], "charts" + i, i);
        }
      });
    },
    // 柱状图渲染方法
    doCharts(chartData, chartRef, index) {
      // 初始化echarts实例
      let myCharts = echarts.init(document.getElementById(chartRef));
      // 清除echarts实例
      myCharts.clear();
      if (chartData) {
        // 绘制图表echarts
        myCharts.setOption({
          // ----- 配置项option start ---------
          color: ["rgb(" + this.color[index] + ")"],
          tooltip: {
            trigger: "axis",
            confine: true, // 放置tips框超出
            axisPointer: {
              type: "shadow",
              shadowStyle: {
                color: "rgba(" + this.color[index] + ", 0.1)",
              },
            },
          },
          grid: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            containLabel: true,
          },
          xAxis: {
            data: chartData.xAxisData,
            boundaryGap: false, //两边留白
            axisTick: {
              show: false, //隐藏x轴刻度
            },
            axisLabel: {
              show: false,
            },
            axisLine: {
              //y轴坐标轴，false为隐藏，true为显示
              show: false,
            },
          },
          yAxis: {
            splitNumber: 2, //y轴分隔段数量
            axisLabel: {
              show: false,
            },
            axisLine: {
              //y轴坐标轴，false为隐藏，true为显示
              show: false,
            },
            splitLine: {
              show: false,
            },
          },
          series: [
            {
              type: "line",
              showSymbol: false,
              smooth: true,
              data: chartData.seriesData,
              lineStyle: {
                color: "rgb(" + this.color[index] + ")", // 设置线条颜色为红色
                width: 1,
                shadowColor: "rgba(" + this.color[index] + ", 0.1)",
                shadowBlur: 9,
                shadowOffsetY: 10,
              },
              areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "rgba(" + this.color[index] + ", 0.1)" }, // 渐变色的起始颜色
                  { offset: 0.9, color: "rgba(" + this.color[index] + ", 0)" }, // 渐变线的结束颜色
                ]),
              },
            },
          ],
        });
      } else {
        myCharts.setOption({
          title: {
            text: "暂无数据",
            x: "center",
            y: "center",
            textStyle: {
              color: "#909399",
              fontSize: 14,
              fontWeight: "normal",
              fontFamily: "Microsoft YaHei",
            },
          },
        });
      }
      // echarts自适应
      window.addEventListener("resize", function () {
        myCharts.resize();
      });
    },
  },
};
</script>

<style lang="scss">
html,
body {
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 100%;
}
body {
  background: #252837;
}

.easy-layout-page {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  * {
    box-sizing: border-box;
    flex-shrink: 0;
  }
  // 颜色数组
  $cardColors: (#eeb712, #61688f, #e26431, #e61033);

  .easy-layout-card {
    display: flex;
    flex-direction: column;
    width: 160px;
    height: 200px;
    flex-shrink: 0;
    padding: 12px;
    margin: 0px 5px;
    border-radius: 5px;
    background: #303346;
    border: 1px solid #3c4056;
    transition: 200ms linear;
    &:hover {
      border: 1px solid #707699;
    }
    &:nth-child(1) {
      .card-icon-bar {
        background: nth($cardColors, 1);
        box-shadow: 0px 3px 8px rgba(nth($cardColors, 1), 0.4);
      }
    }
    &:nth-child(2) {
      .card-icon-bar {
        background: nth($cardColors, 2);
        box-shadow: 0px 3px 8px rgba(nth($cardColors, 2), 0.4);
      }
    }
    &:nth-child(3) {
      .card-icon-bar {
        background: nth($cardColors, 3);
        box-shadow: 0px 3px 8px rgba(nth($cardColors, 3), 0.4);
      }
    }
    &:nth-child(4) {
      .card-icon-bar {
        background: nth($cardColors, 4);
        box-shadow: 0px 3px 8px rgba(nth($cardColors, 4), 0.4);
      }
    }
    .card-icon-bar {
      display: flex;
      width: 38px;
      height: 38px;
      margin-right: 12px;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      background: #5e6586;
      svg {
        width: 20px;
        height: 20px;
      }
    }

    .card-row {
      width: 100%;
      display: flex;
      align-items: center;
    }
    h1 {
      font-size: 14px;
      margin: 4px 0px 0px 0px;
      font-weight: normal;
      color: #f4f7fa;
    }
    h3 {
      color: #858897;
      line-height: 1;
      font-size: 12px;
      font-weight: normal;
      margin: 0px;
    }
    .card-num-bar {
      font-size: 16px;
      line-height: 2;
      font-weight: bold;
      color: #fff;
    }
    .card-chart-box {
      height: 0px;
      flex-grow: 1;
      width: 100%;
    }
  }
}
</style>
