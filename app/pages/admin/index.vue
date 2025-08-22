

<template>
  layout是: {{ useAppStore().layout }}
  <UDashboardPanel id="inbox-1" resizable >
         <SwitchLocal />
      <div>
        下面是值:
      </div>
    {{ $t('key1') }}
    {{ $t('key2') }}
    {{ concc }}

  </UDashboardPanel>

  <!-- <UDashboardPanel id="inbox-1" resizable >
    1
  </UDashboardPanel>

  <UDashboardPanel id="inbox-2" class="hidden lg:flex" >
    2
  </UDashboardPanel>
  <UDashboardPanel id="inbox-3" class="hidden lg:flex" >
    3
  </UDashboardPanel> -->
  <UButton @click="switchLayout('admin')">管理员</UButton>
  <UButton @click="switchLayout('user')">用户</UButton>
</template>

<script setup lang="ts">
import { useNuxtApp } from '#imports'


const { $t } = useNuxtApp()
const concc = computed(() => {
  return $t('key1')
})
const switchLayout = (layout: string) => {
  layout = layout
  useAppStore().layout = layout
}
</script>