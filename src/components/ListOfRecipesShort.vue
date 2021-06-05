<template>
  <div>
    <div class="gridBody">
      <RecipeShort v-for="recipe in recipes" :key="recipe.id" v-bind:recipe="recipe"></RecipeShort>
    </div>
    <ButtonsToScroll @updateFirstId="updateId"></ButtonsToScroll>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import RecipeShort from "@/components/RecipeShort";
import ButtonsToScroll from "@/components/ButtonsToScroll";
import {mapGetters} from 'vuex'

export default {
  name: "ListOfRecipesShort",
  data() {
    return {
      firstId: 1,
      recipes: []
    }
  },
  components: {
    RecipeShort,
    ButtonsToScroll
  },
  computed: mapGetters(['getUserToken']),
   async mounted() {
       const res = await fetch(
          'http://localhost:8081/recipe/listOfRecipes'+'/1',{
            method: 'GET',
            'Authorization': this.getUserToken
          }
      )
    this.recipes = await res.json()
  },
  methods: {
    async updateId(newId) {
      this.firstId = newId
      const res = await fetch(
          'http://localhost:8081/recipe/listOfRecipes/'+ (newId-1), {
            method: 'GET',
            'Authorization': this.getUserToken
          }
      )
      this.recipes = await res.json()
    }
  }
}
</script>

<style scoped>
.gridBody {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 12px;
  grid-row-gap: 6px;
}
</style>