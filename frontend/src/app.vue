<template lang="pug">
.w-flex.h-screen
  sidebar.grow
  .ova.grow.pos
    .w-flex.justify-end.pr2.py2.ovh
      w-switch(
        :model-value="$waveui.theme === 'dark'"
        @update:model-value="onThemeSwitch")
        template(#thumb)
          icon.w-icon.size--sm(
            :icon="$waveui.theme === 'dark' ? 'line-md:moon-filled' : 'mingcute:sun-fill'"
            :class="$waveui.theme === 'dark' ? 'primary' : 'amber'")
    main.pa4
      router-view
</template>

<script setup>
import Sidebar from '@/components/sidebar.vue'
import { inject, onMounted } from 'vue'

const $waveui = inject('$waveui')
const onThemeSwitch = isDark => {
  const theme = isDark ? 'dark' : 'light'
  $waveui.switchTheme(theme)
  localStorage.theme = theme
}

onMounted(() => {
  const savedTheme = localStorage.theme
  if (savedTheme && ['light', 'dark'].includes(savedTheme) && savedTheme !== $waveui.theme) {
    $waveui.switchTheme(savedTheme)
  }
})
</script>
