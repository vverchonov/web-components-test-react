/**
 * Design tokens for Tailwind v4 / @vverchonov/web-components.
 * Light theme values. Tokens inherit into Shadow DOM via :root.
 */

const semanticColors = [
  { name: '--color-primary', value: 'oklch(0.624 0.214 264.38)', type: 'color' },
  { name: '--color-primary-hover', value: 'oklch(0.553 0.222 265.64)', type: 'color' },
  { name: '--color-primary-muted', value: 'oklch(0.91 0.04 264)', type: 'color' },
  { name: '--color-surface', value: 'oklch(1 0 0)', type: 'color' },
  { name: '--color-surface-elevated', value: 'oklch(0.985 0 0)', type: 'color' },
  { name: '--color-border', value: 'oklch(0.91 0.01 264)', type: 'color' },
  { name: '--color-border-strong', value: 'oklch(0.75 0.02 264)', type: 'color' },
  { name: '--color-text', value: 'oklch(0.21 0.02 264)', type: 'color' },
  { name: '--color-text-muted', value: 'oklch(0.5 0.02 264)', type: 'color' },
  { name: '--color-text-inverse', value: 'oklch(0.99 0 0)', type: 'color' },
]

const semanticState = [
  { name: '--color-valid', value: 'oklch(0.60 0.18 145)', type: 'color' },
  { name: '--color-valid-muted', value: 'oklch(0.93 0.05 145)', type: 'color' },
  { name: '--color-invalid', value: 'oklch(0.55 0.22 25)', type: 'color' },
  { name: '--color-invalid-hover', value: 'oklch(0.48 0.22 25)', type: 'color' },
  { name: '--color-invalid-muted', value: 'oklch(0.95 0.05 25)', type: 'color' },
]

const brandPalette = [
  { name: '--color-brand-50', value: 'oklch(0.97 0.02 264)', type: 'color' },
  { name: '--color-brand-100', value: 'oklch(0.93 0.05 264)', type: 'color' },
  { name: '--color-brand-200', value: 'oklch(0.88 0.08 264)', type: 'color' },
  { name: '--color-brand-300', value: 'oklch(0.78 0.12 264)', type: 'color' },
  { name: '--color-brand-400', value: 'oklch(0.68 0.16 264)', type: 'color' },
  { name: '--color-brand-500', value: 'oklch(0.624 0.214 264.38)', type: 'color' },
  { name: '--color-brand-600', value: 'oklch(0.553 0.222 265.64)', type: 'color' },
  { name: '--color-brand-700', value: 'oklch(0.48 0.19 265)', type: 'color' },
  { name: '--color-brand-800', value: 'oklch(0.4 0.15 265)', type: 'color' },
  { name: '--color-brand-900', value: 'oklch(0.32 0.12 265)', type: 'color' },
]

const radius = [
  { name: '--radius-button', value: '0.375rem', type: 'length' },
  { name: '--radius-card', value: '0.5rem', type: 'length' },
  { name: '--radius-input', value: '0.375rem', type: 'length' },
  { name: '--radius-full', value: '9999px', type: 'length' },
]

const typography = [
  { name: '--font-size-xs', value: '0.75rem', type: 'length' },
  { name: '--font-size-sm', value: '0.8125rem', type: 'length' },
  { name: '--font-size-base', value: '0.875rem', type: 'length' },
  { name: '--font-size-md', value: '0.9375rem', type: 'length' },
  { name: '--font-size-lg', value: '1rem', type: 'length' },
  { name: '--font-size-xl', value: '1.125rem', type: 'length' },
]

const easing = [
  { name: '--ease-emphasized', value: 'cubic-bezier(0.2, 0, 0, 1)', type: 'easing' },
  { name: '--ease-emphasized-in', value: 'cubic-bezier(0.3, 0, 1, 1)', type: 'easing' },
  { name: '--ease-emphasized-out', value: 'cubic-bezier(0, 0, 0.2, 1)', type: 'easing' },
]

const button = [
  { name: '--button-font-size', value: 'var(--font-size-lg)', type: 'length' },
  { name: '--button-font-weight', value: '500', type: 'length' },
  { name: '--button-padding-block', value: '0.5rem', type: 'length' },
  { name: '--button-padding-inline', value: '1rem', type: 'length' },
  { name: '--button-margin-block', value: '0', type: 'length' },
  { name: '--button-margin-inline', value: '0', type: 'length' },
  { name: '--button-transition-duration', value: '0.2s', type: 'duration' },
  { name: '--button-focus-ring-offset', value: '2px', type: 'length' },
  { name: '--button-focus-ring-width', value: '2px', type: 'length' },
  { name: '--button-icon-gap', value: '0.5rem', type: 'length' },
]

const table = [
  { name: '--table-cell-padding-block', value: '0.5rem', type: 'length' },
  { name: '--table-cell-padding-inline', value: '0.75rem', type: 'length' },
  { name: '--table-header-font-weight', value: '600', type: 'length' },
  { name: '--table-header-bg', value: 'var(--color-surface-elevated)', type: 'color' },
  { name: '--table-border-color', value: 'var(--color-border)', type: 'color' },
  { name: '--table-body-bg', value: 'var(--color-surface)', type: 'color' },
  { name: '--table-text-color', value: 'var(--color-text)', type: 'color' },
]

const dropdown = [
  { name: '--dropdown-padding', value: '0.375rem', type: 'length' },
  { name: '--dropdown-item-padding-block', value: '0.375rem', type: 'length' },
  { name: '--dropdown-item-padding-inline', value: '0.5rem', type: 'length' },
  { name: '--dropdown-item-font-size', value: 'var(--font-size-base)', type: 'length' },
  { name: '--dropdown-item-icon-gap', value: '0.5rem', type: 'length' },
]

