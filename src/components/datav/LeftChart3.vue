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
        :style="{
          backgroundColor: data.levelColor,
          color: data.levelColor === '#67dd44' ? '#fff' : '#000',
        }"
      >
        {{ data.level }}
      </div>
      <div ml-30px text="left">
        <div>首要污染物：{{ data.shouyao }}</div>
        <div>污染级别：{{ data.wuranjibie }}</div>
        <div>AQI指数：{{ data.aqi }}</div>
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
            {{ item.grade === 50 ? "0" : "" }}
          </div>
          <div text="right">
            {{ item.grade }}
          </div>
        </div>
      </div>
    </div>
    <div text="left 14px" mt-20px>
      对健康的影响：{{ data.yingxiang }}
      <br>
      建议措施：{{ data.jianyi }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { StaticData } from '~/service/api'

const props = defineProps<{
  staticData: StaticData[]
}>()

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
const data = computed(() => {
  const level = props.staticData.find(i => i.key === '空气质量等级')?.content || '优'
  return {
    level,
    levelColor: config.find(i => i.text === level)?.color,
    shouyao: props.staticData.find(i => i.key === '首要污染物')?.content || '',
    wuranjibie: props.staticData.find(i => i.key === '污染级别')?.content || '',
    aqi: props.staticData.find(i => i.key === 'AQI指数')?.content || '',
    yingxiang: props.staticData.find(i => i.key === '对健康的影响')?.content || '',
    jianyi: props.staticData.find(i => i.key === '建议措施')?.content || '',
  }
})
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
