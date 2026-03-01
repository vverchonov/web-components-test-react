export const componentPropsConfig = {
  button: {
    props: [
      { name: 'label', type: 'string', description: 'Visible button text.', required: true },
      { name: 'type', type: "'button' | 'submit' | 'reset'", description: 'HTML button type attribute.', default: "'button'" },
      { name: 'iconPosition', type: "'start' | 'end'", description: 'Where to show the icon: before the label (start) or after (end).', default: "'start'" },
      { name: 'variant', type: "'primary' | 'secondary' | 'ghost' | 'danger'", description: 'Visual style variant.', default: "'primary'" },
      { name: 'onClick', type: '(e: MouseEvent) => void', description: 'Optional click callback. Set via property (e.g. el.onClick = (e) => ...).', default: undefined },
    ],
    slots: [
      { name: 'icon', description: 'Optional icon rendered before or after the label (controlled by iconPosition).' },
    ],
    events: [],
    types: [],
  },

  input: {
    props: [
      { name: 'label', type: 'string', description: 'Visible label rendered above the input.', default: "''" },
      { name: 'type', type: 'InputType', description: 'HTML input type.', default: "'text'" },
      { name: 'placeholder', type: 'string', description: 'Placeholder text shown when the input is empty.', default: "''" },
      { name: 'value', type: 'string', description: 'Current input value (two-way: updates on user input).', default: "''" },
      { name: 'name', type: 'string', description: 'Form field name submitted with the value.', default: "''" },
      { name: 'required', type: 'boolean', description: 'Marks the input as required for form validation.', default: 'false' },
      { name: 'disabled', type: 'boolean', description: 'Disables the input and prevents interaction.', default: 'false' },
      { name: 'readonly', type: 'boolean', description: 'Makes the input read-only (focusable but not editable).', default: 'false' },
      { name: 'state', type: 'InputState', description: 'Validation state controlling visual feedback and ARIA.', default: "'default'" },
      { name: 'errorMessage', type: 'string', description: 'Error text displayed below the input when state is invalid.', default: "''" },
      { name: 'onChange', type: '(value: string) => void', description: 'Callback invoked with the new value string on every input event.', default: undefined },
    ],
    slots: [
      { name: 'icon', description: 'Optional leading icon displayed before the input field.' },
    ],
    events: [],
    types: [
      { name: 'InputType', description: "Allowed HTML input types: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search'." },
      { name: 'InputState', description: "Visual validation state: 'default' | 'valid' | 'invalid'." },
    ],
  },

  toggle: {
    props: [
      { name: 'label', type: 'string', description: 'Visible label text next to the switch. Also used as accessible name.', default: "''" },
      { name: 'checked', type: 'boolean', description: 'Whether the toggle is currently on.', default: 'false' },
      { name: 'disabled', type: 'boolean', description: 'Disables interaction and greys out the toggle.', default: 'false' },
      { name: 'iconPosition', type: "'start' | 'end'", description: 'Where to show the icon: before the label (start) or after (end).', default: "'start'" },
      { name: 'onToggleChange', type: '(e: CustomEvent) => void', description: 'Callback invoked when the toggle is clicked. Use e.detail.checked for the new value.', default: undefined },
    ],
    slots: [
      { name: 'icon', description: 'Optional icon rendered next to the label.' },
    ],
    events: [
      { name: 'toggle-change', detail: '{ checked: boolean }', description: 'Fired when the toggle is clicked.' },
    ],
    types: [],
  },

  table: {
    props: [
      { name: 'columns', type: 'ColumnDef[]', description: 'Column definitions describing each table column.', required: true },
      { name: 'rows', type: 'Record<string, unknown>[]', description: 'Row data objects keyed by column key.', default: '[]' },
      { name: 'pageSize', type: 'number', description: 'If > 0, enables pagination with this many rows per page.', default: '0' },
      { name: 'page', type: 'number', description: 'Current page (1-based). Can be set externally to navigate programmatically.', default: '1' },
      { name: 'totalItems', type: 'number', description: 'Total items for server-side pagination. When > 0, rows is treated as current page only.', default: '0' },
      { name: 'loading', type: 'boolean', description: 'Shows a loading overlay on the table body.', default: 'false' },
      { name: 'externalSort', type: 'boolean', description: 'When true, sorting is not performed locally — only table-sort event fires.', default: 'false' },
      { name: 'showColumnToggle', type: 'boolean', description: 'Show the column visibility toggle panel.', default: 'false' },
      { name: 'onTableSort', type: '(e: CustomEvent) => void', description: 'Fired when a sortable column header is clicked. e.detail: { column, dir, pageSize }.', default: undefined },
      { name: 'onTablePage', type: '(e: CustomEvent) => void', description: 'Fired when the user navigates to a different page. e.detail: { page, pageSize }.', default: undefined },
      { name: 'onTableColumnToggle', type: '(e: CustomEvent) => void', description: 'Fired when a column is shown/hidden. e.detail: { column, hidden }.', default: undefined },
    ],
    slots: [],
    events: [
      { name: 'table-sort', detail: '{ column: string, dir: SortDir, pageSize: number }', description: 'Fired when a sortable column header is clicked.' },
      { name: 'table-page', detail: '{ page: number, pageSize: number }', description: 'Fired when the user navigates to a different page.' },
      { name: 'table-column-toggle', detail: '{ column: string, hidden: boolean }', description: 'Fired when a column is shown/hidden via the toggle panel.' },
    ],
    types: [
      { name: 'ColumnDef', description: 'Describes a single table column.', fields: [
        { name: 'key', type: 'string', description: 'Unique key — matched against row object properties.' },
        { name: 'label', type: 'string', description: 'Column header label.' },
        { name: 'group', type: 'string', description: 'Optional. Columns sharing the same group are merged under a group header.' },
        { name: 'sortable', type: 'boolean', description: 'Adds a clickable sort indicator in the header.' },
        { name: 'hidden', type: 'boolean', description: 'Start hidden; user can reveal via column-toggle panel.' },
        { name: 'width', type: 'string', description: "Fixed column width, e.g. '200px'." },
        { name: 'renderCell', type: '(row, rowIndex) => TemplateResult', description: 'Custom cell renderer.' },
      ]},
    ],
  },

  menu: {
    props: [
      { name: 'items', type: 'MenuItem[]', description: 'Primary navigation items rendered in the main section.', required: true },
      { name: 'footerItems', type: 'MenuItem[]', description: 'Secondary items rendered in the footer section.', default: '[]' },
      { name: 'activeValue', type: 'string', description: 'Value of the currently active item; highlights it and auto-expands parents.', default: undefined },
      { name: 'collapsed', type: 'boolean', description: 'When true, menu renders in icon-only mode. Hover expands temporarily.', default: 'false' },
      { name: 'searchable', type: 'boolean', description: 'Enables the search input above the navigation items.', default: 'false' },
      { name: 'searchPlaceholder', type: 'string', description: 'Placeholder text for the search input.', default: "''" },
      { name: 'onMenuSelect', type: '(e: CustomEvent) => void', description: 'Fired when a leaf item is clicked. e.detail: { item, value }.', default: undefined },
      { name: 'onMenuSearch', type: '(e: CustomEvent) => void', description: 'Fired on search input. e.detail: { query }.', default: undefined },
    ],
    slots: [
      { name: 'logo', description: 'Full-width logo shown when the menu is expanded.' },
      { name: 'logo-icon', description: 'Compact logo/icon shown when the menu is collapsed.' },
      { name: 'bottom', description: 'Content rendered at the bottom of the sidebar (e.g. user profile).' },
    ],
    events: [
      { name: 'menu-select', detail: '{ item: MenuItem, value: string }', description: 'Fired when a leaf menu item is clicked.' },
      { name: 'menu-search', detail: '{ query: string }', description: 'Fired on search input.' },
    ],
    types: [
      { name: 'MenuItem', description: 'A single navigation item or parent of nested items.', fields: [
        { name: 'label', type: 'string', description: 'Visible label text.' },
        { name: 'value', type: 'string', description: 'Unique value emitted in menu-select event.' },
        { name: 'icon', type: 'string | TemplateResult', description: 'Per-item icon.' },
        { name: 'href', type: 'string', description: 'When set, renders as <a> link instead of <button>.' },
        { name: 'children', type: 'MenuItem[]', description: 'Nested child items; renders expandable sub-menu.' },
      ]},
    ],
  },

  modal: {
    props: [
      { name: 'open', type: 'boolean', description: 'Whether the modal is visible.', default: 'false' },
      { name: 'title', type: 'string', description: 'Dialog heading.', default: "''" },
      { name: 'description', type: 'string', description: 'Subtitle/body text shown below the title.', default: "''" },
      { name: 'variant', type: "'info' | 'confirm' | 'form'", description: 'Button layout: info (OK), confirm (Cancel+Confirm), form (Cancel+Save).', default: "'info'" },
      { name: 'size', type: "'sm' | 'md' | 'lg'", description: 'Dialog width: sm (24rem), md (32rem), lg (44rem).', default: "'md'" },
      { name: 'confirmLabel', type: 'string', description: 'Label for the primary action button.', default: "''" },
      { name: 'cancelLabel', type: 'string', description: 'Label for the cancel button.', default: "''" },
      { name: 'okLabel', type: 'string', description: 'Label for the OK button (info variant only).', default: "''" },
      { name: 'closeOnBackdrop', type: 'boolean', description: 'Close the modal when the backdrop is clicked.', default: 'true' },
      { name: 'hideActions', type: 'boolean', description: 'Hide built-in footer. Use when slotted content manages its own actions.', default: 'false' },
      { name: 'flush', type: 'boolean', description: 'Remove body padding so slotted content fills edge-to-edge.', default: 'false' },
      { name: 'onModalConfirm', type: '() => void', description: 'Primary action (Save/Confirm/OK) clicked.', default: undefined },
      { name: 'onModalCancel', type: '() => void', description: 'Secondary action (Cancel) clicked.', default: undefined },
      { name: 'onModalClose', type: '() => void', description: 'Any close action (Escape, backdrop, OK, Confirm, Cancel).', default: undefined },
    ],
    slots: [
      { name: '(default)', description: 'Body content.' },
      { name: 'footer', description: 'Custom footer that replaces the built-in action buttons.' },
    ],
    events: [
      { name: 'modal-confirm', detail: '—', description: 'Primary action clicked.' },
      { name: 'modal-cancel', detail: '—', description: 'Secondary action clicked.' },
      { name: 'modal-close', detail: '—', description: 'Any close action.' },
    ],
    types: [],
  },

  tabs: {
    props: [
      { name: 'tabs', type: 'TabItem[]', description: 'Array of tab definitions rendered as buttons.', required: true },
      { name: 'value', type: 'string', description: 'Value of the currently active tab.', default: "''" },
      { name: 'onTabChange', type: '(e: CustomEvent) => void', description: 'Fired when the active tab changes. e.detail.value is the new tab value.', default: undefined },
    ],
    slots: [
      { name: '[value]', description: 'One named slot per tab whose name matches the tab value.' },
    ],
    events: [
      { name: 'tab-change', detail: '{ value: string }', description: 'Fired when the active tab changes.' },
    ],
    types: [
      { name: 'TabItem', description: 'Definition of a single tab item.', fields: [
        { name: 'label', type: 'string', description: 'Visible text rendered in the tab button.' },
        { name: 'value', type: 'string', description: 'Unique value; also used as the panel slot name.' },
        { name: 'disabled', type: 'boolean', description: 'When true the tab cannot be selected.' },
      ]},
    ],
  },

  selector: {
    props: [
      { name: 'items', type: 'SelectorOption[]', description: 'Flat list of selectable options.', required: true },
      { name: 'groups', type: 'SelectorGroup[]', description: 'Optional group definitions for visually grouping options.', default: '[]' },
      { name: 'value', type: 'string[]', description: 'Currently selected values (always array, even in single-select).', default: '[]' },
      { name: 'label', type: 'string', description: 'Visible label rendered above the trigger.', default: "''" },
      { name: 'placeholder', type: 'string', description: 'Placeholder text when nothing is selected.', default: "'Select…'" },
      { name: 'searchable', type: 'boolean', description: 'Enables a text search input inside the dropdown.', default: 'false' },
      { name: 'multiple', type: 'boolean', description: 'Allows selecting more than one option.', default: 'false' },
      { name: 'disabled', type: 'boolean', description: 'Disables the selector.', default: 'false' },
      { name: 'name', type: 'string', description: 'Form field name submitted with the value.', default: "''" },
      { name: 'state', type: "'default' | 'valid' | 'invalid'", description: 'Validation state.', default: "'default'" },
      { name: 'errorMessage', type: 'string', description: 'Error text when state is invalid.', default: "''" },
      { name: 'onSelectorChange', type: '(e: CustomEvent) => void', description: 'Fired when selection changes. e.detail.value is string[].', default: undefined },
    ],
    slots: [],
    events: [
      { name: 'selector-change', detail: '{ value: string[] }', description: 'Fired when the selection changes.' },
    ],
    types: [
      { name: 'SelectorOption', description: 'A single option in the selector.', fields: [
        { name: 'label', type: 'string', description: 'Visible label text.' },
        { name: 'value', type: 'string', description: 'Unique value identifying this option.' },
        { name: 'icon', type: 'string | TemplateResult', description: 'Per-item icon.' },
        { name: 'disabled', type: 'boolean', description: 'When true the option cannot be selected.' },
        { name: 'group', type: 'string', description: 'Group key — matches SelectorGroup.key.' },
      ]},
      { name: 'SelectorGroup', description: 'Defines a named group for options.', fields: [
        { name: 'key', type: 'string', description: 'Unique group identifier referenced by SelectorOption.group.' },
        { name: 'label', type: 'string', description: 'Visible group header label.' },
      ]},
    ],
  },

  'dropdown-button': {
    props: [
      { name: 'label', type: 'string', description: 'Text label displayed in the trigger button.', required: true },
      { name: 'items', type: 'DropdownItem[]', description: 'Menu items (supports nested children for sub-menus).', required: true },
      { name: 'placement', type: "'bottom' | 'top'", description: 'Preferred direction for the dropdown panel.', default: "'bottom'" },
      { name: 'onDropdownSelect', type: '(e: CustomEvent) => void', description: 'Fired when a leaf item is selected. e.detail: { item, value }.', default: undefined },
    ],
    slots: [
      { name: 'icon', description: 'Optional icon shown in the trigger button.' },
    ],
    events: [
      { name: 'dropdown-select', detail: '{ item: DropdownItem, value?: string }', description: 'Fired when a leaf item is selected.' },
    ],
    types: [
      { name: 'DropdownItem', description: 'A single item or parent of nested items.', fields: [
        { name: 'label', type: 'string', description: 'Visible label text.' },
        { name: 'value', type: 'string', description: 'Value emitted in dropdown-select event.' },
        { name: 'icon', type: 'string | TemplateResult', description: 'Per-item icon.' },
        { name: 'children', type: 'DropdownItem[]', description: 'Nested child items; renders inline sub-menu.' },
      ]},
    ],
  },

  card: {
    props: [
      { name: 'variant', type: "'elevated' | 'outlined' | 'filled'", description: 'Visual style variant.', default: "'elevated'" },
      { name: 'open', type: 'boolean', description: 'Whether the card body is expanded.', default: 'true' },
      { name: 'clickable', type: 'boolean', description: 'Enables hover/active effects and click handling on the card.', default: 'false' },
      { name: 'onClick', type: '(e: MouseEvent) => void', description: 'Optional click callback. Set via property.', default: undefined },
    ],
    slots: [
      { name: 'title', description: 'Header content, always visible. Clicking toggles the body open/closed.' },
      { name: '(default)', description: 'Card body content (hidden when collapsed).' },
      { name: 'footer', description: 'Bottom actions area (hidden when collapsed).' },
    ],
    events: [
      { name: 'card-toggle', detail: '{ open: boolean }', description: 'Fired when the card is toggled open or closed.' },
    ],
    types: [],
  },

  'radio-group': {
    props: [
      { name: 'label', type: 'string', description: 'Visible label rendered above the radio options.', default: "''" },
      { name: 'name', type: 'string', description: 'Form field name.', default: "''" },
      { name: 'items', type: 'RadioGroupItem[]', description: 'Array of selectable radio options.', required: true },
      { name: 'value', type: 'string', description: 'Currently selected value.', default: "''" },
      { name: 'disabled', type: 'boolean', description: 'Disables the entire group.', default: 'false' },
      { name: 'orientation', type: "'vertical' | 'horizontal'", description: 'Layout direction.', default: "'vertical'" },
      { name: 'state', type: "'default' | 'valid' | 'invalid'", description: 'Validation state.', default: "'default'" },
      { name: 'errorMessage', type: 'string', description: 'Error text when state is invalid.', default: "''" },
      { name: 'onRadioChange', type: '(e: CustomEvent) => void', description: 'Fired when selection changes. e.detail.value is the new value.', default: undefined },
    ],
    slots: [],
    events: [
      { name: 'radio-change', detail: '{ value: string }', description: 'Fired when the selected option changes.' },
    ],
    types: [
      { name: 'RadioGroupItem', description: 'A single option in the radio group.', fields: [
        { name: 'label', type: 'string', description: 'Visible label text.' },
        { name: 'value', type: 'string', description: 'Unique value identifying this option.' },
        { name: 'disabled', type: 'boolean', description: 'When true the option cannot be selected.' },
      ]},
    ],
  },

  layout: {
    props: [],
    slots: [
      { name: 'sidebar', description: 'Fixed sidebar area (typically <Menu collapsed>).' },
      { name: 'content', description: 'Main scrollable content area.' },
    ],
    events: [],
    types: [],
  },

  'form-layout': {
    props: [
      { name: 'title', type: 'string', description: 'Form heading displayed at the top.', default: "''" },
      { name: 'description', type: 'string', description: 'Subtitle text shown below the title.', default: "''" },
      { name: 'columns', type: '1 | 2 | 3', description: 'Number of columns for the fields grid.', default: '1' },
      { name: 'stages', type: 'string[]', description: 'Stage labels for multi-step. Slot for each stage is stage-{index}.', default: '[]' },
      { name: 'seamless', type: 'boolean', description: 'Strips the outer card shell. Use when embedding (e.g. in modal with flush).', default: 'false' },
      { name: 'currentStage', type: 'number', description: 'Active stage index (0-based). Controlled externally or managed internally.', default: '0' },
      { name: 'onFormLayoutSubmit', type: '(e: CustomEvent) => void', description: 'Fired when submit button is clicked. e.detail: { stage }.', default: undefined },
      { name: 'onFormLayoutNext', type: '(e: CustomEvent) => void', description: 'Fired when moving to next stage.', default: undefined },
      { name: 'onFormLayoutBack', type: '(e: CustomEvent) => void', description: 'Fired when moving to previous stage.', default: undefined },
    ],
    slots: [
      { name: 'fields', description: 'Form fields for single-step mode.' },
      { name: 'stage-{index}', description: 'Form fields for each stage in multi-step mode (e.g. stage-0, stage-1).' },
    ],
    events: [
      { name: 'form-layout-submit', detail: '{ stage: number }', description: 'Fired when the submit button is clicked.' },
      { name: 'form-layout-next', detail: '{ stage: number }', description: 'Fired when moving to the next stage.' },
      { name: 'form-layout-back', detail: '{ stage: number }', description: 'Fired when moving to the previous stage.' },
    ],
    types: [],
  },
}
