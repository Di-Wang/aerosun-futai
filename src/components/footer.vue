<template>
    <div class="footer">
        <span>Copyright (C) 2013 Shenyang aerosun-Futai Expansion Joint Co., Ltd.　辽ICP备05025415号</span>
    </div>
</template>
<script>

export default {
    name: "footers",
    data() {
        return {

        }
    }
}

</script>
<style scoped>

.footer{
    margin: 0px auto;
    max-width: 952px;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center; 
    text-align: center; 
    background: #fff;
    background-image: url(../assets/icon/index_r4_c2.jpg);
}

.footer span{
    margin: 0 auto;
}

</style>