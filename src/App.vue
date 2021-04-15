<template>
  <div id="app" class="d-flex  justify-content-between" style="flex-direction: column; height: 100vh;">
    <TopBar></TopBar>
    <div>
<!--      <div class="mt-4 container row">-->
<!--        <SearchRecipe class="col col-lg-4 col-md-4 col-sm-4"></SearchRecipe>-->
<!--        <FilterRecipe class="col col-lg-2 col-md-2 col-sm-2"></FilterRecipe>-->
<!--      </div>-->
<!--      <ModalRecipeDetail></ModalRecipeDetail>-->
<!--      <ListOfRecipesShort></ListOfRecipesShort>-->
      <!--      <Authorization></Authorization>-->
      <!--    <Registration></Registration>-->
<!--      <ModalAddRecipeToSelection></ModalAddRecipeToSelection>-->
      <ListOfCollections></ListOfCollections>
    </div>
    <div>
      <ButtonsToScroll></ButtonsToScroll>
      <BottomBar></BottomBar>
    </div>
  </div>
</template>

<script>
import TopBar from "@/components/TopBar";
//import ListOfRecipesShort from "@/components/ListOfRecipesShort";
//import ModalRecipeDetail from "@/components/ModalRecipeDetail";
import BottomBar from "@/components/BottomBar";
//import SearchRecipe from "@/components/SearchRecipe";
//import FilterRecipe from "@/components/FilterRecipe";
// import Authorization from "@/components/Authorization";
// import Registration from "@/components/Registration";
import ButtonsToScroll from "@/components/ButtonsToScroll";
// import ModalAddRecipeToSelection from "@/components/ModalAddRecipeToSelection";
import ListOfCollections from "@/components/ListOfCollections";

export default {
  name: 'App',
  components: {
    // Registration,
    // Authorization,
    // FilterRecipe,
    // SearchRecipe,
    // ListOfRecipesShort,
    // ModalRecipeDetail,
    TopBar,
    BottomBar,
    ButtonsToScroll,
    // ModalAddRecipeToSelection,
    ListOfCollections
  },
  methods: {
    async getRequest(url, method = 'Get', data = null) {
      try {
        const headers = {}
        let body

        if (data) {
          headers['Content-Type'] = 'application/json'
          body = JSON.stringify(data)
        }

        const response = await fetch(url, {
          method,
          headers,
          body
        })
        return response.json()
      } catch (e) {
        console.warn('Error', e.message);
      }
    },
    async mounted() {
      this.recipes = await this.getRequest('http://localhost/3000/recipes') // указываем порт на котором работает сервер
    }
  }
}
</script>

<style>

</style>
