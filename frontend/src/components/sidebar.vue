<template lang="pug">
.w-flex.column.grey-dark6--bg.no-shrink.no-grow.pa3(style="width: 250px")
  //- Logo
  .w-flex.align-center.justify-center.no-grow
    .w-flex.align-center
      //- Logo SVG
      .w-icon.mr3.contrast-o05--bg.w-icon--xl
        svg.purple(xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2")
          path(stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6")
      span.title2.text-bold.white Stock Trader

  //- Navigation
  nav.px4.py6.space-y-2.grow
    router-link.w-flex.align-center.px4.py2.rounded-lg.text-grey-200(to="/" class="hover.grey8--bg" active-class="grey6--bg")
      //- Dashboard Icon
      .w-icon.mr3
        svg(xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor")
          path(stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16")
      .title3 Dashboard

    router-link.w-flex.align-center.px4.py2.rounded-lg.grey(to="/trading" class="hover.grey8--bg hover:white" active-class="grey6--bg white")
      //- Trading Icon
      .w-icon.mr3
        svg(xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor")
          path(stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4")
      .title3 Trading

  //- User Profile
  .px4.py4.bd1
    .w-flex.align-center
      w-image.bdrsr(src="https://i.pravatar.cc/100" alt="User Avatar" width="40")
      .ml3
        p.text-bold.white User
        p.size--sm.grey user@example.com
</template>

<script setup>
// No script logic needed for this static sidebar yet
</script>
