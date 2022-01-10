<template>
  <div id="container">
    <h1>{{ msg }}</h1>
  </div>
</template>


<script>
export default {
  data() {
    return {
      msg: 'Hello World',
    };
  },
};
</script>

<style scoped>
h1 {
  color: blue;
}
#container {
  margin-left: 24px;
}
</style>
