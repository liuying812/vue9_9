<template>
  <div>
    <span>姓名： {{username}}</span>
    <span>您的得分：<span>{{score}}</span></span>
    <span v-if="emptyError">您第{{error}}题答错了</span>
  </div>
</template>

<script>
    import { qlib } from "../../jsondata/qlib";

    export default {
        name: "result",
      /*  data(){
          return {
            score: '80'
          }
        },*/
        computed:{
          username: function () {
            return this.$store.state.username
          },
          score: function () {
            let userArr = this.$store.state.userselects
            let rightArr = []
            let errorArr = []
            let record = 0
            qlib().forEach(function (item) {
              rightArr.push(item.qitems.rightAns);
            })
            for(let i = 0; i<rightArr.length; i++){
              if(rightArr[i] === userArr[i]){
                record  += 50
              }else {
                errorArr.push(i + 1)
              }
            }
            //存取错误信息
            this.$store.commit('collect_error',errorArr)
            return record
          },
          error :function(){
            return [...this.$store.state.errorselects]
          },
          emptyError:function () {
             if(this.$store.state.errorselects.length === 0){
               return false
             }else {
               return true
             }
          }
        }
    }
</script>

<style scoped>

</style>
