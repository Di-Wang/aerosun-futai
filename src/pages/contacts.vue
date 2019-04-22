<template>
    <div class="index_welcome gradient">
        <div class="contnet_top">
            <Swiper2 :bannerId="bannerId"/>
        </div>
        <div class="contnet_bottom">
            <LeftNav />
            <ContactForm />
        </div>
    </div>
</template>
<script>

import LeftNav from '@/components/leftnav'
import ContactForm from '@/components/contactform'
import Swiper2 from '@/components/swiper2' 

export default {
    name: "contacts",
    data() {
        return {
            bannerId: 'c1'
        }
    },
    components: {
        LeftNav,
        ContactForm,
        Swiper2
    }  
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