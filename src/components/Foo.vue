<template>
  <div>
    <p>foo</p>
    <p>id: {{ id }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: "",
    };
  },
  created() {
    console.log(123, this.$route);

    console.log(this.$router);
    let { id } = this.$route.params;
    this.id = id;
  },
};
</script>

<style>
</style>