const toggle = [
  { name: '--toggle-track-width', value: '2.75rem', type: 'length' },
  { name: '--toggle-track-height', value: '1.5rem', type: 'length' },
  { name: '--toggle-thumb-size', value: '1.125rem', type: 'length' },
  { name: '--toggle-thumb-travel', value: '1.25rem', type: 'length' },
  { name: '--toggle-transition-duration', value: '0.2s', type: 'duration' },
  { name: '--toggle-icon-gap', value: '0.5rem', type: 'length' },
  { name: '--toggle-label-gap', value: '0.625rem', type: 'length' },
]

const input = [
  { name: '--input-font-size', value: 'var(--font-size-lg)', type: 'length' },
  { name: '--input-padding-block', value: '0.5rem', type: 'length' },
  { name: '--input-padding-inline', value: '0.75rem', type: 'length' },
  { name: '--input-icon-size', value: '1.125rem', type: 'length' },
  { name: '--input-icon-gap', value: '0.5rem', type: 'length' },
  { name: '--input-transition-duration', value: '0.2s', type: 'duration' },
]

const menu = [
  { name: '--menu-width', value: '240px', type: 'length' },
  { name: '--menu-collapsed-width', value: '3.5rem', type: 'length' },
  { name: '--menu-bg', value: 'var(--color-surface)', type: 'color' },
  { name: '--menu-item-padding-block', value: '0.5rem', type: 'length' },
  { name: '--menu-item-padding-inline', value: '0.75rem', type: 'length' },
  { name: '--menu-item-font-size', value: 'var(--font-size-base)', type: 'length' },
  { name: '--menu-item-icon-gap', value: '0.625rem', type: 'length' },
  { name: '--menu-indent', value: '1rem', type: 'length' },
  { name: '--menu-logo-padding', value: '1rem', type: 'length' },
  { name: '--menu-search-padding', value: '0.75rem', type: 'length' },
]

const tab = [
  { name: '--tab-padding-block', value: '0.625rem', type: 'length' },
  { name: '--tab-padding-inline', value: '1rem', type: 'length' },
  { name: '--tab-font-size', value: 'var(--font-size-base)', type: 'length' },
  { name: '--tab-font-weight', value: '500', type: 'length' },
  { name: '--tab-gap', value: '0.25rem', type: 'length' },
  { name: '--tab-indicator-height', value: '2px', type: 'length' },
  { name: '--tab-transition-duration', value: '0.2s', type: 'duration' },
  { name: '--tab-panel-padding-block', value: '1rem', type: 'length' },
]

const modal = [
  { name: '--modal-width', value: '32rem', type: 'length' },
  { name: '--modal-padding', value: '1.5rem', type: 'length' },
  { name: '--modal-border-radius', value: 'var(--radius-card)', type: 'length' },
  { name: '--modal-backdrop', value: 'oklch(0 0 0 / 0.45)', type: 'color' },
  { name: '--modal-transition-duration', value: '0.2s', type: 'duration' },
]

const radio = [
  { name: '--radio-size', value: '1.25rem', type: 'length' },
  { name: '--radio-dot-size', value: '0.5rem', type: 'length' },
  { name: '--radio-gap', value: '0.625rem', type: 'length' },
  { name: '--radio-label-gap', value: '0.5rem', type: 'length' },
  { name: '--radio-transition-duration', value: '0.2s', type: 'duration' },
]

const card = [
  { name: '--card-padding', value: '1rem', type: 'length' },
  { name: '--card-gap', value: '0.75rem', type: 'length' },
  { name: '--card-transition-duration', value: '0.25s', type: 'duration' },
]

const selector = [
  { name: '--selector-min-height', value: '2.5rem', type: 'length' },
  { name: '--selector-chip-gap', value: '0.25rem', type: 'length' },
  { name: '--selector-chip-padding-block', value: '0.125rem', type: 'length' },
  { name: '--selector-chip-padding-inline', value: '0.5rem', type: 'length' },
  { name: '--selector-chip-font-size', value: 'var(--font-size-sm)', type: 'length' },
  { name: '--selector-panel-max-height', value: '16rem', type: 'length' },
  { name: '--selector-transition-duration', value: '0.2s', type: 'duration' },
]

/** All token groups for the Styles page (grouped display) */
export const designTokenGroups = [
  { label: 'Semantic colors', tokens: semanticColors },
  { label: 'Semantic state colors', tokens: semanticState },
  { label: 'Brand palette', tokens: brandPalette },
  { label: 'Radius', tokens: radius },
  { label: 'Typography', tokens: typography },
  { label: 'Easing', tokens: easing },
  { label: 'Button', tokens: button },
  { label: 'Table', tokens: table },
  { label: 'Dropdown button', tokens: dropdown },
  { label: 'Toggle', tokens: toggle },
  { label: 'Input', tokens: input },
  { label: 'Menu', tokens: menu },
  { label: 'Tab', tokens: tab },
  { label: 'Modal', tokens: modal },
  { label: 'Radio group', tokens: radio },
  { label: 'Card', tokens: card },
  { label: 'Selector', tokens: selector },
]

/** Flat map of token name -> token object for lookup */
const tokenByName = new Map()
for (const group of designTokenGroups) {
  for (const token of group.tokens) {
    tokenByName.set(token.name, token)
  }
}

/** Resolve token names to full token objects */
export function getTokensByNames(names) {
  if (!names?.length) return []
  return names
    .map((name) => tokenByName.get(name))
    .filter(Boolean)
}
