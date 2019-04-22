<template>
  <div id="app">
    <Headers />
    <router-view />
    <Footers />
  </div>
</template>

<script>

  import Headers from '@/components/header'
  import Footers from '@/components/footer'

  export default {
    name: 'App',
    components: {
      Headers,
      Footers
    }
  }
</script>

<style>
@charset "utf-8";
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font: inherit;
	vertical-align: baseline;
	box-sizing: border-box;
}
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

ul{list-style:none;}
a{text-decoration: none;color:#707070;}
img { border: 0; width: 100%; display: block;}
.clearfix:after{
	content: '';
	display: block;
	height: 0;
	line-height: 0;
	visibility: hidden;
	clear: both;
}
.clearfix{ clear:both;}

body {
  text-align: center;
  padding-bottom: 0px;
  line-height: 180%;
  margin: 0px auto;
  padding-left: 0px;
  padding-right: 0px;
  font-family: Verdana, Arial, Helvetica, sans-serif;
  color: #333;
  font-size: 12px;
  padding-top: 0px;
  background: #19285F url(./assets/icon/bg.jpg) no-repeat top center;
}

/* .active {
  color: #fbc203!important;
} */

.gradient {
  background: #e0e0e0;
  background: -moz-linear-gradient(top, #a1a1a1, #e0e0e0, #e0e0e0);
  background: -webkit-gradient(linear, left top, left bottom, color-stop(#a1a1a1), color-stop(#e0e0e0));
  background: -webkit-linear-gradient(top, #a1a1a1, #e0e0e0, #e0e0e0);
  background: -o-linear-gradient(top, #a1a1a1, #e0e0e0, #e0e0e0);
  background: -ms-linear-gradient(top, #a1a1a1, #e0e0e0, #e0e0e0);
  background: linear-gradient(to bottom, #a1a1a1, #e0e0e0, #e0e0e0);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#a1a1a1', endColorstr='#e0e0e0', GradientType=0);
  /* IE6 & IE7 */
  -ms-filter: "progid:DXImageTransform.Microsoft.gradient( GradientType = 0,startColorstr = '#a1a1a1', endColorstr = '#e0e0e0' )";
  /* IE8 */
}

:root .gradient {
  filter: none;
}

.index_welcome {
  margin: 0px auto;
  max-width: 952px;
}

#a_line{
  text-decoration: underline;
  color: #333;
}

#a_line:hover{
  color: #990000;
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

.contnet_b_r .title_a:hover{
    color: #990000;
}

.contnet_b_r a:hover{
    text-decoration: underline;
}



</style>