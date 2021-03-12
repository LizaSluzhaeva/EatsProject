<template>
  <div id="app">
    <TopBar v-bind:users="users"></TopBar>
    <ListOfRecipesShort v-bind:recipes="recipes"></ListOfRecipesShort>
  </div>
</template>

<script>
import TopBar from "@/components/TopBar";
import ListOfRecipesShort from "@/components/ListOfRecipesShort";

export default {
  name: 'App',
  data() {
    return {
      recipe: {
        name: '',
        id: '',
        type: '',
        image: '',
        time: '',
        ingredients: '',
        instruction: '',
        isPrivate: '',
        creatorId: ''
      },
      recipes: [
        {
          name:'Говядина с фасолью',
          id: 1, type: 'Основное блюдо',
          image: 'блюдо1.jpg',
          time: '25-35 мин',
          ingredients: [],
          instruction: 'Пожарить лук на небольшом количестве масла. Добавить мелко нарезанную говядину, обжарить 5 минут на сильном огне и залить томатной пастой. Тушить еще 15-20 минут. Заранее замоченную на ночь фасоль добавить в мясу, тушить еще 15 минут. Посолить и поперчить по вкусу, украсить зеленью.',
          isPrivate: false,
          creatorId: 1
        }
      ],
      user: {
        login: '',
        password: '',
        id: '',
        name: '',
        surname: '',
        isAdmin: ''
      },
      users: [
        {login: "Ivan66", password: "777", id: 1, name: "Ivan", Surname:"Van",isAdmin: false}
      ],
    }
  },
  components: {
    ListOfRecipesShort,
    TopBar
  }
}
</script>

<style>

</style>
