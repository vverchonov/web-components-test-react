function Code({ children }) {
  return (
    <code className="font-mono text-sm rounded px-1 py-0.5 bg-[var(--color-surface-elevated)] border border-[var(--color-border)]">
      {children}
    </code>
  )
}

function TableSection({ title, children }) {
  return (
    <section className="space-y-3">
      <h2 className="text-lg font-medium text-[var(--color-text)]">{title}</h2>
      <div className="overflow-x-auto rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface-elevated)]">
        {children}
      </div>
    </section>
  )
}

function TokenSwatch({ value }) {
  if (!value) return null
  return (
    <span
      className="inline-block w-6 h-6 rounded border border-[var(--color-border)] shrink-0"
      style={{ background: value }}
      title={value}
      aria-hidden
    />
  )
}

function TokenRow({ token, showSwatchColumn }) {
  const { name, value, type } = token
  const isColor = type === 'color' || (value && value.startsWith('var(--color-'))
  return (
    <tr className="border-b border-[var(--color-border)] last:border-b-0">
      <td className="px-4 py-3">
        <Code>{name}</Code>
      </td>
      <td className="px-4 py-3">
        <Code>{value}</Code>
      </td>
      {showSwatchColumn && (
        <td className="px-4 py-3 w-12">
          {isColor ? <TokenSwatch value={value} /> : null}
        </td>
      )}
    </tr>
  )
}

function TokenTable({ tokens, showSwatchColumn }) {
  const hasColorTokens = tokens.some(
    (t) => t.type === 'color' || (t.value && t.value.startsWith('var(--color-'))
  )
  return (
    <table className="w-full border-collapse text-sm text-left">
      <thead>
        <tr className="border-b border-[var(--color-border)]">
          <th className="px-4 py-3 font-medium text-[var(--color-text)]">Token</th>
          <th className="px-4 py-3 font-medium text-[var(--color-text)]">Value</th>
          {showSwatchColumn && hasColorTokens && (
            <th className="px-4 py-3 font-medium text-[var(--color-text)] w-12">Preview</th>
          )}
        </tr>
      </thead>
      <tbody>
        {tokens.map((token) => (
          <TokenRow key={token.name} token={token} showSwatchColumn={showSwatchColumn} />
        ))}
      </tbody>
    </table>
  )
}

/**
 * Reusable component to display design tokens.
 * @param {Object} props
 * @param {Array} props.tokens - Flat array of { name, value, type } or (when grouped) array of { label, tokens }
 * @param {string} [props.title='Styles'] - Section title
 * @param {boolean} [props.grouped=false] - When true, tokens is array of { label, tokens }; when false, flat array
 */
export default function StylesDisplay({ tokens, title = 'Styles', grouped = false }) {
  if (!tokens?.length) return null

  if (grouped) {
    return (
      <div className="space-y-8">
        {tokens.map((group) => (
          <TableSection key={group.label} title={group.label}>
            <TokenTable tokens={group.tokens} showSwatchColumn />
          </TableSection>
        ))}
      </div>
    )
  }

  return (
    <TableSection title={title}>
      <TokenTable tokens={tokens} showSwatchColumn />
    </TableSection>
  )
}
