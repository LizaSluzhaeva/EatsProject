<template>
  <div class="p-4">
    <div class="card" style="width: 15rem;">
      <img style="max-height: 270px" :src="require(`@/assets/${recipe.image}`)" alt="Не удалось загрузить изображение">
      <h4 class="p-2 mb-0 "> {{ recipe.name }} </h4>
      <div class="p-2">
        <span class="card-text" v-for="ingredient in recipe.ingredients" :key="ingredient">
          {{ ingredient }},
        </span>
      </div>
      <div class="d-flex flex-row justify-content-end pr-3 ">
        <button class="btn btn-outline-success w-50" type="submit">Добавить</button>
      </div>
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: "RecipeShort",
  props: ['recipe'],
  components: {
  }
}

</script>

<style scoped>

</style>