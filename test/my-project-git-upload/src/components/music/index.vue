<template>
 <div class="indexMusic">
     <heade></heade>
     <router-view></router-view>
     <play style="position:fixed;z-index:999;top:520px;"></play>
 </div>
</template>


<script>
import heade from './header/head'
import play  from './play'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },components:{
       heade,play
  }   
}
</script>
<style>

</style>
