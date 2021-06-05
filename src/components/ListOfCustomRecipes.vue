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
        <div v-for="recipe in getCustomRecipes" :key="recipe.id" class="d-flex flex-row  justify-content-center">
          <RecipeDetail v-bind:recipe="recipe"></RecipeDetail>
          <div class="d-flex flex-column justify-content-end pl-4">
            <router-link class="mb-2" to="/editRecipe">
              <button @click=editRecipe(recipe.id) class="btn btn-outline-success" type="submit">Редактировать рецепт</button>
            </router-link>
            <div class="pb-3">
              <button @click=deleteRecipe(recipe.id) class="btn btn-outline-danger" style="width: 170px" type="submit">Удалить рецепт</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RecipeDetail from "@/components/RecipeDetail";
import {mapGetters} from 'vuex'

export default {
  name: "ListOfCustomRecipes",
  components: {
    RecipeDetail
  },
  mounted() {
    if (this.getUserId === undefined) {
      window.location = 'http://localhost:8080'
    }
  },
  computed: mapGetters(['getCustomRecipes','getUserId', 'getUserToken']),
  methods: {
    deleteRecipe(id) {
      this.$store.dispatch('deleteCustomRecipe', { id: id, token: this.getUserToken})
    },
    editRecipe(id) {
      this.$store.dispatch('setEditingRecipeId', id)
    }
  }
}
</script>

<style scoped>

</style>