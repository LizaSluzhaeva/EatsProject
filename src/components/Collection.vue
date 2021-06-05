<template>
  <div class="p-4" style="max-width: 70%">
    <div class="card d-flex flex-row pl-3 justify-content-between">
      <div v-if="collection.recipeFullDtos[0] !== undefined">
        <img style="max-width: 270px; max-height: 280px" :src="require(`@/assets/${collection.recipeFullDtos[0].photo}`)" alt="Не удалось загрузить изображение">
      </div>
      <div class="pt-3">
        <h4 class="p-2 mb-0 "> {{ collection.collectionName }} </h4>
        <div class="card-text" v-for="(recipe,id) in collection.recipeFullDtos" :key="id">
          {{ recipe.name }}
        </div>
      </div>
      <div class="pt-5 pr-3 pb-3 d-flex flex-column justify-content-end">
        <router-link to="/recipesInCollection">
          <button @click="openListOfRecipesBtn" class="btn btn-outline-success" type="submit">Открыть список рецептов</button>
        </router-link>
        <div class="mt-2">
          <button @click="deleteCollection" class="btn btn-outline-danger w-100" type="submit">Удалить подборку</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "Collection",
  props: ['collection'],
  computed: mapGetters(['getUserToken']),
  methods: {
    deleteCollection() {
      this.$store.dispatch("deleteCollection", { id: this.collection.id, token: this.getUserToken})
    },
    openListOfRecipesBtn() {
      this.$store.dispatch("openCollection", this.collection.id)
    }
  }
}
</script>

<style scoped>

</style>