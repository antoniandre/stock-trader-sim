<template lang="pug">
.ticker-logo(:class="sizeClass")
  w-image(
    :src="`https://financialmodelingprep.com/image-stock/${symbol}.png`"
    :alt="symbol"
    lazy
    @error="(e, imgWrapEl) => imgWrapEl.querySelector('.hide').classList.remove('hide')")
    .logo-placeholder.hide {{ symbol.charAt(0) }}
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  symbol: { type: String, required: true },
  size: {
    type: String,
    default: 'md', // sm, md, lg.
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  }
})

const sizeClass = computed(() => `ticker-logo--${props.size}`)
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
  background-color: rgba(255, 255, 255, 0.1);

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
    height: 24px;

    .logo-placeholder {
      font-size: 10px;
    }
  }

  &--md {
    width: 32px;
    height: 32px;

    .logo-placeholder {
      font-size: 12px;
    }
  }

  &--lg {
    width: 40px;
    height: 40px;

    .logo-placeholder {
      font-size: 16px;
    }
  }
}
</style>
