<template>
  <div id="admin" class="btn-group-vertical ml-5 w-25">
    <button @click="showTableRecipe" class="mt-3 btn btn-outline-success" type="submit">Рецепты в подборках</button>
    <div>
      <table v-if="isRecipeTableVisible" class="table mt-5 table-bordered border-secondary">
        <thead>
        <tr>
          <td>
            Наименование подборки
          </td>
          <td>
            Рецепты
          </td>
        </tr>
        </thead>
        <tbody>
        <tr class="border-right-0" v-for="element in this.data" :key="element.id">
          <td v-if="element.collectionName !== ''">
            {{element.collectionName}}
          </td>
          <td>
            <p v-for="recipe in element.recipeFullDtos" :key="recipe.id">
              {{ recipe.name }}
            </p>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "Administration",
  computed: {
    recipesList: function () {
      const result = []
      for (const index in this.data) {
        const collection = this.data[index]
        for (const recipeIndex in collection.recipeFullDtos) {
          const recipe = collection.recipeFullDtos[recipeIndex]
          if (!result.some(r => r.id === recipe.id)) {
            result.push(recipe)
          }
        }
      }
      return result
    },
    ...mapGetters(['getUserToken', 'getUserId'])
  },
  async mounted() {
    if (this.getUserId === undefined) {
      window.location = 'http://localhost:8080'
    } else {
      const res = await fetch("http://localhost:8081/collection/findAll", {
        method: 'Get',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          'Authorization': this.getUserToken
        }
      });
      this.data = await res.json()
    }
  },
  data() {
    return {
      isRecipeTableVisible: false,
      isCollectionsTableVisible: false,
      isUsersTableVisible: false,
      data: undefined
    }
  },
  methods: {
    async showTableRecipe() {
      this.isCollectionsTableVisible = false;
      this.isUsersTableVisible = false;
      this.isRecipeTableVisible = true;
    },
    showTableCollections() {
      this.isUsersTableVisible = false;
      this.isRecipeTableVisible = false;
      this.isCollectionsTableVisible = true;
    }
  }
}
</script>


<style scoped>

</style>