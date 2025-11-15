// resources/js/app.js
import "../css/app.css"
import "./bootstrap"

import { setup } from "@css-render/vue3-ssr"
import { createInertiaApp } from "@inertiajs/vue3"
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers"
import { createSSRApp } from "vue"
import { ZiggyVue } from "../../vendor/tightenco/ziggy"
import { renderApp } from "./Composables/useTheme"

const AppLayout = async () =>
    import("./Layouts/AppLayout.vue").then((mod) => mod.default)

createInertiaApp({
    resolve: async (name) => {
        const page = await resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob("./Pages/**/*.vue")
        )

        page.default.layout =
            page.default.layout === null
                ? null
                : page.default.layout || (await AppLayout())

        return page
    },
    setup({ el, App, props, plugin }) {
        console.log(props.initialPage.props)

        const app = createSSRApp({ render: () => renderApp(App, props) })
            .use(plugin)
            .use(ZiggyVue)

        app.provide("route", app.config.globalProperties.route)

        setup(app)

        app.mount(el)
    },
})
