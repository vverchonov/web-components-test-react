import StylesDisplay from '../components/StylesDisplay'
import { designTokenGroups } from '../data/designTokens'

export default function StylesPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-[var(--color-text)] mb-1">Styles</h1>
        <p className="text-[var(--color-text-muted)]">
          Design tokens are CSS custom properties defined on <code className="text-[var(--color-text)]">:root</code>.
          They inherit into Shadow DOM, so components use them via Tailwind classes (e.g. <code className="text-[var(--color-text)]">bg-primary</code>) or
          directly as <code className="text-[var(--color-text)]">var(--color-primary)</code>, <code className="text-[var(--color-text)]">var(--radius-button)</code>, etc.
        </p>
        <p className="text-[var(--color-text-muted)] text-sm mt-2">
          Values change with light/dark theme via <code className="text-[var(--color-text)]">prefers-color-scheme</code> or <code className="text-[var(--color-text)]">data-theme</code>.
        </p>
      </div>

      <StylesDisplay tokens={designTokenGroups} grouped />
    </div>
  )
}
