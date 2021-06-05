<template>
  <div class="modal mt-5" tabindex="-1" style="display: block">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header d-flex flex-row justify-content-center">
          <h5 class="modal-title border-bottom border-success">Создать подборку</h5>
        </div>
        <div class="modal-body">
          <input class="form-control" id="exampleFormControlInput1" placeholder="Название">
        </div>
        <div class="modal-footer d-flex flex-row justify-content-around">
          <button @click="addBtnClick" type="button" class="btn btn-success">Добавить</button>
          <button @click="closeBtnClick" type="button" class="btn btn-danger" data-bs-dismiss="modal">Отмена</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalAddCollection",
  props: ['someProps'],
  methods: {
    closeBtnClick() {
      this.$emit('updateParent', {
        isModalAddRecipeToSelVisible: this.isModalAddRecipeToSelVisible
      })
    },
    addBtnClick() {
      this.$emit('updateParent', {
        isModalAddRecipeToSelVisible: this.isModalAddRecipeToSelVisible
      })
      const input = this.$el.querySelector('#exampleFormControlInput1')
      if (input.value !== '') {
        this.$emit('addCollection', input.value.trim())
      }

    },
  }
}
</script>

<style scoped>

</style>