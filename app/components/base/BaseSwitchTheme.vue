<template>
    <UTooltip :delay-duration="0" :text="$t('icon.themeConfig') as string">
        <UButton @click="handleClick" color="neutral" variant="ghost" icon="i-lucide:swatch-book"></UButton>
    </UTooltip>

</template>
<script lang="ts" setup>
const handleClick = () => {
    console.log('13213');
}

</script>
