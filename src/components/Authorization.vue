<template>
  <div class="form-group d-flex align-items-center" style="flex-direction: column;">
    <img style="max-width: 10%" src="../assets/passwordPicture.png" alt="Картинка авторизации не загрузилась">
    <h1 class="display-4" style="color: #57AD56">Авторизация</h1>
    <div class="col-4 pb-3">
      <input type="text" class="form-control mb-3" id="inputLogin" v-model="login" placeholder="Логин">
      <input type="password" class="form-control" id="inputPassword" v-model="password" placeholder="Пароль">
    </div>
      <router-link to="/listOfRecipes">
        <button @click="authorizationBtnClick" class="btn btn-outline-success" type="submit">Войти</button>
      </router-link>
    <router-link to="/registration" class="pt-3 form-control border-left-0 border-right-0 border-top-0"
       style="color: #938D8D; max-width: 15%; text-align: center">
      Создать аккаунт
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Authorization",
  data() {
    return {
      login: '',
      password: ''
    }
  },
  methods: {
    authorizationBtnClick() {
      this.$store.dispatch('authorizeUser', {
        username: this.login,
        password: this.password
      })
    }
  }
}
</script>

<style scoped>

</style>