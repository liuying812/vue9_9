<template>
  <div>
    <div class="current">当前时间：<span>{{currentTime}}</span></div>
  </div>
</template>

<script>
    import { getCurrentTime } from '@/config/util'
    export default {
        name: "currenttime",
        data: function(){
          return {
            currentTime: getCurrentTime()
          }
        },
        mounted(){
          let _this = this
          this.timer = setInterval(function(){
            _this.currentTime = getCurrentTime()
          },1000)
        },
        beforeDestroy(){
          if(this.timer){
            clearInterval(this.timer)
          }
        }
    }
</script>

<style scoped>

</style>
