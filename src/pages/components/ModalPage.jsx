import { useState } from 'react'
import { Button, Modal } from '@vverchonov/web-components/react'
import ExampleBlock from '../../components/ExampleBlock'
import PropsTable from '../../components/PropsTable'
import { componentPropsConfig } from '../../data/componentPropsConfig'
import { componentTokensMap } from '../../data/componentTokensMap'

export default function ModalPage() {
  const [infoOpen, setInfoOpen] = useState(false)
  const [confirmOpen, setConfirmOpen] = useState(false)
  const [formOpen, setFormOpen] = useState(false)

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-[var(--color-text)] mb-1">Modal</h1>
        <p className="text-[var(--color-text-muted)]">
          Dialog with info, confirm, and form variants. Supports focus trapping.
        </p>
      </div>

      <ExampleBlock
        title="Info"
        code={`<Button label="Open info modal" type="primary" onClick={() => setInfoOpen(true)} />
<Modal
  open={infoOpen}
  title="Information"
  description="This is an informational modal. It has a single OK action."
  variant="info"
  onModalClose={() => setInfoOpen(false)}
  onModalConfirm={() => setInfoOpen(false)}
/>`}
      >
        <>
          <Button
            label="Open info modal"
            type="primary"
            ref={(el) => el && (el.onClick = () => setInfoOpen(true))}
          />
          <Modal
            open={infoOpen}
            title="Information"
            description="This is an informational modal. It has a single OK action."
            variant="info"
            onModalClose={() => setInfoOpen(false)}
            onModalConfirm={() => setInfoOpen(false)}
          />
        </>
      </ExampleBlock>

      <ExampleBlock
        title="Confirm"
        code={`<Modal
  open={confirmOpen}
  title="Are you sure?"
  description="This action cannot be undone. Do you want to continue?"
  variant="confirm"
  confirmLabel="Delete"
  cancelLabel="Cancel"
  onModalClose={() => setConfirmOpen(false)}
  onModalConfirm={() => setConfirmOpen(false)}
  onModalCancel={() => setConfirmOpen(false)}
/>`}
      >
        <>
          <Button
            label="Open confirm modal"
            type="secondary"
            ref={(el) => el && (el.onClick = () => setConfirmOpen(true))}
          />
          <Modal
            open={confirmOpen}
            title="Are you sure?"
            description="This action cannot be undone. Do you want to continue?"
            variant="confirm"
            confirmLabel="Delete"
            cancelLabel="Cancel"
            onModalClose={() => setConfirmOpen(false)}
            onModalConfirm={() => {
              alert('Confirmed!')
              setConfirmOpen(false)
            }}
            onModalCancel={() => setConfirmOpen(false)}
          />
        </>
      </ExampleBlock>

      <ExampleBlock
        title="Form"
        code={`<Modal
  open={formOpen}
  title="Create item"
  variant="form"
  confirmLabel="Save"
  cancelLabel="Cancel"
  onModalClose={() => setFormOpen(false)}
  onModalConfirm={() => setFormOpen(false)}
  onModalCancel={() => setFormOpen(false)}
>
  <div slot="body">
    <p>Form content goes in the body slot.</p>
  </div>
</Modal>`}
      >
        <>
          <Button
            label="Open form modal"
            type="secondary"
            ref={(el) => el && (el.onClick = () => setFormOpen(true))}
          />
          <Modal
            open={formOpen}
            title="Create item"
            variant="form"
            confirmLabel="Save"
            cancelLabel="Cancel"
            onModalClose={() => setFormOpen(false)}
            onModalConfirm={() => {
              alert('Saved!')
              setFormOpen(false)
            }}
            onModalCancel={() => setFormOpen(false)}
          >
            <div className="space-y-3" slot="body">
              <p className="text-[var(--color-text-muted)]">Form content goes in the body slot.</p>
            </div>
          </Modal>
        </>
      </ExampleBlock>

      <PropsTable {...componentPropsConfig.modal} tokens={componentTokensMap.modal} />
    </div>
  )
}
