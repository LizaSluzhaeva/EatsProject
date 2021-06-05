<template>
  <div>
    <ModalEditIngredient @closeBtnClick="closeModal"
                         @updateIngredient="updateEditingIngredient"
                         v-if="isModalEditIngredientVisible" :ingredient="editingIngredient">
    </ModalEditIngredient>
    <div class="d-flex flex-row justify-content-center">
      <h1 style="text-align: center" class="text-success border-bottom border-success w-50">Редактировать рецепт</h1>
    </div>
    <div class="m-4">
      <input class="form-control w-25" id="exampleFormControlInput1" v-model="recipe.name">
    </div>
    <div class="ml-4 mr-4">
      <h5 class="text-secondary">Ингредиенты</h5>
      <table class="table table-bordered border-secondary">
        <thead>
        <tr>
          <td>
            Наименование
          </td>
          <td>
            Количество
          </td>
          <td>
            Ед. измерения
          </td>
        </tr>
        </thead>
        <tbody>
        <tr class="border-right-0" v-for="ingredient in recipe.ingredientDtoList" :key="ingredient.product_id">
          <td>{{ ingredient.productName }}</td>
          <td>{{ ingredient.quantity }}</td>
          <td class="d-flex flex-row justify-content-between">
            {{ ingredient.unit }}
            <button type="button" class="btn text-danger">
              <img @click="editIngredientBtnClick(ingredient)" src="../assets/edit.png" alt="">
            </button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="m-4">
      <label for="exampleFormControlTextarea1" class="form-label">Приготовление</label>
      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                v-model="recipe.instruction"></textarea>
    </div>
    <div class="m-4 w-50">
      <label for="formFile" class="form-label">Загрузить новое изображение</label>
      <input class="form-control" type="file" id="formFile">
    </div>
    <div class="d-flex flex-row justify-content-end pt-2 mb-5 mr-5">
      <router-link class="mb-2" to="/myRecipes">
        <button @click="editRecipe" type="button" class="btn btn-success">Изменить</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import ModalEditIngredient from "@/components/ModalEditIngredient"

export default {
  name: "EditRecipe",
  components: {ModalEditIngredient},
  mounted() {
    if (this.getUserId === undefined) {
      window.location = 'http://localhost:8080'
    }
  },
  computed: {
    id: function () {
      return this.$store.getters.getEditingCustomRecipeId
    },
    token: function () {
      return this.$store.getters.getUserToken
    },
    recipe: function () {
      return this.$store.getters.getCustomRecipeById(this.id)
    },
    getUserId: function () {
      return this.$store.getters.getUserId
    }
  },
  methods: {
    editIngredientBtnClick(ingredient) {
      this.editingIngredient = {
        id: ingredient.id,
        productName: ingredient.productName,
        quantity: ingredient.quantity,
        unit: ingredient.unit
      }
      this.isModalEditIngredientVisible = true
    },
    updateEditingIngredient() {
      const index = this.recipe.ingredientDtoList.findIndex(idt => idt.id === this.editingIngredient.id)
      const ingredient = this.recipe.ingredientDtoList[index]
      ingredient.productName = this.editingIngredient.productName
      ingredient.quantity = this.editingIngredient.quantity
      ingredient.unit = this.editingIngredient.unit
      this.closeModal()
    },
    closeModal() {
      this.isModalEditIngredientVisible = false
      this.editingIngredient = undefined
    },
    async editRecipe() {
      let jsonForSave
      this.recipe.photo = this.$el.querySelector("#formFile").files[0].name
      console.log(this.recipe.photo)
      if (this.recipe.photo !== undefined) {
        jsonForSave = {
          id: this.recipe.id,
          author_id: this.getUserId,
          instruction: this.recipe.instruction,
          is_private: false,
          name: this.recipe.name
        }
      } else {
        jsonForSave = {
          id: this.recipe.id,
          author_id: this.getUserId,
          instruction: this.recipe.instruction,
          is_private: false,
          name: this.recipe.name
        }
      }
      await fetch("http://localhost:8081/recipe/save", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          'Authorization': this.token
        },
        body: JSON.stringify(jsonForSave)
      });
      for (let i = 0; i < this.recipe.ingredientDtoList.length; i++) {
        const ingredient = this.recipe.ingredientDtoList[i]
        await fetch("http://localhost:8081/ingredient/delete/" + ingredient.id, {
          method: 'POST',
          headers: {
            'Authorization': this.token
          }
        });
        const sendIngredient = {
          recipe_id: this.id,
          productName: ingredient.productName,
          unit: ingredient.unit,
          quantity: ingredient.quantity
        }
        await fetch("http://localhost:8081/ingredient/saveName", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Authorization': this.token
          },
          body: JSON.stringify(sendIngredient)
        });
      }
    }
  },
  data() {
    return {
      editingIngredient: undefined,
      isModalEditIngredientVisible: false
    }
  }
}
</script>

<style scoped>

</style>