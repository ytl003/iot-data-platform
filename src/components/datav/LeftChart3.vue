<template>
  <div class="left-chart-3">
    <div class="lc3-header">
      空气质量
    </div>
    <div flex="~ items-center">
      <div
        text="36px "
        font-600
        flex="~ items-center justify-center"
        w-100px
        h-100px
        style="border-radius: 50%; background-color: #67dd44"
      >
        优
      </div>
      <div ml-30px text="left">
        <div>首要污染物：PM10</div>
        <div>污染级别：2级</div>
        <div>AQI指数：50</div>
      </div>
    </div>
    <div flex="~" mt-20px>
      <div v-for="item in config" :key="item.grade" style="width: 19%">
        <div text="12px">
          {{ item.text }}
        </div>
        <div
          style="width: 100%; height: 10px"
          :style="{ backgroundColor: item.color }"
        />
        <div flex="~">
          <div flex-1 text-left>
            {{ item.grade === 50 ? '0' : '' }}
          </div>
          <div text="right">
            {{ item.grade }}
          </div>
        </div>
      </div>
    </div>
    <div text="left 14px" mt-20px>
      对健康的影响：空气质量可接受，但某些污染物可能对极少数异常敏感的人群健康有较轻影响。
      <br>
      建议措施：极少数异常敏感人群应减少户外活动。
    </div>
  </div>
</template>

<script lang="ts" setup>
const config = [
  {
    grade: 50,
    text: '优',
    color: '#67dd44',
  },
  {
    grade: 100,
    text: '良',
    color: '#ffff57',
  },
  {
    grade: 150,
    text: '轻度污染',
    color: '#ed8a36',
  },
  {
    grade: 200,
    text: '中度污染',
    color: '#dd3123',
  },
  {
    grade: 300,
    text: '中度污染',
    color: '#8c1c4c',
  },
  {
    grade: 500,
    text: '严重污染',
    color: '#6d1624',
  },
]
</script>

<style lang="less">
.left-chart-3 {
  width: 100%;
  height: 33%;
  display: flex;
  flex-direction: column;
  padding: 10px;

  .lc3-header {
    font-weight: bold;
    text-align: center;
    font-size: 30px;
    margin-bottom: 0px;
    margin-top: 10px;
  }
}
</style>
