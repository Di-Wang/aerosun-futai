<template>
    <div>
        <swiper :options="swiperOption" ref="Swiper2">
            <swiper-slide v-for="(banner, index) in banners" :key="index">
                <img :src="banner" alt="">
            </swiper-slide>
        </swiper>
        <div class="swiper-pagination" id="num"></div>
    </div>
</template>

<script>

export default {
    name: 'swiper2',
    props: ['bannerId'],
    data() {
        return {
            banners: [],
            datas: [],
            swiperOption: {
                speed: 400,
                autoplay: {
                    disableOnInteraction: false,//用户操作swiper之后，是否禁止autoplay
                },
                effect: 'fade',//slide的切换效果fade 淡入
                // observer: true,//修改swiper自己或子元素时，自动初始化swiper
                // observeParents: true,//修改swiper的父元素时，自动初始化swiper
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,//点击分页器的指示点分页器控制Swiper切换
                    
                    renderBullet: function (index, className) {
                        return '<span class="' + className + '">' + (index + 1) + '</span>';
                    },//渲染分页器小点。这个参数允许完全自定义分页器的指示点。接受指示点索引和指示点类名作为参数。
                    bulletClass: 'my-bullet',
                    bulletActiveClass: 'my-bullet-active',
                }
            }
        }
    },
    mounted() {
        this.$axios("../../static/banner_data.json")
            .then(res => {
                this.datas = res.data;
                this.swiperDOM(this.datas);
            })
            .catch(res => {
                console.log(error);
            })
    },
    watch: {
        '$route': function (to, from) {
            this.swiperDOM(this.datas);
            this.$refs.Swiper2.swiper.destroy()   //先销毁
            this.$refs.Swiper2.mountInstance()   //后在加载
        }
    },
    methods: {
        swiperDOM(data_) {
            if (data_ && data_.length > 0) {
                for (let i = 0; i < data_.length; i++) {
                    if (this.bannerId === data_[i].bannerId) {
                        this.banners = data_[i].img;
                    }
                }
            }
        }
    },
}
</script>

<style >

.contnet_top #num{
    position: absolute;
    bottom: 5px;
    right: 5px;
}

.contnet_top #num .my-bullet{
    padding: 0px;
    width: 18px;
    height: 18px;
    display: inline-block;
    margin-right: 2px;
    margin-left: 2px;
    border: 1px solid #000;
    background-color: #fff;
    color: #000;
    text-align: center;
    cursor: pointer;
    vertical-align: middle;
    line-height: 16px;
    _line-height: 16px;
}

.contnet_top #num .my-bullet-active{
    color: #fff!important;
    background: #FF0000!important;
}

</style>