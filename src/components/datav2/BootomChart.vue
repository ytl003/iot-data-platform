<template>
  <div class="right-chart-1">
    <div text="#fff 30px" class="mt-20px px-30px rc1-header">
      告警趋势图
    </div>
    <div
      ref="chart"
      class="rc1-chart-container"
      :option="option"
      style="width: 100%; height: 100%"
    />
  </div>
</template>

<script lang="ts" setup>
import * as echarts from 'echarts'
import { forEach } from 'lodash'
import { getChatData } from '~/service/api'

const option1 = {
  textStyle: {
    color: '#fff',
  },
  tooltip: {
    trigger: 'axis',
  },
  grid: {
    left: '5%', // 左边留白
    right: '8%', // 右边留白
    top: '14%', // 上边留白
    bottom: '10%', // 下边留白
    containLabel: true, // 确保图表在绘制时考虑坐标轴标签、刻度等内容
  },
  xAxis: {
    data: [],
    axisLabel: {
      show: true,
      lineStyle: {
        color: '#fff',
        lineWidth: 1,
      },
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: '#fff',
        lineWidth: 1,
      },
    },
    axisTick: {
      show: true,
      lineStyle: {
        color: '#fff',
        lineWidth: 1,
      },
    },
  },
  yAxis: {
    nameTextStyle: {
      fill: '#fff',
      fontSize: 10,
    },
    type: 'value',

    axisLine: {
      show: true,
      lineStyle: {
        color: '#fff',
        lineWidth: 1,
      },
    },
    axisTick: {
      show: true,
      lineStyle: {
        color: '#fff',
        lineWidth: 1,
      },
    },
  },
  legend: {
    data: [] as string[],
    textStyle: {
      color: '#fff',
    },
  },
  series: [] as any[],
}

const option = reactive(option1)
const chart = ref<HTMLElement>()

onMounted(() => {
  const params = { uid: 'ztxpmmf1kij', collection: 'warning', measures: [{ field: ['id'], aggregation: 'count', alias: 'id' }], dimensions: [{ field: ['createdAt'], format: 'MM-DD', alias: 'createdAt' }], filter: { $and: [{ createdAt: { $dateBetween: ['2023-10-31', '2023-12-31'] } }, { type: { $eq: 'device' } }] }, orders: [], cache: {} }
  const params2 = { uid: 'ztxpmmf1kij', collection: 'warning', measures: [{ field: ['id'], aggregation: 'count', alias: 'id' }], dimensions: [{ field: ['createdAt'], format: 'MM-DD', alias: 'createdAt' }], filter: { $and: [{ createdAt: { $dateBetween: ['2023-10-31', '2023-12-31'] } }, { type: { $eq: 'msg' } }] }, orders: [], cache: {} }
  Promise.all([
    getChatData(params),
    getChatData(params2),
  ]).then((res) => {
    option.xAxis.data = res[0].data.data.map((item: any) => item.createdAt)
    const series: any[] = []
    forEach(['预警', '设备告警'], (name, key) => {
      const validData = res[key].data.data
      series.push({
        name,
        type: 'line',
        stack: 'Total',
        data: validData.map((item: any) => parseInt(item.id)),
      })
    })

    option.series = series
    option.legend.data = ['预警', '设备告警']
    const myChart = echarts.init(chart.value)
    myChart.setOption(option)
  })
})
</script>

<style lang="less">
.right-chart-1 {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgba(6, 30, 93, 0.5);
  border-top: 2px solid rgba(1, 153, 209, 0.5);

  .rc1-header {
    font-size: 30px;
    font-weight: bold;
  }

  .rc1-chart-container {
    flex: 1;
    display: flex;
  }
}
</style>
