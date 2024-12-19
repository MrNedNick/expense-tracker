<template>
  <v-card>
    <v-card-title>Add Expense</v-card-title>
    <v-card-text>
      <v-form @submit.prevent="addExpense">
        <v-text-field v-model="title" label="Title" required></v-text-field>
        <v-text-field
          v-model.number="amount"
          label="Amount"
          type="number"
          required
          @focus="clearZero"
        ></v-text-field>
        <v-btn type="submit" color="primary">Add</v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'
import { useExpensesStore } from '../stores/expenses'

const store = useExpensesStore()
const title = ref('')
const amount = ref(0)

const addExpense = () => {
  if (title.value && amount.value > 0) {
    store.addExpense({ title: title.value, amount: amount.value })
    title.value = ''
    amount.value = 0
  }
}

const clearZero = () => {
  if (amount.value === 0) {
    amount.value = null
  }
}
</script>
