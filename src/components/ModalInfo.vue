<template>
  <div class="modal mb-4" tabindex="-1" style="display: block" id="closeRecipeDetailModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Информация о проекте</h5>
          <button @click="closeBtnClick" type="button" class="btn" data-bs-dismiss="modal" aria-label="Close">X</button>
        </div>
        <div class="mb-2 modal-body d-flex flex-row justify-content-between">
          <p>Наше приложение позволяет вам делать подборки из любимых рецептов, фильтровать рецепты по типам, добавлять
            свои рецепты в общий пул рецептов и при желании делится ими с другими пользователями</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalInfo",
  data() {
    return {
      isModalInfoVisible: false
    }
  },
  methods: {
    closeBtnClick() {
      this.$emit('updateParent', {
        isModalInfoVisible: this.isModalInfoVisible
      })
    }
  }
}
</script>

<style scoped>

</style>