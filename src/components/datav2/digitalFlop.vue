<template>
  <div id="digital-flop">
    <div
      v-for="item in digitalFlopData"
      :key="item.title"
      class="digital-flop-item"
    >
      <div class="digital-flop-title">
        {{ item.title }}
      </div>
      <div class="digital-flop">
        <dv-digital-flop
          :config="item.number"
          style="width: 100px; height: 50px"
        />
        <div class="unit">
          {{ item.unit }}
        </div>
      </div>
    </div>

    <dv-decoration-10 />
  </div>
</template>

<script setup lang="ts">
import { randomExtend } from '~/composables'

const digitalFlopData = ref<any[]>([])
onMounted(() => {
  createData()
  setInterval(createData, 30000)
})

function createData() {
  digitalFlopData.value = [
    {
      title: '设备总数',
      number: {
        number: [randomExtend(5, 10)],
        content: '{nt}',
        textAlign: 'right',
        style: {
          fill: '#4d99fc',
          fontWeight: 'bold',
        },
      },
      unit: '个',
    },
    {
      title: '空气数据总数',
      number: {
        number: [randomExtend(5, 10)],
        content: '{nt}',
        textAlign: 'right',
        style: {
          fill: '#f46827',
          fontWeight: 'bold',
        },
      },
      unit: '个',
    },
    {
      title: '土壤数据总数',
      number: {
        number: [randomExtend(5, 10)],
        content: '{nt}',
        textAlign: 'right',
        style: {
          fill: '#40faee',
          fontWeight: 'bold',
        },
      },
      unit: '个',
    },
    {
      title: '设备总异常数',
      number: {
        number: [randomExtend(20000, 30000)],
        content: '{nt}',
        textAlign: 'right',
        style: {
          fill: '#4d99fc',
          fontWeight: 'bold',
        },
      },
      unit: '条',
    },
    {
      title: '设备已处理数',
      number: {
        number: [randomExtend(20, 30)],
        content: '{nt}',
        textAlign: 'right',
        style: {
          fill: '#40faee',
          fontWeight: 'bold',
        },
      },
      unit: '条',
    },
    {
      title: '设备未处理数',
      number: {
        number: [randomExtend(20, 30)],
        content: '{nt}',
        textAlign: 'right',
        style: {
          fill: '#f46827',
          fontWeight: 'bold',
        },
      },
      unit: '条',
    },
    {
      title: '数据总异常数',
      number: {
        number: [randomExtend(20000, 30000)],
        content: '{nt}',
        textAlign: 'right',
        style: {
          fill: '#4d99fc',
          fontWeight: 'bold',
        },
      },
      unit: '条',
    },
    {
      title: '数据已处理数',
      number: {
        number: [randomExtend(20, 30)],
        content: '{nt}',
        textAlign: 'right',
        style: {
          fill: '#40faee',
          fontWeight: 'bold',
        },
      },
      unit: '条',
    },
    {
      title: '数据未处理数',
      number: {
        number: [randomExtend(20, 30)],
        content: '{nt}',
        textAlign: 'right',
        style: {
          fill: '#f46827',
          fontWeight: 'bold',
        },
      },
      unit: '条',
    },
  ]
}
</script>

<style lang="less">
#digital-flop {
  position: relative;
  height: 15%;
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(6, 30, 93, 0.5);

  .dv-decoration-10 {
    position: absolute;
    width: 95%;
    left: 2.5%;
    height: 5px;
    bottom: 0px;
  }

  .digital-flop-item {
    width: 11%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-left: 3px solid rgb(6, 30, 93);
    border-right: 3px solid rgb(6, 30, 93);
  }

  .digital-flop-title {
    font-size: 20px;
    margin-bottom: 20px;
  }

  .digital-flop {
    display: flex;
  }

  .unit {
    margin-left: 10px;
    display: flex;
    align-items: flex-end;
    box-sizing: border-box;
    padding-bottom: 13px;
  }
}
</style>
