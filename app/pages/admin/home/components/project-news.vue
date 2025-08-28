<script setup lang="ts">
const {  $t } = useI18n()

interface NewsItem {
  id: number;
  content: string;
  time: string;
}

const newses = computed<NewsItem[]>(() => [
  { id: 1, content: $t('page.home.projectNews.desc1') as string, time: '2021-05-28 22:22:22' },
  { id: 2, content: $t('page.home.projectNews.desc2') as string, time: '2021-10-27 10:24:54' },
  { id: 3, content: $t('page.home.projectNews.desc3') as string, time: '2021-10-31 22:43:12' },
  { id: 4, content: $t('page.home.projectNews.desc4') as string, time: '2021-11-03 20:33:31' },
  { id: 5, content: $t('page.home.projectNews.desc5') as string, time: '2021-11-07 22:45:32' },
  { id: 6, content: $t('page.home.projectNews.desc5') as string, time: '2021-11-07 22:45:32' },
  { id: 7, content: $t('page.home.projectNews.desc5') as string, time: '2021-11-07 22:45:32' },
  { id: 8, content: $t('page.home.projectNews.desc5') as string, time: '2021-11-07 22:45:32' },
  { id: 9, content: $t('page.home.projectNews.desc5') as string, time: '2021-11-07 22:45:32' },
  { id: 10, content: $t('page.home.projectNews.desc5') as string, time: '2021-11-07 22:45:32' }
]);
const moreNewsHandle = ()=>{
  console.log('moreNewsHandle')
}
</script>

<template>
  <UCard 
    :title="$t('page.home.creativity')" 
    borderless  
    size="sm"  
    class="h-[500px] hover:overflow-auto w-full" 
  >
  <template #header>
    <div class="flex justify-between items-center">
      <span>{{$t('page.home.projectNews.title')}}</span>
      <ULink @click="moreNewsHandle"  class="hover:text-primary text-primary" >{{ $t('page.home.projectNews.moreNews') }}</ULink>
    </div>
    </template>
    <UTimeline
    :items="newses"
  >
  <template #indicator="{item}">
          <div class="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
          <img 
            src="@/assets/imgs/soybean.jpg" 
            alt="用户头像" 
            class="w-full h-full object-cover"
          >
        </div>
  </template>
    <template #title="{ item }">
      <!-- <span>{{ item.username }}</span> -->
      <!-- <span class="font-normal text-muted">&nbsp;{{ item.content }}</span> -->
      <div class="flex flex-col">
      <span class="font-medium text-base">&nbsp;{{ item.content }}</span>
        <!-- <span class="font-medium text-sm">{{ item.time }}</span> -->
      <!-- <USeparator /> -->
      </div>

    </template>

    <template #description="{ item }">
    <span class="text-black font-medium text-sm">{{ item.time }}</span>
      <USeparator />
    </template>
  </UTimeline>
  </UCard>
</template>

<style scoped></style>