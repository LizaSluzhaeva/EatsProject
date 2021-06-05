<template>
  <div class="form-group d-flex align-items-center" style="flex-direction: column;">
    <img style="max-width: 10%" src="../assets/passwordPicture.png" alt="Картинка авторизации не загрузилась">
    <h1 class="display-4" style="color: #57AD56">Регистрация</h1>
    <div class="col-4 pb-3">
      <input type="text" class="form-control mb-3" id="inputName" placeholder="Имя" v-model="name">
      <input type="text" class="form-control mb-3" id="inputSurname" placeholder="Фамилия" v-model="surname">
      <input type="text" class="form-control mb-3" id="inputLogin" placeholder="Логин" v-model="login">
      <input type="password" class="form-control" id="inputPassword" placeholder="Пароль" v-model="password">
    </div>
    <router-link to="/listOfRecipes">
      <button @click="registrateUser" class="btn btn-outline-success" type="submit">Создать</button>
    </router-link>
    <router-link to="/" class="pt-3 form-control border-left-0 border-right-0 border-top-0"
       style="color: #938D8D; max-width: 15%; text-align: center">
      Уже есть аккаунт
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Registration",
  data() {
    return {
      name: '',
      surname: '',
      login: '',
      password: ''
    }
  },
  methods: {
    registrateUser() {
      const user = {
        firstName: this.name,
        lastName: this.surname,
        username: this.login,
        password: this.password,
        role: 'USER',
        status: 'ACTIVE'
      }
      this.$store.dispatch('registrateUser', user)
    }
  }
}
</script>

<style scoped>

</style>