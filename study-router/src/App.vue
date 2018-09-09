<template>
  <div id="app">
    <div class="itemWrapper">
      <ul>
        <li v-for="item in items">
          <a @click="$goRoute(item.path)">{{item.name}}</a>
        </li>
      </ul>
    </div>

    <router-view/>

    computed:
    <input type="text" v-model="aa">
    <div>*2 = {{aaDouble}}</div>
    <div>+1 = {{aaPlus}}</div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data: function(){
      return {
        items: [
          {
            name: '小学',
            path:'/xiaoxue'
          },
          {
            name: '中学',
            path:'/zhongxue'
          },
          {
            name: '大学',
            path:'/daxue'
          }
        ],
        aa: 10,
      }
    },
    computed:{
      aaDouble: function(){
        console.log('aaDouble');
        console.log(this.aa);
        return this.aa * 2
      },

      aaPlus: function(){
        console.log('aaPlus');
        console.log(this.aa);
        return (this.aa - 0)+ 1
      }
    }
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

ul,li{list-style: none}
itemWrapper{display: flex}
li{display: inline;margin-right:20px;border:1px solid #ccc;padding:10px}
li>a{cursor: pointer}
</style>
