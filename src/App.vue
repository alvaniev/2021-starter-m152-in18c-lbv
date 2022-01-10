<template>
    <v-app app>

      <v-app-bar app>
        <v-toolbar-title class="headline text-uppercase">
          <span class="font-weight-light">M152 - Prüfung Teil 2 - Multimediale Inhalte aufarabeiten</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
      </v-app-bar>

      <v-content>
        <router-view/>
      </v-content>
    </v-app>
</template>

<script>

export default {
  name: 'app',
};
</script>