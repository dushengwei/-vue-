<template>
 <div class="singer" >
   <ul v-for="singer in singerList"> 
    <li>
    <img v-bind:src="singer.imgSrc"  style="width:60px;height:60px;margin-right:30px;"  /></li>
     <li v-text="singer.name" style="width:600px;lineHeight:60px;font-size:20px;" v-bind:location="singer.location" v-on:click='goRoute'></li>
   </ul>
 </div>
</template>
       
<!--生命周期问题,在载入完成后调用特定函数 -->
<script>
import axios from 'axios'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      singerList:[]
    }
  },created:function(){
   var id=this.$route.params.post_id;
   axios.post("http://cs003.m2828.com/apis/getPage.php?path=/singer/list/`"+id).then((res)=>{
      var div = document.createElement('div');
        div.innerHTML = res.data;
        var list = div.querySelectorAll('#panelList li');
        for (var i = 0; i < list.length; i++) {
          var singer = {};
          singer.imgSrc = list[i].querySelector('.panel-img-left img').getAttribute('_src');
          singer.name = list[i].querySelector('.panel-img-content-first').innerText;
          singer.location = '/singer/info/' + list[i].querySelector('a').href.substr(31);
          this.singerList.push(singer);
        }
   });
  },methods:{
   goRoute:function(e){
     var path='/musicIndex'+e.target.getAttribute('location');
     console.info(path);
     this.$router.push({path:path});
   }
  }
}
</script>
<style scoped>
.singer{
 margin-left:15%;background-color:white;width:960px;
 }
.singer ul,.singer ul li{
 margin:0;
 padding:0;
 list-style-type:none;
 height:60px;
 background-color:white;
 }
  .singer ul li {
 float:left;
  height:58px;
 }
 .singer ul{
 cursor:pointer;
 position:relative;
 border-bottom:solid 1px #eee;
 }
 .singer:after{
  content:'';
  display:block;
  clear:both;
 }
</style>