<template>
  <v-card>
    <v-card-title>Expense Breakdown</v-card-title>
    <v-card-text>
      <canvas id="expense-chart"></canvas>
    </v-card-text>
  </v-card>
</template>

<script>
import { onMounted } from 'vue';
import Chart from 'chart.js/auto';
import { useExpensesStore } from '../stores/expenses';

export default {
  setup() {
    const store = useExpensesStore();

    onMounted(() => {
      const ctx = document.getElementById('expense-chart');
      new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: store.expenses.map(e => e.title),
          datasets: [
            {
              data: store.expenses.map(e => e.amount),
              backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726'],
            },
          ],
        },
      });
    });
  },
};
</script>
