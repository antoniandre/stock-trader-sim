<template lang="pug">
top-movers-view(type="losers")
</template>

<script setup>
import TopMoversView from './top-movers-view.vue'
</script>

<style lang="scss" scoped>
.top-losers-view {
  padding: 2rem;
  margin: 0 auto;
}

.stat-item {
  text-align: center;

  .title3 {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1;
  }
}


</style>
