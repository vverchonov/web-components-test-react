import { useState } from 'react'
import { Menu } from '@vverchonov/web-components/react'
import ExampleBlock from '../../components/ExampleBlock'
import PropsTable from '../../components/PropsTable'
import { componentPropsConfig } from '../../data/componentPropsConfig'
import { componentTokensMap } from '../../data/componentTokensMap'

const DEMO_ITEMS = [
  { label: 'Home', value: 'home', icon: 'home' },
  {
    label: 'Settings',
    value: 'settings',
    icon: 'settings',
    children: [
      { label: 'Profile', value: 'profile' },
      { label: 'Security', value: 'security' },
      { label: 'Notifications', value: 'notifications' },
    ],
  },
  { label: 'Help', value: 'help', icon: 'help' },
]

export default function MenuPage() {
  const [active, setActive] = useState('home')

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-[var(--color-text)] mb-1">Menu</h1>
        <p className="text-[var(--color-text-muted)]">
          Sidebar navigation with search and nested items.
        </p>
      </div>

      <ExampleBlock
        title="Nested menu"
        code={`<Menu
  items={DEMO_ITEMS}
  activeValue={active}
  searchable
  searchPlaceholder="Search menu..."
  onMenuSelect={(e) => setActive(e.detail?.value ?? 'home')}
>
  <svg slot="icon-home" ... />
  <svg slot="icon-settings" ... />
  <svg slot="icon-help" ... />
</Menu>`}
      >
        <>
          <div
            className="rounded-[var(--radius-card)] border border-[var(--color-border)] overflow-hidden"
            style={{ maxWidth: '16rem', height: '20rem' }}
          >
            <Menu
              items={DEMO_ITEMS}
              activeValue={active}
              searchable
              searchPlaceholder="Search menu..."
              onMenuSelect={(e) => setActive(e.detail?.value ?? 'home')}
            >
              <svg slot="icon-home" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              <svg slot="icon-settings" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
              <svg slot="icon-help" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
            </Menu>
          </div>
          <p className="text-sm text-[var(--color-text-muted)] mt-2">
            Selected: <strong>{active}</strong>
          </p>
        </>
      </ExampleBlock>

      <PropsTable {...componentPropsConfig.menu} tokens={componentTokensMap.menu} />
    </div>
  )
}
