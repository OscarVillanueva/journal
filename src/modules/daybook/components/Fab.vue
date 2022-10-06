<template>
  <button class="btn btn-primary">
    <i class="fa fa-2x" :class="icon"></i>
  </button>
</template>

<script>
export default {
  name: "FabButton",
  props: {
    icon: {
      type: String,
      default: "fa-plus",
    },
  },
};
</script>

<style scoped lang = 'scss'>
button {
  border-radius: 50%;
  bottom: 20px;
  height: 60px;
  position: fixed;
  right: 20px;
  width: 60px;
}
</style>