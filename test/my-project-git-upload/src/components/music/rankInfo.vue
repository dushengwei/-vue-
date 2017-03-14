<template>
 <div class="rankInfo" >
   <ul v-for="song in songList" class="songListClass" v-on:click="toggleMusic">
     <li v-text="song.id" style="width:40px;height:20px;font-size:20px;" v-bind:style="{color:song.color}"></li>
     <li v-text="song.title" v-bind:hashcode="song.hash"> </li>
   </ul>
 </div>
</template>


<script>
import axios from 'axios'
import {toggleMusic} from '../../store/action'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App' ,
      songList:[]
    }
},created:
  function(){
   var id=this.$route.params.post_id;
    axios.post('http://cs003.m2828.com/apis/getPage.php?path=/rank/info/'+id).then((res)=>{
       var div=document.createElement('div');
        div.innerHTML=res.data;
        console.info(res.data);
        var rankInfoList={};
        rankInfoList.imgSrc=div.querySelector('#imgBoxInfo img').src;
        rankInfoList.title=div.querySelector('.page-title').innerText;
        rankInfoList.updateTime=div.querySelector('.rank-info-time span').innerText;
        console.info(rankInfoList);
        var list=div.querySelectorAll('.panel-songslist-item');
        for(var i=0;i<list.length;i++){
          var song={};
          song.id=i+1;
          song.color="black";
          if(song.id==1){
          song.color="red";
          }else if(song.id==2){
           song.color="yellow";
          }else if(song.id==3){
           song.color="blue";
          }
          song.title=list[i].querySelector('.panel-songs-item-name span').innerText;
          song.hash=list[i].id.substr(6);
          this.songList.push(song);
          console.info(song);
        }
    });
  },methods:{
   toggleMusic:function(e){
    var hash=e.target.getAttribute('hashcode');
    toggleMusic(this.$store,hash);
   }
  }
}
</script>
<style scoped>
 ul, ul li{
  margin:0;
  padding:0;
  list-style-type:none;
  }

  .rankInfo{
   margin-left:15%;
  }
 .rankInfo .songListClass{
  width:960px;
  height:41px;
  background-color:white;
  border-bottom:solid 1px #eee;
 }

 .rankInfo .songListClass li{
  background-color:white;
  height:40px;
  line-height:40px;
  cursor:pointer;
  display:inline-block;
  text-align:center;
 }
</style>
