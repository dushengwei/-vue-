<template>
   <div class="head_nav">
     <ul>
         <li><a href="#"><router-link  to="/musicIndex/newMusic">新歌</router-link></a></li>
         <li><a href="#"><router-link  to="/musicIndex/rankList" >排行</router-link></a></li>
         <li><a href="#"><router-link  to="/musicIndex/plist">歌单</router-link></a></li>
         <li><a href="#"><router-link  to="/musicIndex/singer">歌手</router-link></a></li>
         <li v-on:click="tishi">彩铃</li>
     </ul>
   </div>

</template>

<script>
import { Loading } from 'element-ui'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },methods:{
    tishi:function(){
   let loading=Loading.service({text:"对不起,工程太过耗大尚未完成,请耐心等待..."});
    setTimeout(function(){
      loading.close();
    },2000);
    }
  }
}
</script>
<style scoped>
 .head_nav{
   width:960px;
   height:40px;
   margin-left:15%;
   border-bottom:solid 3px #aaa;
 }
 ul li{
  margin:0;
  padding:0;
  list-style-type:none;
  float:left;
  width:100px;
 }
</style>