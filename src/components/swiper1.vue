<template>
    <swiper :options="swiperOption" id="swiper1">
        <swiper-slide v-for="banner in banners" :key="banner.text">
            <img :src="banner.url" alt="">
            <span>{{ banner.text }}</span>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>
<script>
// import 'swiper/dist/css/swiper.css'
// import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
    name: 'swiper1',
    // components: {
    //     swiper,
    //     swiperSlide
    // },
    data() {
        return {
            swiperOption: {
                speed: 400,
                loop: true,
                autoplay: true, 
            },
            banners: [{
                    "url": require('../assets/images/banner1.jpg'),
                    "text": "Honesty and credit"
                },{
                    "url": require('../assets/images/banner2.jpg'),
                    "text": "Responsibility"
                },{
                    "url": require('../assets/images/banner3.jpg'),
                    "text": "Team"
                },{
                    "url": require('../assets/images/banner4.jpg'),
                    "text": "Innovation"
            }]
        }
    },
}
</script>
<style scoped>

#swiper1 .swiper-slide{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 3px 15px 3px;
}

#swiper1 img{
    max-width: 376px;
    box-shadow: 3px 5px 7px #666;
}

#swiper1 span{
    color: #333;
    padding-left: 30px;
    font: bold 14px 微软雅黑;
}


@media (max-width: 620px) {

#swiper1 .swiper-slide{
    display: flex;
    flex-direction: column;
    align-items: center;
}

#swiper1 img {
    max-width: 100%;
}

}

</style>