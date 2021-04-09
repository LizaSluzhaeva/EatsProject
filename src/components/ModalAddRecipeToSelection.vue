<template>
  <div class="modal mt-5" tabindex="-1" style="display: block">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Добавить рецепт в подборку</h5>
        </div>
        <div class="modal-body">
          <ul class="list-group">
            <li class="list-group-item" v-on:click="liClick" v-for="selection in user.selections"
                :key="selection">
              {{ selection.selectionName }}
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
  },
  methods: {
    liClick: function onClick(event) { // TODO починить лисенер на второе нажатие
      event.target.classList.add('border-success');
      event.target.addEventListener('click', function clicked(ev) {
        event.target.removeEventListener('click', clicked)
        ev.target.classList.remove('border-success');
        ev.target.addEventListener('click', onClick);
      })
    }

  }
}

</script>

<style scoped>


</style>