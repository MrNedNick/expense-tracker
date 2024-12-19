<template>
  <v-card>
    <v-card-title>Expense Breakdown</v-card-title>
    <v-card-text>
      <div id="expense-chart" style="width: 100%; height: 400px"></div>
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

<style scoped>
#expense-chart {
  max-width: 100%;
  margin: 0 auto;
}
</style>
