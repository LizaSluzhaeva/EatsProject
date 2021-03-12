<template>
  <div>
      <RecipeImage v-bind:recipeImage="recipe.image"></RecipeImage>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import RecipeImage from "@/components/RecipeImage";

export default {
  name: "RecipeShort",
  props: ['recipe'],
  components: {
    RecipeImage
  }
}
</script>

<style scoped>

</style>