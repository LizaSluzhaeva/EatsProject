<template>
  <div class="d-flex flex-row justify-content-center mb-5">
    <div style="width: 70%">
      <div class="d-flex flex-row justify-content-around pl-5 pt-3">
        <h1 style="max-width: 40%; text-align: center" class="border-bottom border-success">Мои рецепты</h1>
        <div class="pt-3">
          <button class="btn btn-outline-success w-100" type="submit">Создать рецепт</button>
        </div>
      </div>
      <div v-for="recipe in recipes" :key="recipe">
        <RecipeDetail v-bind:recipe="recipe"></RecipeDetail>
      </div>
    </div>
    <div class="d-flex flex-column justify-content-end">
      <div class="pr-5 pb-4">
        <button class="btn btn-outline-success" style="width: 170px" type="submit">Редактировать рецепт</button>
      </div>
      <div class="pb-3">
        <button class="btn btn-outline-danger" style="width: 170px" type="submit">Удалить рецепт</button>
      </div>
    </div>
  </div>
</template>

<script>
import RecipeDetail from "@/components/RecipeDetail";

export default {
  name: "ListOfCustomRecipes",
  components: {
    RecipeDetail
  },
  data() {
    return {
      recipes: [
        {
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
      ]
    }
  }
}
</script>

<style scoped>

</style>