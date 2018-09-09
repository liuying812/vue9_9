<template>
  <div>
    请问您要上高几？
    <ul>
      <li v-for="item in items"><a @click="$goRoute(item.path)">{{item.name}}</a></li>
    </ul>
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    name: 'gaozhong',
    data: function () {
      return {
        items:[
          {
            name: '高一',
            path: '/zhongxue/gaozhong/gaoyi'
          },
          {
            name: '高二',
            path: '/zhongxue/gaozhong/gaoer'
          },
          {
            name: '高三',
            path: '/zhongxue/gaozhong/gaosan'
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
