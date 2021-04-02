<template>
  <div class="dropdown ">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Тип блюда
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <a class="dropdown-item" href="#">Десерт</a>
      <a class="dropdown-item" href="#">Обед</a>
      <a class="dropdown-item" href="#">Завтраки</a>
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: "FilterRecipe"
}
</script>

<style scoped>

</style>