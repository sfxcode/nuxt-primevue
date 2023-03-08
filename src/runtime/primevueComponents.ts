
export const defaultPrimevueExcludeComponentNames:Array<string> = [
  'Chart',
  'Editor',
  'FullCalendar'
]

export const defaultPrimevueComponentNames:Array<string> = [
  'Accordion',
  'AccordionTab',
  'AutoComplete',
  'Avatar',
  'AvatarGroup',
  'Badge',
  'BlockUI',
  'Breadcrumb',
  'Button',
  'Calendar',
  'Card',
  'Carousel',
  'CascadeSelect',
  'Chart',
  'Checkbox',
  'Chip',
  'Chips',
  'ColorPicker',
  'Column',
  'ColumnGroup',
  'ConfirmDialog',
  'ConfirmPopup',
  'ContextMenu',
  'DataTable',
  'DataView',
  'DataViewLayoutOptions',
  'DeferredContent',
  'Dialog',
  'Divider',
  'Dock',
  'Dropdown',
  'Editor',
  'Fieldset',
  'FileUpload',
  'FullCalendar',
  'Galleria',
  'Image',
  'InlineMessage',
  'Inplace',
  'InputMask',
  'InputNumber',
  'InputSwitch',
  'InputText',
  'Knob',
  'Listbox',
  'MegaMenu',
  'Menu',
  'Menubar',
  'Message',
  'MultiSelect',
  'OrderList',
  'OrganizationChart',
  'OverlayPanel',
  'Paginator',
  'Panel',
  'PanelMenu',
  'Password',
  'PickList',
  'ProgressBar',
  'ProgressSpinner',
  'RadioButton',
  'Rating',
  'ScrollPanel',
  'ScrollTop',
  'SelectButton',
  'Sidebar',
  'Skeleton',
  'Slider',
  'SpeedDial',
  'SplitButton',
  'Splitter',
  'SplitterPanel',
  'Steps',
  'TabMenu',
  'TabPanel',
  'TabView',
  'Tag',
  'Terminal',
  'TerminalService',
  'Textarea',
  'TieredMenu',
  'Timeline',
  'Toast',
  'ToggleButton',
  'Toolbar',
  'Tree',
  'TreeSelect',
  'TreeTable',
  'TriStateCheckbox',
  'VirtualScroller'
]

export const defaultPrimevueGlobalComponentNames:Array<string> = [
  'ConfirmDialog',
  'ConfirmPopup',
  'Toast',
  'Tooltip'
]

export const defaultPrimevueFormkitGlobalComponentNames:Array<string> = [
  ...defaultPrimevueGlobalComponentNames,
  'Calendar',
  'Checkbox',
  'Chips',
  'ColorPicker',
  'Dropdown',
  'InputMask',
  'InputNumber',
  'InputSwitch',
  'InputText',
  'Knob',
  'Listbox',
  'MultiSelect',
  'Password',
  'Rating',
  'SelectButton',
  'Slider',
  'Textarea',
  'ToggleButton',
  'TriStateCheckbox'
]

export interface PrimeVueComponent {
  name: string
  global: boolean
}

export function defaultPrimeVueComponents (useFormkit: boolean, onlyGlobal = false) {
  let names = defaultPrimevueComponentNames
  if (onlyGlobal) {
    if (useFormkit) { names = [...defaultPrimevueFormkitGlobalComponentNames] } else { names = [...defaultPrimevueGlobalComponentNames] }
  }

  return names.map((s) => {
    const component = {} as PrimeVueComponent
    component.name = s
    if (useFormkit) { component.global = defaultPrimevueFormkitGlobalComponentNames.includes(s) } else { component.global = defaultPrimevueGlobalComponentNames.includes(s) }
    return component
  })
}
