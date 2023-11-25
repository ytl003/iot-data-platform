<template>
  <div class="right-chart-1">
    <div text="#fff 30px" class="mt-20px rc1-header">
      土壤温湿度
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
import moment from 'moment'
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

const legendConfig = {
  temperature: '温度',
  humidity: '湿度',
}

const option = reactive(option1)
const chart = ref<HTMLElement>()
onMounted(() => {
  const params = { uid: 'zkumrlalq2t', collection: 'soil', measures: [{ field: ['temperature'] }, { field: ['humidity'] }, { field: ['illumination'] }], dimensions: [{ field: ['date'], format: 'hh:mm', alias: 'date' }], filter: { $and: [{ date: { $dateBetween: ['2023-03-02 00:00:00', '2023-03-03 23:59:59'] } }] }, orders: [], cache: {} }
  getChatData(params).then((r) => {
    option.xAxis.data = r.data.data.map((item: any) => item.date)
    const series: any[] = []
    const legend: string[] = []
    const currentTime = moment().format('HH:mm')
    const currentMoment = moment(currentTime, 'HH:mm')
    const validData = r.data.data.filter((item: any) => currentMoment.isBefore(moment(item.date, 'HH:mm')))
    forEach(legendConfig, (name, key) => {
      series.push({
        name,
        type: 'line',
        stack: 'Total',
        data: validData.map((item: any) => item[key]),
      })
      legend.push(name)
    })
    option.series = series
    option.legend.data = legend
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
