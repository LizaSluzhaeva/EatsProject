<template>
  <div class="form-group d-flex align-items-center" style="flex-direction: column;">
    <img style="max-width: 10%" src="../assets/passwordPicture.png" alt="Картинка авторизации не загрузилась">
    <h1 class="display-4" style="color: #57AD56">Регистрация</h1>
    <div class="col-4 pb-3">
      <input type="password" class="form-control mb-3" id="inputName" placeholder="Имя">
      <input type="password" class="form-control mb-3" id="inputSurname" placeholder="Фамилия">
      <input type="password" class="form-control mb-3" id="inputLogin" placeholder="Логин">
      <input type="password" class="form-control" id="inputPassword" placeholder="Пароль">
    </div>
    <button class="btn btn-outline-success col-1" type="submit">Создать</button>
    <p type="text" href="#" class="pt-3 form-control border-left-0 border-right-0 border-top-0"
       style="color: #938D8D; max-width: 15%; text-align: center">
      Уже есть аккаунт
    </p>
  </div>
</template>

<script>
export default {
name: "Registration"
}
</script>

<style scoped>

</style>