<template>
  <div>
    <b-navbar type="light" variant="light" class="d-flex justify-content-between border-bottom border-top border-success">
      <div class="d-flex flex-row">
        <b-navbar-brand href="#">
          <router-link to="/listOfRecipes">
            <img src="../../pictures/logo.svg" alt="Не удалось загрузить изображение">
          </router-link>
        </b-navbar-brand>
        <b-navbar-nav v-show="users.length !== 0">
          <b-nav-item href="#" class="border-left" >
            <router-link style="color: #938D8D;" to="/collections">
              Мои подборки
            </router-link>
          </b-nav-item>
          <b-nav-item href="#" class="border-left">
            <router-link style="color: #938D8D;" to="/myRecipes">
              Мои рецепты
            </router-link>
          </b-nav-item>
        </b-navbar-nav>
      </div>
        <form v-show="users.length !== 0">
          <router-link class="p-1 border-success border rounded " to="/" style="color: #57AD56; font-size: 20px; text-align: center">Выйти</router-link>
          <router-link to="/personalMenu">
            <img src="../../pictures/icons8-личный-календарь-50.png" alt="Не удалось загрузить изображение" class="ml-4" style="width: 2.5em; height: 2.5em">
          </router-link>
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
        {
          login: "Ivan66",
          password: "777",
          id: 1,
          name: "Ivan",
          Surname:"Van",isAdmin: false
        }
      ]
    }
  }
}

</script>


<style scoped>

</style>