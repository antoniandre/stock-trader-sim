import { watch, onUnmounted, isRef, computed } from 'vue'

const APP_NAME = 'TradeDeck'

/**
 * Build a full browser tab title: `<page> | TradeDeck`.
 * Passing no argument resets to just `TradeDeck`.
 *
 * @param {string} page
 */
export function buildTitle(page) {
  return page ? `${page} | ${APP_NAME}` : APP_NAME
}

/**
 * Composable that sets document.title reactively and restores it on unmount.
 *
 * @param {import('vue').Ref<string> | import('vue').ComputedRef<string> | string} title
 *   A ref, computed, or plain string for the page portion (e.g. "Dashboard", "SNAL · $1.00").
 *   Pass null / undefined to just set TradeDeck.
 */
export function usePageTitle(title) {
  const source = isRef(title) ? title : computed(() => title ?? '')

  watch(
    source,
    (val) => { document.title = buildTitle(val) },
    { immediate: true }
  )

  onUnmounted(() => { document.title = APP_NAME })
}
