<template lang="pug">
.ticker-logo(:class="sizeClass")
  w-image(
    v-if="!hasError"
    :src="logoUrl"
    @error="onImageError"
    :alt="symbol"
    :width="sizes[size]"
    lazy
    spinner-color="contrast-o3")
  .logo-placeholder(v-else) {{ symbol.charAt(0) }}
</template>

<script setup>
import { computed, ref, watch } from 'vue'

const props = defineProps({
  symbol: { type: String, required: true },
  size: {
    type: String,
    default: 'md', // sm, md, lg.
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  }
})

const sizeClass = computed(() => `ticker-logo--${props.size}`)
const logoUrl = computed(() => `https://financialmodelingprep.com/image-stock/${props.symbol}.png`)
const hasError = ref(false)

watch(() => props.symbol, () => {
  hasError.value = false
})

function onImageError() {
  hasError.value = true
}

const sizes = {
  sm: 24,
  md: 32,
  lg: 48
}
</script>

<style lang="scss">
.ticker-logo {
  width: 32px;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  overflow: hidden;
  border: 1px solid color-mix(in srgb, var(--w-contrast-bg-color) 8%, transparent);

  .logo-placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--w-primary-color);
    color: white;
    font-weight: bold;
    text-transform: uppercase;
  }

  // Size variants
  &--sm {
    width: 24px;

    .logo-placeholder {font-size: 10px;}
  }

  &--md {
    width: 32px;

    .logo-placeholder {font-size: 12px;}
  }

  &--lg {
    width: 48px;

    .logo-placeholder {font-size: 18px;}
  }
}
</style>
