<template>
 <div class="newMusic">
    <ul v-for="song in songList" v-on:click='plistChild'> 
      <li><img v-bind:src="song.imgUrl" style="width:60px;height:50px;" /></li>
      <li v-text="song.title" style="cursor:pointer;margin-left:80px;width:700px;height:50px;background-color:white;" v-on:click="plistChild" v-bind:location='song.location'></li>
      <li style="position:absolute;top:30px;left:80px;"><span class="glyphicon glyphicon-headphones"></span></li>
      <li v-text="song.countPlay" style="position:absolute;left:100px;top:30px;">
      </li>

    </ul>
 </div>
</template>

<!--生命周期问题,在载入完成后调用特定函数 -->
<script>
import list_plist from '../../json/list_plist'
import {toggleMusic} from '../../store/action'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },created:function(){
       this.songList=list_plist;
  },methods:{
  plistChild:function(e){
   if(e.target.getAttribute('location')==null){
   return;
   }
   var pathInfo='/musicIndex'+e.target.getAttribute('location');
    this.$router.push({path:pathInfo});
   }
  }
}
</script>
<style scoped>
.newMusic{
   width:960px;
   background-color:white;
   margin-left:15%;
  }

 .newMusic  ul{
    height:50px;
    background-color:white;
    margin:0;
    padding:0;
    margin-top:10px;
    width:700px;
    position:relative;
    border-bottom:solid 1px #eee;
    height:51px;
  }
 .newMusic ul li{
  margin:0;
  padding:0;
  list-style-type:none;
  height:30px;
  width:700px;
  position:absolute;

  }

  
</style>