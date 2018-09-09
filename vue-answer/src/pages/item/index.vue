<template>
    <div>
      <div class="topheader">
        <span>姓名： {{username}}</span>
      </div>
      <ItemContainer :chooseItems = "chooseItems" ></ItemContainer>
      <div class="nextBtn"><button @click="changeItem">下一题</button></div>
    </div>
</template>

<script>
    import { qlib } from '@/jsondata/qlib'
    import ItemContainer from '@/components/ItemContainer'
    let qlibsize = qlib().length

    export default {
        name: "item",
        data(){
          return{
            chooseItems: qlib()[0]
          }
        },
        computed:{
          username: function () {
            return this.$store.state.username
          }
        },
        components:{ItemContainer},
        methods:{
          changeItem: function(){
              let currentIndex = this.chooseItems.qindex
              if(this.$store.state.userselects[currentIndex]){
                if(currentIndex + 1< qlibsize){
                  //去下一题
                  this.chooseItems = qlib()[currentIndex + 1]
                }else{
                  //去最后一页
                  this.$goRoute('/result')
                }
              }else {
                alert('请给出您的答案')
              }

          }
        }

    }
</script>

<style scoped>

</style>
