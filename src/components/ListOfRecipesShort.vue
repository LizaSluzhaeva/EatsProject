<template>
  <div class="d-flex flex-row">
    <RecipeShort v-bind:recipe="recipes[0]"></RecipeShort>
    <RecipeShort v-bind:recipe="recipes[1]"></RecipeShort>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import RecipeShort from "@/components/RecipeShort";

export default {
name: "ListOfRecipesShort",
  props: ['recipes'],
  components: {
    RecipeShort
  }
}
</script>

<style scoped>

</style>