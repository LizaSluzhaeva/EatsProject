<template>
  <div>
    <div class="d-flex flex-row justify-content-center mb-5">
      <div style="width: 70%">
        <div class="d-flex flex-row justify-content-around pl-5 pt-3">
          <h1 style="max-width: 40%; text-align: center" class="border-bottom border-success">Мои рецепты</h1>
          <div class="border border-success rounded pt-2">
            <router-link class="p-2" to="/createRecipe" style="color: #57AD56; font-size: 20px; text-align: center">Создать рецепт</router-link>
          </div>
        </div>
        <div v-for="recipe in recipes" :key="recipe" class="d-flex flex-row  justify-content-center">
          <RecipeDetail v-bind:recipe="recipe"></RecipeDetail>
          <div class="d-flex flex-column justify-content-end pl-4">
            <div class="border border-success rounded pl-3 pr-3 mb-3">
              <router-link class="w-25" to="/editRecipe" style="color: #57AD56; font-size: 18px; text-align: center">Редактировать рецепт</router-link>
            </div>
            <div class="pb-3">
              <button class="btn btn-outline-danger" style="width: 170px" type="submit">Удалить рецепт</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ButtonsToScroll></ButtonsToScroll>
  </div>
</template>

<script>
import RecipeDetail from "@/components/RecipeDetail";
import ButtonsToScroll from "@/components/ButtonsToScroll";

export default {
  name: "ListOfCustomRecipes",
  components: {
    RecipeDetail,
    ButtonsToScroll
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
        },
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