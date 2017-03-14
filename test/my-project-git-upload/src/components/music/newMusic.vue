<template>
 <div class="newMusic">
    <ul v-for="song in songList" v-on:click='getSong'> 
      <li v-text="song.title" class="title" v-bind:hashcode="song.hash"></li>
      <li class="img"><img  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAeCAMAAADn2eWTAAAAtFBMVEW7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7sIZiW3AAAAO3RSTlMAAQMEBQYJDQ8TFBUXHB4pKi0zP0BKS1FfZ2xtdHh+gYSNkpakpqipqqu0vczOz9DR0t3j7fDy8/X2/KcZEEkAAACySURBVCjP7c5HDsJADEBR0yGh995rqKGHf/97sZgAE8SwY8df2XqSZRG90nGVFmNTaJrVgc5fJdToWy/NDyoBrYObfGjhxC2vaxtYxpRmDkBZ18QamIQd6CRdYBIKnE5tgJED3SUwDb/9ldoAVzgDsyfmhjU1WFv85gprw5zs8eKK7W0A4x57AbL+GXsHsIioLQvoKrYLi6gYVKxx74EfVO/3Wi1+quqrOfG+4EVaFzO27nF/QCFT9MC+AAAAAElFTkSuQmCC"/></li>
    </ul>
 </div>
</template>

<!--生命周期问题,在载入完成后调用特定函数 -->
<script>
import list_index from '../../json/list_index'
import {toggleMusic} from '../../store/action'


export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },created:function(){
       this.songList=list_index;
  },methods:{
    getSong:function(e){
      var hashcode=e.target.getAttribute('hashcode');
      toggleMusic(this.$store,hashcode);
     
      }
  }
}
</script>
<style scoped>

 .newMusic  ul{
    height:51px;
    background-color:white;
    border-bottom:solid 1px #eee;
  }
.newMusic  ul li{
  margin:0;
  padding:0;
  list-style-type:none;
  height:50px;
  line-height:50px;
  width:700px;
  }
 .newMusic  ul .title{
  float:left;cursor:pointer;
 }
  .newMusic  ul .img{
   float:right;position:relative;top:0px;width:50px;
 }
  .newMusic{
   width:960px;
   background-color:white;
   margin-left:15%;
  }
</style>