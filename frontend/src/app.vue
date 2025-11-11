<template lang="pug">
.w-flex.h-screen
  sidebar(
    :is-open="sidebarOpen"
    @update:is-open="sidebarOpen = $event")
  .ova.grow.relative
    .w-flex.justify-end.align-center.gap2.pr2.ovh
      //- Burger Menu Button (shown when sidebar is collapsed or always on mobile)
      w-button.pa0(
        v-if="!sidebarOpen || isMobile"
        width="32"
        height="32"
        @click="sidebarOpen = !sidebarOpen"
        tooltip="Toggle Menu"
        :tooltip-props="{ sm: true }"
        round
        text)
        icon(icon="line-md:menu-unfold-right" width="1.2rem" height="1.2rem")
      w-switch.py2(
        :model-value="$waveui.theme === 'dark'"
        @update:model-value="onThemeSwitch")
        template(#thumb)
          icon.w-icon.size--sm(
            :icon="$waveui.theme === 'dark' ? 'line-md:moon-filled' : 'mingcute:sun-fill'"
            :class="$waveui.theme === 'dark' ? 'primary' : 'amber'")

    //- Mobile overlay (shown when sidebar is open on mobile)
    .sidebar-overlay(v-if="isMobile && sidebarOpen" @click="sidebarOpen = false")

    main.px12.mt4.mb6
      router-view
</template>

<script setup>
import Sidebar from '@/components/sidebar.vue'
import { computed, inject, onMounted, ref, watch } from 'vue'

const $waveui = inject('$waveui')
const sidebarOpen = ref(true)

const isMobile = computed(() => $waveui.breakpoint.sm || $waveui.breakpoint.xs)
const onThemeSwitch = isDark => {
  const theme = isDark ? 'dark' : 'light'
  $waveui.switchTheme(theme)
  localStorage.theme = theme
}

watch(() => isMobile.value, isXs => {
  if (isXs) sidebarOpen.value = false

  // When switching from mobile to desktop, respect saved state.
  else sidebarOpen.value = localStorage.getItem('sidebarCollapsed') !== 'true'
})

onMounted(() => {
  const savedTheme = localStorage.theme
  if (savedTheme && ['light', 'dark'].includes(savedTheme) && savedTheme !== $waveui.theme) {
    $waveui.switchTheme(savedTheme)
  }

  // Check saved sidebar state.
  const savedCollapsed = localStorage.getItem('sidebarCollapsed')
  if (savedCollapsed === 'true') {
    sidebarOpen.value = false
  }
})
</script>

<style lang="scss">
.sidebar-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 999;
  backdrop-filter: blur(2px);
}
</style>
