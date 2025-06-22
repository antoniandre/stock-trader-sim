<template lang="pug">
.w-64.bg-gray-900.border-r.border-gray-700.flex.flex-col
  //- Logo
  .flex.items-center.justify-center.h-20.border-b.border-gray-700
    .flex.items-center
      //- Logo SVG
      svg.w-8.h-8.text-purple-500.mr-3(xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2")
        path(stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6")
      span.text-2xl.font-bold.text-white Dashboard

  //- Navigation
  nav.flex-1.px-4.py-6.space-y-2
    a.flex.items-center.px-4.py-2.rounded-lg.text-gray-200(href="#" class="bg-gray-800")
      //- Icon (placeholder)
      .w-6.h-6.mr-3
        svg(xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor")
          path(stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16")
      span Dashboard

    //- Add other links here if needed
    a.flex.items-center.px-4.py-2.rounded-lg.text-gray-400(href="#" class="hover:bg-gray-800 hover:text-white")
      //- Icon (placeholder)
      .w-6.h-6.mr-3
        svg(xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor")
          path(stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4")
      span Trades

  //- User Profile
  .px-4.py-4.border-t.border-gray-700
    .flex.items-center
      img.h-10.w-10.rounded-full.object-cover(src="https://i.pravatar.cc/100" alt="User Avatar")
      .ml-3
        p.text-sm.font-semibold.text-white User
        p.text-xs.text-gray-400 user@example.com

</template>

<script setup>
// No script logic needed for this static sidebar yet
</script>
