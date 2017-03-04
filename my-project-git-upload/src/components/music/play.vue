<template>
 <div class="play">
  <div style="margin-left:15%;">
    <img class="img" v-bind:src='songObj.img'/>
    <div class="person">
      <p v-text="songObj.title" style="height:20px;">{{songObj.title}}</p>
      <small v-text="songObj.author"></small>
      <audio id="audio" autoplay="autoplay" v-bind:src="songObj.musicUrl">
      </audio>
    </div>
    <div class="pre"><span class="glyphicon glyphicon-backward btn-lg"></span> </div>
    <div class="playPause">
       <span class="glyphicon glyphicon-play btn-lg" v-if="songObj.toggle" v-on:click='play(1)'></span>
       <span class="glyphicon glyphicon-pause btn-lg" v-else v-on:click='play(0)'> </span>
    </div>
    <div class="next">
     <span class="glyphicon glyphicon-forward btn-lg"> </span>
    </div>
  </div>   
 </div>
</template>

<!--生命周期问题,在载入完成后调用特定函数 -->
<script>
import list_index from '../../json/list_index'
import {mapState}  from 'vuex'
import {defaultPlay} from '../../store/action'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },computed:{
    ...mapState(['getSong']),
    songObj:function(){
     var obj={};
     obj.img=this.$store.state.getSong.img;
     obj.title=this.$store.state.getSong.title;
     obj.author=this.$store.state.getSong.author;
     obj.musicUrl=this.$store.state.getSong.url;
     obj.toggle=this.$store.state.getSong.toggle;
     console.info(obj.toggle);
     return obj;
   }
  },methods:{
    play:function(value){
    var audio=document.getElementById('audio');
    if(value==0){
    audio.play();
     this.$store.state.getSong.toggle=true;
    }else{
    audio.pause();
    this.$store.state.getSong.toggle=false;
    }
  }
  }
}
</script>
<style scoped>
 .play{
  width:100%;
  height:60px;
  background-color:black; 
  position:relative;
  }
  .play .img{
   width:50px;
   height:50px;
   background-color:white;
   margin:5px auto auto 0px;
   float:left;
  }
  .play .person{
   width:650px;
   height:50px;
   margin:5px auto auto 15px;
   background-color:white;
   float:left;
  }
  .play .pre{
   width:60px;
   height:50px;
   margin:5px auto auto 25px;
   background-color:white;
   float:left;
 
  }
  .play .playPause{
   width:60px;
   height:50px;
   margin:5px auto auto 15px;
   background-color:white;
   float:left;
  
  }
  .play .next{
   width:60px;
   height:50px;
   margin:5px auto auto 15px;
   background-color:white;
   float:left;
 
  }
</style>