<template>
  <div class="container">
    <div class="grid">
      <div class="item" v-for="item in 36"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .grid {
    display: grid;
    height: 800px;
    width: 800px;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
    transition: all 0.3s;
    flex-shrink: 0;

    @for $i from 0 to 36 {
      .item:nth-child(#{$i + 1}) {
        background: hsl(10 * $i, 100%, 75%);
        animation-name: color-spin-#{$i};
        animation-duration: 3s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;

        @keyframes color-spin-#{$i} {
          @for $j from 0 through 36 {
            #{$j * 100 / 36}% {
              background: hsl(10 * ($i + $j), 100%, 75%);
            }
          }
        }
      }

      &:has(.item:nth-child(#{$i + 1}):hover) {
        $arr: 1fr 1fr 1fr 1fr 1fr 1fr;
        $columns: set-nth($arr, $i % 6 + 1, 2fr);
        $rows: set-nth($arr, floor($i / 6) + 1, 2fr);
        grid-template-columns: $columns;
        grid-template-rows: $rows;
      }
    }
  }
}
</style>
