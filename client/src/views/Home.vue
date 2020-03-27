<template>
  <div class="home">
    <h1>👋 Welcome, {{ this.$store.state.token }}!</h1>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>
