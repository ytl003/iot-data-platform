<script setup lang="ts">
import { changeDefaultConfig } from '@jiaminghi/charts'

/**
 * @description 修改默认配置
 * @param {String} key          想要修改的配置项的key
 * @param {Object|Array} config 你的配置
 * @return {Undefined} 无返回值
 */
changeDefaultConfig('color', ['#000'])
</script>

<template>
  <dv-border-box2 w100 h100>
    <div>
      dv-border-box1
    </div>
  </dv-border-box2>
</template>
