<template>
  <div class="easy-ui-rink">
    <div class="easy-ui-title">
      <i class="e-u-icon" />
      <h2>Easy.Y 纯手工打造排行面板</h2>
      <span class="easy-ui-dot">
        <i style="--index: 200ms" />
        <i style="--index: 400ms" />
        <i style="--index: 600ms" />
        <i style="--index: 800ms" />
      </span>
      <span class="easy-ui-trapezoid"></span>
    </div>
    <div class="easy-ui-list">
      <div
        class="easy-ui-row easy-row-style1"
        v-for="(i, index) in list"
        :key="index"
      >
        <div class="easy-ui-icon">
          {{ i.ranking }}
        </div>
        <div class="easy-ui-info">
          {{ i.label }}
        </div>
        <div class="easy-ui-value">
          {{ i.value }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          ranking: "01",
          label: "数据可视化平台样式Easy.Y_01",
          value: "180,000.00",
        },
        {
          ranking: "02",
          label: "数据可视化平台样式Easy.Y_02",
          value: "157,000.00",
        },
        {
          ranking: "03",
          label: "数据可视化平台样式Easy.Y_03",
          value: "146,000.00",
        },
        {
          ranking: "04",
          label: "数据可视化平台样式Easy.Y_04",
          value: "126,000.00",
        },
        {
          ranking: "05",
          label: "数据可视化平台样式Easy.Y_05",
          value: "118,000.00",
        },
      ],
    };
  },
  methods: {},
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
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #040c17;
  background-image: linear-gradient(rgba(6, 39, 84, 0.3) 1px, transparent 1px),
    linear-gradient(90deg, rgba(6, 39, 84, 0.3) 1px, transparent 1px),
    linear-gradient(rgba(6, 39, 84, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(6, 39, 84, 0.1) 1px, transparent 1px);
  background-size: 75px 75px, 75px 75px, 15px 15px, 15px 15px;
  background-position: -1px -1px, -1px -1px, -1px -1px, -1px -1px;
}
.easy-ui-rink {
  $rowHeight: 50px;
  $fontColor: #bfe0ff;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 600px;
  border-radius: 5px;
  padding: 20px;
  border: 1px solid #002c54;
  background: rgba(0, 25, 48, 0.8);
  overflow: hidden;
  @mixin lineBox {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 1px;
  }
  &::before {
    @include lineBox;
    background: linear-gradient(
      to right,
      transparent,
      rgba(3, 141, 255, 0.6) 20%,
      transparent
    );
    top: 0px;
  }
  &::after {
    @include lineBox;
    background: linear-gradient(
      to right,
      transparent,
      rgba(3, 141, 255, 0.6) 60%,
      transparent
    );
    bottom: 0px;
  }
  // 定义关键帧动画
  @keyframes animationShiny {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
  // 标题栏区域
  .easy-ui-title {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    flex-shrink: 0;
    margin-bottom: 15px;
    .e-u-icon {
      width: 5px;
      height: 12px;
      border-radius: 2px;
      background: #007bf1;
      box-shadow: 0px 0px 4px #0a5d83;
    }
    h2 {
      color: $fontColor;
      width: 0px;
      flex-grow: 1;
      padding: 0px 10px;
      margin: 0px;
      font-size: 14px;
      filter: drop-shadow(1px 2px 2px #2c2c2c);
    }
    // 光点效果
    .easy-ui-dot {
      display: flex;
      align-items: center;
      margin-right: 5px;
      margin-top: -10px;
      perspective: 150; //
      -webkit-perspective: 150; /* Safari and Chrome */
      i {
        width: 4px;
        height: 8px;
        margin: 0px 1px;
        border: 1px solid #030304;
        border-radius: 2px;
        background: #409cff;
        transform: rotateZ(29deg);
        animation: animationShiny 1s var(--index) linear infinite;
        &:nth-child(3) {
          background: #1ce17d;
        }
      }
    }
  }
  * {
    box-sizing: border-box;
  }
  // list css
  .easy-ui-list {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: $rowHeight * 5;
    overflow-x: hidden;
    overflow-y: auto;
  }
  // row css
  .easy-ui-row {
    display: flex;
    align-items: center;
    width: 100%;
    height: $rowHeight - 20;
    flex-shrink: 0;
    cursor: pointer;
    margin: 10px 0px;
    div {
      color: $fontColor;
      flex-shrink: 0;
      font-size: 14px;
      z-index: 2;
    }
  }
  // 图标
  .easy-ui-icon {
    width: 25px;
    border-radius: 2px;
    text-align: center;
    line-height: 22px;
    margin-left: 5px;
    color: #fff !important;
    font-size: 12px !important;
    transform: skew(-20deg);
  }
  .easy-ui-info {
    width: 0px;
    flex-grow: 1;
    padding: 0px 80px 0px 20px;
    white-space: nowrap; /* 禁止换行 */
    overflow: hidden; /* 隐藏溢出内容 */
    text-overflow: ellipsis; /* 显示省略号 */
  }
  .easy-ui-value {
    padding-right: 10px;
    transition: 200ms linear;
  }
  .easy-row-style1 {
    // 图标数组
    $colors: (#f4a33a, #7f9eb6, #e26431, #1e499b);
    position: relative;
    border-radius: 5px;
    &:hover {
      &::before {
        opacity: 0.5;
      }
      .easy-ui-value {
        padding-right: 20px;
        color: #f4a33a;
      }
    }
    &::before {
      position: absolute;
      content: "";
      display: block;
      width: 100%;
      height: 30px;
      left: 15px;
      z-index: 1;
      transition: 200ms linear;
      background: linear-gradient(to right, nth($colors, 4), transparent);
      opacity: 0.2;
      border-radius: 3px;
      transform: skew(-20deg);
    }
    .easy-ui-icon {
      background: nth($colors, 4);
      transform: skew(-20deg);
    }
    &:nth-child(1) {
      &::before {
        background: linear-gradient(to right, nth($colors, 1), transparent);
      }
      .easy-ui-icon {
        background: nth($colors, 1);
      }
    }
    &:nth-child(2) {
      &::before {
        background: linear-gradient(to right, nth($colors, 2), transparent);
      }
      .easy-ui-icon {
        background: nth($colors, 2);
      }
    }
    &:nth-child(3) {
      &::before {
        background: linear-gradient(to right, nth($colors, 3), transparent);
      }
      .easy-ui-icon {
        background: nth($colors, 3);
      }
    }
  }
}
</style>
