import { useState } from 'react'
import { Toggle } from '@vverchonov/web-components/react'
import ExampleBlock from '../../components/ExampleBlock'
import PropsTable from '../../components/PropsTable'
import { componentPropsConfig } from '../../data/componentPropsConfig'
import { componentTokensMap } from '../../data/componentTokensMap'

export default function TogglePage() {
  const [basic, setBasic] = useState(false)
  const [withIcon, setWithIcon] = useState(true)

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-[var(--color-text)] mb-1">Toggle</h1>
        <p className="text-[var(--color-text-muted)]">
          Boolean switch with optional label and icon.
        </p>
      </div>

      <ExampleBlock
        title="Basic"
        code={`<Toggle
  label="Enable notifications"
  checked={basic}
  onToggleChange={(e) => setBasic(e.detail?.checked ?? false)}
/>`}
      >
        <Toggle
          label="Enable notifications"
          checked={basic}
          onToggleChange={(e) => setBasic(e.detail?.checked ?? false)}
        />
      </ExampleBlock>

      <ExampleBlock
        title="With icon"
        code={`<Toggle
  label="Dark mode"
  checked={withIcon}
  iconPosition="start"
  onToggleChange={(e) => setWithIcon(e.detail?.checked ?? false)}
>
  <svg slot="icon" width="18" height="18" viewBox="0 0 24 24">...</svg>
</Toggle>`}
      >
        <Toggle
          label="Dark mode"
          checked={withIcon}
          iconPosition="start"
          onToggleChange={(e) => setWithIcon(e.detail?.checked ?? false)}
        >
          <svg slot="icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        </Toggle>
      </ExampleBlock>

      <ExampleBlock
        title="Disabled"
        code={`<Toggle label="Disabled toggle" checked disabled />`}
      >
        <Toggle label="Disabled toggle" checked disabled />
      </ExampleBlock>

      <PropsTable {...componentPropsConfig.toggle} tokens={componentTokensMap.toggle} />
    </div>
  )
}
