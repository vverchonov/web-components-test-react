import { useState } from 'react'
import { Selector } from '@vverchonov/web-components/react'
import ExampleBlock from '../../components/ExampleBlock'
import PropsTable from '../../components/PropsTable'
import { componentPropsConfig } from '../../data/componentPropsConfig'
import { componentTokensMap } from '../../data/componentTokensMap'

const BASIC_OPTIONS = [
  { label: 'Option A', value: 'a' },
  { label: 'Option B', value: 'b' },
  { label: 'Option C', value: 'c' },
]

const GROUPED_OPTIONS = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Carrot', value: 'carrot' },
  { label: 'Daikon', value: 'daikon' },
]

const GROUPS = [
  { label: 'Fruits', options: ['apple', 'banana'] },
  { label: 'Vegetables', options: ['carrot', 'daikon'] },
]

export default function SelectorPage() {
  const [single, setSingle] = useState([])
  const [multi, setMulti] = useState([])
  const [grouped, setGrouped] = useState([])

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-[var(--color-text)] mb-1">Selector</h1>
        <p className="text-[var(--color-text-muted)]">
          Dropdown selector with single/multi select, search, and grouping.
        </p>
      </div>

      <ExampleBlock
        title="Single select"
        code={`<Selector
  label="Choose one"
  items={BASIC_OPTIONS}
  value={single}
  onSelectorChange={(e) => setSingle(e.detail?.value ?? [])}
  placeholder="Select..."
  searchable
/>`}
      >
        <div style={{ maxWidth: '20rem' }}>
          <Selector
            label="Choose one"
            items={BASIC_OPTIONS}
            value={single}
            onSelectorChange={(e) => setSingle(e.detail?.value ?? [])}
            placeholder="Select..."
            searchable
          />
        </div>
      </ExampleBlock>

      <ExampleBlock
        title="Multi select"
        code={`<Selector
  label="Choose many"
  items={BASIC_OPTIONS}
  value={multi}
  onSelectorChange={(e) => setMulti(e.detail?.value ?? [])}
  placeholder="Select multiple..."
  multiple
  searchable
/>`}
      >
        <div style={{ maxWidth: '20rem' }}>
          <Selector
            label="Choose many"
            items={BASIC_OPTIONS}
            value={multi}
            onSelectorChange={(e) => setMulti(e.detail?.value ?? [])}
            placeholder="Select multiple..."
            multiple
            searchable
          />
        </div>
      </ExampleBlock>

      <ExampleBlock
        title="Grouped"
        code={`<Selector
  label="Pick produce"
  items={GROUPED_OPTIONS}
  groups={GROUPS}
  value={grouped}
  onSelectorChange={(e) => setGrouped(e.detail?.value ?? [])}
  placeholder="Select..."
  searchable
/>`}
      >
        <div style={{ maxWidth: '20rem' }}>
          <Selector
            label="Pick produce"
            items={GROUPED_OPTIONS}
            groups={GROUPS}
            value={grouped}
            onSelectorChange={(e) => setGrouped(e.detail?.value ?? [])}
            placeholder="Select..."
            searchable
          />
        </div>
      </ExampleBlock>

      <PropsTable {...componentPropsConfig.selector} tokens={componentTokensMap.selector} />
    </div>
  )
}
