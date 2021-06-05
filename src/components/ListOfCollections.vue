<template>
  <div>
    <ModalAddCollection @addCollection="setNameOfNewCollection" :someProps="isModalVisible" @updateParent="closeModal" v-if="isModalVisible"></ModalAddCollection>
    <div class="d-flex flex-row justify-content-around pl-5 pt-3">
      <h1 style="max-width: 30%; text-align: center" class="border-bottom border-success">Мои подборки</h1>
      <div class="pt-3">
        <button @click="createCollection" class="btn btn-outline-success w-100" type="submit">Создать подборку</button>
      </div>
    </div>
    <div v-for="collection in getUserSelections" :key="collection.id">
      <Collection v-bind:collection="collection"></Collection>
    </div>
  </div>
</template>

<script>
import Collection from "@/components/Collection";
import ModalAddCollection from "@/components/ModalAddCollection";
import {mapGetters} from 'vuex'

export default {
name: "ListOfCollections",
  components: {
    Collection,
    ModalAddCollection
  },
  mounted() {
    if (this.getUserId === undefined) {
      window.location = 'http://localhost:8080'
    }
  },
  computed: mapGetters(['getUserSelections','getUserToken','getUserId']),
  methods: {
    async setNameOfNewCollection(name) {
      const res = await fetch("http://localhost:8081/collection/addCollection", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          'Authorization': this.getUserToken
        },
        body: JSON.stringify({
          name: name,
          userId: this.getUserId
        })
      });
      const json = await res.json()
      await this.$store.dispatch('createNewCollection', {
        id: json.id,
        collectionName: name,
        recipeFullDtos: []
      })
    },
    closeModal() {
      this.isModalVisible = false;
    },
    createCollection() {
      this.isModalVisible = true
    }
  },
  data() {
    return {
      isModalVisible: false
    }
  }
}
</script>

<style scoped>

</style>