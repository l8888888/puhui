<template>
  <div class="onset">
    <back guide="/start">选择发病特点</back>
    <scroll-page>
      <van-radio-group v-model="radio">
        <van-cell-group v-if="onsetArr.length">
          <van-cell :title="item.name" clickable @click="handleRadio(index,item.id)"
            v-for="(item,index) in onsetArr"
            :data-idOnset="item.id"
            :key="index"
          >
            <div @click.stop="info(item)" class="info" v-if="item.info !== undefined">解释</div>
            <!-- <van-radio slot="right-icon" :name="item.id" /> -->
          </van-cell>
        </van-cell-group>
      </van-radio-group>
    </scroll-page>
  </div>
</template>

<script>
import scrollPage from 'base/scrollpage'
import back from "base/back"
import { Dialog } from 'vant'
import Qs from 'qs'

const storage = window.sessionStorage
const url = 'https://phzzys.phmd247.com/zzys/v1/post/boyili'
export default {
  name: 'onset',
  components: {
    back,
    scrollPage
  },
  data() { 
    return {
      radio: '1',
      onsetArr:[]
    }
  },
  methods:{
    handleRadio(index,onset){
      this.radio = index
      this.$router.push({
        name:"assist",
        query:{
          key: this.$route.params.key,
          onset
        }
      })
    },
    info(item){
      Dialog({ message: item.info })
    },
    _getOnset(){
      this.axios({
          url,
          method: "post",
          data: Qs.stringify({
          'ports': "onset",
          'time': storage.time,
          'name': storage.name,
          'token': storage.token,
          'raw': `{
            "sex":"${storage.sex}",
            "symptoms":"[${this.$route.params.key}]",
          }`,
          })
      }).then((res) => {
          console.log(res)
          if(res.data.code != 200) return
          this.onsetArr = res.data.ret
      })
    },
  },
  created(){
    this._getOnset()
  }
 }
</script>

<style lang="stylus" scoped>
.onset >>> .van-collapse-item__title--disabled
  color #323233
  .van-cell__right-icon
    display none
.info 
  width 48px
  background-color #23d7bc
  color #fff
  text-align center 
  float right
  margin-right 8px
  border-radius 4px
</style>