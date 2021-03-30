<template>
  <div id="app">
    <!-- 除了detail组件  <keep-alive exclude="Detail"> 其它组件都会做缓存-->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
