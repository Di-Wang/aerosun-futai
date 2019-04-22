<template>
    <div class="contnet_b_r">
        <div class="title">
            Contacts
        </div>
        <div class="text">
            Shenyang Aerosun-Futai Expansion Joint Co., Ltd.<br />
            No.4, 15th Street<br />
            Shenyang Economic & Technological Development Zone<br />
            Liaoning Province 110141<br />
            P. R. China<br />
            Tel: (00)86-24-25810268 Fax: (00)86-24-25813552<br />
            Email: overseasales@ftc.cn<br /><br />
        
            Dear visitor, we thank you very much for visiting our web-site: www.ftc.com.cn<br />
            And your comments will help us to improve our job.<br />
            For more information, please filling out the following form:<br /><br />
            <form id="app" @submit="checkForm" action="http://localhost:8080/" method="post" class="contactForm"><!-- javascript:void(0) -->
                <li>
                    <p>Your Full Name: </p>
                    <i>*</i>
                    <input id="name" v-model="name" type="text" name="name" maxlength="20">
                    <!-- <span v-if="!name">Message artificial, please fill out</span>
                    <span v-else>Less than or equal to 20 characters</span> -->
                    <span :class="[!name? iscolor:'']" v-html="nameTips"></span>
                </li>
                <li>
                    <p>E-Mail Address: </p>
                    <i>*</i>
                    <input id="email" v-model="email" type="email" name="email">
                    <span :class="[!email? iscolor:'']" v-html="emailTips"></span>
                </li>
                <li>
                    <p>Company Name: </p>
                    <i>*</i>
                    <input id="companyName" v-model="companyName" type="text" name="companyName">
                    <span :class="[!companyName? iscolor:'']" v-html="companyNameTips"></span>
                </li>
                <li>
                    <p>Address: </p>
                    <i></i>
                    <input id="address" v-model="address" type="text" name="address">
                    <span :class="[!address? iscolor:'']" v-html="addressTips"></span>
                </li>
                <li>
                    <p>Phone#: </p>
                    <i>*</i>
                    <input id="tel" v-model="tel" type="text" name="tel">
                    <span :class="[!tel? iscolor:'']" v-html="telTips"></span>
                </li>
                <li>
                    <p>Fax#: </p>
                    <i>*</i>
                    <input id="fax" v-model="fax" type="text" name="fax">
                    <span :class="[!fax? iscolor:'']" v-html="faxTips"></span>
                </li>
                <li class="textarea_li">
                    <p>Message: </p>
                    <i>*</i>
                    <textarea id="message" v-model="message" name="message" maxlength="500" @input="Textarea"></textarea>
                    <span>Entered characters:{{ messageL }} Word</span>
                </li>
                <li id="prompt"><span :class="[!message? iscolor:'']" v-html="messageTips"></span></li>
                <li class="verification_code_li">
                    <p>Verification code: </p>
                    <i>*</i>
                    <input id="verif" v-model="verif" type="text" name="verif">
                    <!-- <img src="" id="codeimg" alt="" class="" onclick="" onerror=""> -->
                    <div id="codeimg" @click="refreshCode">
                        <Sidentify :identifyCode="identifyCode"/>
                    </div>
                    <span :class="[!verif? iscolor:'']"  v-html="verifTips"></span>
                </li>
                <li class="btn_li">
                    <input type="submit" value="ok" id="send" >
                </li>
            </form>
        </div>
    </div>
</template>
<script>


import Sidentify from '@/components/identify'

export default {
    name: "contactform",
    components: {
        Sidentify
    },
    data() {
        return {
            identifyCodes: "1234567890ABCDEFGHIJKLMNOPQRSTUVWSYZ",
            identifyCode: "",
            messageL: 0,
            iscolor: '',
            name: null,
            email: null,
            companyName: null,
            address: null,
            tel: null,
            fax: null,
            message: null,
            verif: null,
            nameTips: 'Less than or equal to 20 characters',
            emailTips: 'Example：example@mail.com',
            companyNameTips: '',
            addressTips: '',
            telTips: 'Phone is required, please fill out',
            faxTips: 'Fax is required, please fill out',
            messageTips: 'Less than or equal 500 Character',
            verifTips: "Can't see clearly? Change an image"
        }
    },
    mounted() {
        this.identifyCode = "";
        this.makeCode(this.identifyCodes, 4);
    },
    methods: {
        checkForm: function (e) {
            if (this.name && this.email && this.companyName && this.address && this.tel && this.fax && this.message && this.verif) {
                return true;
            }

            if (!this.name) {
                this.nameTips = 'Message artificial, please fill out'; this.iscolor = 'isred';
            }else{
                this.nameTips = 'Less than or equal to 20 characters';
            }
            if (!this.email) {
                this.emailTips = 'E-Mail address is required. please fill out'; this.iscolor = 'isred';
            } else{
                this.emailTips = 'Example：example@mail.com';
            }
            if (!this.companyName) {
                this.companyNameTips = 'Company name is required. please fill out'; this.iscolor = 'isred';
            }
            if (!this.address) {
                this.addressTips = 'Address is required. please fill out'; this.iscolor = 'isred';
            }
            if (!this.tel) {
                this.telTips = 'Phone is required, please fill out'; this.iscolor = 'isred';
            }
            if (!this.fax) {
                this.faxTips = 'Fax is required, please fill out'; this.iscolor = 'isred';
            }
            if (!this.message) {
                this.messageTips = 'Please enter message content'; this.iscolor = 'isred';
            } else{
                this.messageTips = 'Less than or equal 500 Character';
            }
            if (!this.verif) {
                this.verifTips = 'Please enter the verification code'; this.iscolor = 'isred';
            }else if(this.verif != this.identifyCode){
                this.verifTips = 'Verification code input errors, please re-enter'; this.iscolor = 'isred';
            }else{
                this.verifTips = "Can't see clearly? Change an image"; 
            }
            
            // this.$axios({
            //     method: 'post',
            //     url: 'http://localhost:8080/',
            //     data: {}
            // }).then(res => {
            //     console.log(res)
            // }).catch(reason => {
            //     console.log(reason)
            // });
                
            e.preventDefault();
        },
        Textarea() {
            this.messageL = this.message.length;
        },
        randomNum(min, max) {
            return Math.floor(Math.random() * (max - min) + min);
        },
        refreshCode() {
            this.identifyCode = "";
            this.makeCode(this.identifyCodes, 4);
        },
        makeCode(o, l) {
            for (let i = 0; i < l; i++) {
                this.identifyCode += this.identifyCodes[
                    this.randomNum(0, this.identifyCodes.length)
                ];
            }
            // console.log(this.identifyCode);
        }
    }
}

