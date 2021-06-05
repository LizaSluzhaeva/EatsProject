<template>
  <div>
    <ModalAddIngredient v-if="this.isAddIngredientVisible" @updateVisible="closeModalAdding"
                        @newIngredient="addNewIngredientInWindow"></ModalAddIngredient>
    <div class="d-flex flex-row justify-content-center">
      <h1 style="text-align: center" class="text-success border-bottom border-success w-50">Добавить рецепт</h1>
    </div>
    <div class="m-4">
      <input class="form-control w-25" id="exampleFormControlInput1" placeholder="Название">
    </div>
    <div class="ml-4 mr-4">
      <h5 class="text-secondary">Ингредиенты</h5>
      <div class="containerForIngredients"></div>
      <div class="d-flex flex-row justify-content-center">
        <button @click="addingBtnClick" type="button" class="btn btn-success" style="border-radius: 45px">Добавить
          ингредиент
        </button>
      </div>
    </div>
    <div class="m-4">
      <label for="exampleFormControlTextarea1" class="form-label">Приготовление</label>
      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
    <div class="m-4 w-50">
      <label for="formFile" class="form-label">Загрузить изображение</label>
      <input class="form-control" type="file" id="formFile">
    </div>
    <div class="d-flex flex-row justify-content-end pt-2 mb-5 mr-5">
      <router-link class="mb-2" to="/myRecipes">
        <button @click="postNewRecipe" type="button" class="btn btn-success">Создать</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import ModalAddIngredient from "@/components/ModalAddIngredient";
import {mapGetters} from 'vuex'

export default {
  name: "CreateRecipe",
  components: {
    ModalAddIngredient
  },
  mounted() {
    if (this.getUserId === undefined) {
      window.location = 'http://localhost:8080'
    }
  },
  computed: mapGetters(['getUserId', 'getUserToken']),
  data() {
    return {
      isAddIngredientVisible: false,
      ingredients: []
    }
  },
  methods: {
    closeModalAdding() {
      this.isAddIngredientVisible = false
    },
    addingBtnClick() {
      this.isAddIngredientVisible = true
    },
    addNewIngredientInWindow(inputName, inputCount, inputUnit) {
      let p = document.createElement('p')
      p.innerText = inputName + ' ' + inputCount + ' ' + inputUnit
      this.$el.querySelector('.containerForIngredients').appendChild(p)
      this.ingredients.push(
          {
            inputCount: inputCount,
            inputUnit: inputUnit,
            inputName: inputName,
          })
    },
    async postNewRecipe() {
      let newRecipe
      let res
      const photo = this.$el.querySelector('#formFile').files[0].name
      const instruction = this.$el.querySelector('#exampleFormControlTextarea1').value
      const name = this.$el.querySelector('#exampleFormControlInput1').value
      if (photo !== undefined) {
        const fileData = {
          photo: photo,
          author_id: this.getUserId,
          instruction: this.instruction,
          is_private: false,
          name: name
        }
        await fetch('http://localhost:8081/recipe/savePhoto',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Authorization': this.getUserToken
          },
          body: JSON.stringify(fileData)
        })
      } else {
        newRecipe = {
          author_id: this.getUserId,
          instruction: instruction,
          is_private: false,
          name: name
        }
      }
      res = await fetch("http://localhost:8081/recipe/save", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          'Authorization': this.getUserToken
        },
        body: JSON.stringify(newRecipe)
      });
      const json = await res.json()
      const ingredientsList = []
      for (const index in this.ingredients) {
        const ingredient = this.ingredients[index]
        ingredientsList.push({
          productName: ingredient.inputName,
          quantity: ingredient.inputCount,
          unit: ingredient.inputUnit
        })
      }
      await this.$store.dispatch('addNewRecipe', {
        id: json.id,
        author_id: this.getUserId,
        ingredientDtoList: ingredientsList,
        instruction: instruction,
        is_private: false,
        name: name,
        photo: photo
      })
      for (let i = 0; i < this.ingredients.length; i++) {
        const sendIngredient = {
          recipe_id: json.id,
          productName: this.ingredients[i].inputName,
          unit: this.ingredients[i].inputUnit,
          quantity: this.ingredients[i].inputCount
        }
        await fetch("http://localhost:8081/ingredient/saveName", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Authorization': this.getUserToken
          },
          body: JSON.stringify(sendIngredient)
        });
      }
    }
  }
}
</script>

<style scoped>

</style>