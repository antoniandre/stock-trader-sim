<template lang="pug">
.w-flex.h-screen
  sidebar.grow
  .ova.grow
    .w-flex.justify-end.pr2.py2.ovh
      w-switch(
        :model-value="$waveui.theme === 'dark'"
        @update:model-value="isDark => $waveui.switchTheme(isDark ? 'dark' : 'light')")
        template(#thumb)
          w-icon(sm) {{ $waveui.theme === 'dark' ? 'wi-star' : 'wi-check'  }}
    main.pa4
      router-view
</template>

<script setup>
import Sidebar from '@/components/sidebar.vue'
</script>
