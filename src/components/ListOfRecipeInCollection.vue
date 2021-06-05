<template>
  <div>
    <div class="d-flex flex-row justify-content-center">
      <h1 class="border-bottom border-success">{{collection.collectionName }}</h1>
    </div>
    <div v-for="recipe in collection.recipeFullDtos" :key="recipe.id" class="w-75 d-flex flex-row justify-content-center">
      <RecipeDetail v-bind:recipe="recipe">{{collection}}</RecipeDetail>
      <div class="mb-3 ml-3 d-flex flex-column justify-content-end w-25">
        <button @click=deleteRecipeBtn(recipe.id) class="btn btn-outline-danger" type="submit">Удалить рецепт</button>
      </div>
    </div>
  </div>
</template>

<script>
import RecipeDetail from "@/components/RecipeDetail"

export default {
  name: "ListOfRecipeInCollection",
  components: {
    RecipeDetail
  },
  computed: {
    id: function () {
      return this.$store.getters.getEditingCollectionId
    },
    collection: function () {
      return this.$store.getters.getCollectionById(this.id)
    },
    getUserToken: function () {
      return this.$store.getters.getUserToken
    }
  },
  methods: {
    deleteRecipeBtn(recipeId) {
      this.$store.dispatch('deleteRecipeFromSelection', { token: this.getUserToken, collectionId: this.id, recipeId: recipeId} )
    }
  }
}
</script>

<style scoped>

</style>