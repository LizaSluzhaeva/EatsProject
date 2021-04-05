<template>
  <div class="modal mt-5" tabindex="-1" style="display: block">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Добавить рецепт в подборку</h5>
        </div>
        <div class="modal-body">
          <ul class="list-group">
            <!--TODO если выбран добавить класс active из bootstrap-->
            <!--<li class="list-group-item active" aria-current="true">An active item</li>-->
            <li class="list-group-item" v-for="selection in user.selections" :key="selection">
              {{selection.selectionName}}
            </li>
          </ul>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Отмена</button>
          <button type="button" class="btn btn-success">Добавить</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
name: "ModalAddRecipeToSelection",
  data() {
    return {
      user: {
        userId: 1,
        selections: [
          {
            selectionName: 'Обеды'
          },
          {
            selectionName: 'Супы'
          },
          {
            selectionName: 'Десерты'
          }
        ]
      }
    }
  }
}

// let li = document.getElementsByClassName('list-group-item');
//  function liClick() {
//   li.classList.add('active');
//   li.setAttribute("aria-current", 'true');
// }

</script>

<style scoped>


</style>