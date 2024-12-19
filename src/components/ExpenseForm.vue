<template>
  <v-card>
    <v-card-title>Add Expense</v-card-title>
    <v-card-text>
      <v-form @submit.prevent="addExpense">
        <v-text-field v-model="title" label="Title" required></v-text-field>
        <v-text-field v-model.number="amount" label="Amount" type="number" required></v-text-field>
        <v-btn type="submit" color="primary">Add</v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import { useExpensesStore } from '../stores/expenses'

export default {
  data() {
    return {
      title: '',
      amount: 0,
    }
  },
  methods: {
    addExpense() {
      const store = useExpensesStore()
      store.addExpense({ title: this.title, amount: this.amount })
      this.title = ''
      this.amount = 0
    },
  },
}
</script>
