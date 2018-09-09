<template>
  <div id="app">
      <Header :clogo="pmsg" @trasUser="getUser"></Header>
      <span>{{pmsg}}</span>
    <hr>
    <lyBody></lyBody>
  </div>
</template>

<script>
import Header from './components/header'
import lyBody  from './components/body'

export default {
  name: 'App',
  components:{ Header , lyBody},
  data(){
    return {
      pmsg: 'BGM hahahha'
    }
  },
  methods:{
    getUser: function(username){
      this.pmsg = username
    }
  },


}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
