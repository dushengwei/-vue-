<template>
     <div class="nav" v-if="xianshi" v-on:mouseleave='toggle1' id="toolbar"> 
       <button class="buttonStyle" title="创建" v-on:click="createNote"> <span class="glyphicon glyphicon-plus"></span> </button> 
       <button class="buttonStyle" title="删除" v-on:click="deleteNote"> <span class="glyphicon glyphicon-minus"></span> </button> 
       <button class="buttonStyle" title="保存"> <span class="glyphicon glyphicon-floppy-saved"></span> </button> 
     </div>
     <div  class='nav1' v-else  v-on:mouseenter='toggle'><span class="icon-hand-right"></span></div>
</template>

<script>
import {createNote,deleteNote,editNote} from '../../store/action'
import { mapState } from 'vuex'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      xianshi:false
  }},
  methods : {
   toggle:function(){
     this.xianshi=true;
   }, 
   toggle1:function(){ 
    this.xianshi=false;
   
  },createNote:function(){
      createNote(this.$store);
    },deleteNote:function(){
     deleteNote(this.$store);
    }
  },
  created:function(){
    console.info(this.$store);
  }
}
</script>

<style scoped> 
 .nav{
  width:60px;
  height:160px;
  border:1px solid 1px;
  position:absolute;
  background-color:#68228b;
  top:100px;
  transition:all .8s ease-in .1s;
  z-index:999;
 }
 .nav1{
  width:20px;
  height:20px;
  
  position:absolute;
  top:180px;
  transition:all 1s ease-in .1s;
   z-index:999;
 }
 .buttonStyle{
  width:50px;
  height:50px;
  background-color:#c0b38ba;
 }

</style>

