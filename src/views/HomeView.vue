<template>
  <v-container>
    <expense-form />
    <expense-list />
    <expense-chart />
  </v-container>
</template>

<script>
import ExpenseForm from '../components/ExpenseForm.vue'
import ExpenseList from '../components/ExpenseList.vue'
import ExpenseChart from '../components/ExpenseChart.vue'

export default {
  components: {
    ExpenseForm,
    ExpenseList,
    ExpenseChart,
  },
}
</script>
