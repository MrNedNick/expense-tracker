import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useExpensesStore = defineStore('expenses', () => {

  const expenses = ref([]);

  const addExpense = (expense) => {
    expenses.value.push({ ...expense, id: Date.now() });
    console.log('Expense added:', expense);
    console.log('Current expenses:', expenses.value);
  };

  const removeExpense = (id) => {
    expenses.value = expenses.value.filter((expense) => expense.id !== id);
    console.log(`Expense with id ${id} removed.`);
  };

  const totalExpenses = computed(() =>
    expenses.value.reduce((sum, expense) => sum + expense.amount, 0)
  );

  return {
    expenses,
    addExpense,
    removeExpense,
    totalExpenses,
  };
});
