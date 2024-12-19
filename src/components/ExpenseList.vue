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

<script setup>
import { computed } from 'vue'
import { useExpensesStore } from '../stores/expenses'

const store = useExpensesStore()

const expenses = computed(() => store.expenses)
</script>
