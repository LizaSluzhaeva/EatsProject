<template>
  <div>
    <div class="d-flex flex-row justify-content-around pl-5 pt-3">
      <h1 style="max-width: 30%; text-align: center" class="border-bottom border-success">Мои подборки</h1>
      <div class="pt-3">
        <button class="btn btn-outline-success w-100" type="submit">Создать подборку</button>
      </div>
    </div>
    <div v-for="collection in collections" :key="collection">
      <Collection v-bind:collection="collection"></Collection>
    </div>
  </div>
</template>

<script>
import Collection from "@/components/Collection";

export default {
name: "ListOfCollections",
  components: {
    Collection
  },
  data() {
    return {
      collections: [
        {
          name: 'Обеды',
          idOfCollection: 1,
          image: 'блюдо1.jpg',
          recipes: [
            {
              name: 'Тушеная говядина с фасолью'
            },
            {
              name: 'Суп куриный'
            },
            {
              name: 'Паста с креветками'
            }
          ]
        },
        {
          name: 'Мясные блюда',
          idOfCollection: 2,
          image: 'блюдо2.jpg',
          recipes: [
            {
              name: 'Запеченое куриное филе'
            },
            {
              name: 'Рубленные котлеты'
            },
            {
              name: 'Бифстроганов с грибами'
            }
          ]
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>