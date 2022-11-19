import DefaultTheme from 'vitepress/theme'
import type { App } from 'vue'
import { anu } from 'anu-vue'
import 'uno.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.use(anu, {
      registerComponents: true,
    })
  },
}
