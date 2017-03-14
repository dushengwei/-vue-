<template>
 <div class="singerInfo" >
    <ul v-for="song in songList"> 
     <li v-text="song.id" v-bind:style="{color:song.color}" style="font-size:20px;margin:auto 20px auto 5px;"></li>
      <li v-text="song.title" v-bind:hashcode="song.hash" v-on:click="toggleMusic"> </li>
    </ul>
 </div>
</template>
       
<!--生命周期问题,在载入完成后调用特定函数 -->
<script>
import axios from 'axios'
import {toggleMusic} from '../../store/action'
import { Loading } from 'element-ui'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      songList:[]
    }
  },created:
    function(){
    var id=this.$route.params.post_id; 
     let loading=Loading.service({text:"拼命加载中..."});
    axios.post("http://cs003.m2828.com/apis/getPage.php?path=/singer/info/"+id).then((res)=>{     
      var div = document.createElement('div');
        div.innerHTML = res.data;
        if (div.querySelector('#imgBoxInfo')) {
          this.imgSrc = div.querySelector('#imgBoxInfo img').src;
          this.title = div.querySelector('.page-title').innerText;
          this.desp = div.querySelector('#introBox p').innerText;
          var list = div.querySelectorAll('.panel-songslist-item');
          for (let i = 0; i < list.length; i++) {
            var song = {};
            song.title = list[i].querySelector('.panel-songs-item-name span').innerText;
            song.hash = list[i].id.substr(6);
            song.id=i+1;
          song.color="black";
          if(song.id==1){
          song.color="red";
          }else if(song.id==2){
           song.color="yellow";
          }else if(song.id==3){
           song.color="blue";
          }
            this.songList.push(song)
          }
        } else {
          var imgSrc_A = div.querySelector('.sng_ins_1 .top img').getAttribute("_src").split('/120');
          this.imgSrc = imgSrc_A[0] + '/480' + imgSrc_A[1];
          this.title = div.querySelector('.sng_ins_1 .top .intro .clear_fix').innerText;
          this.desp = div.querySelector('#text .bordr_cen').innerText;
          var list = div.querySelectorAll('#song_container li');
          for (let i = 0; i < list.length; i++) {
            var song = {};
            var song_info = list[i].querySelector('.song_hid').value.split("|");
            song.title = song_info[0];
            song.hash = song_info[1];
            song.id=i+1;
          song.color="black";
          if(song.id==1){
          song.color="red";
          }else if(song.id==2){
           song.color="yellow";
          }else if(song.id==3){
           song.color="blue";
          }
            this.songList.push(song);
          }
        }
        loading.close();
    });
    },methods:{
    toggleMusic:function(e){
      var hashcode=e.target.getAttribute('hashcode');
      toggleMusic(this.$store,hashcode);
    }
  }
  
}
</script>
<style scoped>
  .singerInfo{
   margin-left:15%;
   width:960px;
   background-color:white;
  }
  ul li{
   margin:0;
   padding:0;
   list-style-type:none;
   height:50px;
   line-height:50px;
   width:960px;
  
   display:inline;
  }
  ul{
   margin:0;
   padding:0;
    cursor:pointer;
    list-style-type:none;
  width:700px;
  height:50px;
  background-color:white;
  border-bottom:solid 1px #eee;
  }
</style>