<template>
  <div>
    <b-navbar type="light" variant="light" class="d-flex justify-content-between">
      <div class="d-flex flex-row">
        <b-navbar-brand href="#"><img src="../../pictures/logo.png"></b-navbar-brand>
        <b-navbar-nav>
          <b-nav-item href="#" class="border-left">Мои подборки</b-nav-item>
          <b-nav-item href="#" class="border-left">Мои рецепты</b-nav-item>
        </b-navbar-nav>
      </div>
        <form>
          <button class="btn btn-outline-success" type="submit">Выйти</button>
          <img src="../../pictures/icons8-личный-календарь-50.png" class="ml-4" style="width: 2.5em; height: 2.5em">
        </form>
    </b-navbar>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
name: "TopBar"
}
</script>

<style scoped>

</style>