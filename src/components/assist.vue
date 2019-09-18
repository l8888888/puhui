<template>
  <div class="assist">
    <back>选择辅助症状</back>
    <!-- <van-collapse class="van-top " v-model="activeNamesTop">
      <div class="zyBtn" @click="home">继续</div>
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
    </scroll-page> -->
  </div>
</template>

<script>
import back from "base/back"
import scrollPage from 'base/scrollpage'
import Qs from "qs"

const storage = window.sessionStorage
const url = 'https://phzzys.phmd247.com/zzys/v1/post/boyili'
export default {
  name: 'assist',
  components: {
    back,
    scrollPage
  },
  data() { 
    return {
      assistArr: []
    }
  },
  methods: {
     _getAssist(){
      this.axios({
          url,
          method: "post",
          data: Qs.stringify({
          'ports': "auxiliarys",
          'time': storage.time,
          'name': storage.name,
          'token': storage.token,
          'raw': `{
            "sex": "${storage.sex}",
            "symptoms": "[${this.$route.query.key}]",
            "onset": "${this.$route.query.onset}",
          }`,
          })
      }).then((res) => {
          console.log(res)
          if(res.data.code != 200) return
          this.assistArr = res.data.ret
      })
    },
  },
  created(){
      this._getAssist()
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