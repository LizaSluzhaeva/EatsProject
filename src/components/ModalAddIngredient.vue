<template>
  <div class="modal mt-5" style="display: block">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Добавить ингредиент в рецепт</h5>
        </div>
        <div class="modal-body">
          <div class="m-4">
            <input class="form-control w-50" id="exampleFormControlInput1" placeholder="Название">
          </div>
          <div class="m-4">
            <input class="form-control w-50" id="exampleFormControlInput2" placeholder="Количество">
          </div>
          <div class="m-4">
            <input class="form-control w-50" id="exampleFormControlInput3" placeholder="Ед. измерения">
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
  name: "ModalAddIngredient",
  methods: {
    closeBtnClick() {
      this.$emit('updateVisible', {
        isAddIngredientVisible: false
      })
    },
    addBtnOnClick() {
      const inputName = this.$el.querySelector('#exampleFormControlInput1').value
      const inputCount = this.$el.querySelector('#exampleFormControlInput2').value
      const inputUnit = this.$el.querySelector('#exampleFormControlInput3').value
      this.$emit('newIngredient', inputName, inputCount, inputUnit)
      this.closeBtnClick()
    }
  }
}
</script>

<style scoped>

</style>