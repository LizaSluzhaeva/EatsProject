<template>
  <div id="app" class="d-flex  justify-content-between" style="flex-direction: column; height: 100vh;">
    <TopBar></TopBar>
    <router-view/>
    <BottomBar></BottomBar>
  </div>
</template>
<script>
import TopBar from "@/components/TopBar";
import BottomBar from "@/components/BottomBar";


export default {
  name: 'App',
  components: {
    TopBar,
    BottomBar
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
