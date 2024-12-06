<template>
  <div class="easy-layout-demo">
    <div
      class="easy-layou-card"
      v-for="(i, index) in cardArr"
      :key="index"
      :ref="'cardRef' + index"
      @mousemove="doMousemove($event, index)"
      @mouseleave="doMouseleave(index)"
      style="--floatColor: #f00"
    >
      <span class="card-icon-bar" v-html="i.icon"></span>
      <h2>{{ i.label }}</h2>
      <p>{{ i.desc }}</p>
      <div class="card-row-bar">
        <span v-for="(item, index) in i.btnArr" :key="index">{{
          item.label
        }}</span>
      </div>
      <span class="card-bg"></span>
      <i class="light-style" ref="lightRef" v-if="currentIndex == index" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cardArr: [
        {
          value: 1,
          label: "数据源管理",
          icon: '<svg t="1730786749937" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5088" width="32" height="32"><path d="M298.666667 298.666667h213.333333v85.333333H298.666667v-85.333333zM298.666667 640h213.333333v85.333333H298.666667v-85.333333z" fill="#dd2826" p-id="5089"></path><path d="M128 170.666667a42.666667 42.666667 0 0 1 42.666667-42.666667h682.666666a42.666667 42.666667 0 0 1 42.666667 42.666667v341.333333a42.666667 42.666667 0 0 1-42.666667 42.666667H170.666667a42.666667 42.666667 0 0 1-42.666667-42.666667V170.666667z m85.333333 42.666666v256h597.333334V213.333333H213.333333z" fill="#fff" p-id="5090"></path><path d="M128 512a42.666667 42.666667 0 0 1 42.666667-42.666667h682.666666a42.666667 42.666667 0 0 1 42.666667 42.666667v341.333333a42.666667 42.666667 0 0 1-42.666667 42.666667H170.666667a42.666667 42.666667 0 0 1-42.666667-42.666667V512z m85.333333 42.666667v256h597.333334V554.666667H213.333333z" fill="#fff" p-id="5091"></path><path d="M725.333333 341.333333a42.666667 42.666667 0 1 1-85.333333 0 42.666667 42.666667 0 0 1 85.333333 0zM725.333333 682.666667a42.666667 42.666667 0 1 1-85.333333 0 42.666667 42.666667 0 0 1 85.333333 0z" fill="#fff" p-id="5092"></path></svg>',
          desc: "整合并监控数据供应源头，保障数据质量与持续可用性",
          btnArr: [
            {
              label: "数据源管理",
            },
            {
              label: "数据同步",
            },
            {
              label: "探源分析",
            },
          ],
        },
        {
          value: 2,
          label: "元数据采集",
          icon: '<svg t="1730786827640" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5598" width="32" height="32"><path d="M448 448h298.666667v85.333333H448v-85.333333z" fill="#dd2826" p-id="5599"></path><path d="M362.666667 533.333333h-85.333334v-85.333333h85.333334v85.333333z" fill="#fff" p-id="5600"></path><path d="M448 618.666667h298.666667v85.333333H448v-85.333333z" fill="#dd2826" p-id="5601"></path><path d="M362.666667 704h-85.333334v-85.333333h85.333334v85.333333z" fill="#fff" p-id="5602"></path><path d="M106.666667 170.666667a42.666667 42.666667 0 0 1 42.666666-42.666667h256a42.666667 42.666667 0 0 1 35.498667 18.986667L513.493333 256H874.666667a42.666667 42.666667 0 0 1 42.666666 42.666667v554.666666a42.666667 42.666667 0 0 1-42.666666 42.666667H149.333333a42.666667 42.666667 0 0 1-42.666666-42.666667V170.666667z m85.333333 42.666666v597.333334h640V341.333333H490.666667a42.666667 42.666667 0 0 1-35.498667-18.986666L382.506667 213.333333H192z" fill="#fff" p-id="5603"></path></svg>',
          desc: "收集数据描述信息，构建数据字典，提升数据理解与管理效率",
          btnArr: [
            {
              label: "元数据管理",
            },
            {
              label: "SQL血缘解析",
            },
            {
              label: "血缘采集关系",
            },
          ],
        },
        {
          value: 3,
          label: "数据接口管理",
          desc: "定义与维护数据交互通道，确保数据流通的稳定与高效",
          icon: '<svg t="1730786968403" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6456" width="32" height="32"><path d="M106.666667 405.333333a42.666667 42.666667 0 0 1 42.666666-42.666666h469.333334a42.666667 42.666667 0 0 1 42.666666 42.666666v469.333334a42.666667 42.666667 0 0 1-42.666666 42.666666H149.333333a42.666667 42.666667 0 0 1-42.666666-42.666666V405.333333z m85.333333 42.666667v384h384V448H192z" fill="#fff" p-id="6457"></path><path d="M362.666667 149.333333a42.666667 42.666667 0 0 1 42.666666-42.666666h469.333334a42.666667 42.666667 0 0 1 42.666666 42.666666v469.333334a42.666667 42.666667 0 0 1-42.666666 42.666666H618.666667a42.666667 42.666667 0 0 1-42.666667-42.666666v-170.666667h-170.666667a42.666667 42.666667 0 0 1-42.666666-42.666667V149.333333z m85.333333 42.666667v170.666667h170.666667a42.666667 42.666667 0 0 1 42.666666 42.666666v170.666667h170.666667V192H448z" fill="#fff" p-id="6458"></path><path d="M256 597.333333h256v85.333334H256v-85.333334z" fill="#dd2826" p-id="6459"></path><path d="M426.666667 512v256h-85.333334V512h85.333334z" fill="#dd2826" p-id="6460"></path></svg>',
          btnArr: [
            {
              label: "接口创建",
            },
            {
              label: "上线管理",
            },
            {
              label: "秘钥管理",
            },
          ],
        },
        {
          value: 4,
          label: "数据安全管理",
          desc: "保障数据保密性、完整性和可用性，防止未经授权的访问和泄露",
          icon: '<svg t="1730786722051" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4916" width="32" height="32"><path d="M170.666667 128a42.666667 42.666667 0 0 1 42.666666-42.666667h597.333334a42.666667 42.666667 0 0 1 42.666666 42.666667v256a42.666667 42.666667 0 0 1-42.666666 42.666667H213.333333a42.666667 42.666667 0 0 1-42.666666-42.666667V128z m85.333333 42.666667v170.666666h512V170.666667H256z" fill=" #fff" p-id="4917"></path><path d="M277.333333 512v-128h85.333334v85.333333h341.333333a42.666667 42.666667 0 0 1 42.666667 42.666667v128h-85.333334v-85.333333H320a42.666667 42.666667 0 0 1-42.666667-42.666667z" fill=" #fff" p-id="4918"></path><path d="M512 213.333333h170.666667v85.333334h-170.666667v-85.333334z" fill="#dd2826" p-id="4919"></path><path d="M170.666667 640a42.666667 42.666667 0 0 1 42.666666-42.666667h597.333334a42.666667 42.666667 0 0 1 42.666666 42.666667v256a42.666667 42.666667 0 0 1-42.666666 42.666667H213.333333a42.666667 42.666667 0 0 1-42.666666-42.666667V640z m85.333333 42.666667v170.666666h512v-170.666666H256z" fill=" #fff" p-id="4920"></path><path d="M512 725.333333h170.666667v85.333334h-170.666667v-85.333334z" fill="#dd2826" p-id="4921"></path></svg>',
          btnArr: [
            {
              label: "采集安全",
            },
            {
              label: "传输安全",
            },
            {
              label: "存储安全",
            },
          ],
        },
      ],
      currentIndex: -1,
    };
  },
  methods: {
    doMousemove(event, index) {
      this.currentIndex = index;
      this.$nextTick(() => {
        const cardRef = this.$refs[`cardRef${index}`][0];
        const lightRef = this.$refs["lightRef"][0];
        const x = event.pageX - cardRef.offsetLeft,
          y = event.pageY - cardRef.offsetTop;
        if (lightRef) {
          const size = 180;
          lightRef.style.width = `${size}px`;
          lightRef.style.height = `${size}px`;
          lightRef.style.left = `${x - size / 2}px`;
          lightRef.style.top = `${y - size / 2}px`;
        }
        if (cardRef) {
          const maxRotation = 5;
          const rangeSize = 120;
          const rotateX = ((x - rangeSize) / rangeSize) * maxRotation; // 根据鼠标在 Y 轴上的位置计算绕 X 轴的旋转角度
          const rotateY = -1 * ((y - rangeSize) / rangeSize) * maxRotation; // 根据鼠标在 X 轴上的位置计算绕 Y 轴的旋转角度
          cardRef.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`; //设置 3D 透视
        }
      });
    },
    doMouseleave(index) {
      this.currentIndex = -1;
      const cardRef = this.$refs[`cardRef${index}`][0];
      cardRef.style.transform = `perspective(800px) rotateX(0deg) rotateY(0deg)`;
    },
  },
};
</script>

<style lang="scss">
html,
body {
  margin: 0px;
  width: 100%;
  height: 100%;
  background: #edf0f2;
}
body {
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(45deg, #102952, #000810, #082138);
}
* {
  box-sizing: border-box;
  flex-shrink: 0;
}
h1,
h2,
p {
  margin: 0px;
}
.easy-layout-demo {
  $widthLayout: 650px;
  $spaceSize: 15px;
  display: flex;
  flex-wrap: wrap;
  width: $widthLayout;
  margin: auto;
  .easy-layou-card {
    position: relative;
    width: $widthLayout / 2 - $spaceSize;
    height: 180px;
    border-radius: 6px;
    padding: 25px 20px;
    margin: 0px $spaceSize $spaceSize 0px;
    background-color: #182139;
    background-image: linear-gradient(#212941 1px, transparent 1px),
      linear-gradient(to right, #212941 1px, #182139 1px);
    background-size: 20px 20px;
    border: 1px solid #182139;
    transition: 200ms linear;
    overflow: hidden;
    .light-style {
      display: block;
      position: absolute;
      border-radius: 100%;
      background: rgba(26, 84, 179, 0.6);
      filter: blur(50px);
    }
    .card-bg {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0px;
      left: 0px;
      background: linear-gradient(35deg, #292932, #182131, transparent);
    }
    @mixin cardInfo {
      position: relative;
      z-index: 4;
      transition: 300ms linear;
    }
    .card-icon-bar {
      @include cardInfo;
      display: block;
      height: 55px;
      line-height: 55px;
    }
    .card-row-bar {
      @include cardInfo;
      width: $widthLayout / 2 - 50px;
      height: 50px;
      display: flex;
      align-items: center;
      margin-top: 20px;
      overflow: hidden;
      span {
        padding: 8px 10px;
        border-radius: 5px;
        border: 1px solid #313942;
        color: #f7f7f7;
        font-size: 12px;
        cursor: pointer;
        background: linear-gradient(
          to right,
          rgba(49, 49, 66, 0.4),
          rgba(49, 49, 66, 0.1)
        );
        backdrop-filter: blur(8px);
        margin-right: 8px;
      }
    }
    h2 {
      position: relative;
      @include cardInfo;
      font-size: 16px;
      line-height: 2.3;
      color: #fff;
    }
    p {
      @include cardInfo;
      width: 80%;
      font-size: 14px;
      line-height: 1.6;
      color: #8c909c;
    }
    &:nth-child(2n) {
      margin-right: 0px;
    }
    &:hover {
      border: 1px solid #3e4969;
      .card-icon-bar {
        margin-top: -70px;
      }
    }
  }
}
</style>
