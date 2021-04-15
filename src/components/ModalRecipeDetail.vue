<template>
  <div class="modal mt-5" tabindex="-1" style="display: block">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{recipe.name}}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="mb-2 modal-body d-flex flex-row justify-content-between">
          <img style="max-height: 270px" :src="require(`@/assets/${recipe.image}`)" alt="Не удалось загрузить изображение">
          <div class="flex-column ml-4">
            <h6 class="mb-2 mt-2">Ингредиенты</h6>
            <p class="m-0" v-for="ingredient in recipe.ingredients" :key="ingredient">
              {{ingredient.product.name}} - {{ingredient.numberOfProduct}} {{ingredient.unitOfMeasurement}}
            </p>
            <h6 class="mt-2">Приготовление</h6>
            <p>
              {{recipe.instruction}}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: "ModalRecipeDetail",
  props: ["recipe"]
}
</script>

<style scoped>

</style>