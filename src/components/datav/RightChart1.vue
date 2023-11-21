<template>
  <div class="right-chart-1">
    <dv-charts  :option="option" style="width: 100%;height: 100%;" />
  </div>
</template>

<script lang="ts" setup>
const option1 = {
  style: {
    fill: '#fff',
  },
  title: {
    text: '二氧化碳数据分析',
    style: {
      fill: '#fff',
    },
  },
  xAxis: {
    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日', '周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    axisLabel: {
      style: {
        fill: '#fff',
      },
    },
    axisLine: {
      style: {
        stroke: '#fff',
        lineWidth: 1,
      },
    },
    axisTick: {
      style: {
        stroke: '#fff',
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
    data: 'value',
    axisLabel: {
      style: {
        fill: '#fff',
      },
    },
    axisLine: {
      style: {
        stroke: '#fff',
        lineWidth: 1,
      },
    },
    axisTick: {
      style: {
        stroke: '#fff',
        lineWidth: 1,
      },
    },
  },
  series: [
    {
      data: [1200, 2230, 1900, 2100, 3500, 4200, 3985, 1200, 2230, 1900, 2100, 3500, 4200, 3985],
      type: 'line',
      lineArea: {
        show: true,
        gradient: ['rgba(55, 162, 218, 0.6)', 'rgba(55, 162, 218, 0)'],
      },
    },
  ],
}

const option = reactive(option1)
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
    line-height: 60px;
  }

  .rc1-chart-container {
    flex: 1;
    display: flex;
  }

}
</style>
