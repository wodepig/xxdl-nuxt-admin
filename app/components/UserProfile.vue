<script setup lang="ts">
const {$getLocales, $t } = useI18n()
import type { DropdownMenuItem } from '@nuxt/ui'

const locales = $getLocales()
const items = ref<DropdownMenuItem[]>([
  {
    label: $t('common.userCenter') as string,
    icon: 'i-tabler:user-circle'
  },
  {
    label: $t('common.logout') as string,
    icon: 'i-tabler:logout'
  }
])
</script>

<template>

    <UDropdownMenu :items="items">
            <UButton icon="i-tabler:user-circle" color="neutral" variant="ghost" >用户名</UButton>
    </UDropdownMenu>


</template>
