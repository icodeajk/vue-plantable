<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h1 class="text-center">已规划时间</h1>
    </div>

    <div class="panel-body">
      <h1 class="text-center">{{ time }} 小时</h1>
    </div>

  </div>
</template>
<script>
    export default {
      name : 'Sidebar',
      computed: {
        time() {
          return this.$store.state.totalTime
        }
      }
    }
</script>
