<template>
  <div class="start">
    <back guide="/sex">开始自诊</back>
    <div class="nav">
      <router-link to="/symptom" class="tab">从主症进入</router-link>
      <router-link to="/disease" class="tab">从病名进入</router-link>
    </div>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import back from "base/back"
import loading from 'base/loading'
import Qs from 'qs'

const storage = window.sessionStorage
export default {
  name: 'start',
  components:{
    back,
    loading
  },
  data() { 
    return {

    }
  },
  methods: {

  },
  created(){
    storage.sex = this.$route.query.sex
  }
 }
</script>

<style lang="stylus" scoped>
  .nav
    width 100%
    height 44px
    background #fff
    .tab
      width 50%
      float left
      font-size 14px
      line-height 44px
      text-align center
      color #999
      border-bottom 1px solid #eee
    .router-link-active
        border-bottom 1px solid #23d7bc
        color #23d7bc
</style>