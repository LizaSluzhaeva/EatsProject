<template>
  <div id="admin" class="btn-group-vertical ml-5 w-25">
    <button @click="showTableRecipe" class="btn btn-outline-success" type="submit">Рецепты</button>
    <button @click="showTableCollections" class="btn btn-outline-success border-top-0" type="submit">Подборки</button>
    <button @click="showTableUsers" class="btn btn-outline-success border-top-0" type="submit">Пользователи</button>
    <div v-if="isCollectionsTableVisible || isUsersTableVisible || isRecipeTableVisible">
      <table v-if="isRecipeTableVisible" class="table mt-5 table-bordered border-secondary">
        <thead>
        <tr>
          <td>
            Рецепт
          </td>
          <td>
            Создатель
          </td>
          <td>
            Ингредиенты
          </td>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>...</td>
          <td>...</td>
          <td>...</td>
        </tr>
        </tbody>
      </table>
      <table v-if="isUsersTableVisible" class="table mt-5 table-bordered border-secondary">
        <thead>
        <tr>
          <td>
            Пользователь
          </td>
          <td>
            Рецепты
          </td>
          <td>
            Подборки
          </td>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>...</td>
          <td>...</td>
          <td>...</td>
        </tr>
        </tbody>
      </table>
      <table v-if="isCollectionsTableVisible" class="table mt-5 table-bordered border-secondary">
        <thead>
        <tr>
          <td>
            Подборка
          </td>
          <td>
            Рецепты
          </td>
          <td>
            Приватность
          </td>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>...</td>
          <td>...</td>
          <td>...</td>
        </tr>
        </tbody>
      </table>
      <div class="d-flex flex-row justify-content-around">
        <button type="button" class="btn btn-success">Сохранить</button>
        <button @click="isRecipeTableVisible = false; isUsersTableVisible=false; isCollectionsTableVisible=false"
                type="button" class="btn btn-danger" data-bs-dismiss="modal">Отмена</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Administration",
  data() {
    return {
      isRecipeTableVisible: false,
      isCollectionsTableVisible: false,
      isUsersTableVisible: false,
    }
  },
  methods: {
    showTableRecipe() {
      this.isCollectionsTableVisible = false;
      this.isUsersTableVisible = false;
      this.isRecipeTableVisible = true;
    },
    showTableUsers() {
      this.isCollectionsTableVisible = false;
      this.isRecipeTableVisible = false;
      this.isUsersTableVisible = true;
    },
    showTableCollections() {
      this.isUsersTableVisible = false;
      this.isRecipeTableVisible = false;
      this.isCollectionsTableVisible = true;
    }
  }
}
</script>


<style scoped>

</style>