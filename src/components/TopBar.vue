<template>
  <div>
    <b-navbar type="light" variant="light" class="d-flex justify-content-between border-bottom border-top border-success">
      <div class="d-flex flex-row">
        <b-navbar-brand href="#">
          <router-link to="/listOfRecipes">
            <img src="../../pictures/logo.svg" alt="Не удалось загрузить изображение">
          </router-link>
        </b-navbar-brand>
        <b-navbar-nav v-show="getUserId !== undefined">
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
        <form v-show="getUserId !== undefined">
          <router-link to="/">
            <button @click="exitBtnClick" class="btn btn-outline-success" type="submit">Выйти</button>
          </router-link>
          <router-link v-if="isUserAdmin" to="/personalMenu">
            <img src="../../pictures/icons8-личный-календарь-50.png" alt="Не удалось загрузить изображение" class="ml-4" style="width: 2.5em; height: 2.5em">
          </router-link>
        </form>
      <router-link v-if="this.getUserId === undefined" to="/">
        <button class="btn btn-outline-success" type="submit">Войти</button>
      </router-link>
    </b-navbar>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {mapGetters} from 'vuex'

export default {
  name: "TopBar",
  computed: mapGetters(['getUserId', 'isUserAdmin']),
  methods: {
    exitBtnClick() {
      this.$store.dispatch('logoutUser')
    }
  }
}

</script>


<style scoped>

</style>