<template>
  <div class="label-column">
    <van-cell :title="colName" :value="colValue" />
    <div class="content">
      <van-button plain type="info" 
      @click="handleClk(item.conid)"
      v-for="(item,index) in labelArr" 
      :data-mkey="item.conid"
      :key="index"
      >
        {{item.cvocable}}
      </van-button> 
    </div>  
  </div>
</template>

<script>
export default {
  name: 'label-column-ill-high',
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
    },
    enterStyle:""
},
  data() { 
    return {
    }
  },
  methods: {
    handleClk(key){  
        this.$router.push({
          name: "illtosym",
          params: {
            key
          }
        })      
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