<template>
  <div class="right-chart-1">
    <div text="#fff 30px" class="mt-20px rc1-header">
      土壤温湿度
    </div>
    <div
      id="bottom-chart-1"
      class="rc1-chart-container"
      :option="option"
      style="width: 100%; height: 100%"
    />
  </div>
</template>

<script lang="ts" setup>
import * as echarts from 'echarts'

const option1 = {
  textStyle: {
    color: '#fff',
  },
  grid: {
    left: '5%', // 左边留白
    right: '8%', // 右边留白
    top: '14%', // 上边留白
    bottom: '10%', // 下边留白
    containLabel: true, // 确保图表在绘制时考虑坐标轴标签、刻度等内容
  },
  xAxis: {
    data: [
      '周一',
      '周二',
      '周三',
      '周四',
      '周五',
      '周六',
      '周日',
      '周一',
      '周二',
      '周三',
      '周四',
      '周五',
      '周六',
      '周日',
    ],
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
    name: 'CO2浓度',
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
  series: [
    {
      data: [
        1200, 2230, 1900, 2100, 3500, 4200, 3985, 1200, 2230, 1900, 2100, 3500,
        4200, 3985,
      ],
      type: 'line',
      lineArea: {
        show: true,
        gradient: ['rgba(55, 162, 218, 0.6)', 'rgba(55, 162, 218, 0)'],
      },
    },
  ],
}

const option = reactive(option1)

onMounted(() => {
  const myChart = echarts.init(document.getElementById('bottom-chart-1'))
  myChart.setOption(option1)
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
