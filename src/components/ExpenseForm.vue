<template>
  <v-card class="expense-form-card">
    <v-card-title class="form-title">Add Expense</v-card-title>
    <v-card-text>
      <v-form @submit.prevent="addExpense" class="expense-form">
        <v-text-field v-model="title" label="Title" required class="form-input"></v-text-field>
        <v-text-field
          v-model.number="amount"
          label="Amount"
          type="number"
          required
          @focus="clearZero"
          class="form-input"
        ></v-text-field>
        <v-btn type="submit" color="primary" class="submit-btn">Add</v-btn>
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

<style scoped lang="scss">
.expense-form-card {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background-color: #f9f9f9;
  .form-title {
    text-align: center;
    font-weight: bold;
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 10px;
  }
  .expense-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .form-input {
    font-size: 1rem;
    border-radius: 5px;
  }
  .submit-btn {
    align-self: center;
    font-weight: bold;
    padding: 10px 20px;
    font-size: 1rem;
    background-color: #42a5f5;
    color: white;
    &:hover {
      background-color: #1e88e5;
    }
  }
}
</style>
