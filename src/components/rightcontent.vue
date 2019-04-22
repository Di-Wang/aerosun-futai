<template>
    <div class="contnet_b_r">
        <template v-if="id === 'products'">
            <div class="title">{{ products0.title }}</div>
            <div class="text" v-html="products0.text"></div>
        </template>
        <template v-else-if="id != 'history'">
            <div class="title">{{ data.title }}</div>
            <div class="text" v-html="data.text"></div>
        </template>
        <template v-else-if="id === 'history'">
            <div class="title">{{ historyData.title }}</div>
            <ul class="imgbox clearfix">
                <li v-for="item in historyData.img"><img :src="item" alt=""/></li>
            </ul>
            <div v-html="historyData.text"></div>
        </template>
        
    </div>
</template>
<script>

export default {
    name: "rightcontent",
    props: ['id'],
    data() {
        return {
            data: [],
            historyData: [],
            name:'',
            products0: {
                "title": "Products",
                "text": "Aerosun-Futai provides standard and custom bellows products as following:<br/><br/>\n\n--Metal Bellows<br/>\n--Welded Bellows<br/>\n--Metal Hoses<br/>\n--Expansion Joints<br/><br/>"
            },
        }
    }, 
    created() {
        this.contentDOM();
        this.historyDOM();
    },
    watch: {
        '$route': function (to, from) {
            this.contentDOM();
            this.name = this.$route.query.name;
            this.historyDOM();
        }
    },
    methods: {
        contentDOM() {
            if (this.$route.name == "company") {
                this.$axios("../../static/company_data.json")
                    .then(res => {
                        this.conData(res.data.iscontent);
                    })
                    .catch(res => {
                        console.log(error);
                    })
            } else if (this.$route.name == "products") {
                this.$axios("../../static/products_data.json")
                    .then(res => {
                        this.conData(res.data.iscontent);
                    })
                    .catch(res => {
                        console.log(error);
                    })
            }
        },
        conData(data_) {
            if (data_ && data_.length > 0) {
                for (let i = 0; i < data_.length; i++) {
                    if (this.id === data_[i].id) {
                        this.data = data_[i]
                    }
                }
            }
        },
        historyDOM() {
            if (this.id === 'history') {
                this.$axios("../../static/history_data.json")
                    .then(res => {
                        let data_ = res.data;
                        if (data_ && data_.length > 0) {
                            for (let i = 0; i < data_.length; i++) {
                                if (this.name === data_[i].name) {
                                    this.historyData = data_[i]
                                }
                            }
                        }
                        if (!this.name) {
                            this.historyData = res.data[0]
                        }
                    })
                    .catch(res => {
                        console.log(error);
                    })
            }
        }
    },
    mounted() {
        

    },
}

</script>
<style scoped>

.contnet_b_r{
    max-width: 642px;
    display: inline;
    overflow: hidden;
    margin: 0 20px;
    padding: 30px 0 20px;
    text-align: left;
}

.contnet_b_r .title{
    margin: 0;
    word-break: break-all;
    color: #333;
    overflow: hidden;
    height: 27px;
    font-size: 16px;
    font-weight: bold;
    padding: 3px 0 0 0px;
}

.contnet_b_r .text{
    line-height: 20px;
    padding-top: 5px;
    padding-left: 5px;
    padding-right: 5px;
    padding-bottom: 10px;
}

.contnet_b_r .imgbox li{
    max-width: 190px;
    float: left;
    margin-right: 10px;
    margin-bottom: 2%;
}

.contnet_b_r .imgbox img{
    width: auto;
    max-height: 125px;
    min-height: 125px;
}
</style>
<style>

.contnet_b_r .text table {
    border-collapse: collapse;
    margin: 0 auto 30px;
    border: 1px #666666 solid;
}

.contnet_b_r .text td {
    height: 20px;
    line-height: 20px;
    padding: 3px;
    border: 1px #666666 solid;
}


</style>