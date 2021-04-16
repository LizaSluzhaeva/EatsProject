<template>
  <div>
    <div class="d-flex flex-row justify-content-center">
      <h1 style="text-align: center" class="text-success border-bottom border-success w-50">Редактировать рецепт</h1>
    </div>
    <div class="m-4">
      <input class="form-control w-25" id="exampleFormControlInput1" :placeholder="recipe.name">
    </div>
    <div class="ml-4 mr-4">
      <h5 class="text-secondary">Ингредиенты</h5>
      <table class="table table-bordered border-secondary">
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
        <tr class="border-right-0" v-for="ingredient in recipe.ingredients" :key="ingredient">
          <td>{{ingredient.product.name}}</td>
          <td>{{ingredient.numberOfProduct}}</td>
          <td class="d-flex flex-row justify-content-between">
            {{ingredient.unitOfMeasurement}}
            <button type="button" class="btn text-danger">
              X
            </button>
          </td>
        </tr>
        </tbody>
      </table>
      <div class="d-flex flex-row justify-content-center">
        <button type="button" class="btn btn-success" style="border-radius: 45px">Добавить ингредиент</button>
      </div>
    </div>
    <div class="m-4">
      <label for="exampleFormControlTextarea1" class="form-label">Приготовление</label>
      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" :placeholder="recipe.instruction"></textarea>
    </div>
    <div class="m-4 w-50">
      <label for="formFile" class="form-label">Загрузить новое изображение</label>
      <input class="form-control" type="file" id="formFile">
    </div>
    <div class="d-flex flex-row justify-content-around pt-2 mb-5">
      <button type="button" class="btn btn-success">Добавить</button>
      <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Отмена</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditRecipe",
  data() {
    return {
      recipe: {
        name: 'Паста с креветками',
        image: 'паста.jpg',
        ingredients: [
          {
            product: {
              name: "Креветки"
            },
            numberOfProduct: 200,
            unitOfMeasurement: 'грамм'
          },
          {
            product: {
              name: "Паста"
            },
            numberOfProduct: 100,
            unitOfMeasurement: 'грамм'
          },
          {
            product: {
              name: "Чеснок"
            },
            numberOfProduct: 1,
            unitOfMeasurement: 'штука'
          }
        ],
        instruction: 'Почистить креветки и чеснок. На оливковом масле пожарить чеснок, добавить креветки. Добавить ' +
            'отвареные макароны, тушить 5 минут'
      }
    }
  }
}
</script>

<style scoped>

</style>