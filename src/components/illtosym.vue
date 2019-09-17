<template>
  <div class="illtosym">
    <back guide="/start">症状列表</back>
    <van-collapse v-model="activeNames">
      <van-collapse-item title="标题2" name="2">2222</van-collapse-item>
      <van-collapse-item title="标题2" name="3" disabled></van-collapse-item>
    </van-collapse>
  </div>
</template>

<script>
import back from "base/back"
import Qs from "qs"

const storage = window.sessionStorage
const url = 'https://phzzys.phmd247.com/zzys/v1/post/boyili'
export default {
  name: 'illtosym',
  components: {
    back
  },
  data() { 
    return {
      activeNames: ['1']
    }
  },
  methods: {
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
          this.onsetArr = res.data.ret
      })
    },
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
</style>