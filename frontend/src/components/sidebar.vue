<template lang="pug">
.sidebar.w-flex.column.no-shrink.no-grow
  //- Logo
  .w-flex.align-center.gap4.no-grow.pa4.pr0
    //- Logo Icon
    icon.w-icon.size--xl.primary(icon="icon-park-outline:increase" style="width: 30px; height: 30px")
    //- icon.w-icon.size--xl.info(icon="streamline-freehand:saving-bull-market" flip="horizontal" style="width: 34px; height: 34px")
    .title2.logo-title Stock Trader
  .w-divider

  //- Navigation
  nav.grow.py6
    router-link.w-flex.align-center.px4.py2(to="/" active-class="primary")
      //- Dashboard Icon
      icon.size--xl.w-icon.mr3(icon="material-symbols-light:dashboard-outline-rounded")
      .title3 Dashboard

    router-link.w-flex.align-center.px4.py2(to="/trading" active-class="primary")
      //- Trading Icon
      icon.size--xl.w-icon.mr2(icon="hugeicons:trade-up")
      .title3 Trading

  //- User Profile
  .w-divider.no-grow
  .w-flex.align-center.px4.py4.no-grow.pa4
    w-image.bdrsr(src="https://i.pravatar.cc/100" alt="User Avatar" width="40")
    .ml3
      p.text-bold User
      p.size--sm.grey user@example.com
</template>

<script setup>
// No script logic needed for this static sidebar yet
</script>

<style lang="scss">
.sidebar {
  width: 224px;
  background-color: var(--w-base-bg-color);
  border-right: 1px solid color-mix(in srgb, var(--w-contrast-bg-color) 8%, transparent);

  .logo-title {
    background-clip: text;
    color: transparent;
    // background-image: linear-gradient(to right, var(--w-primary-color), #ffb1ea);
    background-image: linear-gradient(to right, var(--w-primary-color), #90ffb0);
  }
}

:root[data-theme="light"] .logo-title {
  background-image: linear-gradient(to right, var(--w-primary-color), #24c7a3);
}

</style>
