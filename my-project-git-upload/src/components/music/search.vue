<template>
 <div class="search" >
   <div class=" search-panel" style="position:relative;">
      <div class="search-input">
        <span class="glyphicon glyphicon-search" style="position:absolute;left:-40px;width:40px;height:52px;background-color:white;top:-1px;line-height:47px;text-align:center;border-top:solid 1px #aaa;border-left:solid 1px #aaa;border-bottom:solid 1px #aaa;"></span>
        <input type="text" v-model="keyword" placeholder="歌手/歌名/拼音" @keydown.enter="search" class="input" style="width:700px;height:50px;" >
      </div>
      <button  type="button" class="btn btn-primary btn-lg" style="position:absolute;top:3px;width:200px;height:50px;left:710px;" v-on:click="search">搜索</button>
    </div>

    <div  v-show="togglePanel" style="width:740px;background-color:white;position:relative;left:-38px;padding-top:15px;">
      <p style="color:green;">最近热门</p>
      <ul v-for="key in hotList" style="width:700px;height:40px;border-top:solid 1px #eee;cursor:pointer;" v-on:click="replaceInput">
         <li v-text="key.keyword" v-bind:keyword="key.keyword" v-bind:sort="key.sort" style="height:40px;padding-top:10px;font-size:20px;"></li>
      </ul>
    </div>

    <div class="songs-list" v-show="!togglePanel">
      <div>
        共有{{total}}条搜索结果
      </div>
      <ul v-for="key in searchList" style="width:700px;height:41px;background-color:white;margin-bottom:0;border-bottom:1px solid #eee;position:relative;left:-40px;">
       <li v-text="key.filename" v-bind:hashcode="key.hash" style="width:700px;height:40px;background-color:white;line-height:40px;cursor:pointer;" v-on:click="play"> </li>
      </ul>
    </div>
 </div>
</template>

<script type="es6">
 import axios from 'axios'
 import {toggleMusic} from '../../store/action'
 import { Loading } from 'element-ui'

    export default {
    data(){
      return {
        total:0,
        togglePanel: true,
        hotList:[],
        keyword:'',
        searchList:[]
       
      }
    },created:function(){
         let loading=Loading.service({text:"拼命加载中..."});
         axios.post('http://cs003.m2828.com/apis/proxy.php?val=&url1=http://mobilecdn.kugou.com/api/v3/search/hot?plat=0&count=30&url2=').then(res=> {
         this.hotList=res.data.data.info;
          loading.close();
        });
        
     },
     methods:{
      replaceInput:function(e){   
      this.keyword=e.target.attributes.keyword.value;
      this.search();
       },
      search:function(){
          let loading=Loading.service({text:"拼命加载中..."});
          this.togglePanel = false;
          axios.post('http://cs003.m2828.com/apis/proxy.php?val=&url1=http://mobilecdn.kugou.com/api/v3/search/song?keyword=' + this.keyword + '&page=1&pagesize=30&url2=').then(res=> {
          var list=res.data.data.info;
           this.searchList=[...list.map(
            ({filename,hash})=>({filename, hash})
          )];
           this.total=this.searchList.length;
           loading.close();
        });

      },play:function(e){   
        var hashcode=e.target.attributes.hashcode.value;
        toggleMusic(this.$store,hashcode);
       }
     }
    }
</script>
<style scoped>
  .search {
   width:800px;
   height:52px;
   position:relative;
   left:18%;
   margin:10px auto 20px 0;
   height:auto;
  }
  .search .search-panel .search-input{
   width:700px;
   position:relative;
   border:solid 1px #aaa;
  }
  .search .search-panel .search-input .input{
   border:0;
   outline:0;
  }
  ul li{
  margin:0;
  padding:0;
  list-style-type:none;
  }
</style>