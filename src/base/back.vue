<template>
  <div class="back">
    <div class="arrow" @click="handleClk">
      <van-icon name="arrow-left" />
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'back',
  props: {
    guide: {
      type: String,
      default: '/'
    }
  },
  methods: {
    handleClk(){
      if(this.guide){
        this.$router.push(this.guide)
      }else{
        this.$router.back(-1)
      }
    }
  }
 }
</script>

<style lang="stylus" scoped>
.back
  z-index 100
  height 44px
  line-height 44px
  width 100%
  position relative
  background #23d7bc
  text-align center
  color #fff
  font-size 16px
  .arrow
    cursor pointer
    line-height 50px
    position absolute 
    left 8px
    font-size 24px
</style>