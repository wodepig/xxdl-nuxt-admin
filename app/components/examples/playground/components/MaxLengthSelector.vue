<script setup lang="ts">
import type { SliderRootProps } from 'radix-vue'

const props = defineProps<{
  defaultValue: SliderRootProps['defaultValue']
}>()

const value = ref(props.defaultValue)
</script>

<template>
  <div class="grid gap-2 pt-2">
    <HoverCard :open-delay="200">
      <HoverCardTrigger as-child>
        <div class="grid gap-4">
          <div class="flex items-center justify-between">
            <Label for="maxlength">Maximum Length</Label>
            <span class="w-12 border border-transparent rounded-md px-2 py-0.5 text-right text-sm text-muted-foreground hover:border-border">
              {{ value?.[0] }}
            </span>
          </div>
          <Slider
            id="maxlength"
            v-model="value"
            :max="4000"
            :step="10"
            class="[&_[role=slider]]:h-4 [&_[role=slider]]:w-4"
            aria-label="Maximum Length"
          />
        </div>
      </HoverCardTrigger>
      <HoverCardContent
        align="start"
        class="w-[260px] text-sm"
        side="left"
      >
        The maximum number of tokens to generate. Requests can use up to 2,048
        or 4,000 tokens, shared between prompt and completion. The exact limit
        varies by model.
      </HoverCardContent>
    </HoverCard>
  </div>
</template>
