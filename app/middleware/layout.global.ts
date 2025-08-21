export default defineNuxtRouteMiddleware(async (to) => {
  if (to.path.startsWith('/admin')) {
    to.meta.layout = 'admin'
  } else if (to.path.startsWith('/user')) {
    to.meta.layout = 'default'
  } else if (to.path === '/login' || to.path === '/register') {
    to.meta.layout = false
  } else {
    to.meta.layout = false
  }
});