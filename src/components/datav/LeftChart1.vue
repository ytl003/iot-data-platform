<template>
  <div class="left-chart-1">
    <div class="lc1-header">
      设备在线状态
    </div>
    <div flex="~ wrap" ml-10px>
      <dv-border-box8 v-for="(item, key) in configs" :key="item.label" class="box mt-10px" :reverse="key % 2 === 0">
        <dv-digital-flop :config="item.data" />
        <div text="18px">
          {{ item.label }}
        </div>
      </dv-border-box8>
    </div>
    <dv-decoration-2 class="mt-20px" style="height: 10px;" />
  </div>
</template>

<script lang="ts" setup>
import type { StaticData } from '~/service/api'

const props = defineProps<{
  staticData: StaticData[]
}>()
const configs = computed(() => {
  return [
    {
      label: '采集设备数量',
      data: {
        number: [0],
        content: '{nt}个',
      },
    },
    {
      label: '采集异常设备数量',
      data: {
        number: [0],
        content: '{nt}个',
      },
    },
    {
      label: '智能设备数量',
      data: {
        number: [0],
        content: '{nt}个',
      },
    },
    {
      label: '智能设备异常数量',
      data: {
        number: [0],
        content: '{nt}个',
      },
    },
    {
      label: '远程设备数量',
      data: {
        number: [0],
        content: '{nt}个',
      },
    },
    {
      label: '远程设备异常数量',
      data: {
        number: [0],
        content: '{nt}个',
      },
    },
  ].map((i) => {
    return {
      ...i,
      data: {
        ...i.data,
        number: [parseInt(props.staticData.find(k => k.key === i.label)?.content || '0')],
      },
    }
  })
})
</script>

<style lang="less">
.left-chart-1 {
  width: 100%;
  display: flex;
  flex-grow: 0;
  flex-direction: column;

  .lc1-header {
    font-weight: bold;
    text-align: center;
    font-size: 30px;
    margin-bottom: 0px;
  }

  .box {
    width: 45%;
    height: 130px;
    margin-left: 2.5%;
  }
}
</style>
