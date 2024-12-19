import { defineStore } from 'pinia';

export const useExpensesStore = defineStore('expenses', {
  state: () => ({
    expenses: [],
  }),

  actions: {
    addExpense(expense) {
      console.log('addExpense');
      this.expenses.push({ ...expense, id: Date.now() });
      console.log('expenses', this.expenses);
    },
    removeExpense(id) {
      this.expenses = this.expenses.filter((expense) => expense.id !== id);
    },
    totalExpenses() {
      return this.expenses.reduce((sum, expense) => sum + expense.amount, 0);
    },
  },
});
