import DefaultTheme from 'vitepress/theme'
import './custom.css'
import Layout from './Layout.vue'

// Arborium syntax highlighting themes
import '@arborium/arborium/themes/base.css'
import '@arborium/arborium/themes/github-light.css'
import '@arborium/arborium/themes/github-dark.css'

export default {
  extends: DefaultTheme,
  Layout
}
