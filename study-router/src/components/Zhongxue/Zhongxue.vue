<template>
  <div>
    请选择您要上的中学
    <ul>
      <li v-for="item in items"><a @click="$goRoute(item.path)">{{item.name}}</a></li>
    </ul>
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    name: 'zhongxue',
    data: function () {
      return {
        items:[
          {
            name: '初中',
            path: '/zhongxue/chuzhong'
          },
          {
            name: '高中',
            path: '/zhongxue/gaozhong'
          },
        ]
      }
    }
  }

</script>
