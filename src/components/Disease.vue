<template>
  <div class="disease">
    <search></search>
    <label-column-ill class="label-column" colName="近期使用" colValue="可点击选用" :labelArr="labelArr"></label-column-ill>
    <label-column-high class="label-column" colName="高频使用" colValue="可点击选用" :labelArr="labelArrHigh"></label-column-high>
  </div>
</template>

<script>
import Search from 'base/search'
import labelColumnHigh from 'base/labelHigh'
import labelColumnIll from 'base/labelIll'
import Qs from 'qs'

const storage = window.sessionStorage
const url = 'https://phzzys.phmd247.com/zzys/v1/post/boyili'
export default {
  name: 'disease',
  components: {
    Search,
    labelColumnHigh,
    labelColumnIll
  },
  data() { 
    return {
      labelArr:[],
      labelArrHigh:[],
      activeName: 'a'
    }
  },
  methods: {
    _getLabel(){
      this.axios({
          url,
          method: "post",
          data: Qs.stringify({
          'ports': "IllTwelve",
          'time': storage.time,
          'name': storage.name,
          'token': storage.token,
          'raw': '{"sex":"'+storage.sex+'"}',
          })
      }).then((res) => {
          if(res.data.code != 200) return
          this.labelArr = res.data.ret
      })
    },
    _getLabelHigh(){
      this.axios({
          url,
          method: "post",
          data: Qs.stringify({
          'ports': "IllHfWords",
          'time': storage.time,
          'name': storage.name,
          'token': storage.token,
          'raw': '{"sex":"'+storage.sex+'"}',
          })
      }).then((res) => {
          if(res.data.code != 200) return
          this.labelArrHigh = res.data.ret
      })
    }
  },
   created(){  
     this._getLabel()
     this._getLabelHigh() 
  }
 }
</script>

<style lang="stylus" scoped>
  .label-column
    margin-top 20px
</style>