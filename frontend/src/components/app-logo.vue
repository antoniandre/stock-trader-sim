<template lang="pug">
.logo
  .logo__icon
    icon.w-icon.size--xl.primary(icon="icon-park-outline:increase" style="width: 30px; height: 30px")
    .logo__icon-layers

  .logo__name.title2 TradeDeck
  .logo__tagline(v-if="!collapsed") The modern trading workspace.
</template>

<script setup>
const props = defineProps({
  collapsed: { type: Boolean, default: false }
})
</script>

<style lang="scss" scoped>
.logo {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  padding-bottom: 1.3rem;
  flex-shrink: 0;
}

.logo__name {
  background-clip: text;
  color: transparent;
  background-image: linear-gradient(to right, var(--w-primary-color), #90ffb0);
  white-space: nowrap;
  letter-spacing: 0.015em;
}

.logo__icon {
  position: relative;
  background: var(--w-base-bg-color);
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  z-index: 2;
  width: 42px;
  aspect-ratio: 1;

  &:before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    width: inherit;
    aspect-ratio: 1;
    z-index: 1;
    background: var(--w-base-bg-color);
    border: 1px solid color-mix(in srgb, var(--w-primary-color) 12%, transparent);
  }

  &-layers,
  &-layers:before,
  &-layers:after {
    position: absolute;
    inset: 0;
    border-radius: 100%;
    width: 100%;
    aspect-ratio: 1;
    z-index: -1;
    content: '';
  }

  &-layers:before {
    transform: translate(-6px, -2px);
    background: color-mix(in srgb, #24c7a3 12%, transparent);
  }

  &-layers:after {
    transform: translate(6px, 2px);
    background: color-mix(in srgb, var(--w-primary-color) 8%, transparent);
  }

  .w-icon {z-index: 2;}
}

.logo__tagline {
  position: absolute;
  bottom: 0;
  left: 0;
  font-family: Inter, Arial, sans-serif;
  font-size: 0.75rem;
  letter-spacing: 0.015em;
  color: color-mix(in srgb, var(--w-primary-color) 25%, var(--w-contrast-bg-color) 10%);
}

:global(:root[data-theme="dark"]) {
  .logo__name {color: #F8FAFC;}
  .logo__tagline {color: #94A3B8;}
  .logo__layer--back {background: rgba(148, 163, 184, 0.12);}
  .logo__layer--mid {background: rgba(148, 163, 184, 0.20);}
}

:global(:root[data-theme="light"] .logo-title) {
  background-image: linear-gradient(to right, var(--w-primary-color), #24c7a3);
}
</style>
