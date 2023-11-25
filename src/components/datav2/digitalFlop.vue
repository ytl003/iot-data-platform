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
import { map } from 'lodash'
import { randomExtend } from '~/composables'
import { getAirData, getDataContent, getSoilData, getWarningData } from '~/service/api'

const digitalFlopData = ref<any[]>([
  {
    title: '设备总数',
    number: {
      number: [0],
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
      number: [0],
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
      number: [0],
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
      number: [0],
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
      number: [0],
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
      number: [0],
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
      number: [0],
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
      number: [0],
      content: '{nt}',
      textAlign: 'right',
      style: {
        fill: '#f46827',
        fontWeight: 'bold',
      },
    },
    unit: '条',
  },
])
onMounted(() => {
  createData()
  setInterval(createData, 30000)
})
function createData() {
  getDataContent({
    filter: {
      'key.$in': ['采集设备数量', '智能设备数量', '远程设备数量'],
    },
  }).then((r) => {
    const total = map(r, i => parseInt(i.content || '0')).reduce((a, b) => a + b)
    digitalFlopData.value[0].number.number[0] = total
  })

  getAirData({}).then((r) => {
    digitalFlopData.value[1].number.number[0] = r.meta.count
  })

  getSoilData({}).then((r) => {
    digitalFlopData.value[2].number.number[0] = r.meta.count
  })

  getWarningData({
    filter: {
      type: 'msg',
    },
  }).then((r) => {
    digitalFlopData.value[3].number.number[0] = r.meta.count
    const all = r.meta.count
    getWarningData({
      filter: {
        done: true,
        type: 'msg',
      },
    }).then((r) => {
      digitalFlopData.value[4].number.number[0] = r.meta.count
      digitalFlopData.value[5].number.number[0] = all - r.meta.count
    })
  })

  getWarningData({
    filter: {
      type: 'device',
    },
  }).then((r) => {
    digitalFlopData.value[6].number.number[0] = r.meta.count
    const all = r.meta.count
    getWarningData({
      filter: {
        done: true,
        type: 'device',
      },
    }).then((r) => {
      digitalFlopData.value[7].number.number[0] = r.meta.count
      digitalFlopData.value[8].number.number[0] = all - r.meta.count
    })
  })
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
