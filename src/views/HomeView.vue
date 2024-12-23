<template>
  <v-container>
    <ExpenseForm />
    <div class="d-flex justify-space-around">
      <ExpenseList class="mr-2" />
      <ExpenseChart />
    </div>
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
