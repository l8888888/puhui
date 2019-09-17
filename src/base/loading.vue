<template>
  <div class="loading">
    <van-loading color="#23d7bc" />
  </div>
</template>

<script>
export default {
  name: 'loading',
  data() { 
    return {

    }
  }
 }
</script>

<style lang="stylus" scoped>
.loading
  width 100%
  height 100%
  background rgba(0,0,0,0)
  position absolute
  display flex
  justify-content center
  align-items center
  top 0
  left 0
  right 0
  bottom 0
</style>