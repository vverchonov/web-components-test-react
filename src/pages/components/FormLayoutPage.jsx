import { useState } from 'react'
import { FormLayout, Input, Selector } from '@vverchonov/web-components/react'
import ExampleBlock from '../../components/ExampleBlock'
import PropsTable from '../../components/PropsTable'
import { componentPropsConfig } from '../../data/componentPropsConfig'

const ROLE_OPTIONS = [
  { label: 'Developer', value: 'dev' },
  { label: 'Designer', value: 'designer' },
  { label: 'Manager', value: 'manager' },
]

const MULTI_STEP_STAGES = ['Personal', 'Address', 'Review']

export default function FormLayoutPage() {
  const [role, setRole] = useState([])
  const [multiStepData, setMultiStepData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    zip: '',
  })

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-[var(--color-text)] mb-1">Form Layout</h1>
        <p className="text-[var(--color-text-muted)]">
          Form shell with multi-step support and column grids.
        </p>
      </div>

      <ExampleBlock
        title="Multi-step form"
        code={`<FormLayout
  title="Onboarding"
  description="Complete your profile in a few steps."
  stages={['Personal', 'Address', 'Review']}
  columns={2}
  onFormLayoutSubmit={() => {}}
>
  <div slot="stage-0">...</div>
  <div slot="stage-1">...</div>
  <div slot="stage-2">...</div>
</FormLayout>`}
      >
        <FormLayout
          title="Onboarding"
          description="Complete your profile in a few steps."
          stages={MULTI_STEP_STAGES}
          columns={2}
          onFormLayoutSubmit={() => alert(JSON.stringify(multiStepData, null, 2))}
        >
          <div slot="stage-0" className="contents">
            <Input
              label="First name"
              placeholder="Jane"
              value={multiStepData.firstName}
              onChange={(value) => setMultiStepData((d) => ({ ...d, firstName: value ?? '' }))}
            />
            <Input
              label="Last name"
              placeholder="Doe"
              value={multiStepData.lastName}
              onChange={(value) => setMultiStepData((d) => ({ ...d, lastName: value ?? '' }))}
            />
            <Input
              label="Email"
              type="email"
              placeholder="jane@example.com"
              value={multiStepData.email}
              onChange={(value) => setMultiStepData((d) => ({ ...d, email: value ?? '' }))}
            />
            <Selector
              label="Role"
              items={ROLE_OPTIONS}
              value={role}
              onSelectorChange={(e) => setRole(e.detail?.value ?? [])}
              placeholder="Select role"
            />
          </div>
          <div slot="stage-1" className="contents">
            <Input
              label="Street"
              placeholder="123 Main St"
              value={multiStepData.street}
              onChange={(value) => setMultiStepData((d) => ({ ...d, street: value ?? '' }))}
            />
            <Input
              label="City"
              placeholder="Anytown"
              value={multiStepData.city}
              onChange={(value) => setMultiStepData((d) => ({ ...d, city: value ?? '' }))}
            />
            <Input
              label="ZIP"
              placeholder="90210"
              value={multiStepData.zip}
              onChange={(value) => setMultiStepData((d) => ({ ...d, zip: value ?? '' }))}
            />
          </div>
          <div slot="stage-2" className="contents">
            <div className="col-span-2 p-4 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text-muted)] text-sm">
              <p className="font-medium text-[var(--color-text)] mb-2">Summary</p>
              <p>Name: {multiStepData.firstName} {multiStepData.lastName}</p>
              <p>Email: {multiStepData.email}</p>
              <p>Role: {role.map((v) => ROLE_OPTIONS.find((o) => o.value === v)?.label).filter(Boolean).join(', ') || '—'}</p>
              <p>Address: {multiStepData.street}, {multiStepData.city} {multiStepData.zip}</p>
            </div>
          </div>
        </FormLayout>
      </ExampleBlock>

      <ExampleBlock
        title="Two-column form"
        code={`<FormLayout
  title="Create account"
  description="Fill in the details below."
  columns={2}
  onFormLayoutSubmit={() => {}}
>
  <Input slot="fields" label="First name" placeholder="Jane" />
  <Input slot="fields" label="Last name" placeholder="Doe" />
  <Input slot="fields" label="Email" type="email" placeholder="jane@example.com" />
  <Input slot="fields" label="Password" type="password" placeholder="••••••••" />
  <Selector slot="fields" label="Role" items={ROLE_OPTIONS} placeholder="Select role" />
</FormLayout>`}
      >
        <FormLayout
          title="Create account"
          description="Fill in the details below."
          columns={2}
          onFormLayoutSubmit={() => alert('Form submitted!')}
        >
          <Input slot="fields" label="First name" placeholder="Jane" />
          <Input slot="fields" label="Last name" placeholder="Doe" />
          <Input slot="fields" label="Email" type="email" placeholder="jane@example.com" />
          <Input slot="fields" label="Password" type="password" placeholder="••••••••" />
          <Selector
            slot="fields"
            label="Role"
            items={ROLE_OPTIONS}
            value={role}
            onSelectorChange={(e) => setRole(e.detail?.value ?? [])}
            placeholder="Select role"
          />
        </FormLayout>
      </ExampleBlock>

      <ExampleBlock
        title="Three-column form"
        code={`<FormLayout
  title="Address"
  description="Enter your shipping address."
  columns={3}
  onFormLayoutSubmit={() => {}}
>
  <Input slot="fields" label="Street" placeholder="123 Main St" />
  <Input slot="fields" label="City" placeholder="Anytown" />
  <Input slot="fields" label="State" placeholder="CA" />
  <Input slot="fields" label="ZIP" placeholder="90210" />
  <Input slot="fields" label="Country" placeholder="US" />
</FormLayout>`}
      >
        <FormLayout
          title="Address"
          description="Enter your shipping address."
          columns={3}
          onFormLayoutSubmit={() => alert('Address submitted!')}
        >
          <Input slot="fields" label="Street" placeholder="123 Main St" />
          <Input slot="fields" label="City" placeholder="Anytown" />
          <Input slot="fields" label="State" placeholder="CA" />
          <Input slot="fields" label="ZIP" placeholder="90210" />
          <Input slot="fields" label="Country" placeholder="US" />
        </FormLayout>
      </ExampleBlock>

      <PropsTable {...componentPropsConfig['form-layout']} />
    </div>
  )
}
