<template>
  <div style="display: flex; justify-content: flex-end; margin-right: 2%">
    <button class="btn">
      <img src="../assets/ButtonsLeftIcon.svg" alt="">
    </button>
    <button class="btn">
      <img src="../assets/ButtonRightIcon.svg" alt="">
    </button>
  </div>
</template>

<script>
export default {
  name: "ButtonsToScroll"
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