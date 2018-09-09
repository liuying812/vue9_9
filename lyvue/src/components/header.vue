<template>
  <div>
    <div>{{clogo}}</div>
    <input type="text" @change="setUser" v-model="username">
    <div>header - {{pageName}}</div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
export  default{
  name: 'Header',
  props: ['clogo'],
  data(){
    return {
      username: ''
    }
  },
  methods: {
    setUser: function(){
      this.$emit('trasUser', this.username)
    }
  },
  computed:{
    pageName: function(){
      return this.$store.state.inputName
    }
  }
}
</script>
