<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Expense Tracker</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>

    <v-footer app color="primary" dark>
      <span class="white--text">&copy; 2024 Expense Tracker</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
}
</script>
