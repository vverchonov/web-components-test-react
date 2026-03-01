import { useState } from 'react'
import { Tabs } from '@vverchonov/web-components/react'
import ExampleBlock from '../../components/ExampleBlock'
import PropsTable from '../../components/PropsTable'
import { componentPropsConfig } from '../../data/componentPropsConfig'
import { componentTokensMap } from '../../data/componentTokensMap'

const TAB_ITEMS = [
  { label: 'Overview', value: 'overview' },
  { label: 'Details', value: 'details' },
  { label: 'Settings', value: 'settings' },
]

export default function TabsPage() {
  const [active, setActive] = useState('overview')

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-[var(--color-text)] mb-1">Tabs</h1>
        <p className="text-[var(--color-text-muted)]">
          Tabbed interface with keyboard navigation.
        </p>
      </div>

      <ExampleBlock
        title="Basic tabs"
        code={`<Tabs
  tabs={TAB_ITEMS}
  value={active}
  onTabChange={(e) => setActive(e.detail?.value ?? 'overview')}
/>
<div>
  {active === 'overview' && <p>Overview panel content.</p>}
  {active === 'details' && <p>Details panel content.</p>}
  {active === 'settings' && <p>Settings panel content.</p>}
</div>`}
      >
        <Tabs
          tabs={TAB_ITEMS}
          value={active}
          onTabChange={(e) => setActive(e.detail?.value ?? 'overview')}
        />
        <div className="mt-4 p-4 rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)]">
          {active === 'overview' && <p className="text-[var(--color-text-muted)]">Overview panel content.</p>}
          {active === 'details' && <p className="text-[var(--color-text-muted)]">Details panel content.</p>}
          {active === 'settings' && <p className="text-[var(--color-text-muted)]">Settings panel content.</p>}
        </div>
      </ExampleBlock>

      <PropsTable {...componentPropsConfig.tabs} tokens={componentTokensMap.tabs} />
    </div>
  )
}
