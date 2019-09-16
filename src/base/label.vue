<template>
  <div class="label">
    <van-cell title="单元格" value="内容" />
    <div class="content">
      <van-button plain type="info">朴钮</van-button>
      <van-button plain type="info">朴素钮</van-button>
      <van-button plain type="info">朴素钮</van-button>
      <van-button plain type="info">朴素按钮</van-button>
      <van-button plain type="info">朴素按钮</van-button>
      <van-button plain type="info">朴按钮</van-button>
      <van-button plain type="info">朴素按钮</van-button>
      <van-button plain type="info">朴素按钮</van-button>
      <van-button plain type="info">朴素按钮</van-button>
    </div>  
  </div>
</template>

<script>
export default {
  name: 'label',
  data() { 
    return {

    }
  }
 }
</script>

<style lang="stylus" scoped>
  .content
    width 100%
    background #ffffff
    box-sizing border-box
    padding 10px
    button
      margin 2px
</style>