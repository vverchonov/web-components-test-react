import { DropdownButton } from '@vverchonov/web-components/react'
import ExampleBlock from '../../components/ExampleBlock'
import PropsTable from '../../components/PropsTable'
import { componentPropsConfig } from '../../data/componentPropsConfig'
import { componentTokensMap } from '../../data/componentTokensMap'

const BASIC_ITEMS = [
  { label: 'New file', value: 'new' },
  { label: 'Save', value: 'save' },
  { label: 'Delete', value: 'delete' },
]

const NESTED_ITEMS = [
  { label: 'New file', value: 'new' },
  { label: 'Save', value: 'save' },
  {
    label: 'Export',
    value: 'export',
    children: [
      { label: 'PDF', value: 'pdf' },
      { label: 'CSV', value: 'csv' },
      { label: 'JSON', value: 'json' },
    ],
  },
]

export default function DropdownButtonPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-[var(--color-text)] mb-1">Dropdown Button</h1>
        <p className="text-[var(--color-text-muted)]">
          Dropdown menu button with nested submenus.
        </p>
      </div>

      <ExampleBlock
        title="Basic"
        code={`<DropdownButton
  label="Actions"
  items={BASIC_ITEMS}
  onDropdownSelect={(e) => alert(\`Selected: \${e.detail?.value}\`)}
/>`}
      >
        <DropdownButton
          label="Actions"
          items={BASIC_ITEMS}
          onDropdownSelect={(e) => alert(`Selected: ${e.detail?.value}`)}
        />
      </ExampleBlock>

      <ExampleBlock
        title="With nested submenu"
        code={`<DropdownButton
  label="File menu"
  items={NESTED_ITEMS}
  onDropdownSelect={(e) => alert(\`Selected: \${e.detail?.value}\`)}
/>`}
      >
        <DropdownButton
          label="File menu"
          items={NESTED_ITEMS}
          onDropdownSelect={(e) => alert(`Selected: ${e.detail?.value}`)}
        />
      </ExampleBlock>

      <ExampleBlock
        title="Placement"
        code={`<DropdownButton
  label="Open upward"
  items={BASIC_ITEMS}
  placement="top"
  onDropdownSelect={(e) => alert(\`Selected: \${e.detail?.value}\`)}
/>`}
      >
        <div className="pt-48">
          <DropdownButton
            label="Open upward"
            items={BASIC_ITEMS}
            placement="top"
            onDropdownSelect={(e) => alert(`Selected: ${e.detail?.value}`)}
          />
        </div>
      </ExampleBlock>

      <ExampleBlock
        title="With icon"
        code={`<DropdownButton
  label="Actions"
  items={BASIC_ITEMS}
  onDropdownSelect={(e) => alert(\`Selected: \${e.detail?.value}\`)}
>
  <svg slot="icon" width="16" height="16" viewBox="0 0 24 24">...</svg>
</DropdownButton>`}
      >
        <DropdownButton
          label="Actions"
          items={BASIC_ITEMS}
          onDropdownSelect={(e) => alert(`Selected: ${e.detail?.value}`)}
        >
          <svg slot="icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="1" />
            <circle cx="19" cy="12" r="1" />
            <circle cx="5" cy="12" r="1" />
          </svg>
        </DropdownButton>
      </ExampleBlock>

      <PropsTable {...componentPropsConfig['dropdown-button']} tokens={componentTokensMap['dropdown-button']} />
    </div>
  )
}
