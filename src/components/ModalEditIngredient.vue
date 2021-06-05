<template>
  <div class="modal mt-5" style="display: block">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Изменить ингредиент</h5>
        </div>
        <div class="modal-body">
          <div class="m-4">
            <input class="form-control w-50" id="exampleFormControlInput1" v-model="ingredient.productName">
          </div>
          <div class="m-4">
            <input class="form-control w-50" id="exampleFormControlInput2" v-model="ingredient.quantity">
          </div>
          <div class="m-4">
            <input class="form-control w-50" id="exampleFormControlInput3" v-model="ingredient.unit">
          </div>
        </div>
        <div class="modal-footer">
          <button @click="closeBtnClick" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Отмена</button>
          <button @click="addBtnOnClick" type="button" class="btn btn-success">Добавить</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalEditIngredient",
  props: ['ingredient'],
  methods: {
    closeBtnClick() {
      this.$emit('closeBtnClick')
    },
    addBtnOnClick() {
      this.$emit('updateIngredient')
    }
  }
}
</script>

<style scoped>

</style>