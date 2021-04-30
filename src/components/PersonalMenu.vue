<template>
  <div class="">
    <div class="btn-group-vertical ml-5 w-25">
      <button @click="changeLoginClick" class="btn btn-outline-secondary" type="submit">Сменить логин</button>
      <button @click="changePasswordClick" class="btn btn-outline-secondary border-top-0" type="submit">Сменить пароль</button>
      <button @click="changeAdminClick"  v-if="user.isAdmin" class="btn btn-outline-secondary border-top-0" type="submit">Администрирование</button>
    </div>
    <ChangeLogin  v-if="isChangeLoginClick"></ChangeLogin>
    <ChangePassword v-if="isChangePasswordClick"></ChangePassword>
    <Administration v-if="isAdministrationClick"></Administration>
  </div>

</template>

<script>
import ChangePassword from "@/components/ChangePassword";
import ChangeLogin from "@/components/ChangeLogin";
import Administration from "@/components/Administration";

export default {
  name: "PersonalMenu",
  props: ['loginProps'],
  components: {
    ChangeLogin,
    ChangePassword,
    Administration
  },
  data() {
    return {
      user: {
        isAdmin: true
      },
      isChangeLoginClick: false,
      isChangePasswordClick: false,
      isAdministrationClick: false
    }
  },
  methods: {
    changeLoginClick() {
      this.isChangePasswordClick = false;
      this.isAdministrationClick = false;
      this.isChangeLoginClick = true;
    },
    changePasswordClick() {
      this.isAdministrationClick = false;
      this.isChangeLoginClick = false;
      this.isChangePasswordClick = true;
    },
    changeAdminClick() {
      this.isChangeLoginClick = false;
      this.isChangePasswordClick = false;
      this.isAdministrationClick = true;
    }
  }
}
</script>

<style scoped>

</style>