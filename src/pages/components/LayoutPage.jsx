import PropsTable from '../../components/PropsTable'
import { componentPropsConfig } from '../../data/componentPropsConfig'

export default function LayoutPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-[var(--color-text)] mb-1">Layout</h1>
        <p className="text-[var(--color-text-muted)]">
          This website uses the <code className="text-sm px-1.5 py-0.5 rounded bg-[var(--color-surface)] border border-[var(--color-border)]">&lt;Layout&gt;</code> component for its page structure. The Layout provides a sidebar slot (where the navigation menu lives) and a content slot (where this page content is rendered).
        </p>
      </div>

      <PropsTable {...componentPropsConfig.layout} />
    </div>
  )
}
