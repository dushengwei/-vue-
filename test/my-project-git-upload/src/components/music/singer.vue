<template>
 <div class="singer" >
    <ul @click="goRouter($event)" >
    <li to="/musicIndex/singer/list/88">&nbsp;热门歌手</li>
    <li to="/musicIndex/singer/list/1">&nbsp;华语男歌手</li>
    <li to="/musicIndex/singer/list/2">&nbsp;华语女歌手</li>
    <li to="/musicIndex/singer/list/3">&nbsp;华语组合</li>
    <li to="/musicIndex/singer/list/4">&nbsp;日韩男歌手</li>
    <li to="/musicIndex/singer/list/5">&nbsp;日韩女歌手</li>
    <li to="/musicIndex/singer/list/6">&nbsp;日韩组合</li>
    <li to="/musicIndex/singer/list/7">&nbsp;欧美男歌手</li>
    <li to="/musicIndex/singer/list/8">&nbsp;欧美女歌手</li>
    <li to="/musicIndex/singer/list/9">&nbsp;欧美组合</li>
    </ul>
 </div>
</template>
       


<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },created:function(){
    
  },methods:{
     goRouter(e){
        var route=e.target.attributes.to.value;
        console.info(route);
        this.$router.push(route);
      }
  }
}
</script>

<style scoped>
 .singer{
  margin-left:15%;
   width:960px;
   background-color:white;
   min-height:400px;
 }
 ul,.singer ul li{
   margin:0;
   padding:0;
   list-style-type:none;
   width:960px;
   height:40px;
   background-color:white;
   border-bottom:solid 1px #eee;
   line-height:40px;
   border-radius:60px;
   cursor:pointer;
   
  }

</style>