<template lang="pug">
.w-flex.h-screen
  sidebar.grow
  .ova.grow
    .w-flex.justify-end.pr2.py2.ovh
      w-switch(
        :model-value="$waveui.theme === 'dark'"
        @update:model-value="onThemeSwitch")
        template(#thumb)
          w-icon(sm) {{ $waveui.theme === 'dark' ? 'wi-star' : 'wi-check'  }}
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
