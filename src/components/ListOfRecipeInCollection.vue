<template>
  <div>
    <div class="d-flex flex-row justify-content-center">
      <h1 class="border-bottom border-success">{{ collection.name }}</h1>
    </div>
    <div v-for="recipe in collection.recipes" :key="recipe">
      <RecipeDetail v-bind:recipe="recipe"></RecipeDetail>
    </div>
  </div>
</template>

<script>
import RecipeDetail from "@/components/RecipeDetail";

export default {
  name: "ListOfRecipeInCollection",
  components: {
    RecipeDetail
  },
  data() {
    return {
      collection: {
        name: 'Обеды',
        recipes: [
          {
            name: 'Говядина с фасолью',
            image: 'блюдо1.jpg',
            ingredients: [
              {
                product: {
                  name: "Фасоль"
                },
                numberOfProduct: 100,
                unitOfMeasurement: 'грамм'
              },
              {
                product: {
                  name: "Говядина"
                },
                numberOfProduct: 200,
                unitOfMeasurement: 'грамм'
              },
              {
                product: {
                  name: "Томатная паста"
                },
                numberOfProduct: 100,
                unitOfMeasurement: 'грамм'
              }
            ],
            instruction: 'Пожарить лук на небольшом количестве масла. Добавить мелко нарезанную говядину, обжарить 5 минут на сильном огне и залить томатной пастой. Тушить еще 15-20 минут. Заранее замоченную на ночь фасоль добавить в мясу, тушить еще 15 минут. Посолить и поперчить по вкусу, украсить зеленью.',
          },
          {
            name: 'Суп куриный',
            image: 'суп1.jpg',
            ingredients: [
              {
                product: {
                  name: "Куриное филе"
                },
                numberOfProduct: 200,
                unitOfMeasurement: 'грамм'
              },
              {
                product: {
                  name: "Картофель"
                },
                numberOfProduct: 100,
                unitOfMeasurement: 'грамм'
              },
              {
                product: {
                  name: "Лук"
                },
                numberOfProduct: 1,
                unitOfMeasurement: 'штука'
              }
            ],
            instruction: 'Отварить курицу, закинуть картофель и лук, варить до готовности. Посолить по вкусу.'
          },
          {
            name: 'Паста с креветками',
            image: 'паста.jpg',
            ingredients: [
              {
                product: {
                  name: "Креветки"
                },
                numberOfProduct: 200,
                unitOfMeasurement: 'грамм'
              },
              {
                product: {
                  name: "Паста"
                },
                numberOfProduct: 100,
                unitOfMeasurement: 'грамм'
              },
              {
                product: {
                  name: "Чеснок"
                },
                numberOfProduct: 1,
                unitOfMeasurement: 'штука'
              }
            ],
            instruction: 'Почистить креветки и чеснок. На оливковом масле пожарить чеснок, добавить креветки. Добавить ' +
                'отвареные макароны, тушить 5 минут'
          }
        ]
      }
    }
  }
}
</script>

<style scoped>

</style>