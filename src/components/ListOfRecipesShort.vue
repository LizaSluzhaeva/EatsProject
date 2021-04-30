<template>
  <div>
    <div class="mt-4 container row">
      <SearchRecipe class="col col-lg-4 col-md-4 col-sm-4"></SearchRecipe>
      <FilterRecipe class="col col-lg-2 col-md-2 col-sm-2"></FilterRecipe>
    </div>
    <div class="gridBody">
      <RecipeShort v-bind:recipe="recipes[0]"></RecipeShort>
      <RecipeShort v-bind:recipe="recipes[1]"></RecipeShort>
      <RecipeShort v-bind:recipe="recipes[2]"></RecipeShort>
      <RecipeShort v-bind:recipe="recipes[3]"></RecipeShort>
    </div>
    <ButtonsToScroll></ButtonsToScroll>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import RecipeShort from "@/components/RecipeShort";
import ButtonsToScroll from "@/components/ButtonsToScroll";
import SearchRecipe from "@/components/SearchRecipe";
import FilterRecipe from "@/components/FilterRecipe";

export default {
name: "ListOfRecipesShort",
  components: {
    RecipeShort,
    ButtonsToScroll,
    SearchRecipe,
    FilterRecipe
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
        },
        {
          name:'Блинчики с сыром фета',
          id: 3,
          type: 'Завтрак',
          image: 'блюдо3.jpg',
          time: '35-45 мин',
          ingredients: [
            {
              product: {
                name: "Молоко"
              },
              numberOfProduct: 300,
              unitOfMeasurement: 'грамм'
            },
            {
              product: {
                name: "Мука"
              },
              numberOfProduct: 200,
              unitOfMeasurement: 'грамм'
            },
            {
              product: {
                name: "Яйца"
              },
              numberOfProduct: 4,
              unitOfMeasurement: 'штуки'
            }
          ],
          instruction: 'Смешать молоко и яйца, добавить соль по вкусу. Испечь блинчики с добавлением масла.',
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
          name:'Быстрая лазанья',
          id: 3,
          type: 'Основное блюдо',
          image: 'блюдо4.jpg',
          time: '20-30 мин',
          ingredients: [
            {
              product: {
                name: "Тонкий лаваш"
              },
              numberOfProduct: 1,
              unitOfMeasurement: 'штука'
            },
            {
              product: {
                name: "Сыр"
              },
              numberOfProduct: 100,
              unitOfMeasurement: 'грамм'
            },
            {
              product: {
                name: "Томатная паста"
              },
              numberOfProduct: 40,
              unitOfMeasurement: 'грамм'
            }
          ],
          instruction: 'Выложить слоями лаваш, томатную пасту и натертый на терке сыр. Сверху посыпать сыром и выпекать в духовке 15 минут. Готовое блюдо можно украсить зеленью.',
          isPrivate: false,
          creatorId: {
            login: "Ivan66",
            password: "777",
            id: 1,
            name: "Ivan",
            Surname:"Van",isAdmin: false
          }
        }
      ]
    }
  }
}
</script>

<style scoped>
.gridBody {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 12px;
  grid-row-gap: 6px;
}
</style>