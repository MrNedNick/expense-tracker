<template>
  <v-card>
    <v-card-title>Expense List</v-card-title>
    <v-list>
      <v-list-item v-for="expense in expenses" :key="expense.id">
        <v-list-item-title>{{ expense.title }}</v-list-item-title>
        <v-list-item-subtitle>${{ expense.amount }}</v-list-item-subtitle>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
import { useExpensesStore } from '../stores/expenses';

export default {
  computed: {
    expenses() {
      return useExpensesStore().expenses;
    },
  },
};
</script>
