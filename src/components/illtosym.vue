<template>
  <div class="illtosym">
    <back guide="/start">症状列表</back>
    <van-collapse class="van-top " v-model="activeNamesTop">
      <div class="zyBtn" @click="synWay">中医</div>
      <van-collapse-item
        name="1"
        title="item.name"
      >22</van-collapse-item>
    </van-collapse>
    <scroll-page>
      <div>
      <van-collapse v-model="activeNames">
        <van-collapse-item 
          v-for="(item,index) in illtosymArr"
          :key="item.id"
          :title="item.name"
          :name="index"
          :disabled="item.info === undefined"
        >{{item.info}}</van-collapse-item>
      </van-collapse>
      </div>
    </scroll-page>
  </div>
</template>

<script>
import back from "base/back"
import scrollPage from 'base/scrollpage'
import Qs from "qs"

const storage = window.sessionStorage
const url = 'https://phzzys.phmd247.com/zzys/v1/post/boyili'
export default {
  name: 'illtosym',
  components: {
    back,
    scrollPage
  },
  data() { 
    return {
      activeNamesTop: ['0'],
      activeNames: ['0'],
      illtosymArr:[]
    }
  },
  methods: {
    synWay(name){
      this.$router.push({
        name:'synway',
        params:{
          key:this.$route.params.key
          },  
        query:{
          name:'a'
        }
      })
    },
    _getIlltosym(){
      this.axios({
          url,
          method: "post",
          data: Qs.stringify({
          'ports': "illtosym",
          'time': storage.time,
          'name': storage.name,
          'token': storage.token,
          'raw': `{
            "disease":"${this.$route.params.key}",
          }`,
          })
      }).then((res) => {
          console.log(res)
          if(res.data.code != 200) return
          this.illtosymArr = res.data.ret
      })
    }
  },
  created(){
    this._getIlltosym()
  }
 }
</script>

<style lang="stylus" scoped>
  .illtosym >>> .van-collapse-item__title--disabled
    color #323233
    .van-cell__right-icon
      display none
  .van-top
    position relative
    z-index 99
    .zyBtn
      position absolute
      z-index 100
      background #23d7bc
      top 0.5rem
      right 12%
      width 2.875rem
      height 1.625rem
      line-height 1.625rem
      text-align center
      color #fff
      border-radius 0.25rem
</style>