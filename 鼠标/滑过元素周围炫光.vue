<template>
   <div class="container">
     <div class="container-item" v-for="item in 8" :key="item">
       <div class="container-item-content"></div>
     </div>
   </div>
 </template>
 ​
 <script setup>
 import { onMounted } from 'vue'
 const calBoxesPosition = e => {
   const { clientX, clientY } = e
   const items = document.querySelectorAll('.container-item')
   items.forEach(i => {
     const { x, y } = i.getBoundingClientRect()
     i.setAttribute('style', `--x: ${clientX - x}px; --y: ${clientY - y}px`)
   })
 }
 onMounted(() => {
   window.addEventListener('mousemove', calBoxesPosition)
 })
 </script>
 ​
 <style lang="scss" scoped>
 .container {
   --color-background: 23 23 23;
   --color-font: #fff;
   --color-border: #222222;
   --bg-color: #2dd4bf;
   --bg-opacity: 1;
   width: 1500px;
   padding: 20px;
   height: 800px;
   background-color: rgb(var(--color-background));
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   grid-template-rows: repeat(3, 1fr);
   grid-gap: 20px;
   .container-item {
     color: var(--color-font);
     border-radius: 12px;
     box-shadow: 0 0 1px 1px var(--color-border);
     position: relative;
     transition: background 0.5s ease-in-out;
     &::before {
       position: absolute;
       display: block;
       content: '';
       z-index: 2;
       width: calc(100% + 4px);
       height: calc(100% + 4px);
       inset: -2px;
       border-radius: 12px;
       background: radial-gradient(250px circle at var(--x) var(--y), var(--bg-color) 0, transparent 100%);
       will-change: background;
     }
     .container-item-content {
       border-radius: 12px;
       background-color: rgb(var(--color-background) / var(--bg-opacity));
       width: 100%;
       position: relative;
       z-index: 3;
       padding: 20px;
       height: 100%;
       &:hover {
         --bg-opacity: 0.9;
       }
     }
   }
 }
 </style>
