<template>
  <div>
    <b-navbar type="light" variant="light" class="d-flex justify-content-between border-bottom border-top border-success">
      <div class="d-flex flex-row">
        <b-navbar-brand href="#"><img src="../../pictures/logo.svg" alt="Не удалось загрузить изображение"></b-navbar-brand>
        <b-navbar-nav v-show="users.length !== 0">
          <b-nav-item href="#" class="border-left" >Мои подборки</b-nav-item>
          <b-nav-item href="#" class="border-left">Мои рецепты</b-nav-item>
        </b-navbar-nav>
      </div>
        <form v-show="users.length !== 0">
          <button class="btn btn-outline-success" type="submit">Выйти</button>
          <img src="../../pictures/icons8-личный-календарь-50.png" alt="Не удалось загрузить изображение" class="ml-4" style="width: 2.5em; height: 2.5em">
        </form>
    </b-navbar>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: "TopBar",
  data() {
    return {
      users: [
        // {
        //   login: "Ivan66",
        //   password: "777",
        //   id: 1,
        //   name: "Ivan",
        //   Surname:"Van",isAdmin: false
        // }
      ]
    }
  }
}

</script>


<style scoped>

</style>