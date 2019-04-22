<template>
    <div class="index_welcome gradient">
        <div class="contnet_top">
            <Swiper2 :bannerId="bannerId"/>
        </div>
        <div class="contnet_bottom">
            <LeftNav />
            <RightContent :id="id" />
        </div>
    </div>
</template>
<script>

import LeftNav from '@/components/leftnav'
import RightContent from '@/components/rightcontent'
import Swiper2 from '@/components/swiper2' 

export default {
    name: "contacts",
    data() {
        return {
            id: '',
            bannerId: ''
        }
    },
    components: {
        LeftNav,
        RightContent,
        Swiper2
    },
    created() {
        this.id = this.$route.query.id;
        this.bannerId = this.$route.query.bannerId;
    },
    watch: {
    　　// 利用watch方法检测路由变化：
    　　'$route': function (to, from) {
            this.id = this.$route.query.id;
            this.bannerId = this.$route.query.bannerId;
    　　}
    },
    // created() {
    //     this.$axios("../../static/content_data.json", {
    //         params: {
    //             name: this.$route.name
    //         }
    //     })
    //     .then(res => {
    //         console.log(res.data);
    //         // console.log(this.$route.query.id);

    //     })
    //     .catch(res => {
    //         console.log(error);
    //     })
    // },
}
</script>
<style scoped>

.contnet_top {
    max-width: 500px;
    margin: 0 auto;
    padding-top: 30px;
    position: relative;
}

.contnet_bottom{
    display: flex;
    flex-direction: row;
}

@media (max-width: 620px) {

.contnet_top {
    padding-top: 0px;
}

.contnet_bottom{
    flex-direction: column;
}

}

</style>