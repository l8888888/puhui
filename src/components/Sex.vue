<template>
    <div class="sex-wrap">
        <back>请点击选择性别</back>
        <ul class="sex">
            <li id="male" @click="male"><span class="iconfont" >&#xe608;</span>男性</li>
            <li id="female" @click="female"><span class="iconfont" >&#xe611;</span>女性</li>
        </ul>
        <div id="children" @click="children"><span class="iconfont" >&#xe62b;</span>儿童</div>
        <div class="use" @click="handleHelp">使用指南</div>
        <div class="use" @click="handleCustom">在线客服</div>
    </div>
</template>

<script>

const storage = window.sessionStorage
const url = 'https://phzzys.phmd247.com/zzys/v1/post/boyili'
export default {

    methods: {
        male(){
            this.$router.push("/"+"male")
        },
        female(){
            this.$router.push("/"+"female")
        },
        children(){
            storage.sex = "children"
            this.$router.push("/"+"children")
        },
        handleCustom(){
            console.log('Custom')

        },
        handleHelp(){
            console.log('Help')

        },
    },
}
</script>

<style lang="stylus" scoped>
    .sex-wrap
        font-size 0.875rem
        .header
            font-weight bold
            background-color #23d7bc
            color #ffffff
            line-height 4.25rem
            text-align center
            font-size 1.25rem
        .sex
            margin-top 0.625rem
            background-color #23d7bc
            display flex
            justify-content space-around
            align-items center
            li
                width 50%
                height 6.25rem
                line-height 6.25rem
                text-align center
                cursor pointer
                span 
                    width 3.75rem
                    height 3.75rem
                    overflow hidden
                    font-size 3.75rem
            #male
                background-image: linear-gradient(to left top, #b6062b, #ff5b7e)
                color #ffc8e4
                &:hover
                    background-image: linear-gradient(to left top, #ff5b7e, #b6062b)
            #female
                background-image: linear-gradient(to left top, #061fb6, #5b7eff)
                color #d7e8ff
                &:hover
                    background-image: linear-gradient(to left top, #5b7eff, #061fb6)
        #children
            height 4.25rem
            color #fff
            text-align center
            background-image: linear-gradient(to left top, #b69706, #ffe25b)
            &:hover
                background-image: linear-gradient(to left top, #ffe25b, #b69706)
            span
                line-height 4.25rem
                padding-right 0.625rem
                overflow hidden
                font-size 2.5rem
                color #fffbe1
        .title
            background-color #23d7bc
            font-size 1rem
            color #31ac15
            height 4.25rem
            line-height 4.25rem
            text-align center
        .use
            margin-top 0.75rem
            height 4.25rem
            background-color #fff
            border-left 0.25rem solid #23d7bc
            color #3297ff
            font-size 1.5rem
            line-height 4.25rem
            padding-left 2.375rem
            cursor pointer
</style>