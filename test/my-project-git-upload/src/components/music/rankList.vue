<template>
 <div class="rankList" >
   <ul v-for="rank in rankList"  v-on:click='goChild(rank.location)'> 
    <li><img v-bind:src="rank.imgUrl"  style="width:60px;height:60px;float:left;margin-right:30px;"/></li>
     <li v-text="rank.title" style="lineHeight:60px;font-size:20px;"></li>
   </ul>
 </div>
</template>


<script>
import axios from 'axios'
import { Loading } from 'element-ui'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      rankList:[]
    }
  },created:
  function(){
  let loading=Loading.service({text:"拼命加载中..."});
   axios.post('http://cs003.m2828.com/apis/getPage.php?path=/rank/list').then((res)=>{
        var data=res.data;
     var div=document.createElement("div");
      div.innerHTML=data;
      var list=div.querySelectorAll('.panel-img-list li');
       for(var i=0;i<list.length;i++){
          var rank={};
          rank.title=list[i].querySelector('.panel-img-content p').innerText;
          rank.imgUrl=list[i].querySelector('.panel-img-left img').getAttribute('_src');
          rank.location="/musicIndex/rank/info/"+list[i].querySelector('a').href.substr(29);
          console.info(list[i].querySelector('a').href);
          this.rankList.push(rank);
        }
        loading.close();
       });
  },
  methods:{
    goChild:function(value){
      console.info(value);
      this.$router.push({path:value});
   }
  }
}
</script>

<style scoped>
.rankList{
  margin-left:15%;background-color:white;width:960px;

}
 ul,ul li{
 margin:0;
 padding:0;
 list-style-type:none;
 }
 .rankList ul{
 width:760px;height:61px;background-color:white;cursor:pointer;
 border-bottom:solid 1px #eee;
 }
</style>