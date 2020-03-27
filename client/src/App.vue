<template>
  <div id="app">
    <div id="nav" v-if="isAuthenticated">
      <router-link to="/">Home</router-link> |
      <router-link to="/logout">Logout</router-link>
    </div>
    <div id="nav" v-else>
      <router-link to="/login">Login</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
