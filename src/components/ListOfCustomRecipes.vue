<template>
  <div>
    <div class="d-flex flex-row justify-content-center mb-5">
      <div style="width: 70%">
        <div class="d-flex flex-row justify-content-around pl-5 pt-3">
          <h1 style="max-width: 40%; text-align: center" class="border-bottom border-success">Мои рецепты</h1>
          <router-link class="mt-3" to="/createRecipe">
            <button class="btn btn-outline-success" type="submit">Создать рецепт</button>
          </router-link>
        </div>
        <div v-for="recipe in recipes" :key="recipe" class="d-flex flex-row  justify-content-center">
          <RecipeDetail v-bind:recipe="recipe"></RecipeDetail>
          <div class="d-flex flex-column justify-content-end pl-4">
            <router-link class="mb-2" to="/editRecipe">
              <button class="btn btn-outline-success" type="submit">Редактировать рецепт</button>
            </router-link>
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