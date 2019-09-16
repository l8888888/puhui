<template>
  <div class="start">
    <back guide="/sex">开始自诊</back>
    <div class="nav">
      <router-link to="/symptom" class="tab">从主症进入</router-link>
      <router-link to="/disease" class="tab">从病名进入</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import back from "base/back"
import Qs from 'qs'

const storage = window.sessionStorage
const url = 'https://phzzys.phmd247.com/zzys/v1/post/boyili'
export default {
  name: 'start',
  components:{
    back
  },
  data() { 
    return {

    }
  },
  methods: {
    _getRecentInfo(){
      console.log(storage.token)
      this.axios({
          url,
          method: "post",
          data: Qs.stringify({
          'ports': "SymTwelve",
          'time': storage.time,
          'name': storage.name,
          'token': storage.token,
          'raw': '{"sex":"'+this.$route.params.sex+'"}',
          })
      }).then((res) => {
          console.log(res)
      })
    }
  },
  mounted(){
    this._getRecentInfo()
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