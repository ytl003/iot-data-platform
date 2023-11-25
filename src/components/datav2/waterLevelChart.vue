<template>
  <div id="water-level-chart">
    <div class="water-level-chart-title">
      异常数据处理情况
    </div>

    <div class="water-level-chart-details">
      累计完成<span>{{ done }}</span>条
    </div>

    <div class="chart-container">
      <dv-water-level-pond :config="config" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { getWarningData } from '~/service/api'

const done = ref(0)
const config = ref({
  data: [0],
  shape: 'round',
  waveHeight: 25,
  waveNum: 2,
})

onMounted(() => {
  Promise.all([
    getWarningData({
      filter: {
        type: 'device',
      },
    }),
    getWarningData({
      filter: {
        done: true,
        type: 'device',
      },
    }),
    getWarningData({
      filter: {
        type: 'msg',
      },
    }),
    getWarningData({
      filter: {
        done: true,
        type: 'msg',
      },
    }),
  ]).then((r) => {
    const all = r[0].meta.count + r[2].meta.count
    done.value = r[1].meta.count + r[3].meta.count

    config.value.data = [
      parseInt(`${(done.value / all) * 100}`),
    ]
  })
})
</script>

<style lang="less">
#water-level-chart {
  width: 30%;
  flex-shrink: 0;
  box-sizing: border-box;
  // margin-left: 20px;
  margin-right: 20px;
  background-color: rgba(6, 30, 93, 0.5);
  border-top: 2px solid rgba(1, 153, 209, .5);
  display: flex;
  flex-direction: column;

  .water-level-chart-title {
    font-weight: bold;
    height: 50px;
    display: flex;
    align-items: center;
    font-size: 30px;
    margin-top: 40px;
    justify-content: center;
  }

  .water-level-chart-details {
    height: 15%;
    display: flex;
    justify-content: center;
    font-size: 17px;
    align-items: flex-end;

    span {
      font-size: 35px;
      font-weight: bold;
      color: #58a1ff;
      margin: 0 5px;
      margin-bottom: -5px;
    }
  }

  .chart-container {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .dv-water-pond-level {
    max-width: 90%;
    width: 200px;
    height: 200px;
    border: 10px solid #19c3eb;
    border-radius: 50%;

    ellipse {
      stroke: transparent !important;
    }

    text {
      font-size: 40px;
    }
  }
}
</style>
