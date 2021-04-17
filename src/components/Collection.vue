<template>
  <div class="p-4" style="max-width: 70%">
    <div class="card d-flex flex-row pl-3 justify-content-between">
      <img style="max-width: 270px" :src="require(`@/assets/${collection.image}`)" alt="Не удалось загрузить изображение">
      <div class="pt-3">
        <h4 class="p-2 mb-0 "> {{ collection.name }} </h4>
        <div class="card-text" v-for="recipe in collection.recipes" :key="recipe">
          {{ recipe.name }},
        </div>
      </div>
      <div class="pt-5 pr-3 pb-3 d-flex flex-column justify-content-end">
        <div class="border border-success rounded">
          <router-link to="/recipesInCollection" style="color: #57AD56; font-size: 20px" class="p-3">
            Открыть список рецептов
          </router-link>
        </div>
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