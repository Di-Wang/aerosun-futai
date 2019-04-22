<template>
    <div class="header">
        <router-link class="logo" :to="{ path: '/' }">
            <img src="../assets/images/logo.png" alt="">
        </router-link>
        <ul>
            <li><router-link exact :to="{ path: '/' }">Home</router-link></li>
            <li><router-link :to="{ path: '/company', query:{id:'company', bannerId:'c1'} }">The Company</router-link></li>
            <li><router-link :to="{ path: '/products', query:{id:'products', bannerId:'p0'} }">Products</router-link></li>
            <li><router-link :to="{ path: '/contacts' }">Contacts</router-link></li>
        </ul>
    </div>
</template>
<script>

export default {
    name: "headers",
    data() {
        return{

        }
    } 
}

</script>
<style scoped>

.header{
    margin: 0px auto;
    max-width: 952px;
    max-height: 63px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    box-sizing: border-box;
    font: bold 13px 微软雅黑;
}

.header ul li{
    float: left;
    height: 100%;
    opacity: 0.9;
}

.header ul li a{
    color: #fff; 
    padding: 0 35px;
    height: 60px;
    padding-bottom: 12px;
    box-sizing: border-box;
    display: table-cell;
    vertical-align: bottom;
}

.header .logo{
    width: 27.5%;
    display: flex;
    align-items: center;
}

.header ul li a.router-link-active{
    color: #fbc203;
}

@media (min-width: 481px) and (max-width: 780px) {
.header{
    font: bold 12px 微软雅黑;
}

.header ul{
    margin-right: 1%;
}

.header ul li a{
    padding: 0 12px;
    height: 50px;
    padding-bottom: 12px;
}
}

@media (max-width: 480px) {

.header{
    font: bold 12px 微软雅黑;
}

.header ul{
    margin-right: 1.3%;
}

.header ul li a{
    padding: 0 3px;
    height: 40px;
    padding-bottom: 10px;
}
}

</style>