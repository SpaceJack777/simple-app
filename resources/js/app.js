import '../css/app.css'

import { createInertiaApp } from '@inertiajs/vue3'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import { createSSRApp, h } from 'vue'

const AppLayout = async () => import('./Layouts/AppLayout.vue').then((mod) => mod.default)

createInertiaApp({
  resolve: async (name) => {
    try {
      const page = await resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue'))
      console.log(page)
      page.default.layout = page.default.layout || (page.default.layout === null ? null : await AppLayout())
      return page
    } catch (error) {}
  },
  setup({ el, App, props, plugin }) {
    console.log(props.initialPage.props)
    createSSRApp({ render: () => h(App, props) })
      .use(plugin)
      .mount(el)
  },
})
