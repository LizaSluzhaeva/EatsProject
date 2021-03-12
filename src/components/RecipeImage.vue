<template>
  <div>
    <img :src="require(`@/assets/${recipeImage}`)" alt="Не удалось загрузить изображение">
  </div>
</template>

<script>
export default {
  name: "RecipeImage",
  props: ['recipeImage']
}
</script>

<style scoped>

</style>