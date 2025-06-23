<template lang="pug">
.w-flex
  sidebar.grow
  main.ova.grow.pa4
    router-view
</template>

<script setup>
import Sidebar from '@/components/sidebar.vue'
</script>
