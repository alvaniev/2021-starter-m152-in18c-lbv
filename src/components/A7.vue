<template>
  <v-container fluid>
    <v-cols cols="12">
      <h1>Aufgabe 7</h1>
    </v-cols>
    <v-row>
      <v-col cols="2"></v-col>
      <v-col cols="8">
        <v-card>
          <v-card-title>Sintel</v-card-title>
          <v-responsive :aspect-ratio="16 / 9.2">
            <video
              controls
              class="contain"
              src="@/assets/movie/sintel-mp3.mp4"
            ></video>
          </v-responsive>
        </v-card>
      </v-col>
      <v-col cols="2"></v-col>
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
