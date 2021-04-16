<template>
  <div>
    <div class="d-flex flex-row">
      <RecipeShort v-bind:recipe="recipes[0]"></RecipeShort>
      <RecipeShort v-bind:recipe="recipes[1]"></RecipeShort>
    </div>
    <ButtonsToScroll></ButtonsToScroll>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import RecipeShort from "@/components/RecipeShort";
import ButtonsToScroll from "@/components/ButtonsToScroll";

export default {
name: "ListOfRecipesShort",
  components: {
    RecipeShort,
    ButtonsToScroll
  },
  data() {
    return {
      recipes: [
        {
          name:'Говядина с фасолью',
          id: 1,
          type: 'Основное блюдо',
          image: 'блюдо1.jpg',
          time: '25-35 мин',
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
          isPrivate: false,
          creatorId: {
            login: "Ivan66",
            password: "777",
            id: 1,
            name: "Ivan",
            Surname:"Van",isAdmin: false
          }
        },
        {
          name:'Запеченое куриное филе',
          id: 2,
          type: 'Основное блюдо',
          image: 'блюдо2.jpg',
          time: '30-40 мин',
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
                name: "Оливковое масло"
              },
              numberOfProduct: 20,
              unitOfMeasurement: 'грамм'
            },
            {
              product: {
                name: "Специи"
              },
              numberOfProduct: 1,
              unitOfMeasurement: 'грамм'
            }
          ],
          instruction: 'Помыть филе, посыпать специями и маслом. Запекать 30 минут',
          isPrivate: false,
          creatorId: {
            login: "Ivan66",
            password: "777",
            id: 1,
            name: "Ivan",
            Surname:"Van",
            isAdmin: false
          }
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>