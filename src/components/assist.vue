<template>
  <div class="assist">
    <back :guide="guide">选择辅助症状</back>
    <van-collapse class="van-top " v-model="activeNamesTop">
      <div class="zyBtn" @click="home">继续</div>
      <van-collapse-item
        name="1"
        title="item.name"
        disabled
      ></van-collapse-item>
    </van-collapse>
    <scroll-page>
      <div>
      <van-collapse v-model="activeNames">
        <van-collapse-item 
          v-for="(item,index) in synwayArr"
          :key="item.id"
          :title="synName(index,item.name)"
          :name="index"
          :disabled="item.items === undefined"
        >
          <ul class="factor">
            <h2>证型要素</h2>
            <li v-for="(itemLi,indexLi) in factor(item.items[0].items)" :key="indexLi">
              {{itemLi}}
            </li>
          </ul>
        </van-collapse-item>
      </van-collapse>
      </div>
    </scroll-page>
  </div>
</template>

<script>
import back from "base/back"
import scrollPage from 'base/scrollpage'
import Qs from "qs"

const storage = window.sessionStorage
const url = 'https://phzzys.phmd247.com/zzys/v1/post/boyili'
export default {
  name: 'assist',
  data() { 
    return {

    }
  }
 }
</script>
<style lang="stylus" scoped>
</style>