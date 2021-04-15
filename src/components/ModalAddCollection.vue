<template>
  <div class="modal mt-5" tabindex="-1" style="display: block">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header d-flex flex-row justify-content-center">
          <h5 class="modal-title border-bottom border-success">Создать подборку</h5>
        </div>
        <div class="modal-body">
          <div class="input-group-text" id="btnGroupAddon2">Название</div>
        </div>
        <div class="modal-footer d-flex flex-row justify-content-around">
          <button type="button" class="btn btn-success">Добавить</button>
          <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Отмена</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalAddCollection"
}
</script>

<style scoped>

</style>