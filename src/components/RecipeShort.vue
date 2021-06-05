<template>
  <div class="p-4">
    <ModalRecipeDetail :someProps="isModalRecipeDetailVisible" @updateParent="closeModal" v-if="isModalRecipeDetailVisible"
                       v-bind:recipe="recipe"> </ModalRecipeDetail>
    <ModalAddRecipeToSelection :someProps="isModalAddRecipeToSelVisible" @addRecipeToSelections="addRecipeToSelections" @updateParent="closeModal" v-if="isModalAddRecipeToSelVisible && (this.getUserToken !== '')"></ModalAddRecipeToSelection>
    <div class="card" style="min-width: 350px; max-width: 350px">
      <div @click="cardClick" class="w-100">
        <img style="max-height: 270px; max-width: 350px" :src="require(`@/assets/${recipe.photo}`)" alt="Не удалось загрузить изображение">
        <h4 class="p-2 mb-0 "> {{ recipe.name }} </h4>
        <div class="p-2">
          <span class="card-text" v-for="(ingredient,id) in recipe.ingredientDtoList" :key="id">
            {{ ingredient.productName }}
          </span>
        </div>
      </div>
      <div class="d-flex flex-row justify-content-end p-3 ">
        <button @click="addBtnClick" class="btn btn-outline-success w-50" type="submit">Добавить</button>
      </div>
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import ModalRecipeDetail from "@/components/ModalRecipeDetail";
import ModalAddRecipeToSelection from "@/components/ModalAddRecipeToSelection";
import {mapGetters} from 'vuex'

export default {
  name: "RecipeShort",
  props: ['recipe'],
  components: {
    ModalRecipeDetail,
    ModalAddRecipeToSelection
  },
  computed: mapGetters(['getUserSelectionIdByNameOfSelection','getUserToken','hasRecipeInSelection']),
  data() {
    return {
      isModalAddRecipeToSelVisible: false,
      isModalRecipeDetailVisible: false
    }
  },
  methods: {
    closeModal() {
      this.isModalRecipeDetailVisible = false;
      this.isModalAddRecipeToSelVisible = false;
    },
    cardClick() {
      this.isModalAddRecipeToSelVisible = false;
      this.isModalRecipeDetailVisible = true;
    },
    addBtnClick() {
      this.isModalRecipeDetailVisible = false;
      this.isModalAddRecipeToSelVisible = true;
    },
    async addRecipeToSelections(arrayOfSelectionsNames) {
      for (let i = 0; i < arrayOfSelectionsNames.length; i++) {
        const selectionId = this.getUserSelectionIdByNameOfSelection(arrayOfSelectionsNames[i])
        if (!this.hasRecipeInSelection(this.recipe.id, selectionId)) {
          await fetch("http://localhost:8081/collection/addRecipe", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8',
              'Authorization': this.getUserToken
            },
            body: JSON.stringify({
              recipeId: this.recipe.id,
              collectionId: selectionId
            })
          });
          await this.$store.dispatch('addRecipeToSelection', {
            recipe: this.recipe,
            selectionId: selectionId
          })
        }
      }
    }
  }
}

</script>

<style scoped>

</style>