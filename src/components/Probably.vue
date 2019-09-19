<template>
  <div class="probably">
    <back>疑似疾病</back>
    <van-collapse class="van-top " v-model="activeNamesTop">
      <div class="zyBtn" @click="report">自诊报告</div>
      <van-collapse-item
        name="1"
        title="选择疾病后继续"
        disabled
      ></van-collapse-item>
    </van-collapse>
    <scroll-page>
      <div>
        <van-radio-group v-model="radio">
          <van-cell-group>
            <van-cell 
              v-for="(item,index) in probablyArr"
              :title="item.name"
              clickable 
              @click="radio = index"
              :key="index"
            >
              <div class="payBtn">
                <div @click.stop="symptom">症状</div>
                <div @click.stop="detail">详解</div>
              </div>
              <van-radio slot="right-icon" :name="index" />
            </van-cell>
          </van-cell-group>
        </van-radio-group>
        <div class="pageBtn">
          <van-button @click="collect" type="info">收藏结果</van-button>
          <van-button @click="home" type="info">返回首页</van-button>
        </div>
      </div>
    </scroll-page>
    <div class="tips">
      <p>自诊结果仅供参考，详情请咨询医生</p>
      <p>若病情反复或加重，请及时就医！<span @click="statement">免责声明</span></p>      
    </div>
    <!-- 弹窗 -->
    <van-dialog
      v-model="show"
 
      show-cancel-button
    >
      <h2>请选择相应套餐支付</h2>
      <van-cell-group>
        <van-cell title="单次套餐"  label="仅能查看本次完整自诊详情" >
          <van-button plain type="primary">6元</van-button>
        </van-cell>
      </van-cell-group>
    </van-dialog>
  </div>
</template>

<script>
import scrollPage from 'base/scrollpage'
import back from "base/back"
import Qs from 'qs'

const storage = window.sessionStorage
const url = 'https://phzzys.phmd247.com/zzys/v1/post/boyili'
export default {
  name: 'probably',
  components: {
    back,
    scrollPage
  },
  data() { 
    return {
      probablyArr: '1',
      onsetArr:[],
      radio:[],
      activeNamesTop:[],
      show:true
    }
  },
  methods: {
    home(){
      this.$router.push("/")
    },
    statement(){
      Dialog({ message: '提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示提示' });
    },
    symptom(){
     
    },
    detail(){
      console.log('detail')
    },
    report(){
      console.log('report')
    },
    collect(){
      console.log('collect')
    },
    handleRadio(index,onset){
      // this.radio = index
      // this.$router.push({
      //   name:"assist",
      //   query:{
      //     key: this.$route.params.key,
      //     onset
      //   }
      // })
    },
    _getProbably(){
      this.axios({
          url,
          method: "post",
          data: Qs.stringify({
          'ports': "diseases",
          'time': storage.time,
          'name': storage.name,
          'token': storage.token,
          'raw': `{
            "sex": "${storage.sex}",
            "symptoms": "${this.$route.query.symptoms}",
            "onset": "${this.$route.query.onset}",
            "auxiliarys": "${this.$route.query.auxiliarys}"
          }`,
          })
      }).then((res) => {
          console.log(res)
          if(res.data.code != 200) return
          this.probablyArr = res.data.ret
      })
    },
  },
  created(){
    this._getProbably()
    console.log(this.$route.query)
  }
 }
</script>

<style lang="stylus" scoped>

.probably >>> .van-collapse-item__title--disabled
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
    height 26px
    line-height 1.625rem
    text-align center
    color #fff
    border-radius 0.25rem
    padding 0 0.625rem
.info 
  width 48px
  background-color #23d7bc
  color #fff
  text-align center 
  float right
  margin-right 8px
  border-radius 4px
.payBtn
  display flex
  justify-content flex-end
  color #fff
  div
    background #23d7bc
    margin-right 10px
    border-radius 4px
    padding 0 10px
.pageBtn
  display flex
  justify-content center
  margin 10px 0
  >:first-child
    margin-right 10px
.tips
  background #fff
  position fixed
  bottom 0
  left 0
  width 100%
  color #ff0000
  border-top #eee solid 1px
  padding 10px 0
  p
    text-align center
    font-size 14px
    line-height 20px
    span
      color #1989fa
      

</style>