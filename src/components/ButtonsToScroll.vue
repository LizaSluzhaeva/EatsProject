<template>
  <div style="display: flex; justify-content: flex-end; margin-right: 2%">
    <button class="btn">
      <img @click="getPrevRecipes" src="../assets/ButtonsLeftIcon.svg" alt="">
    </button>
    <button @click="getNextRecipes" class="btn">
      <img src="../assets/ButtonRightIcon.svg" alt="">
    </button>
  </div>
</template>

<script>
export default {
  name: "ButtonsToScroll",
  data() {
    return {
      firstId: 1
    }
  },
  methods: {
    getPrevRecipes() {
      this.$emit('updateFirstId', this.firstId - 9)
      if (this.firstId - 9 > 0) {
          this.firstId -= 9
      } else {
        this.firstId = 1
      }
    },
    getNextRecipes() {
      this.$emit('updateFirstId', this.firstId + 9)
      this.firstId += 9
    }
  }
}
</script>

<style scoped>
.btn {
  background: #FFFFFF;
  border: 2px solid #C4C4C4;
  margin-left: 1%;
  margin-bottom: 1%;
}
</style>