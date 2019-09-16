<template>
  <scroller :on-refresh="refresh" :on-infinite="infinite" ref="myscroller">
      <slot></slot>
  </scroller>
</template>

<script>
import Scroller from 'vue-scroller'
export default {
  name: 'scroll',
  props: {
    prev: String,
    next: String,
    
  },
  data () {
        return {
          
        }
    },
    mounted () {
        this.$nextTick(() => {
          
        })
    },
    methods: {
      infinite(done){
        if(this.next){
          this.$router.push(this.next)  
        }else{
          return
        }
      },
      refresh() {
        if(this.prev){
          this.$router.push(this.prev)
        }else{
          return
        }
        
      }
    }
 }
</script>

<style lang="stylus" scoped>
</style>