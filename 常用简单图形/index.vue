<template>
  <div class="easy-y-page">
    <div class="shape-card" v-for="(i, index) in list" :key="index">
      <span :class="i.className"></span>
      <p>{{ i.label }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          label: "三角形向上形状",
          className: "shape-triangle-up",
        },
        {
          label: "三角形向下形状",
          className: "shape-triangle-down",
        },
        {
          label: "三角形左侧形状",
          className: "shape-triangle-left",
        },
        {
          label: "三角形右侧形状",
          className: "shape-triangle-right",
        },
        {
          label: "三角形左上角形状",
          className: "shape-triangle-topleft",
        },
        {
          label: "三角形右上角形状",
          className: "shape-triangle-topright",
        },
        {
          label: "三角形左下角形状",
          className: "shape-triangle-bottomleft",
        },
        {
          label: "三角形右下角形状",
          className: "shape-triangle-bottomright",
        },
        {
          label: "梯形形状",
          className: "shape-trapezoid",
        },
        {
          label: "平行四边形形状",
          className: "shape-parallelogram",
        },
        {
          label: "聊天框形状",
          className: "shape-talkbubble",
        },
        {
          label: "旗帜形状",
          className: "shape-flag",
        },
        {
          label: "圆锥形状",
          className: "shape-cone",
        },
        {
          label: "圆弧角标",
          className: "shape-curved-corner-topright",
        },
        {
          label: "立体球形",
          className: "shape-ball",
        },
        {
          label: "标签",
          className: "shape-label",
        },
      ],
    };
  },
  created() {},
  methods: {},
};
</script>

<style lang="scss">
/* 去掉码上掘金预览可默认内边距样式干扰 */
html,
body {
  width: 100%;
  height: 100%;
  padding: 0px !important;
  margin: 0px !important;
}
.easy-y-page {
  width: 100%;
  height: 100%;
  background: rgba(235, 236, 239, 1);
  padding: 10px;
  box-sizing: border-box;
  overflow: auto;
}

.shape-card {
  display: inline-block;
  width: 110px;
  height: 110px;
  margin: 10px;
  border-radius: 30px;
  background: #ebecef;
  box-shadow: 6px 6px 21px #cacbce, -6px -6px 21px #ffffff;
  cursor: pointer;
  overflow: hidden;
  padding-top: 24px;
  box-sizing: border-box;
  p {
    font-size: 12px;
    margin: 0px;
    padding: 10px 20px 0px 20px;
    transition: 200ms linear;
    text-align: center;
    color: #878787;
  }
  span {
    display: block;
    margin: auto;
  }
  &:hover {
    box-shadow: inset 6px 6px 21px #cacbce, inset -6px -6px 21px #ffffff;
    span {
      filter: drop-shadow(2px 2px 8px rgba(0, 0, 0, 0.6));
    }
    p {
      color: #404040;
      font-weight: bolder;
    }
  }
}

// 图形-三角形向上形状
.shape-triangle-up {
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 30px solid #404040;
}
// 图形-三角形向下形状
.shape-triangle-down {
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-top: 30px solid #404040;
}
// 图形-三角形左侧形状
.shape-triangle-left {
  width: 0;
  height: 0;
  border-top: 15px solid transparent;
  border-right: 30px solid #404040;
  border-bottom: 15px solid transparent;
}
// 图形-三角形右侧形状
.shape-triangle-right {
  width: 0;
  height: 0;
  border-top: 15px solid transparent;
  border-left: 30px solid #404040;
  border-bottom: 15px solid transparent;
}
// 图形-三角形左上角形状
.shape-triangle-topleft {
  width: 0;
  height: 0;
  border-top: 30px solid #404040;
  border-right: 30px solid transparent;
}
// 图形-三角形右上角形状
.shape-triangle-topright {
  width: 0;
  height: 0;
  border-top: 30px solid #404040;
  border-left: 30px solid transparent;
}
// 图形-三角形左下角形状
.shape-triangle-bottomleft {
  width: 0;
  height: 0;
  border-bottom: 30px solid #404040;
  border-right: 30px solid transparent;
}
// 图形-三角形右下角形状
.shape-triangle-bottomright {
  width: 0;
  height: 0;
  border-bottom: 30px solid #404040;
  border-left: 30px solid transparent;
}
// 图形-梯形形状
.shape-trapezoid {
  border-bottom: 30px solid #404040;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  height: 0;
  width: 30px;
}
// 图形-平行四边形形状
.shape-parallelogram {
  width: 40px;
  height: 30px;
  transform: skew(20deg);
  background: #404040;
}
// 图形-聊天框形状
.shape-talkbubble {
  width: 40px;
  height: 30px;
  background: #404040;
  position: relative;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
}
.shape-talkbubble:before {
  content: "";
  position: absolute;
  right: 100%;
  top: 10px;
  width: 0;
  height: 0;
  border-top: 6px solid transparent;
  border-right: 10px solid #404040;
  border-bottom: 6px solid transparent;
}
// 图形-旗帜形状
.shape-flag {
  width: 40px;
  height: 30px;
  box-sizing: content-box;
  padding-top: 10px;
  position: relative;
  background: #404040;
  text-align: center;
  text-transform: uppercase;
}
.shape-flag:after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 0;
  border-bottom: 10px solid #ebecef;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
}
// 图形-圆锥形状
.shape-cone {
  width: 0;
  height: 0;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  border-top: 40px solid #404040;
  border-radius: 50%;
}
// 图形-圆弧角标形状
.shape-curved-corner-topright {
  width: 40px;
  height: 40px;
  overflow: hidden;
  position: relative;
}
.shape-curved-corner-topright:before {
  content: "";
  display: block;
  width: 200%;
  height: 200%;
  position: absolute;
  border-radius: 50%;
}
.shape-curved-corner-topright:before {
  top: 0;
  right: 0;
  box-shadow: 20px -20px 0 0 #404040;
}
// 图形-立体球形
.shape-ball {
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background: #404040;
  background: radial-gradient(circle at 25% 35%, #fff, #404040, #071529);
}
// 图形-标签形状
.shape-label {
  width: 60px;
  height: 40px;
  background: #404040;
  --mask: radial-gradient(8px at 8px 8px, #0000 98%, #000) -8px -8px;
  -webkit-mask: var(--mask);
  mask: var(--mask);
}
</style>
