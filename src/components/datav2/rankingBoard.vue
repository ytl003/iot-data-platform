<template>
  <div id="ranking-board">
    <div class="ranking-board-title">
      预警信息
    </div>
    <dv-scroll-board :config="config" />
  </div>
</template>

<script setup lang="ts">
const config = ref({
  header: ['告警信息', '时间'],
  data: [
    [ '路面危害-松散', '2019-07-01 19:25:00'],
    [ '路面危害-路面油污清理', '2019-07-02 17:25:00'],
    [ '交安设施-交通标志牌结构', '2019-07-03 16:25:00'],
    [ '路基危害-防尘网', '2019-07-04 15:25:00'],
    [ '交安设施-交通标志牌结构', '2019-07-05 14:25:00'],
    [ '路面危害-松散', '2019-07-06 13:25:00'],
    [ '路基危害-防尘网', '2019-07-07 12:25:00'],
    [ '路面危害-路面油污清理', '2019-07-08 11:25:00'],
    [ '交安设施-交通标志牌结构', '2019-07-09 10:25:00'],
    [ '路基危害-防尘网', '2019-07-10 09:25:00'],
    [ '路基危害-防尘网', '2019-07-07 12:25:00'],
    [ '路面危害-路面油污清理', '2019-07-08 11:25:00'],
    [ '交安设施-交通标志牌结构', '2019-07-09 10:25:00'],
    [ '路基危害-防尘网', '2019-07-10 09:25:00'],
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
