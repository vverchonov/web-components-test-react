import { useState } from 'react'
import { Tabs, Button } from '@vverchonov/web-components/react'

const TAB_ITEMS = [
  { label: 'Example', value: 'example' },
  { label: 'Code', value: 'code' },
]

const CopyIcon = () => (
  <svg slot="icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
  </svg>
)

const CheckIcon = () => (
  <svg slot="icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

export default function ExampleBlock({ title, description, code, children }) {
  const [active, setActive] = useState('example')
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback for older browsers
      setCopied(false)
    }
  }

  return (
    <section className="space-y-4">
      <h2 className="text-lg font-medium text-[var(--color-text)]">{title}</h2>
      {description && (
        <div className="text-sm text-[var(--color-text-muted)] [&_code]:rounded [&_code]:px-1 [&_code]:py-0.5 [&_code]:bg-[var(--color-surface-elevated)]">
          {description}
        </div>
      )}
      <Tabs
        tabs={TAB_ITEMS}
        value={active}
        onTabChange={(e) => setActive(e.detail?.value ?? 'example')}
      />
      <div className="p-4 rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface-elevated)]">
        {active === 'example' && children}
        {active === 'code' && (
          <div className="relative">
            <div className="absolute top-2 right-2 z-10">
              <Button
                label={copied ? 'Copied!' : 'Copy'}
                type="secondary"
                iconPosition="start"
                ref={(el) => {
                  if (el) el.onClick = handleCopy
                }}
              >
                {copied ? <CheckIcon /> : <CopyIcon />}
              </Button>
            </div>
            <pre className="font-mono text-sm text-[var(--color-text)] overflow-x-auto pr-32 py-2">
              <code>{code}</code>
            </pre>
          </div>
        )}
      </div>
    </section>
  )
}
