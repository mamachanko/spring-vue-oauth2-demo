<template>
  <div id="app">
    <h1>Welcome</h1>
    <div class="loginContainer">
      <div>
        Hello, {{ username }}
        <button @click="logout">Logout</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class App extends Vue {
  username = this.$store.state.username;

  logout() {
    this.$store.commit("LOGOUT");
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.loginContainer {
  display: flex;
  flex-direction: column;
  max-width: 100px;
}
</style>
