import { Button } from '@vverchonov/web-components/react'
import ExampleBlock from '../../components/ExampleBlock'
import PropsTable from '../../components/PropsTable'
import { componentPropsConfig } from '../../data/componentPropsConfig'
import { componentTokensMap } from '../../data/componentTokensMap'

export default function ButtonPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-[var(--color-text)] mb-1">Button</h1>
        <p className="text-[var(--color-text-muted)]">
          Button with optional icon slot. Supports primary and secondary variants.
        </p>
      </div>

      <ExampleBlock
        title="Variants"
        code={`<Button label="Primary" type="primary" />
<Button label="Secondary" type="secondary" />`}
      >
        <div className="flex flex-wrap gap-3">
          <Button label="Primary" type="primary" />
          <Button label="Secondary" type="secondary" />
        </div>
      </ExampleBlock>

      <ExampleBlock
        title="With icon"
        code={`<Button label="Add item" type="primary" iconPosition="start">
  <svg slot="icon" width="16" height="16" viewBox="0 0 24 24">...</svg>
</Button>
<Button label="Download" type="secondary" iconPosition="end">
  <svg slot="icon" width="16" height="16" viewBox="0 0 24 24">...</svg>
</Button>`}
      >
        <div className="flex flex-wrap gap-3">
          <Button label="Add item" type="primary" iconPosition="start">
            <svg slot="icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </Button>
          <Button label="Download" type="secondary" iconPosition="end">
            <svg slot="icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </Button>
        </div>
      </ExampleBlock>

      <PropsTable {...componentPropsConfig.button} tokens={componentTokensMap.button} />
    </div>
  )
}
