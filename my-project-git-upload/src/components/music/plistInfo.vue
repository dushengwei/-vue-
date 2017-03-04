<template>
 <div class="plistInfo" >
    <ul v-for="song in songList" v-on:click='toggleMusic'>
     <li v-text="song.id" v-bind:style="{color:song.color}" style="font-size:20px;margin:auto 20px auto 5px;"></li>
     <li v-text="song.title" v-bind:hashcode="song.hash"> </li>
    </ul>
 </div>
</template>


<script>
import axios from 'axios'
import {toggleMusic} from '../../store/action'
import { Loading } from 'element-ui'

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
   let loading=Loading.service({text:"拼命加载中..."});
    axios.post('http://cs003.m2828.com/apis/getPage.php?path=/plist/list/'+id).then((res)=>{
       var div=document.createElement('div');
        div.innerHTML=res.data;
        var list = div.querySelectorAll('.panel-songslist-item');
        this.songList = [];
        for (var i = 0; i < list.length; i++) {
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
          this.songList.push(song);
        }
         loading.close();
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

  .plistInfo{
   margin-left:15%;
  }
  .plistInfo ul{
   width:960px;
   height:51px;
   background-color:white;
   border-bottom:solid 1px #eee;
   }
   .plistInfo ul li{
    width:600px;
   height:50px;
   background-color:white;
   line-height:50px;
   cursor:pointer;
   display:inline;
   }
</style>
