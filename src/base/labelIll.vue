<template>
  <div class="label-column">
    <van-cell :title="colName" :value="colValue" />
    <div class="content">
      <van-button plain type="info" 
      v-for="(item,index) in labelArr" 
      :data-mkey="item.p_key"
      :key="index"
      @click="handleClk(item.p_key)"
      >
        {{item.p_ill}}
      </van-button> 
    </div>  
  </div>
</template>

<script>
export default {
  name: 'label-column-ill',
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
      this.$router.push({
        name: "illtosym",
        params:{key}
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