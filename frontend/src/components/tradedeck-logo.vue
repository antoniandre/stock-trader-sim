<template lang="pug">
.trade-deck-logo(:class="[`trade-deck-logo--${size}`, { 'trade-deck-logo--stacked': stacked }]")
  .trade-deck-logo__mark
    .trade-deck-logo__layer.trade-deck-logo__layer--back
    .trade-deck-logo__layer.trade-deck-logo__layer--mid
    .trade-deck-logo__layer.trade-deck-logo__layer--front
      .trade-deck-logo__glyph
        .trade-deck-logo__glyph-stem
        .trade-deck-logo__glyph-accent
  .trade-deck-logo__wordmark(v-if="showWordmark")
    .trade-deck-logo__name TradeDeck
    .trade-deck-logo__tagline(v-if="showTagline") The modern trading workspace.
</template>

<script setup>
const props = defineProps({
  size: {
    type: String,
    default: 'md',
    validator: value => ['sm', 'md', 'lg'].includes(value)
  },
  showWordmark: { type: Boolean, default: false },
  showTagline: { type: Boolean, default: false },
  stacked: { type: Boolean, default: false }
})
</script>

<style lang="scss" scoped>
.trade-deck-logo {
  display: inline-flex;
  align-items: center;
  gap: 0.9rem;

  &--stacked {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.65rem;
  }

  &--sm {
    .trade-deck-logo__mark {
      width: 34px;
      height: 34px;
    }

    .trade-deck-logo__name {font-size: 1rem;}
    .trade-deck-logo__tagline {font-size: 0.72rem;}
  }

  &--md {
    .trade-deck-logo__mark {
      width: 42px;
      height: 42px;
    }

    .trade-deck-logo__name {font-size: 1.22rem;}
    .trade-deck-logo__tagline {font-size: 0.76rem;}
  }

  &--lg {
    .trade-deck-logo__mark {
      width: 52px;
      height: 52px;
    }

    .trade-deck-logo__name {font-size: 1.45rem;}
    .trade-deck-logo__tagline {font-size: 0.82rem;}
  }
}

.trade-deck-logo__mark {
  position: relative;
  flex-shrink: 0;
}

.trade-deck-logo__layer {
  position: absolute;
  inset: 0;
  border-radius: 999px;

  &--back {
    transform: translate(-8px, -8px);
    background: rgba(15, 23, 42, 0.10);
  }

  &--mid {
    transform: translate(-4px, -4px);
    background: rgba(15, 23, 42, 0.16);
  }

  &--front {
    background: #0F172A;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
}

.trade-deck-logo__glyph {
  position: relative;
  width: 58%;
  height: 58%;
}

.trade-deck-logo__glyph-stem,
.trade-deck-logo__glyph-accent {
  position: absolute;
  border-radius: 999px;
  background: linear-gradient(135deg, #3B82F6 0%, #2DD4BF 100%);
}

.trade-deck-logo__glyph-stem {
  width: 16%;
  height: 74%;
  left: 56%;
  top: 6%;
  transform: rotate(38deg);
  transform-origin: top center;
}

.trade-deck-logo__glyph-accent {
  width: 38%;
  height: 14%;
  left: 18%;
  top: 48%;
  transform: rotate(46deg);
  transform-origin: center;
}

.trade-deck-logo__wordmark {
  min-width: 0;
}

.trade-deck-logo__name {
  font-family: Inter, Arial, sans-serif;
  font-weight: 800;
  line-height: 1;
  color: #0F172A;
  letter-spacing: -0.03em;
}

.trade-deck-logo__tagline {
  margin-top: 0.2rem;
  font-family: Inter, Arial, sans-serif;
  font-weight: 500;
  line-height: 1.2;
  color: #475569;
}

:global(:root[data-theme="dark"]) {
  .trade-deck-logo__name {color: #F8FAFC;}
  .trade-deck-logo__tagline {color: #94A3B8;}
  .trade-deck-logo__layer--back {background: rgba(148, 163, 184, 0.12);}
  .trade-deck-logo__layer--mid {background: rgba(148, 163, 184, 0.20);}
}
</style>
