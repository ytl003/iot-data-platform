<template>
  <div id="ranking-board">
    <div class="ranking-board-title">
      预警信息
    </div>
    <dv-scroll-board :config="config" />
  </div>
</template>

<script setup lang="ts">
import moment from 'moment'
import { getWarningData } from '~/service/api'

const config = ref({
  header: ['告警信息', '时间'],
  data: [

  ],
  index: true,
  columnWidth: [80, 260],
  align: ['center'],
  rowNum: 11,
  headerBGC: '#1981f6',
  headerHeight: 45,
  oddRowBGC: 'rgba(0, 44, 81, 0.8)',
  evenRowBGC: 'rgba(10, 29, 50, 0.8)',
})
onMounted(() => {
  getData()
  setInterval(() => {
    getData()
  }, 5000)
})

function getData() {
  getWarningData({
    pageSize: 500,
    filter: {
      type: 'msg',
    },
  }).then((r) => {
    config.value.data = r.data.map((i: any) => {
      return [i.content, moment(i.createTime).format('YYYY-MM-DD HH:mm:ss')]
    })
  })
}
</script>

<style lang="less">
#ranking-board {
  width: 30%;
  box-shadow: 0 0 3px blue;
  display: flex;
  flex-direction: column;
  background-color: rgba(6, 30, 93, 0.5);
  border-top: 2px solid rgba(1, 153, 209, .5);
  box-sizing: border-box;
  padding: 0px 30px;

  .ranking-board-title {
    font-weight: bold;
    font-size: 30px;
    line-height: 80px;
    display: flex;
    align-items: center;
  }

  .dv-scroll-ranking-board {
    flex: 1;
  }
}
</style>
