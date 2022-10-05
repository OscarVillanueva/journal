<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <button @click="goToDayBook">go to daybook</button>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
  methods: {
    goToDayBook() {
      this.$router.push({ name: "noEntrySelected" });
    },
  },
};
</script>
