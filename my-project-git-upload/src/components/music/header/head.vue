<template>
   <div class="head">
     <head_logo> </head_logo>
     <head_nav></head_nav>
   </div>
</template>

<script>
import head_logo from './head_logo'
import head_nav from './head_nav'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
   head_logo,head_nav
  }
}
</script>


<style scoped>
 
</style>
