<template>
  <v-card class="expense-list">
    <v-card-title class="expense-list__title">Expense List</v-card-title>
    <v-list>
      <v-list-item v-for="expense in expenses" :key="expense.id" class="expense-item">
        <v-list-item-title class="expense-title">
          {{ expense.title }}
        </v-list-item-title>
        <div class="d-flex align-center">
          <v-list-item-subtitle class="expense-amount">
            ${{ expense.amount }}
          </v-list-item-subtitle>
          <v-btn
            size="24"
            icon
            variant="plain"
            @click="removeExpense(expense.id)"
            class="delete-btn ml-4"
            title="Remove Expense"
          >
            <v-icon color="red">mdi-close</v-icon>
          </v-btn>
        </div>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script setup>
import { computed } from 'vue'
import { useExpensesStore } from '../stores/expenses'

const store = useExpensesStore()
const expenses = computed(() => store.expenses)

const removeExpense = (id) => {
  store.removeExpense(id)
}
</script>

<style lang="scss" scoped>
.expense-list {
  max-width: 600px;
  min-width: 300px;
  width: 100%;
  margin: 20px auto;
  border: 1px solid #ccc;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background-color: #f9f9f9;
  &__title {
    text-align: center;
    font-weight: bold;
    font-size: 1.2rem;
    color: #333;
    padding: 10px;
    border-bottom: 1px solid #f0f0f0;
  }
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
    .delete-btn {
      cursor: pointer;
      margin-left: 10px;
    }
  }
}
</style>
