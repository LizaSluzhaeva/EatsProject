<template>
  <div id="app" class="d-flex  justify-content-between" style="flex-direction: column; height: 100vh;">
    <TopBar></TopBar>
    <router-view/>
    <BottomBar></BottomBar>
  </div>
</template>
<script>
import TopBar from "@/components/TopBar";
import BottomBar from "@/components/BottomBar";


export default {
  name: 'App',
  components: {
    TopBar,
    BottomBar
  }
}
</script>

<style>

</style>
