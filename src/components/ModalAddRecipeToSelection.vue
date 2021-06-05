<template>
  <div class="modal mt-5" style="display: block">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Добавить рецепт в подборку</h5>
        </div>
        <div class="modal-body">
          <ul class="list-group">
            <li class="list-group-item" @click="onClick" v-for="selection in selections"
                :key="selection.id">
              {{ selection.collectionName }}
            </li>
          </ul>
        </div>
        <div class="modal-footer">
          <button @click="closeBtnClick" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Отмена</button>
          <button @click="addRecipe" type="button" class="btn btn-success">Добавить</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "ModalAddRecipeToSelection",
  props: ['someProps'],
  computed: mapGetters(['getUserId', 'getUserToken']),
  data() {
    return {
      isModalAddRecipeToSelVisible: false,
      selections: []
    }
  },
  async mounted() {
    const res = await fetch(
        'http://localhost:8081/collection/findUserCol/' + this.getUserId,{
          method: 'GET',
          'Authorization': this.getUserToken
        }
    )
    this.selections = await res.json()
  },
  methods: {
    disable(event) {
      event.target.removeEventListener('click', this.disable)
      event.target.classList.remove('bg-success')
      event.target.addEventListener('click', this.onClick)
    },
    onClick(event) {
      event.target.removeEventListener('click', this.onClick)
      event.target.classList.add('bg-success')
      event.target.addEventListener('click', this.disable)
    },
    closeBtnClick() {
      this.$emit('updateParent', {
        isModalAddRecipeToSelVisible: this.isModalAddRecipeToSelVisible
      })
    },
    addRecipe() {
      const arrayOfSelections = this.$el.querySelectorAll('.bg-success')
      let arrayOfSelectionsNames = []
      for (let i = 0; i < arrayOfSelections.length; i++) {
        arrayOfSelectionsNames[i] = arrayOfSelections[i].innerHTML.trim()
      }
      this.$emit('addRecipeToSelections', arrayOfSelectionsNames)
      this.closeBtnClick()
    }
  }
}

</script>

<style scoped>


</style>