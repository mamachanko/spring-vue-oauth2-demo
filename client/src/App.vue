<template>
  <div id="app">
    <h1>Welcome</h1>
    <div class="loginContainer">
      <div>
        Hello, {{ authentication.username }}
        <button @click="logout">Logout</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import base64 from "base-64";
import queryString from "query-string";

interface Authenticated {
  accessToken: string;
  username: string;
}

type Authentication = Authenticated | "Unauthenticated";

@Component
export default class App extends Vue {
  username: string = "user";
  password: string = "password";
  authentication: Authentication = "Unauthenticated";

  async created() {
    if (window.location.pathname === "/return") {
      const code = queryString.parse(window.location.search).code;
      if (typeof code === "string") {
        this.login(code);
        window.history.pushState("", "", "/");
      } else {
        window.location.href =
          "/oauth/authorize?grant_type=authorization_code&response_type=code&client_id=client";
      }
    } else {
      const accessToken = localStorage.getItem("accessToken");
      if (accessToken !== null) {
        this.authentication = {
          accessToken,
          username: await this.getUsername(accessToken)
        };
      } else {
        window.location.href =
          "/oauth/authorize?grant_type=authorization_code&response_type=code&client_id=client";
      }
    }
  }

  async login(code: string) {
    const accessToken = await fetch(
      `/oauth/token?grant_type=authorization_code&client_id=client&code=${code}`,
      {
        method: "POST",
        headers: new Headers({
          Authorization: `Basic ${base64.encode("client:secret")}`
        })
      }
    )
      .then(response => response.json())
      .then(data => data.access_token);

    localStorage.setItem("accessToken", accessToken);

    this.authentication = {
      accessToken,
      username: await this.getUsername(accessToken)
    };
  }

  logout() {
    this.authentication = "Unauthenticated";
    localStorage.removeItem("accessToken");
    window.location.href = "/logout";
  }

  private async getUsername(accessToken: string) {
    return await fetch("/api/me", {
      headers: new Headers({
        Authorization: `Bearer ${accessToken}`
      })
    })
      .then(response => {
        if (response.status !== 200) {
          throw new Error(`${response.status}`);
        }
        return response.json();
      })
      .then(data => data.name)
      .catch(error => {
        this.logout();
        throw error;
      });
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
