<template>
  <div>
    请问您要上初几？
    <ul>
      <li v-for="item in items"><a @click="$goRoute(item.path)">{{item.name}}</a></li>
    </ul>
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    name: 'chuzhong',
    data: function () {
      return {
        items:[
          {
            name: '初一',
            path: '/zhongxue/chuzhong/chuyi'
          },
          {
            name: '初二',
            path: '/zhongxue/chuzhong/chuer'
          },
          {
            name: '初三',
            path: '/zhongxue/chuzhong/chusan'
          },
        ]
      }
    }
  }

</script>
<style>
  ul,li{list-style: none}
  itemWrapper{display: flex}
  li{display: inline;margin-right:20px;border:1px solid #ccc;padding:10px}
  li>a{cursor: pointer}
</style>
