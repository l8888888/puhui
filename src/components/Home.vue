<template>
    <div class="home">
        <scroll next="/sex" prev="/sex" >
            <div class="scroller">
                <img class="banner animated slideInDown" src="../assets/img/banner.jpg" alt="banner" >
                <div class="center">
                    <div class="cor-name animated jackInTheBox">普惠智能诊断</div>
                    <div class="s-cor-name animated jackInTheBox">-医生提升平台-</div> 
                    <div class="rec1"></div>
                    <div class="rec2"></div>
                    <div class="srec"></div>       
                </div>
                <div class="mrec animated slideInLeft"></div>
                <div class="mrec r-left animated slideInRight"></div>
                <div class="trec animated slideInLeft"></div>
                <div class="trec t-left animated slideInRight"></div>
                <ol class="description">
                    <li>1. 智能诊断过程知识依据和来源均为:
                        <ol>
                            <li>1) 国家卫健委标准</li>
                            <li>2) 国家卫健委诊疗常规</li>
                            <li>3) 权威医学教科书</li>
                            <li>4) 权威专家著作</li>
                            <li>5) 专家2500年典藉</li>
                            <li>6) 国家级医学期刊</li>
                        </ol>
                    </li>
                    <li>2. 60秒内：处置突发不知，消除惊恐</li>
                    <li>3. 治未病：防止不适发展成疾病</li>
                    <li>4. 节省90%医疗费用和非医疗费用</li>
                    <li>5. 全科医生学习提高：获取1369种常见、多发病的诊断、处置主治疗的知识和技能</li>
                </ol>
                <upper class="animated infinite fadeOutUp delay-2s"></upper>
            </div>
        </scroll>
    </div>
</template>

<script>
import Scroll from 'base/scroll'
import Upper from 'base/upper'

export default {
    components:{
        Scroll,
        Upper
    }
}
</script>

<style lang="stylus" scoped>
    .scroller
        height 50.75rem
        background-color #edfffc
        position relative
        .banner
            width 100%
            overflow hidden
        .center
            width 100%
            height 0
            padding-bottom 8.75rem
            padding-left 7.5rem
            margin-top -5rem
            position relative
            .rec1
                background #23d7bc
                width 8.75rem
                height 8.75rem
                transform rotate(45deg)
                box-shadow 0.125rem 0.125rem 0.5rem #b4b4b4
            .rec2
                margin-top:-7.25rem
                background #fff
                width 8.75rem
                height 8.75rem
                transform rotate(45deg)
                box-shadow 0.125rem 0.125rem 0.5rem #b4b4b4
            .srec
                background rgba(35,215,188,0.4)
                width 1rem 
                height 1rem
                transform rotate(45deg)
                margin-left 3.9375rem
            .cor-name
                text-align center
                position absolute
                color #23d7bc
                font-weight bold
                font-size 1.625rem
                z-index 101
                height 11.375rem
                line-height 11.375rem
                top 0
                left 23%
            .s-cor-name
                text-align center
                position absolute
                color #23d7bc
                font-size 0.875rem
                z-index 102
                height 11.375rem
                line-height 11.375rem
                top 1.75rem
                left 29%
                transform translate(-112%)  
        .mrec
            background rgba(35,215,188,0.1)
            width 7.5rem
            height 7.5rem
            transform rotate(45deg)
            position absolute
            top 26.25rem
            left -2.5rem
        .r-left
            left 17.5rem
            top 30rem
        .trec
            width 2.375rem
            height 2.375rem
            transform rotate(45deg)  
            background rgba(35,215,188,0.1)
            position absolute
            top 39.1875rem
            left 5rem
        .t-left
            left 16.25rem
            top 24.0625rem
        .description
            color #23d7bc
            margin-top 4.375rem
            font-size 0.875rem
            padding 0 1.5rem 1.25rem 2.875rem
            border-bottom 1.25rem solid #23d7bc
            li
                line-height 1.75rem
                text-indent -1rem       
                ol
                    display block
                    clear both
                    li
                        line-height 1.5rem
                        padding-left 1.25rem
</style>
