<template>
  <div class="assist">
    <back>选择辅助症状</back>
    <van-collapse class="van-top " v-model="activeNamesTop">
      <div class="zyBtn" @click="goOn">继续</div>
      <van-collapse-item
        name="1"
        title="选择辅症后继续"
        disabled
      ></van-collapse-item>
    </van-collapse>
    <scroll-page>
      <van-checkbox-group v-model="result">
        <van-cell-group>
          <van-cell
            v-for="(item, index) in assistArr"
            clickable
            :key="item.id"
            :title="item.name"
            @click="toggle(index)"
          >
            <van-checkbox
              :name="item.id"
              ref="checkboxes"
              slot="right-icon"
            />
          </van-cell>
        </van-cell-group>
      </van-checkbox-group>
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
  name: 'assist',
  components: {
    back,
    scrollPage
  },
  data() { 
    return {
      assistArr: [],
      result: [],
      activeNamesTop:[-1]
    }
  },
  methods: {
    goOn(){
      this.$router.push({
        name:"probably",
        query:{
          symptoms:`[${this.$route.query.key}]`,
          onset: this.$route.query.onset,
          auxiliarys: `[${this.result.join(',')}]`
        }
      })
    },
    toggle(index) {
      this.$refs.checkboxes[index].toggle();
    },
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
  .assist >>> .van-collapse-item__title--disabled
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