import StylesDisplay from './StylesDisplay'
import { getTokensByNames } from '../data/designTokens'

function Code({ children }) {
  return (
    <code className="font-mono text-sm rounded px-1 py-0.5 bg-[var(--color-surface-elevated)] border border-[var(--color-border)] text-[var(--color-text)]">
      {children}
    </code>
  )
}

function TableSection({ title, children }) {
  return (
    <section className="space-y-3">
      <h2 className="text-lg font-medium text-[var(--color-text)]">{title}</h2>
      <div className="overflow-x-auto rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface-elevated)] text-[var(--color-text)]">
        {children}
      </div>
    </section>
  )
}

function PropsTableSection({ props }) {
  if (!props?.length) return null
  return (
    <TableSection title="Props">
      <table className="w-full border-collapse text-sm text-left">
        <thead>
          <tr className="border-b border-[var(--color-border)]">
            <th className="px-4 py-3 font-medium text-[var(--color-text)]">Name</th>
            <th className="px-4 py-3 font-medium text-[var(--color-text)]">Type</th>
            <th className="px-4 py-3 font-medium text-[var(--color-text)]">Description</th>
            <th className="px-4 py-3 font-medium text-[var(--color-text)]">Default</th>
          </tr>
        </thead>
        <tbody>
          {props.map((row) => (
            <tr key={row.name} className="border-b border-[var(--color-border)] last:border-b-0">
              <td className="px-4 py-3">
                <span className="font-medium text-[var(--color-text)]">{row.name}</span>
                {row.required && (
                  <span className="ml-1 text-[var(--color-invalid)]" title="Required">*</span>
                )}
              </td>
              <td className="px-4 py-3">
                <Code>{row.type}</Code>
              </td>
              <td className="px-4 py-3 text-[var(--color-text-muted)]">{row.description}</td>
              <td className="px-4 py-3 text-[var(--color-text-muted)]">
                {row.default != null ? <Code>{String(row.default)}</Code> : '—'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </TableSection>
  )
}

function SlotsTableSection({ slots }) {
  if (!slots?.length) return null
  return (
    <TableSection title="Slots">
      <table className="w-full border-collapse text-sm text-left">
        <thead>
          <tr className="border-b border-[var(--color-border)]">
            <th className="px-4 py-3 font-medium text-[var(--color-text)]">Name</th>
            <th className="px-4 py-3 font-medium text-[var(--color-text)]">Description</th>
          </tr>
        </thead>
        <tbody>
          {slots.map((row) => (
            <tr key={row.name} className="border-b border-[var(--color-border)] last:border-b-0">
              <td className="px-4 py-3">
                <Code>{row.name}</Code>
              </td>
              <td className="px-4 py-3 text-[var(--color-text-muted)]">{row.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </TableSection>
  )
}

function EventsTableSection({ events }) {
  if (!events?.length) return null
  return (
    <TableSection title="Events">
      <table className="w-full border-collapse text-sm text-left">
        <thead>
          <tr className="border-b border-[var(--color-border)]">
            <th className="px-4 py-3 font-medium text-[var(--color-text)]">Name</th>
            <th className="px-4 py-3 font-medium text-[var(--color-text)]">Detail</th>
            <th className="px-4 py-3 font-medium text-[var(--color-text)]">Description</th>
          </tr>
        </thead>
        <tbody>
          {events.map((row) => (
            <tr key={row.name} className="border-b border-[var(--color-border)] last:border-b-0">
              <td className="px-4 py-3">
                <Code>{row.name}</Code>
              </td>
              <td className="px-4 py-3">
                {row.detail ? <Code>{row.detail}</Code> : '—'}
              </td>
              <td className="px-4 py-3 text-[var(--color-text-muted)]">{row.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </TableSection>
  )
}

function TypesTableSection({ types }) {
  if (!types?.length) return null
  return (
    <TableSection title="Types">
      <div className="divide-y divide-[var(--color-border)]">
        {types.map((typeDef) => (
          <div key={typeDef.name} className="p-4">
            <div className="flex items-baseline gap-2 mb-2">
              <Code>{typeDef.name}</Code>
              {typeDef.description && (
                <span className="text-sm text-[var(--color-text-muted)]">{typeDef.description}</span>
              )}
            </div>
            {typeDef.fields?.length ? (
              <table className="w-full border-collapse text-sm text-left mt-2 ml-4">
                <tbody>
                  {typeDef.fields.map((field) => (
                    <tr key={field.name} className="border-b border-[var(--color-border)] last:border-b-0">
                      <td className="py-1.5 pr-4 font-medium text-[var(--color-text)] w-32">{field.name}</td>
                      <td className="py-1.5 pr-4">
                        <Code>{field.type}</Code>
                      </td>
                      <td className="py-1.5 text-[var(--color-text-muted)]">{field.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : null}
          </div>
        ))}
      </div>
    </TableSection>
  )
}

export default function PropsTable({ props, slots, events, types, tokens }) {
  const resolvedTokens = tokens?.length ? getTokensByNames(tokens) : []
  const hasContent = resolvedTokens?.length || props?.length || slots?.length || events?.length || types?.length
  if (!hasContent) return null

  return (
    <div className="space-y-8">
      {resolvedTokens?.length > 0 && (
        <StylesDisplay tokens={resolvedTokens} title="Styles" />
      )}
      <PropsTableSection props={props} />
      <SlotsTableSection slots={slots} />
      <EventsTableSection events={events} />
      <TypesTableSection types={types} />
    </div>
  )
}
