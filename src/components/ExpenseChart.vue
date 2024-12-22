<template>
  <v-card class="expense-chart-card">
    <v-card-title class="chart-title">Expense Breakdown</v-card-title>
    <v-card-text>
      <div id="expense-chart" class="chart-container"></div>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import * as echarts from 'echarts'
import { useExpensesStore } from '../stores/expenses'

const store = useExpensesStore()
const chartInstance = ref(null)

const updateChart = () => {
  if (chartInstance.value) {
    chartInstance.value.setOption({
      tooltip: {
        trigger: 'item',
      },
      legend: {
        top: '5%',
        left: 'center',
      },
      series: [
        {
          name: 'Expenses',
          type: 'pie',
          radius: '50%',
          data: store.expenses.map((e) => ({
            value: e.amount,
            name: e.title,
          })),
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      ],
    })
  }
}

onMounted(() => {
  const chartDom = document.getElementById('expense-chart')
  chartInstance.value = echarts.init(chartDom)
  updateChart()
})

watch(() => store.expenses, updateChart, { deep: true })
</script>

<style scoped lang="scss">
.expense-chart-card {
  max-width: 600px;
  margin: 20px auto;
  border: 1px solid #ccc;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  .chart-title {
    text-align: center;
    font-weight: bold;
    font-size: 1.2rem;
    color: #333;
    padding-bottom: 10px;
  }
  .chart-container {
    width: 100%;
    height: 400px;
    margin: 0 auto;
  }
}
</style>
