<template>
  <div class="scroll-page">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'scroll-page',
  data() { 
    return {

    }
  },
  methods:{
    
  },
  mounted(){
    this.$nextTick(() => {
      this.scroll = new BScroll('.scroll-page',{
        click: true,
        observeDOM: true
      })
      console.log(this.scroll)
    })
  }
 }
</script>

<style lang="stylus" scoped>
.scroll-page
  height 25rem
</style>