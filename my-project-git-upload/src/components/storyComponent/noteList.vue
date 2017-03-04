<template>
<div class='noteList'>
 <div class="noteList" v-if="xianshi" v-on:mouseleave='toggle1'>
   <h4>书籍列表</h4>
  <ul> 
     <li v-for="key in notes">
        <span v-bind:id="key.id" v-bind:class="{active:currentActiveNoteId==key.id}" v-on:click="updateActiveEle">{{key.title.trim()}}</span> 
        <span class="glyphicon glyphicon-edit" v-on:click='updateTitleCss' title="修改标题"> </span>
     </li>
  </ul>  
 </div> 

 <div  class='noteList1' v-else  v-on:mouseenter='toggle'><span class="icon-hand-right rorate"></span></div>

<div class='updateTitle' v-bind:style="titleObj" v-show='tt'>
  <div style="margin-top:100px;margin-left:30px;">
   <span class="title">请输入文字修改文章标题:</span>
   <input type="text" v-model="title"/>
   <button type="button" v-on:click='updateTitle(tt=false)' style="border-radius:45px;">确定</button>        
   </div>  
</div>

</div>
</template>

<script>
//mapGetters mapState
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'

import {updateTitle,updateActiveEle} from '../../store/action'

export default {
  name: 'noteList',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      xianshi:false,
      titleObj:{width:'300px',height:'100px',position:'absolute',left:'300px',top:'80px',zIndex:'888',color:'red'},
      tt:false,
      id:0,
      title:''
    }
  },
  methods:{
   toggle:function(){
     this.xianshi=true;
   }, 
   toggle1:function(){
    this.xianshi=false;
   },
   updateTitleCss:function(e){
   //保存修改title的id
   var first=e.target.parentNode.firstChild;
    this.id=first.id;
    this.tt=true;
    },
   updateTitle:function(e){
    var title=this.title;
    this.title='';
    updateTitle(this.$store,this.id,title);      
   },
   updateActiveEle:function(e){
     //修改活跃元素
     //console.info(e.target.id);
     var id=e.target.id;
     updateActiveEle(this.$store,id);
   }
  },
computed:{
  ...mapState(['notes','currentActiveNoteId'])
  }
 }
</script>

<style scoped>
 ul,li{
 list-style-type:none;
 margin:0;
 padding:0;
 }
 .noteList{
  width:80px;
  heigth:100%;
  position:absolute;
  top:50px;
  background-color:white;
   z-index:999;
   border:solid 1px #eee;
 }

 .noteList1{
  width:20px;
  height:20px;
  
  position:absolute;
  top:50px;
  transition:all 1s ease-in .1s;
   z-index:999;
 }
 .active{
  background-color:red;
 }

 .noteList .updateTitle{
  width:300px;
  height:300px;
  border-radius:90px;
  background-image:url('../../assets/20080305_a99069334ad4516b485fhNyGYhenliDk.gif');
 }
</style>