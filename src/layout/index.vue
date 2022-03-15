<template>
  <el-container>
    <el-aside width="200px">
      <app-aside></app-aside>
    </el-aside>
    <el-container>
      <el-header>
        <app-header />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import AppAside from './components/app-aside.vue'
import AppHeader from './components/app-header.vue'
export default {
  components: {
    AppAside,
    AppHeader
  }
}

</script>
<style lang='scss' scoped>
.el-container{
  min-height: 100vh;
  min-width: 980px;
}
</style>
