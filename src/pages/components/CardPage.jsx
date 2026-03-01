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
        code={`<app-card variant="elevated">
  <span slot="title">Elevated card</span>
  <p>This card uses a box-shadow to stand out from the surface.</p>
</app-card>`}
      >
        <app-card variant="elevated">
          <span slot="title">Elevated card</span>
          <p>This card uses a box-shadow to stand out from the surface.</p>
        </app-card>
      </ExampleBlock>

      <ExampleBlock
        title="Outlined"
        code={`<app-card variant="outlined">
  <span slot="title">Outlined card</span>
  <p>This card has a visible border instead of a shadow.</p>
</app-card>`}
      >
        <app-card variant="outlined">
          <span slot="title">Outlined card</span>
          <p>This card has a visible border instead of a shadow.</p>
        </app-card>
      </ExampleBlock>

      <ExampleBlock
        title="Filled"
        code={`<app-card variant="filled">
  <span slot="title">Filled card</span>
  <p>This card uses a filled background for emphasis.</p>
</app-card>`}
      >
        <app-card variant="filled">
          <span slot="title">Filled card</span>
          <p>This card uses a filled background for emphasis.</p>
        </app-card>
      </ExampleBlock>

      <ExampleBlock
        title="Collapsible"
        code={`<app-card variant="outlined" collapsible>
  <span slot="title">Collapsible card</span>
  <p>Click the header to expand or collapse this content.</p>
</app-card>`}
      >
        <app-card variant="outlined" collapsible>
          <span slot="title">Collapsible card</span>
          <p>Click the header to expand or collapse this content.</p>
        </app-card>
      </ExampleBlock>

      <PropsTable {...componentPropsConfig.card} tokens={componentTokensMap.card} />
    </div>
  )
}
