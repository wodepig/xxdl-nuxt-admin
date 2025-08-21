
export const useAppStore = defineStore('appStore',()=>{
  const layout = ref('admin')
  return {
    layout
  }
},
  {
    persist: {
      storage: piniaPluginPersistedstate.localStorage()
    },
  })
