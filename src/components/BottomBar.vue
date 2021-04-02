<template>
  <div>
      <b-navbar type="dark" variant="dark" class="d-flex justify-content-between">
        <div class="d-flex flex-column w-100">
          <b-navbar-brand href="#" class="pb-2"><img src="../../pictures/logo.svg" alt="Не удалось загрузить изображение"></b-navbar-brand>
          <b-navbar-nav class="border-top d-flex flex-row justify-content-around">
            <b-nav-item href="#">О проекте</b-nav-item>
            <b-nav-item href="#">Помощь</b-nav-item>
          </b-navbar-nav>
        </div>
      </b-navbar>
    </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
name: "BottomBar"
}
</script>

<style scoped>

</style>