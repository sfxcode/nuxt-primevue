import DefaultTheme from 'vitepress/theme'
import type { App } from 'vue'
import { anu } from 'anu-vue'
import 'uno.css'
import Todo from './components/Todo.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.use(anu, {
      registerComponents: true,
    })
    app.component('Todo', Todo)

  },
}
