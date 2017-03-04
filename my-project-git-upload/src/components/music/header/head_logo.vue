<template>
      <div class="logo-container">
    <div class="head-logo">
      <a href="http://localhost:8080/#/musicIndex/singer">
        <img src="http://m.kugou.com/v3/static/images/index/logo.png">
      </a>
    </div>
    <div class="head-download">
      <a href="http://pan.baidu.com/s/1eSMb7e6">下载酷狗</a>
    </div>
    <div class="head-search" >
    <router-link  to="/musicIndex/search"><img src="http://m.kugou.com/v3/static/images/index/search.png" /></router-link>
    </div>
   </div>

</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .logo-container{
    width:960px;
    height:50px;
    background-color:#2CA2F9;
    margin-left:15%;
  }
  .head-logo{
    float:left;
  }
  .head-download{
   width:300px;
   height:30px;
   border:solid 1px white;
   float:left;
   margin:10px auto auto 80px;
   text-align:center;
   font-size:20px;
   color:white;
  }
  .head-search{
   float:right;
   margin-top:10px;
  }
</style>