</script>
<style scoped>
input{
	outline: none;
	box-sizing: border-box;
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

.contnet_b_r .text{
    line-height: 20px;
    padding-top: 5px;
    padding-left: 5px;
    padding-right: 5px;
    padding-bottom: 10px;
}

.contnet_b_r .title_a{
    margin: 0;
    word-break: break-all;
    color: #333;
    overflow: hidden;
    height: 27px;
    font-size: 14px;
    font-weight: bold;
    padding: 3px 0 0 0px;
}

.contactForm li{
    width: 642px;
    max-width: 642px;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 30px;
    position: relative;
}

.contactForm li p{
    text-align: right;
    font-weight: normal;
    width: 20%;
}

.contactForm li i{
    color: #f60;
    float: left;
    width: 11px;
    margin-left: 8px;
}

.contactForm li input{
    border: 1px solid #ddd;
    height: 22px;
    line-height: 22px;
    width: 132px;
    color: #666666;
    background: url(../assets/icon/input-bg.gif) no-repeat left top;
}

.contactForm li span{
    color: #9fa0a0;
    padding-left: 25px;
}

.contactForm .textarea_li{
    height: 116px;
    align-items: flex-start;
    position: relative;
}

.contactForm .textarea_li textarea{
    border: 1px solid #ddd;
    width: 250px;
    height: 100px;
    font-size: 12px;
    margin: 4px 0;
}

.contactForm .textarea_li span{
    position: absolute;
    bottom: 0;
    left: 408px; 
}

#prompt span{
    position: absolute;
    left: 20%;
    padding-left: 20px;
}

.contactForm .verification_code_li #codeimg{
    width: 74px;
    height: 23px;
    padding: 0 5px;
}

.contactForm .btn_li{
    height: 60px;
}

#send{
    width: 63px;
    height: 18px;
    line-height: 18px;
    border: 0;
    color: #fff;
    cursor: pointer;
    font-size: 12px;
    text-align: center;
    display: inline-block;
    background: url(../assets/icon/bottonbg.jpg) 0 0 no-repeat;
    margin: 0 auto;
}

.contactForm li .isred{
    color: #e60012;
}

@media (min-width: 620px) and (max-width: 910px) {
/* contacts表单 */
.contactForm{
    width: 100%;
}

.contactForm li {
    width: 100%;
    height: 60px;
    align-items: flex-start;
}

.contactForm li p{
    width: 32%;
}

#prompt{
    height: 30px;
}

#prompt span{
    left: 32%;
}

.contactForm .textarea_li{
    height: 146px;
}

.contactForm li span,.contactForm .textarea_li span{
    position: absolute;
    bottom: 10px;
    left: 32%;
    padding-left: 20px;
}

.contactForm li span,.contactForm .textarea_li span{
    position: absolute;
    bottom: 10px;
    right: 0%;
    left: auto;
    padding-left: 0px;
}

.contactForm .textarea_li textarea {
    width: 202px;
}

}


@media (max-width: 620px) {

.contactForm{
    width: 100%;
}

.contactForm li {
    width: 100%;
    height: 60px;
    align-items: flex-start;
}

.contactForm li p{
    width: 32%;
}

#prompt{
    height: 30px;
}

#prompt span{
    position: absolute;
    left: auto;
    right: 0;
}

.contactForm .textarea_li{
    height: 146px;
}

.contactForm li span,.contactForm .textarea_li span{
    position: absolute;
    bottom: 10px;
    right: 0%;
    left: auto;
    padding-left: 0px;
}

.contactForm .textarea_li textarea {
    width: 202px;
}

}


</style>