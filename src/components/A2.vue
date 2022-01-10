<template>
  <v-container fluid>
    <v-cols cols=12>
      <h1>Aufgabe 2</h1>
    </v-cols>
    <v-row>
      <v-col cols="6">
        <v-card class="card">
          <v-img contain aspect-ratio="1.0" src="@/assets/img/vs.png" />
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card class="card">
          <v-img contain aspect-ratio="1.0" src="@/assets/img/vd.png" />
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <v-card class="card">
          <v-img contain aspect-ratio="1.0" src="@/assets/img/ne.png" />
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card class="card">
          <v-img contain aspect-ratio="1.0" src="@/assets/img/fr.png" />
        </v-card>
      </v-col>
    </v-row>
  <v-cols cols="12">
    <h2>Umsetzung</h2>
  </v-cols>
  <v-cols cols="12">
    <p>Wie wurde die Aufgabe umgesetzt? / Welche ImageMagick-Befehle wurden angewendet?</p>
  </v-cols>
  <v-cols cols="12"><v-card class="card"></v-card></v-cols>

  </v-container>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.card {
  min-height: 360px;
}
.bs {
  background-image: linear-gradient(white, grey);
}
.gl {
  background-image: linear-gradient(orange, red);
}
</style>
