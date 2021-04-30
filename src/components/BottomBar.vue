<template>
  <div>
      <ModalHelp v-if="isModalHelpVisible" @updateParent="closeModalHelp"></ModalHelp>
      <ModalInfo v-if="isModalInfoVisible" @updateParent="closeModalInfo"></ModalInfo>
      <b-navbar type="dark" variant="dark" class="d-flex justify-content-between">
        <div class="d-flex flex-column w-100">
          <b-navbar-brand href="#" class="pb-2"><img src="../../pictures/logo.svg" alt="Не удалось загрузить изображение"></b-navbar-brand>
          <b-navbar-nav class="border-top d-flex flex-row justify-content-around">
            <b-nav-item @click="isModalInfoVisible = true" >О проекте</b-nav-item>
            <b-nav-item @click="isModalHelpVisible = true">Помощь</b-nav-item>
          </b-navbar-nav>
        </div>
      </b-navbar>
    </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import ModalHelp from "@/components/ModalHelp"
import ModalInfo from "@/components/ModalInfo";

export default {
  name: "BottomBar",
  components: {
    ModalHelp,
    ModalInfo
  },
  data() {
    return {
      isModalHelpVisible: false,
      isModalInfoVisible: false
    }
  },
  methods: {
    closeModalHelp() {
      this.isModalHelpVisible = false;
    },
    closeModalInfo() {
      this.isModalInfoVisible = false;
    }
  }
}
</script>

<style scoped>

</style>