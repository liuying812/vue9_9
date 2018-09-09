<template>
    <div>
      <div><label for="">请输入您的姓名：<input type="text" v-model="username"></label></div>
      <!--<div><button><router-link to="/item">开始答题</router-link></button></div>-->
      <div><button @click="startTest">开始答题</button></div>
    </div>
</template>

<script>

    export default {
        name: "home",
        /*data: function(){
          return {
            username: ''
          }
        },*/
        methods:{
          startTest: function () {
            if(this.username){
              this.$goRoute('/item')
            }else{
              alert('请输入您的姓名')
            }
          }
        },
       computed: {
         username: {
              set(val){
                this.$store.commit('set_username', val)
              },
              get(){
                return this.$store.state.username
              }
         }
       }

    }
</script>

<style scoped>

</style>
