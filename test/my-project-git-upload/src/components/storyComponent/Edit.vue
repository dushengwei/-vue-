<template>
 <div class='edit'>
   <div v-if='currentActiveNoteId==-1'>
     <div class='index'>欢迎您来写自己的日记</div>
     <div class=index1>下面的小手创建笔记 保存 / 上面的小手查看当前笔记目录</div>
   </div>
   <div v-else>
   <h2 class='title' v-text="currentActiveObj.title"></h2>
   <textarea class='content' v-model='currentActiveObj.content' v-on:focus='borderHidden'>
   </textarea> 
   </div>
 </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Edit',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      xianshi:true,
      currentTitle:'I am Edit'
    }
  },
 computed:{
  ...mapState(['notes','currentActiveNoteId','currentActiveObj']),
  },
 methods:{
   borderHidden:function(e){
    console.info(e.target);
     e.target.style.cssText="border:0;outline:none;";
   }
  }
}
</script>

<style scoped>
 .edit{
   width:100%;
   height:410px;
   position:relative;
 }
  h2{
  text-align:center;
 
  }
  .content{
   width:100%;
   height:380px;
   position:absolute;
   top:30px;
   z-index:1;
  }
 .edit .index{
   font-size:50px;
   transform:rotate(30deg);
   position:absolute;
   top:200px;
   left:150px;
  }
 .edit .index1{
  position:absolute;
  top:300px;
  left:120px;
  color:red;
 }
</style>