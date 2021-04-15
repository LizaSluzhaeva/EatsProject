<template>
  <div class="mt-5 ml-5" style="width: 80%">
    <div class="mb-2 d-flex flex-row justify-content-between">
      <img style="max-height: 270px; max-width: 308px" :src="require(`@/assets/${recipe.image}`)" alt="Не удалось загрузить изображение">
      <div class="flex-column ml-4">
        <h2>{{ recipe.name }}</h2>
        <h6 class="mb-2 mt-2">Ингредиенты</h6>
        <p class="m-0" v-for="ingredient in recipe.ingredients" :key="ingredient">
          {{ ingredient.product.name }} - {{ ingredient.numberOfProduct }} {{ ingredient.unitOfMeasurement }}
        </p>
        <h6 class="mt-2">Приготовление</h6>
        <p>
          {{ recipe.instruction }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecipeDetail",
  props: ["recipe"]
}
</script>

<style scoped>

</style>