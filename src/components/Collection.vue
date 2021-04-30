<template>
  <div class="p-4" style="max-width: 70%">
    <div class="card d-flex flex-row pl-3 justify-content-between">
      <img style="max-width: 270px; max-height: 280px" :src="require(`@/assets/${collection.image}`)" alt="Не удалось загрузить изображение">
      <div class="pt-3">
        <h4 class="p-2 mb-0 "> {{ collection.name }} </h4>
        <div class="card-text" v-for="recipe in collection.recipes" :key="recipe">
          {{ recipe.name }},
        </div>
      </div>
      <div class="pt-5 pr-3 pb-3 d-flex flex-column justify-content-end">
        <router-link to="/recipesInCollection">
          <button class="btn btn-outline-success" type="submit">Открыть список рецептов</button>
        </router-link>
        <div class="mt-2">
          <button class="btn btn-outline-danger w-100" type="submit">Удалить подборку</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Collection",
  props: ['collection']
}
</script>

<style scoped>

</style>