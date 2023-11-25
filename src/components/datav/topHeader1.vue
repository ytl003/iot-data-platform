<template>
  <div id="top-header" class="relative">
    <div class="header-left-decoration" />
    <dv-decoration-5 class="header-center-decoration" />
    <div class="header-right-decoration" />
    <!-- <dv-decoration-8 class="header-right-decoration" :reverse="true" /> -->
    <div class="center-title">
      物联网感知数据监测平台
    </div>
    <div class="absolute right-10 top-10">
      <dv-button :bg="false" color="#2862b7">
        {{ nowTime }}
      </dv-button>
    </div>
    <div class="absolute left-10 top-10">
      <RouterLink to="index2">
        <dv-button border="Border2" color="#2862b7">
          预警系统
        </dv-button>
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['toggle'])
const nowTime = ref('')
onMounted(() => {
  nowTime.value = new Date().toLocaleString()
  setInterval(() => {
    nowTime.value = new Date().toLocaleString()
  }, 1000)
})
</script>

<style lang="less">
#top-header {
  position: relative;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  flex-shrink: 0;

  .header-center-decoration {
    width: 40%;
    height: 60px;
    margin-top: 30px;
  }

  .header-left-decoration,
  .header-right-decoration {
    width: 25%;
    height: 60px;
  }

  .center-title {
    position: absolute;
    font-size: 30px;
    font-weight: bold;
    left: 50%;
    top: 15px;
    transform: translateX(-50%);
  }
}
</style>
