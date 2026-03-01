import { useState } from 'react'
import { Input } from '@vverchonov/web-components/react'
import ExampleBlock from '../../components/ExampleBlock'
import PropsTable from '../../components/PropsTable'
import { componentPropsConfig } from '../../data/componentPropsConfig'
import { componentTokensMap } from '../../data/componentTokensMap'

const SearchIcon = () => (
  <svg slot="icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
  </svg>
)

const MailIcon = () => (
  <svg slot="icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
)

const UserIcon = () => (
  <svg slot="icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
)

const LockIcon = () => (
  <svg slot="icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
)

const LinkIcon = () => (
  <svg slot="icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
)

const PhoneIcon = () => (
  <svg slot="icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)

export default function InputPage() {
  const [controlledValue, setControlledValue] = useState('')

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-[var(--color-text)] mb-1">Input</h1>
        <p className="text-[var(--color-text-muted)]">
          Text input with validation states, leading icon slot, and multiple types.
        </p>
      </div>

      <ExampleBlock
        title="With icons"
        description={<>Use the <code>icon</code> slot for a leading icon.</>}
        code={`<Input label="Search" type="search" placeholder="Search…">
  <svg slot="icon">...</svg>
</Input>`}
      >
        <div className="flex flex-col gap-3" style={{ maxWidth: '20rem' }}>
          <Input label="Search" type="search" placeholder="Search…">
            <SearchIcon />
          </Input>
          <Input label="Email" type="email" placeholder="jane@example.com">
            <MailIcon />
          </Input>
          <Input label="Name" placeholder="Enter your name">
            <UserIcon />
          </Input>
          <Input label="Password" type="password" placeholder="••••••••">
            <LockIcon />
          </Input>
          <Input label="Website" type="url" placeholder="https://example.com">
            <LinkIcon />
          </Input>
          <Input label="Phone" type="tel" placeholder="+1 (555) 000-0000">
            <PhoneIcon />
          </Input>
        </div>
      </ExampleBlock>

      <ExampleBlock
        title="Default"
        code={`<Input label="Name" placeholder="Enter your name" />
<Input label="Email" type="email" placeholder="jane@example.com" />
<Input label="Password" type="password" placeholder="••••••••" />
<Input label="Number" type="number" placeholder="0" />`}
      >
        <div className="flex flex-col gap-3" style={{ maxWidth: '20rem' }}>
          <Input label="Name" placeholder="Enter your name" />
          <Input label="Email" type="email" placeholder="jane@example.com" />
          <Input label="Password" type="password" placeholder="••••••••" />
          <Input label="Number" type="number" placeholder="0" />
        </div>
      </ExampleBlock>

      <ExampleBlock
        title="Validation states"
        description={<>Built-in checkmark and error icons when <code>state</code> is valid or invalid.</>}
        code={`<Input label="Invalid" state="invalid" errorMessage="This field is required" />
<Input label="Valid" state="valid" value="Looks good" />`}
      >
        <div className="flex flex-col gap-3" style={{ maxWidth: '20rem' }}>
          <Input label="Invalid" state="invalid" errorMessage="This field is required" />
          <Input label="Valid" state="valid" value="Looks good" />
        </div>
      </ExampleBlock>

      <ExampleBlock
        title="Disabled &amp; readonly"
        code={`<Input label="Disabled" disabled placeholder="Cannot edit" />
<Input label="Readonly" readonly value="Read-only value" />`}
      >
        <div className="flex flex-col gap-3" style={{ maxWidth: '20rem' }}>
          <Input label="Disabled" disabled placeholder="Cannot edit" />
          <Input label="Readonly" readonly value="Read-only value" />
        </div>
      </ExampleBlock>

      <ExampleBlock
        title="Controlled (onChange)"
        description={<>Use <code>onChange</code> and <code>value</code> for controlled inputs.</>}
        code={`<Input
  label="Controlled"
  placeholder="Type something…"
  value={controlledValue}
  onChange={(v) => setControlledValue(v ?? '')}
/>`}
      >
        <div className="flex flex-col gap-3" style={{ maxWidth: '20rem' }}>
          <Input
            label="Controlled"
            placeholder="Type something…"
            value={controlledValue}
            onChange={(v) => setControlledValue(v ?? '')}
          />
          {controlledValue && (
            <p className="text-sm text-[var(--color-text-muted)]">
              Value: <strong className="text-[var(--color-text)]">{controlledValue}</strong>
            </p>
          )}
        </div>
      </ExampleBlock>

      <ExampleBlock
        title="Required"
        code={`<Input label="Required field" required placeholder="Required" />`}
      >
        <div className="flex flex-col gap-3" style={{ maxWidth: '20rem' }}>
          <Input label="Required field" required placeholder="Required" />
        </div>
      </ExampleBlock>

      <PropsTable {...componentPropsConfig.input} tokens={componentTokensMap.input} />
    </div>
  )
}
