<template>
    <div class="contnet_b_l">
        <div class="contnet_b_lbox">
            <router-link v-for="(item,index) in nav" :key="item.id" :class="index>3 && ifnnn ?'productsNav':''" :to="{ path: nowpath, query:{id:item.id, bannerId:item.bannerId} }">{{ item.title }}</router-link>
        </div>
        <div class="contnet_b_lbox" v-if="id == 'company'">
            <!-- <router-link :to="{ path: imgurl }">Company Brochure</router-link> -->
            <a :href="imgurl">Company Brochure</a>
        </div>
        <div class="contnet_b_lbox2" v-if="id == 'history'">
            <router-link v-for="item in historyData" :key="item.id" :to="{ path:'', query:{id:'history', bannerId:item.bannerId, name: item.name} }">{{item.title}}</router-link>
        </div>
    </div>
</template>
<script>

export default {
    name: "leftnav",
    data() {
        return {
            id:'',
            historyData: [],
            nnn: '',
            nav: [],
            imgurl: '../static/img/files8.pdf',
            nowpath: '',
            ifnnn: ''
        }
    }, 
    created() {
        this.id = this.$route.query.id;
        this.nnn = this.$route.name;
        this.NavList();
        this.historyNav();
    },
    watch: {
        '$route': function (to, from) {
            this.id = this.$route.query.id;
            this.nnn = to.name;
            this.historyNav();
            this.NavList();
        }
    },
    methods: {
        historyNav() {
            if (this.id === 'history') {
                this.$axios("../../static/history_name.json")
                    .then(res => {
                        this.historyData = res.data
                    })
                    .catch(res => {
                        console.log(error);
                    })
            }
        },
        NavList() {
            var ifnnn_ = this.nnn === 'products' || this.nnn === 'contacts' || this.nnn === 'movie';
            this.ifnnn = ifnnn_;
            if (this.nnn === 'company') {
                this.$axios("../../static/company_id.json")
                    .then(res => {
                        this.nav = res.data.iscontent;
                        this.nowpath = '/company';
                    })
                    .catch(res => {
                        console.log(error);
                    })
            } else if (ifnnn_) {
                this.$axios("../../static/products_id.json")
                    .then(res => {
                        this.nav = res.data.iscontent;
                        this.nowpath = '/products';
                    })
                    .catch(res => {
                        console.log(error);
                    })
            }
        }
    },
}

</script>
<style scoped>

.contnet_b_l{
    width: 230px;
    display: inline;
    margin-left: 30px;
    margin-top: 40px;
}

.contnet_b_l a:hover{
    color: #990000;
}

.contnet_b_lbox,.contnet_b_lbox2 {
    margin-bottom: 35px;
    padding-right: 20px;
    width: 220px;
    padding-bottom: 15px;
    padding-top: 10px;
    background: #eee;
    border: #ccc 1px solid;
}

.contnet_b_lbox a{
    color: #333;
    display: block;
    background: url(../assets/icon/tem_r5_c22.gif) no-repeat;
    padding-left: 20px;
    margin-left: 20px;
    line-height: 25px;
    text-align: left;
}

.contnet_b_lbox2 a{
    color: #333;
    display: inline-block;
    padding-right: 20px;
    margin-left: 20px;
    line-height: 25px;
}

.productsNav{
    margin-left: 40px!important;
}

@media (max-width: 620px) {
    
.contnet_b_l {
    width: 100%;
    margin: 0;
}

.contnet_b_lbox,.contnet_b_lbox2{
    margin-bottom: 20px;
    width: 100%;
    padding-bottom: 15px;
}

.contnet_b_r .imgbox img{
    width: 100%;
    max-width: 100%;
    max-height: 100%;
    min-height: 100%;
    margin-right: 0px;
}
}

</style>