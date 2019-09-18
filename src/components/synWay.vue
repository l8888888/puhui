<template>
  <div class="synway">
    <back :guide="guide">中医证型</back>
    <van-collapse class="van-top " v-model="activeNamesTop">
      <div class="zyBtn" @click="home">首页</div>
      <van-collapse-item
        name="1"
        title="item.name"
        disabled
      ></van-collapse-item>
    </van-collapse>
    <scroll-page>
      <div>
      <van-collapse v-model="activeNames">
        <van-collapse-item 
          v-for="(item,index) in synwayArr"
          :key="item.id"
          :title="synName(index,item.name)"
          :name="index"
          :disabled="item.items === undefined"
        >
          <ul class="factor">
            <h2>证型要素</h2>
            <li v-for="(itemLi,indexLi) in factor(item.items[0].items)" :key="indexLi">
              {{itemLi}}
            </li>
          </ul>
        </van-collapse-item>
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
  name: 'synway',
  components: {
    back,
    scrollPage
  },
  data() { 
    return {
      synwayArr:[],
      activeNamesTop:[],
      activeNames:[]
    }
  },
  methods: {
    home(){
      this.$router.push('/')
    },
    _getSynWay(){
      this.axios({
          url,
          method: "post",
          data: Qs.stringify({
          'ports': "SynWay",
          'time': storage.time,
          'name': storage.name,
          'token': storage.token,
          'raw': `{
            "conid":"${this.$route.params.key}",
          }`,
          })
      }).then((res) => {
          console.log(res)
          if(res.data.code != 200) return
          this.synwayArr = res.data.ret
      })
    }
  },
  computed: {
    guide(){
      return '/illtosym/' + this.$route.params.key
    },
    synName(index,name){
      return (index,name) => {
        let num = parseInt(index)+1
        return `征型${num}：${name}`
      }
    },
    factor(){
      return (str) => {
        let arr = []
        if(str=='') return arr
        arr = str.split('/').slice(1,-1)
        return arr.map((item) => {
          return item.replace(/^\d+-(.*)-.*/,'$1')
        })
      }
    }

  },
  created(){
    this._getSynWay()
  }
 }
</script>

<style lang="stylus" scoped>
  .synway >>> .van-collapse-item__title--disabled
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
  .factor
    h2
      color #23d7bc
      font-size 14px
    li
      list-style disc
      margin-left 20px
</style>