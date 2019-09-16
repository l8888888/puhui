<template>
  <div class="upper">
    <span class="iconfont">&#xe600;</span>
  </div>
</template>

<script>
export default {
  name: 'upper',
  data() { 
    return {
      
    }
  }
 }
</script>

<style lang="stylus" scoped>
  .upper
    width 100%
    position absolute 
    z-index 100
    text-align center
    bottom 1%
    .iconfont
      color #ff0000 
      height 2.5rem
      line-height 2.5rem
      font-size 2rem
</style>