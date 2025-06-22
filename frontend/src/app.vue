<template lang="pug">
.flex.h-screen
  sidebar
  main.flex-1.overflow-y-auto
    router-view
</template>

<script setup>
import Sidebar from '@/components/sidebar.vue'
</script>
