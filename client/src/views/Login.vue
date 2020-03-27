<template>
  <div class="login">
    <h1>Let's log you in, Anon!</h1>
    <div class="form">
      <div class="form-control">
        <label for="username">Username: </label>
        <input
          type="text"
          id="username"
          v-model="username"
          placeholder="username"
        />
      </div>
      <div class="form-control">
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

<style scoped>
.form-control {
  margin-bottom: 8px;
  padding-bottom: 20px;
  position: relative;
  display: flex;
  align-items: baseline;
}

.form-control label {
  display: block;
  margin-bottom: 5px;
  width: 100px;
}

.form-control input {
  border: 2px solid #f0f0f0;
  border-radius: 4px;
  display: block;
  width: 100%;
  padding: 10px;
}

.form-control input:focus {
  outline: 0;
  border-color: #777777;
}

.form button {
  cursor: pointer;
  background-color: #3498db;
  border: 2px solid #3498db;
  border-radius: 4px;
  color: #ffffff;
  display: block;
  font-size: 16px;
  padding: 10px;
  margin-top: 20px;
  width: 100%;
}
</style>
