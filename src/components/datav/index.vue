<template>
  <div id="data-view">
    <dv-full-screen-container>
      <TopHeader1 />

      <dv-border-box-1 class="main-container">
        <dv-border-box-3 class="left-chart-container">
          <!-- 设备在线状态 -->
          <Left-Chart-1 :static-data="staticData" />
          <!-- <Left-Chart-2 /> -->
          <Left-Chart-3 :static-data="staticData" />
        </dv-border-box-3>

        <div class="right-main-container">
          <div class="rmc-top-container">
            <dv-border-box-3 class="rmctc-left-container p-20px">
              <!-- <Center-Cmp /> -->
              <div class="img" />
            </dv-border-box-3>

            <div class="rmctc-right-container">
              <dv-border-box-3 class="rmctc-chart-1">
                <Right-Chart-1 />
              </dv-border-box-3>

              <dv-border-box-4 class="rmctc-chart-2" :reverse="true">
                <Right-Chart-2 />
              </dv-border-box-4>
            </div>
          </div>

          <dv-border-box-4 class="rmc-bottom-container">
            <!-- <Bottom-Charts /> -->
            <Bottom-Chart-1 />
            <Bottom-Chart-2 />
          </dv-border-box-4>
        </div>
      </dv-border-box-1>
    </dv-full-screen-container>
  </div>
</template>

<script lang="ts" setup>
import type { StaticData } from '~/service/api'
import { getDataContent } from '~/service/api'

const nowTime = ref('')

onMounted(() => {
  nowTime.value = new Date().toLocaleString()
  setInterval(() => {
    nowTime.value = new Date().toLocaleString()
  }, 1000)
})
const staticData = ref<StaticData[]>([])
onMounted(() => {
  getDataContent({}).then((r) => {
    staticData.value = r
  })
})
</script>

<style lang="less">
#data-view {
  width: 100%;
  height: 100%;
  background-color: #030409;
  color: #fff;

  #dv-full-screen-container {
    background-image: url("./img/bg.png");
    background-size: 100% 100%;
    box-shadow: 0 0 3px blue;
    display: flex;
    flex-direction: column;
  }

  .main-header {
    height: 80px;
    .mh-left {
      position: absolute;
      left: 30px;
      font-size: 20px;
    }
    .mh-right {
      position: absolute;
      right: 30px;
      font-size: 20px;
    }

    .mh-middle {
      font-size: 50px;
      font-weight: bold;
    }
  }

  .main-container {
    height: calc(~"100% - 80px");

    .border-box-content {
      padding: 20px;
      padding-top: 0;
      box-sizing: border-box;
      display: flex;
    }
  }

  .left-chart-container {
    width: 26%;
    padding: 10px;
    box-sizing: border-box;

    .border-box-content {
      flex-direction: column;
    }
  }

  .right-main-container {
    width: 74%;
    padding-left: 5px;
    box-sizing: border-box;
  }

  .rmc-top-container {
    height: 65%;
    display: flex;
  }

  .rmctc-left-container {
    width: 60%;
    .img {
      background-image: url("./img/3.png");
      background-size: 100% 100%;
      width: 100%;
      height: 100%;
    }
  }

  .rmctc-right-container {
    width: 40%;
  }

  .rmc-bottom-container {
    height: 35%;
  }

  .rmctc-chart-1,
  .rmctc-chart-2 {
    height: 50%;
  }
}
</style>
