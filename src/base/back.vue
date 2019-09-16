<template>
  <div class="back">
    
  </div>
</template>

<script>
export default {
  name: 'back',
  props: {
    guide: {
      type: String,
      default: '/'
    }
  },
  methods: {
    handleClk(){
      this.$router.push(this.guide)
    }
  }
 }
</script>

<style lang="stylus" scoped>

</style>