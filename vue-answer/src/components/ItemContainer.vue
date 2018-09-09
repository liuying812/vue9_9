<template>
  <div class="miantxt">
    <span>第 {{chooseItems.qindex + 1}} 题</span>
    <span>{{chooseItems.qname}}</span>
    <ul>
      <li  v-for="(op, index)　in chooseItems.qitems.qselects" @click="chooseLi(chooseItems.qindex,index,op.skey)"
           :class="{active: changeIndex == index }">
        {{ op.skey }} : {{op.stxt}}
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "itemcontainer",
        props: ['chooseItems'],
        data(){
          return {
            changeIndex : -1
          }
        },
        methods: {
          chooseLi(itemIndex,index, msg){
             /* this.$store.state.userselects[index] = msg
              console.log(this.$store.state.userselects)*/
              //改变当前用户选中li的颜色
              this.changeIndex = index

              this.$store.commit('collect_selects', {"itemIndex" : itemIndex,"msg" : msg })
          }
        },
        watch: {
          chooseItems(oldvalue, newvalue){
              this.changeIndex = -1
           }
        }

    }
</script>

<style lang="scss" scoped>
  $red : red;
  ul,li{list-style: none}
  li{display: inline;margin-right:20px;border:1px solid #ccc;padding:10px}
  .active{color: $red}
  li{cursor: pointer}
</style>
