<template>
  <div class="login">
    <h1>Let's log you in, Anon!</h1>
    <div class="formControl">
      <label for="username">Username: </label>
      <input
        type="text"
        id="username"
        v-model="username"
        placeholder="username"
      />
    </div>
    <div class="formControl">
      <label for="password">Password:</label>
      <input
        type="text"
        id="password"
        v-model="password"
        placeholder="password"
      />
    </div>
    <button @click="login">Login</button>
  </div>
</template>

<script>
export default {
  name: "Login",
  data: function() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", {
        username: this.username,
        password: this.password
      });
    }
  }
};
</script>
