import { useState } from 'react'
import { RadioGroup } from '@vverchonov/web-components/react'
import ExampleBlock from '../../components/ExampleBlock'
import PropsTable from '../../components/PropsTable'
import { componentPropsConfig } from '../../data/componentPropsConfig'
import { componentTokensMap } from '../../data/componentTokensMap'

const BASIC_ITEMS = [
  { label: 'Option A', value: 'option-a' },
  { label: 'Option B', value: 'option-b' },
  { label: 'Option C', value: 'option-c' },
]

const REQUIRED_ITEMS = [
  { label: 'Yes', value: 'yes' },
  { label: 'No', value: 'no' },
]

export default function RadioGroupPage() {
  const [selected, setSelected] = useState('option-a')

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-[var(--color-text)] mb-1">Radio Group</h1>
        <p className="text-[var(--color-text-muted)]">
          Radio button group with validation states.
        </p>
      </div>

      <ExampleBlock
        title="Basic"
        code={`<RadioGroup
  label="Choose an option"
  name="demo"
  value={selected}
  items={BASIC_ITEMS}
  onRadioChange={(e) => setSelected(e.detail?.value ?? selected)}
/>`}
      >
        <>
          <RadioGroup
            label="Choose an option"
            name="demo"
            value={selected}
            items={BASIC_ITEMS}
            onRadioChange={(e) => setSelected(e.detail?.value ?? selected)}
          />
          <p className="text-sm text-[var(--color-text-muted)] mt-2">
            Selected: <strong>{selected}</strong>
          </p>
        </>
      </ExampleBlock>

      <ExampleBlock
        title="Invalid state"
        code={`<RadioGroup
  label="Required selection"
  name="required-demo"
  state="invalid"
  errorMessage="Please select an option"
  items={REQUIRED_ITEMS}
/>`}
      >
        <RadioGroup
          label="Required selection"
          name="required-demo"
          state="invalid"
          errorMessage="Please select an option"
          items={REQUIRED_ITEMS}
        />
      </ExampleBlock>

      <PropsTable {...componentPropsConfig['radio-group']} tokens={componentTokensMap['radio-group']} />
    </div>
  )
}
