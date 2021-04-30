<template>
  <div class="modal mb-4" tabindex="-1" style="display: block" id="closeRecipeDetailModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Помощь</h5>
          <button @click="closeBtnClick" type="button" class="btn" data-bs-dismiss="modal" aria-label="Close">X</button>
        </div>
        <div class="mb-2 modal-body d-flex flex-row justify-content-between">
          <p>Для просмотре списка рецептов нажмите на логотоп "eats" в верхнем меню. Выбрав нужный рецепт, нажмите на
            кнопку "Добавить", для добавления соответствуюшего рецепта в нужную подборку. Посмотреть список своих подборок,
            создать новую подборку или удалить какую-либо из существующих вы можете по нажатии на "Мои подборки" в верхнем меню.
            Вы можете добавить свои личные рецепты по вкладке "Мои рецепты" в верхнем меню. По нажатию на логотип личного кабинета
            в правом углу верхнего меню вы перейдете к настройке ваших данных для авторизации.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Help",
  data() {
    return {
      isModalHelpVisible: false
    }
  },
  methods: {
    closeBtnClick() {
      this.$emit('updateParent', {
        isModalHelpVisible: this.isModalHelpVisible
      })
    }
  }
}
</script>

<style scoped>

</style>