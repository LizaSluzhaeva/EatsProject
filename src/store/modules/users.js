export default {
    actions: {
        setEditingRecipeId(ctx, id) {
            ctx.commit('setEditingCustomRecipeId', id)
        },
        async deleteCustomRecipe(ctx, data) {
            await fetch(
                'http://localhost:8081/recipe/delete/' + data.id, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8',
                        'Authorization': data.token
                    }
                })
          ctx.commit('deleteCustomRecipe', data.id)
        },
        addNewRecipe(ctx, data) {
            console.log(data)
          ctx.commit('addNewRecipe', data)
        },
        createNewCollection(ctx, data) {
            ctx.commit('createNewCollection', data)
        },
        addRecipeToSelection(ctx, data) {
            ctx.commit('addRecipeToSelection', data)
        },
        async deleteRecipeFromSelection(ctx, data) {
            await fetch(
                'http://localhost:8081/collection/delete/' + data.collectionId + '/' + data.recipeId, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8',
                        'Authorization': data.token
                    }
                })
            ctx.commit('deleteRecipeFromSelection', data)
        },
        openCollection(ctx, id) {
            ctx.commit('editingCollection', id)
        },
        logoutUser(ctx) {
            ctx.commit('deleteCurrentUser')
        },
        async deleteCollection(ctx, data) {
            await fetch(
                'http://localhost:8081/collection/delete/' + data.id, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8',
                        'Authorization': data.token
                    }
                })
            ctx.commit('deleteCollection', data.id)
        },
        async authorizeUser(ctx, data) {
            const res = await fetch(
                'http://localhost:8081/auth/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify(data)
                })
            const user = await res.json()
            console.log(user)
            const resRecipes = await fetch('http://localhost:8081/recipe/fullInfoByUser/' + user.id, {
                method: 'GET',
                headers: {
                    'Authorization': user.token
                }
            })
            const fetchUserRecipes = await resRecipes.json()
            user.isAdmin = (user.role !== 'USER')
            user.customRecipes = fetchUserRecipes
            const resCollections = await fetch('http://localhost:8081/collection/findUserCol/' + user.id, {
                method: 'GET',
                headers: {
                    'Authorization': user.token
                }
            })
            const fetchUserCollections = await resCollections.json()
            user.selections = fetchUserCollections
            ctx.commit('updateUser', user)
        },
        async registrateUser(ctx, data) {
            data.email = 'test@example.com'
            const res = await fetch(
                'http://localhost:8081/user/save', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify(data)
                })
            const user = await res.json()
            ctx.dispatch('authorizeUser', {
                username: data.username,
                password: data.password
            })
            ctx.commit('updateUser', user)
        }
    },
    mutations: {
        setEditingCustomRecipeId(state, id) {
          state.editingRecipe.id = id
        },
        deleteCustomRecipe(state, id) {
            state.user.customRecipes.splice(state.user.customRecipes.findIndex(recipe => recipe.id === id), 1)
        },
        addNewRecipe(state, data) {
            state.user.customRecipes.push(data)
        },
        createNewCollection(state, data) {
            state.user.selections.push(data)
        },
        deleteRecipeFromSelection(state, data) {
            const selection = state.user.selections.find(selection => selection.id === data.collectionId)
            const recipeIndex = selection.recipeFullDtos.findIndex(recipe => recipe.id === data.recipeId)
            selection.recipeFullDtos.splice(recipeIndex, 1)
        },
        addRecipeToSelection(state, data) {
            const selection = state.user.selections.find(selection => selection.id === data.selectionId)
            selection.recipeFullDtos.push(data.recipe)
        },
        updateUser(state, user) {
            state.user = user
        },
        deleteCurrentUser(state) {
            state.user.id = undefined
            state.user.token = ''
            state.user.username = ''
            state.user.selections = []
            state.user.customRecipes = []
        },
        deleteCollection(state, id) {
            const index = state.user.selections.findIndex(function (selection) {
                return selection.id === id
            })
            state.user.selections.splice(index, 1)
        },
        editingCollection(state, id) {
            state.editingCollectionId = id
        }
    },
    state: {
        editingCollectionId: undefined,
        editingRecipe: {},
        user: {
            id: undefined,
            token: "",
            username: "",
            selections: [
                {
                    id: undefined,
                    collectionName: "",
                    recipeFullDtos: []
                }
            ],
            customRecipes: []
        }
    },
    getters: {
        getUserId(state) {
            return state.user.id
        },
        getUserLogin(state) {
            return state.user.login
        },
        isUserAdmin(state) {
            return state.user.isAdmin
        },
        getUserSelections(state) {
            return state.user.selections
        },
        getUserSelectionIdByNameOfSelection: state => name => {
            for (const index in state.user.selections) {
                const selection = state.user.selections[index]
                if (selection.collectionName === name) {
                    return selection.id
                }
            }
        },
        getUserToken(state) {
            return state.user.token
        },
        getEditingCollectionId(state) {
            return state.editingCollectionId
        },
        getCollectionById: state => id => {
            return state.user.selections[state.user.selections.findIndex((function (selection) {
                return selection.id === id
            }))]
        },
        hasRecipeInSelection: state => (recipeId, selectionId) => {
            const selection = state.user.selections.find(selection => selection.id === selectionId)
            return selection.recipeFullDtos.findIndex(recipe => recipe.id === recipeId) >= 0
        },
        getCustomRecipes: state => {
            return state.user.customRecipes
        },
        getEditingCustomRecipeId: state => {
            return state.editingRecipe.id
        },
        getCustomRecipeById: state => id => {
            return state.user.customRecipes[state.user.customRecipes.findIndex((function (recipe) {
                return recipe.id === id
            }))]
        }
    }
}