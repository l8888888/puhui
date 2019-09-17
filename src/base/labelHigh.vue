<template>
  <div class="label-column">
    <van-cell :title="colName" :value="colValue" />
    <div class="content">
      <van-button plain type="info" 
      @click="handleClk(item.key_no)"
      v-for="(item,index) in labelArr" 
      :data-mkey="item.key_no"
      :key="index"
      >
        {{item.cvocable}}
      </van-button> 
    </div>  
  </div>
</template>

<script>
export default {
  name: 'label-column-high',
  props:{
    colName:{
      type: String,
      default:""
    },
    colValue:{
      type: String,
      default:""
    },
    labelArr:{
      type:Array,
      default:()=>[]
    }
},
  data() { 
    return {
    }
  },
  methods: {
    handleClk(key){
      this.$router.push("/"+key)
    }
  }
 }
</script>

<style lang="stylus" scoped>
  .content
    width 100%
    background #ffffff
    box-sizing border-box
    padding 10px
    button
      margin 2px
</style>