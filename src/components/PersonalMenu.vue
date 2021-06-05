<template>
  <div>
    <Administration></Administration>
  </div>
</template>

<script>
import Administration from "@/components/Administration";

export default {
  name: "PersonalMenu",
  props: ['loginProps'],
  components: {
    Administration
  },
  methods: {
  }
}
</script>

<style scoped>

</style>