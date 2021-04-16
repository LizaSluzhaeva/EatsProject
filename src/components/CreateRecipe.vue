<template>
  <div>
    <div class="d-flex flex-row justify-content-center">
      <h1 style="text-align: center" class="text-success border-bottom border-success w-50">Добавить рецепт</h1>
    </div>
    <div class="m-4">
      <input class="form-control w-25" id="exampleFormControlInput1" placeholder="Название">
    </div>
    <div class="ml-4 mr-4">
      <h5 class="text-secondary">Ингредиенты</h5>
        <table class="table align-middle table-bordered border-secondary">
          <thead>
          <tr>
            <td>
              Наименование
            </td>
            <td>
              Количество
            </td>
            <td>
              Ед. измерения
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
      <div class="d-flex flex-row justify-content-center">
        <button type="button" class="btn btn-success" style="border-radius: 45px">Добавить ингредиент</button>
      </div>
    </div>
    <div class="m-4">
      <label for="exampleFormControlTextarea1" class="form-label">Приготовление</label>
      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
    <div class="m-4 w-50">
      <label for="formFile" class="form-label">Default file input example</label>
      <input class="form-control" type="file" id="formFile">
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateRecipe"
}
</script>

<style scoped>

</style>