<template>
    <div class="content">
        <img src="../assets/images/index_r2_c2.jpg" alt="">
        <div class="index_welcome gradient">
            <div class="contnet_bottom">
                <LeftNav />
                <div class="contnet_b_r">
                    <div class="title">
                        Watch our movie
                    </div>
                    <video id="video" muted="muted" autoplay="autoplay" loop="loop" controls="true" webkit-playsinline="true"
                        playsinline="true" x5-playsinline="true" style="object-fit: fill;" x5-video-player-fullscreen="true"
                        x5-video-player-type='h5' src="../../static/img/1.mp4">Your browser does not support HTML5 video.</video>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import LeftNav from '@/components/leftnav'

export default {
    name: "movie",
    data() {
        return {
            
        }
    },
    components: {
        LeftNav,
    }
}

</script>
<style scoped>
.content{
    margin: 0px auto;
    max-width: 952px;
}

.contnet_bottom{
    display: flex;
    flex-direction: row;
}

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

#video {
    max-width: 564px;
    max-height: 310px;
    width: 100%;
    margin: 10px 0 30px;
}

</style>