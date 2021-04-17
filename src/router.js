import Vue from "vue";
import Router from "vue-router";
import Authorization from "@/components/Authorization";
import Registration from "@/components/Registration";
import ListOfRecipesShort from "@/components/ListOfRecipesShort";
import ListOfCollections from "@/components/ListOfCollections";
import ListOfCustomRecipes from "@/components/ListOfCustomRecipes";
import ListOfRecipeInCollection from "@/components/ListOfRecipeInCollection";
import EditRecipe from "@/components/EditRecipe";
import PersonalMenu from "@/components/PersonalMenu";
import CreateRecipe from "@/components/CreateRecipe";

Vue.use(Router)

export default new Router({
    mode:'history',
    routes: [
        {
            path: '/',
            component: Authorization
        },
        {
            path: '/registration',
            component: Registration
        },
        {
            path: '/listOfRecipes',
            component: ListOfRecipesShort
        },
        {
            path: '/collections',
            component: ListOfCollections
        },
        {
            path: '/myRecipes',
            component: ListOfCustomRecipes
        },
        {
            path: '/recipesInCollection',
            component: ListOfRecipeInCollection
        },
        {
            path: '/editRecipe',
            component: EditRecipe
        },
        {
            path: '/createRecipe',
            component: CreateRecipe
        },
        {
            path: '/personalMenu',
            component: PersonalMenu
        }

    ]
})