<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import CodeExamples from './components/CodeExamples.vue'

const { Layout } = DefaultTheme
const { frontmatter } = useData()
</script>

<template>
  <Layout>
    <template #home-hero-after>
      <CodeExamples v-if="frontmatter.layout === 'home'" />
    </template>
  </Layout>
</template>
