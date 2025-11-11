<template lang="pug">
.sidebar-container(
  :class="{ 'sidebar-container--collapsed': isCollapsed, 'sidebar-container--fixed': isMobile, 'sidebar-container--resizing': isResizing }"
  :style="`width: ${isCollapsed ? '0' : sidebarWidth + 'px'}`")
  .sidebar.w-flex.column.no-shrink(:class="{ 'sidebar--collapsed': isCollapsed }")
    //- Logo
    .w-flex.align-center.gap4.no-grow.pa4.pr0
      //- Logo Icon
      icon.logo.w-icon.size--xl.primary(icon="icon-park-outline:increase" style="width: 30px; height: 30px")
      .title2.logo-title(v-if="!isCollapsed") Stock Trader
    .w-divider(v-if="!isCollapsed")

    //- Navigation
    nav.grow.py6(v-if="!isCollapsed")
      router-link.w-flex.align-center.px4.py2(to="/" active-class="primary")
        //- Dashboard Icon
        icon.size--xl.w-icon.mr3(icon="material-symbols-light:dashboard-outline-rounded")
        .title3 Dashboard

      router-link.w-flex.align-center.px4.py2(to="/trading" active-class="primary")
        //- Trading Icon
        icon.size--xl.w-icon.mr2(icon="hugeicons:trade-up")
        .title3 Trading

    //- User Profile
    .w-divider.no-grow(v-if="!isCollapsed")
    .w-flex.align-center.px4.py4.no-grow.pa4(v-if="!isCollapsed")
      w-image.bdrsr(src="https://i.pravatar.cc/100" alt="User Avatar" width="40")
      .ml3
        p.text-bold User
        p.size--sm.grey user@example.com

  //- Resize Handle
  .resize-handle(
    v-if="!isMobile"
    @mousedown="startResize"
    @touchstart="startResize")
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch, inject, computed } from 'vue'

const props = defineProps({
  isOpen: { type: Boolean, default: true }
})

const emit = defineEmits(['update:isOpen', 'resize'])
const $waveui = inject('$waveui')
const MIN_WIDTH = 210
const DEFAULT_WIDTH = 224
const MAX_WIDTH = 400

const sidebarWidth = ref(DEFAULT_WIDTH)
const isCollapsed = ref(false)
const isMobile = computed(() => $waveui.breakpoint.sm || $waveui.breakpoint.xs)
let isResizing = false
let startX = 0
let startWidth = 0

const startResize = e => {
  if (isCollapsed.value) return

  isResizing = true
  startX = e.touches ? e.touches[0].clientX : e.clientX
  startWidth = sidebarWidth.value

  document.addEventListener('mousemove', onResize)
  document.addEventListener('mouseup', stopResize)
  document.addEventListener('touchmove', onResize)
  document.addEventListener('touchend', stopResize)

  e.preventDefault()
}

const onResize = e => {
  if (!isResizing) return

  const clientX = e.touches ? e.touches[0].clientX : e.clientX
  const diff = clientX - startX
  const newWidth = startWidth + diff

  // Check if we should collapse (dragged past min-width/2 to the left).
  if (newWidth < MIN_WIDTH / 2) {
    if (!isCollapsed.value) {
      isCollapsed.value = true
      localStorage.setItem('sidebarCollapsed', 'true')
      emit('update:isOpen', false)
    }
  }
  else {
    // If we were collapsed and now expanding, uncollapse.
    if (isCollapsed.value && newWidth >= MIN_WIDTH / 2) {
      isCollapsed.value = false
      localStorage.setItem('sidebarCollapsed', 'false')
      emit('update:isOpen', true)
    }

    // Constrain width between MIN_WIDTH and MAX_WIDTH.
    const constrainedWidth = Math.max(MIN_WIDTH, Math.min(newWidth, MAX_WIDTH))
    sidebarWidth.value = constrainedWidth
    localStorage.setItem('sidebarWidth', constrainedWidth.toString())
    emit('resize', constrainedWidth)
  }
}

const stopResize = () => {
  isResizing = false
  document.removeEventListener('mousemove', onResize)
  document.removeEventListener('mouseup', stopResize)
  document.removeEventListener('touchmove', onResize)
  document.removeEventListener('touchend', stopResize)
}

// Watchers.
// --------------------------------------------------------
// Watch for external open/close changes (from burger menu).
watch(() => props.isOpen, newValue => {
  isCollapsed.value = !newValue
  localStorage.setItem('sidebarCollapsed', newValue ? 'false' : 'true')
}, { immediate: true })

// Watch for mobile changes.
watch(() => isMobile.value, isXs => {
  if (isXs) isCollapsed.value = true
})

// Lifecycle.
// --------------------------------------------------------
// Load saved state from localStorage.
onMounted(() => {
  const savedWidth = localStorage.getItem('sidebarWidth')
  const savedCollapsed = localStorage.getItem('sidebarCollapsed')

  if (savedWidth) {
    const width = parseInt(savedWidth, 10)
    if (width >= MIN_WIDTH && width <= MAX_WIDTH) {
      sidebarWidth.value = width
    }
  }

  // On mobile, always start collapsed.
  if (isMobile.value) {
    isCollapsed.value = true
    emit('update:isOpen', false)
  }
  // On desktop, respect saved collapsed state.
  else if (savedCollapsed === 'true') {
    isCollapsed.value = true
    emit('update:isOpen', false)
  }
})

onUnmounted(() => {
  stopResize()
})
</script>

<style lang="scss">
.sidebar-container {
  position: relative;
  flex-shrink: 0;
  overflow: hidden;
  transition: width 0.25s ease-in-out;

  &--fixed {
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    z-index: 1000;
    box-shadow: 2px 0 8px rgba(0, 0, 0, 0.15);

    &.sidebar-container--collapsed {width: 0 !important;}
  }

  &--collapsed {
    width: 0 !important;
    overflow: hidden;
  }

  &--resizing {
    cursor: col-resize;
    user-select: none;
    transition: none;
  }
}

.sidebar {
  height: 100vh;
  background-color: var(--w-base-bg-color);
  border-right: 1px solid color-mix(in srgb, var(--w-contrast-bg-color) 8%, transparent);
  overflow: hidden;

  .logo {flex-shrink: 0;}
  .logo-title {
    background-clip: text;
    color: transparent;
    background-image: linear-gradient(to right, var(--w-primary-color), #90ffb0);
    white-space: nowrap;
  }
}

.resize-handle {
  position: absolute;
  right: 0;
  top: 0;
  width: 4px;
  height: 100%;
  cursor: col-resize;
  z-index: 10;
  background: transparent;
  transition: background-color 0.2s;

  &:hover {background-color: var(--w-primary-color);}

  &:active {
    background-color: var(--w-primary-color);
    opacity: 0.8;
  }
}

:root[data-theme="light"] .logo-title {
  background-image: linear-gradient(to right, var(--w-primary-color), #24c7a3);
}
</style>
