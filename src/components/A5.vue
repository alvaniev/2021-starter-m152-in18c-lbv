<template>
  <v-container fluid>
    <v-cols cols="12">
      <h1>Aufgabe 5</h1>
    </v-cols>
    <v-row>
      <v-col cols="4"></v-col>
      <v-col cols="4">
        <v-card class="card">
          <v-img contain aspect-ratio="1.0" src="@/assets/img/earth.png" />
        </v-card>
      </v-col>
      <v-col cols="4"></v-col>
    </v-row>
    <v-cols cols="12">
      <h2>Umsetzung</h2>
    </v-cols>
    <v-cols cols="12">
      <p>
        Wie wurde die Aufgabe umgesetzt? / Welche ImageMagick-Befehle wurden
        angewendet?
      </p>
    </v-cols>
    <v-cols cols="12"><v-card class="card"></v-card></v-cols>
  </v-container>
</template>

<script>
export default {
  data() {
    return {};
  },

  computed: {},
  components: {},
};
</script>

<style scoped>
.card {
  min-height: 360px;
}
.contain {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
