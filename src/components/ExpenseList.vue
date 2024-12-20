<template>
  <v-card class="expense-list-card">
    <v-card-title>Expense List</v-card-title>
    <v-list>
      <v-list-item v-for="expense in expenses" :key="expense.id" class="expense-item">
        <v-list-item-title class="expense-title">
          {{ expense.title }}
        </v-list-item-title>
        <v-list-item-subtitle class="expense-amount"> ${{ expense.amount }} </v-list-item-subtitle>
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

<style lang="scss" scoped>
.expense-list-card {
  max-width: 600px;
  margin: 20px auto;
  border: 1px solid #ccc;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  .expense-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #f0f0f0;

    &:last-child {
      border-bottom: none;
    }

    .expense-title {
      font-weight: bold;
      color: #333;
    }

    .expense-amount {
      color: #42a5f5;
      font-size: 1.1em;
      font-weight: 500;
    }
  }
}
</style>
