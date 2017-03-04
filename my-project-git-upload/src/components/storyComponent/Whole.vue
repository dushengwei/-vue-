<template>
 <div class="story">
    <toolBar></toolBar>
    <noteList></noteList>
    <Edit></Edit>
  </div>
</template>

<script>
import toolBar from './toolBar'
import noteList from './noteList'
import Edit from './Edit'

console.info(this.$store);
export default {
  name: 'whole',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },components:{
   toolBar,noteList,Edit
  },created:function(){
      console.info(this.$store);
  }
}
</script>

<style scoped>
.story{
   width:960px;
   height:430px;
   border:solid 1px #aaa;
   margin-left:15%;
   position:relative;
   background-image:url('../../assets/1107072_142009280077L5.jpg');
 } 
</style>