<template>
  <div class="mt-5 ml-5" style="width: 80%">
    <div class="mb-2 d-flex flex-row justify-content-between">
      <div style="min-height: 250px; min-width: 390px">
        <img style="max-height: 250px; max-width: 350px" :src="require(`@/assets/${recipe.image}`)" alt="Не удалось загрузить изображение">
      </div>
      <div class="flex-column ml-4">
        <h2>{{ recipe.name }}</h2>
        <h6 class="mb-2 mt-3 alert-success w-50">Ингредиенты</h6>
        <p class="m-0" v-for="ingredient in recipe.ingredients" :key="ingredient">
          {{ ingredient.product.name }} - {{ ingredient.numberOfProduct }} {{ ingredient.unitOfMeasurement }}
        </p>
        <h6 class="mt-3 alert-success w-50">Приготовление</h6>
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