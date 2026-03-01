import { useState } from 'react'
import { Table } from '@vverchonov/web-components/react'
import ExampleBlock from '../../components/ExampleBlock'
import PropsTable from '../../components/PropsTable'
import { componentPropsConfig } from '../../data/componentPropsConfig'
import { componentTokensMap } from '../../data/componentTokensMap'

const COLUMNS = [
  { key: 'name', label: 'Name', sortable: true },
  { key: 'email', label: 'Email', sortable: true },
  { key: 'role', label: 'Role', sortable: true },
  { key: 'notes', label: 'Notes', hidden: true },
]

const SAMPLE_ROWS = [
  { name: 'Alice', email: 'alice@example.com', role: 'Developer', notes: 'Lead frontend' },
  { name: 'Bob', email: 'bob@example.com', role: 'Designer', notes: 'UI/UX' },
  { name: 'Carol', email: 'carol@example.com', role: 'Manager', notes: 'Product' },
  { name: 'Dave', email: 'dave@example.com', role: 'Developer', notes: 'Backend' },
  { name: 'Eve', email: 'eve@example.com', role: 'Designer', notes: 'Design system' },
  { name: 'Frank', email: 'frank@example.com', role: 'Developer', notes: 'DevOps' },
  { name: 'Grace', email: 'grace@example.com', role: 'Manager', notes: 'Engineering' },
]

export default function TablePage() {
  const [page, setPage] = useState(1)

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-[var(--color-text)] mb-1">Table</h1>
        <p className="text-[var(--color-text-muted)]">
          Data table with sorting, pagination, and column visibility toggle.
        </p>
      </div>

      <ExampleBlock
        title="Full-featured table"
        code={`<Table
  columns={COLUMNS}
  rows={SAMPLE_ROWS}
  pageSize={3}
  page={page}
  showColumnToggle
  onTablePage={(e) => setPage(e.detail?.page ?? 1)}
/>`}
      >
        <Table
          columns={COLUMNS}
          rows={SAMPLE_ROWS}
          pageSize={3}
          page={page}
          showColumnToggle
          onTablePage={(e) => setPage(e.detail?.page ?? 1)}
        />
      </ExampleBlock>

      <PropsTable {...componentPropsConfig.table} tokens={componentTokensMap.table} />
    </div>
  )
}
