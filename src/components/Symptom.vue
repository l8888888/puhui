<template>
  <div class="symptom">
    <search></search>
    <label-column class="label-column"></label-column>
  </div>
</template>

<script>
import Search from 'base/search'
import labelColumn from 'base/label'

export default {
  name: 'symptom',
  components: {
    Search,
    labelColumn
  },
  data() { 
    return {
      activeName: 'a'
    }
  },
  methods: {
  }
 }
</script>

<style lang="stylus" scoped>
  .label-column
    margin-top 20px
</style>