<template>
    <div class="content">
        <img src="../assets/images/index_r2_c2.jpg" alt="">
        <div class="index_welcome gradient">
            <div class="welcome_l">
                <p class="title">WELCOME TO aerosun-FUTAI</p>
                <img src="../assets/images/link1.jpg" alt="">
                <span>Watch our movie: <router-link :to="{ path: '/movie' }" id="a_line">Click Here</router-link></span>
            </div>
            <div class="welcome_r">
                <Swiper1 />
            </div>
            <div class="clearfix"></div>
        </div>
    </div>
</template>
<script>

import Swiper1 from '@/components/swiper1'

export default {
    name: "layout",
    data() {
        return {
            
        }
    },
    components: {
        Swiper1
    }
}

</script>
<style scoped>
.content{
    margin: 0px auto;
    max-width: 952px;
}

.index_welcome .welcome_l{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 29%;
    float: left;
}

.index_welcome .welcome_l .title{
    color: #333;
    font: bold 14px 微软雅黑;
    margin: 20px 0px;
}

.index_welcome .welcome_l img{
    max-width: 180px;
    margin-bottom: 15px;
}

#a_line{
    text-decoration: underline;
    color: #333;
}

#a_line:hover{
    color: #990000;
}

.index_welcome .welcome_r{
    max-width: 671px;
    width: 68%;
    display: inline;
    float: left;
    overflow: hidden;
    padding-left: 20px;
    padding-top: 40px;
    margin-bottom: 50px;
    box-sizing: border-box;
}



@media (min-width: 601px) and (max-width: 780px) {

.index_welcome .welcome_l{
    margin-left: 20px;
}

.index_welcome .welcome_r{
    width: 100%;
}

}

@media (max-width: 620px) {

/* 中间内容 */
.index_welcome .welcome_l{
    width: 100%;
}

.index_welcome .welcome_r {
    width: 100%;
    padding: 40px 20px 0;
    margin-left: 0;
}

}

</style>