import { Card } from '@vverchonov/web-components/react'
import ExampleBlock from '../../components/ExampleBlock'
import PropsTable from '../../components/PropsTable'
import { componentPropsConfig } from '../../data/componentPropsConfig'
import { componentTokensMap } from '../../data/componentTokensMap'

export default function CardPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-[var(--color-text)] mb-1">Card</h1>
        <p className="text-[var(--color-text-muted)]">
          Collapsible content card with elevated, outlined, and filled variants.
        </p>
      </div>

      <ExampleBlock
        title="Elevated"
        code={`<Card variant="elevated">
  <span slot="title">Elevated card</span>
  <p>This card uses a box-shadow to stand out from the surface.</p>
</Card>`}
      >
        <Card variant="elevated">
          <span slot="title">Elevated card</span>
          <p>This card uses a box-shadow to stand out from the surface.</p>
        </Card>
      </ExampleBlock>

      <ExampleBlock
        title="Outlined"
        code={`<Card variant="outlined">
  <span slot="title">Outlined card</span>
  <p>This card has a visible border instead of a shadow.</p>
</Card>`}
      >
        <Card variant="outlined">
          <span slot="title">Outlined card</span>
          <p>This card has a visible border instead of a shadow.</p>
        </Card>
      </ExampleBlock>

      <ExampleBlock
        title="Filled"
        code={`<Card variant="filled">
  <span slot="title">Filled card</span>
  <p>This card uses a filled background for emphasis.</p>
</Card>`}
      >
        <Card variant="filled">
          <span slot="title">Filled card</span>
          <p>This card uses a filled background for emphasis.</p>
        </Card>
      </ExampleBlock>

      <ExampleBlock
        title="Collapsible"
        code={`<Card variant="outlined" collapsible>
  <span slot="title">Collapsible card</span>
  <p>Click the header to expand or collapse this content.</p>
</Card>`}
      >
        <Card variant="outlined" collapsible>
          <span slot="title">Collapsible card</span>
          <p>Click the header to expand or collapse this content.</p>
        </Card>
      </ExampleBlock>

      <PropsTable {...componentPropsConfig.card} tokens={componentTokensMap.card} />
    </div>
  )
}
