<template>
  <div>
    <input type="text" v-model="inputMsg" @change="setMsg">
  </div>
</template>
<script>
  export default {
    data(){
      return {
        inputMsg: ''
      }
    },
    methods: {
      setMsg: function(){
       //   this.$store.state.inputName = this.inputMsg
        this.$store.commit('newName', this.inputMsg)

      }
    }
  }
</script>
